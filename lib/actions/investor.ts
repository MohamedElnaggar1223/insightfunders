'use server'

import { db } from "@/db"
import { contracts, financial_details_requests, startups } from "@/migrations/schema"
import { eq, ne, sql, and, isNull, ilike } from "drizzle-orm"
import { revalidatePath } from "next/cache"
import { cache } from "react"

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
                    .leftJoin(contracts, and(eq(contracts.startup_id, startups.id), eq(contracts.investor_id, investorId)))
                    .where(and(isNull(contracts.id), eq(startups.accepted, true), params?.id ? eq(startups.id, params.id) : sql`true`, params?.search ? ilike(startups.company_name, `%${params?.search}%`) : sql`true`, decodedStage ? eq(startups.stage, decodedStage) : sql`true`, decodedIndustry ? eq(startups.industry_sector, decodedIndustry) : sql`true`))
})

export const getFinancialDetailsRequests = cache(async (investorId: number) => {
    return await db.query.financial_details_requests.findMany({
        where: (table, { eq }) => eq(table.investor_id, investorId)
    })
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