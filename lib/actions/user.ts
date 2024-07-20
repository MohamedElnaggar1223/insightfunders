'use server'

import { db } from "@/db"
import { cache } from "react"

export const getBankAccount = cache(async (userId: string) => {
    return await db.query.bank_accounts.findFirst({
        where: (table, { eq }) => eq(table.user_id, userId!)
    })
})