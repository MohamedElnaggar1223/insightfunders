'use server'

import { db } from "@/db"
import { contracts, startups } from "@/migrations/schema"
import { eq, ne, sql, and, isNull } from "drizzle-orm"
import { cache } from "react"

export const getContracts = cache(async (investorId: number) => {
    const allContracts = await db.query.contracts.findMany({
        where: (table, { eq }) => eq(table.investor_id, investorId)
    })

    const acceptedContracts = allContracts.filter(contract => contract.accepted)

    return { allContracts, acceptedContracts }
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

export const getExploreStartups = cache(async (investorId: number) => {
    return await db.select({ startup: startups })
                    .from(startups)
                    .leftJoin(contracts, and(eq(contracts.startup_id, startups.id), eq(contracts.investor_id, investorId)))
                    .where(and(isNull(contracts.id), eq(startups.accepted, true)))
})