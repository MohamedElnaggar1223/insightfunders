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