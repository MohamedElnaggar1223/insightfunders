'use server'

import { db } from "@/db"
import { contracts, financial_details_requests, startups } from "@/migrations/schema"
import { eq, ne, sql, and, isNull, ilike, or, isNotNull } from "drizzle-orm"
import { revalidatePath } from "next/cache"
import { cache } from "react"
import { z } from "zod"
import { contractSchema } from "../validations/investorsSchema"
import { getUser } from "./auth"
import { nanoid } from 'nanoid';
import { createClient } from "@/utils/supabase/server"

export const getContracts = cache(async (investorId: number, startupId?: number) => {
    if(!startupId) {
        const allContracts = await db.query.contracts.findMany({
            where: (table, { eq }) => eq(table.investor_id, investorId)
        })
    
        const acceptedContracts = allContracts.filter(contract => contract.accepted)
    
        return { allContracts, acceptedContracts }
    }
    else {
        const contract = await db.query.contracts.findFirst({
            where: (table, { eq, and }) => and(eq(table.startup_id, startupId), eq(table.investor_id, investorId))
        })

        return { contract }
    }
})

export const getStartup = cache(async (startupId: number) => {
    return await db.query.startups.findFirst({
        columns: {
            id: true,
            company_name: true,
            industry_sector: true,
        },
        where: (table, { eq }) => eq(table.id, startupId),
    })
})

export const getExploreStartups = cache(async (investorId: number, params?: { search?: string, stage?: string, industry?: string, id?: number }) => {
    const decodedStage = params?.stage ? decodeURIComponent(params?.stage) as 'Pre-seed' | 'Seed' | 'Series A' | 'Series B' | 'Series C' | 'Series D' | 'Series E' | 'Series F' | 'Public' : undefined
    const decodedIndustry = params?.industry ? decodeURIComponent(params?.industry) as 'Technology' | 'Healthcare' | 'Financial Services' | 'Consumer Goods' | 'Industrial Goods' | 'Energy' | 'Real Estate' | 'Retail' | 'Media and Entertainment' | 'Transportation' | 'Telecommunications' | 'Agriculture' | 'Education' | 'Hospitality and Leisure' | 'Utilities' | 'Other' : undefined
    
    return await db.select({ startup: startups })
                    .from(startups)
                    .leftJoin(contracts, and(eq(contracts.startup_id, startups.id), eq(contracts.investor_id, investorId), eq(contracts.accepted, true)))
                    .where(and(isNull(contracts.id), eq(startups.accepted, true), params?.id ? eq(startups.id, params.id) : sql`true`, params?.search ? ilike(startups.company_name, `%${params?.search}%`) : sql`true`, decodedStage ? eq(startups.stage, decodedStage) : sql`true`, decodedIndustry ? eq(startups.industry_sector, decodedIndustry) : sql`true`))
})

export const getFinancialDetailsRequests = cache(async (investorId: number) => {
    return await db.query.financial_details_requests.findMany({
        where: (table, { eq }) => eq(table.investor_id, investorId)
    })
})

export const getAllRequests = cache(async (investorId: number, select: 'startups' | 'contracts' | 'financial_details_requests' | 'all' = 'all') => {
    
    return await db
                .select({
                    ...(select === 'all' || select === 'startups' ? { startups } : {}),
                    ...(select === 'all' || select === 'contracts' ? { contracts } : {}),
                    ...(select === 'all' || select === 'financial_details_requests' ? { financial_details_requests } : {})
                })
                .from(startups)
                .leftJoin(contracts, and(eq(contracts.investor_id, investorId), eq(contracts.startup_id, startups.id), or(eq(contracts.accepted, false), isNull(contracts.accepted))))
                .leftJoin(financial_details_requests, and(eq(financial_details_requests.investor_id, investorId), eq(financial_details_requests.startup_id, startups.id), or(eq(financial_details_requests.accepted, false), isNull(financial_details_requests.accepted))))
                .where(or(
                    isNotNull(contracts.startup_id),
                    isNotNull(financial_details_requests.startup_id)
                ))
})

export const addFinancialDetailsRequest = async (investorId: number, startupId: number) => {
    const { length } = await db.insert(financial_details_requests).values({
        id: sql`DEFAULT`,
        startup_id: startupId,
        investor_id: investorId,
        accepted: false,
    }).returning({
        id: financial_details_requests.id
    })

    revalidatePath(`/explore/${startupId}`)
    revalidatePath('/requests')

    if(length === 1) return { success: true }
    return { error: 'Failed to add financial details request' }
}

export const createContract = async (data: { amountInvested: number, interestRate: number, investorId: number, maturityDate: Date, paymentInterval: string, startupId: number, termSheet: string }) => {
    const { amountInvested, interestRate, investorId, maturityDate, paymentInterval, startupId, termSheet } = data

    if(!amountInvested || !interestRate || !investorId || !maturityDate || !paymentInterval || !startupId || !termSheet) return { error: 'All fields are required' }
    
    const user = await getUser()

    if(user?.userInvestor?.id !== data.investorId) return { error: 'You are not authorized to create a contract for this startup' }

    const contractId = await db.insert(contracts).values({
        id: sql`DEFAULT`,
        startup_id: startupId,
        investor_id: investorId,
        amount_invested: amountInvested.toString(),
        interest_rate: interestRate.toString(),
        maturity_date: maturityDate.toISOString().split('T')[0],
        payment_interval: paymentInterval.toString() as 'week' | 'month' | 'quarter' | 'year',
        total_return_paid: "0",
        accepted: false,
        createdAt: sql`DEFAULT`,
        term_sheet: termSheet
    }).returning({
        id: contracts.id
    })

    if(contractId.length !== 1) return { error: 'Failed to create contract' }

    return { success: true }
}