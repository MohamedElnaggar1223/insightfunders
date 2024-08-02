'use server'

import { db } from "@/db"
import { cache } from "react"

export const getFinancialRounds = cache(async (startupId: number) => {
    return await db.query.financial_rounds.findMany({
        where: (table, { eq }) => eq(table.startup_id, startupId)
    })
})