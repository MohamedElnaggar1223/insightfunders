'use server'

import { db } from "@/db"
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
            company_name: true,
            industry_sector: true,
        },
        where: (table, { eq }) => eq(table.id, startupId),
    })
})