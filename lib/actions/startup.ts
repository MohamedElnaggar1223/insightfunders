'use server'

import { db } from "@/db"
import { financial_details_requests } from "@/migrations/schema"
import { and, eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"
import { cache } from "react"

export const getFinancialRounds = cache(async (startupId: number) => {
    return await db.query.financial_rounds.findMany({
        where: (table, { eq }) => eq(table.startup_id, startupId)
    })
})

export const getContracts = cache(async (startupId: number, investorId?: number) => {
    if(!investorId) {
        const allContracts = await db.query.contracts.findMany({
            where: (table, { eq }) => eq(table.startup_id, startupId)
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

export const getPendingContractsWithInvestors = cache(async (startupId: number) => {
    return await db.query.contracts.findMany({
        with: {
            investor: {
                with: {
                    user: {
                        columns: {
                            id: true,
                            first_name: true,
                            last_name: true,
                        }
                    }
                },
                columns: {
                    id: true,
                }
            }
        },
        columns: {
            id: true,
            term_sheet: true,
            createdAt: true,
        },
        where: (table, { eq, and }) => and(eq(table.startup_id, startupId), eq(table.accepted, false))
    })
})

export const getDataRequests = cache(async (startupId: number) => {
    return await db.query.financial_details_requests.findMany({
        with: {
            investor: {
                with: {
                    user: {
                        columns: {
                            id: true,
                            first_name: true,
                            last_name: true,
                        }
                    }
                },
                columns: {
                    id: true,
                }
            }
        },
        where: (table, { eq }) => eq(table.startup_id, startupId),
    })
})

export const getContract = cache(async (contractId: number, startupId: number) => {
    return await db.query.contracts.findFirst({
        where: (table, { eq, and }) => and(eq(table.id, contractId), eq(table.startup_id, startupId)),
        with: {
            investor: {
                with: {
                    user: {
                        columns: {
                            id: true,
                            first_name: true,
                            last_name: true,
                        }
                    }
                },
                columns: {
                    id: true,
                }
            }
        }
    })
})

export const acceptRequest = async (startupId: number, requestId: number) => {
    await db.update(financial_details_requests).set({ accepted: true }).where(and(eq(financial_details_requests.id, requestId), eq(financial_details_requests.startup_id, startupId)))
    revalidatePath('/offers')
}

export const rejectRequest = async (startupId: number, requestId: number) => {
    await db.delete(financial_details_requests).where(and(eq(financial_details_requests.id, requestId), eq(financial_details_requests.startup_id, startupId)))
    revalidatePath('/offers')
}