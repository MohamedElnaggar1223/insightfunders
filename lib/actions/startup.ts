'use server'

import 'server-only'
import { db } from "@/db"
import { cap_tables, contracts, financial_details_requests, financial_rounds, financial_statements, legal_documents, notifications, pitch_decks, startups_owners, tax_returns } from "@/migrations/schema"
import { and, eq, sql } from "drizzle-orm"
import { revalidatePath } from "next/cache"
import { cache } from "react"
import { getUser } from "./auth"
import { redirect } from "next/navigation"
import { createClient } from '@/utils/supabase/server'

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

export const getOwners = cache(async (startupId: number) => {
    return await db.query.startups_owners.findMany({
        where: (table, { eq }) => eq(table.startup_id, startupId)
    })
})

export const getInvestor = cache(async (investorId: number) => {
    return await db.query.investors.findFirst({
        columns: {
            id: true,
            investor_type: true,
            institution_type: true,
        },
        with: {
            user: {
                columns: {
                    first_name: true,
                    last_name: true,
                }
            }
        },
        where: (table, { eq }) => eq(table.id, investorId),
    })
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
            accepted: true
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
                    investor_type: true
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

export const getCapTable = cache(async () => {
    const user = await getUser()

    if(!user?.userStartUp?.id) return

    return await db.query.cap_tables.findMany({
        where: (table, { eq }) => eq(table.startup_id, user?.userStartUp?.id),
    })
})

export const getPitchDeck = cache(async () => {
    const user = await getUser()

    if(!user?.userStartUp?.id) return

    return await db.query.pitch_decks.findMany({
        where: (table, { eq }) => eq(table.startup_id, user?.userStartUp?.id),
    })
})

export const getTaxReturns = cache(async () => {
    const user = await getUser()

    if(!user?.userStartUp?.id) return

    return await db.query.tax_returns.findMany({
        where: (table, { eq }) => eq(table.startup_id, user?.userStartUp?.id),
    })
})

export const getFinancialStatements = cache(async () => {
    const user = await getUser()

    if(!user?.userStartUp?.id) return

    return await db.query.financial_statements.findMany({
        where: (table, { eq }) => eq(table.startup_id, user?.userStartUp?.id),
    })
})

export const getLegalDocuments = cache(async () => {
    const user = await getUser()

    if(!user?.userStartUp?.id) return

    return await db.query.legal_documents.findMany({
        where: (table, { eq }) => eq(table.startup_id, user?.userStartUp?.id),
    })
})


export const createFinancialRound = cache(async (data: { investor: string[], round: "Pre-seed" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Public", date: string, amount: string }) => {
    const user = await getUser()

    if(!user?.userStartUp?.id) return { error: 'User not found' }

    const financialRoundInserted = await db.insert(financial_rounds).values({
        id: sql`DEFAULT`,
        investor: data.investor,
        round: data.round,
        date: data.date,
        amount: data.amount,
        startup_id: user?.userStartUp?.id,
    }).returning({
        id: financial_rounds.id
    })

    if(financialRoundInserted.length !== 1) return { error: 'Failed to create financial round', success: false }

    return { success: true, error: undefined }
})

export const updateFinancialRound = cache(async (id: number, investor: string[], round: "Pre-seed" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Public", date: Date, amount: number) => {
    const user = await getUser()

    if(!user?.userStartUp?.id) return { error: 'User not found' }

    const financialRoundInserted = await db.update(financial_rounds).set({ investor, round, date: date.toISOString(), amount: amount.toString() }).where(eq(financial_rounds.id, id)).returning({
        id: financial_rounds.id
    })

    if(financialRoundInserted.length !== 1) return { error: 'Failed to update financial round', success: false }

    return { success: true, error: undefined }
})

export const updateOwner = cache(async (id: number, name: string, share: number) => {
    const user = await getUser()

    if(!user?.userStartUp?.id) return { error: 'User not found' }

    const ownerInserted = await db.update(startups_owners).set({ name, share: share.toString() }).where(eq(startups_owners.id, id)).returning({
        id: startups_owners.id
    })

    if(ownerInserted.length !== 1) return { error: 'Failed to update owner', success: false }

    return { success: true, error: undefined }
})

export const createCapTable = cache(async ({ name, document_link }: { name: string, document_link: string }) => {
    const user = await getUser()

    if(!user?.userStartUp?.id) return

    const capTableInserted = await db.insert(cap_tables).values({
        id: sql`DEFAULT`,
        startup_id: user?.userStartUp?.id,
        name,
        document_link,
        created_at: sql`DEFAULT`,
        updated_at: sql`DEFAULT`,
    }).returning({
        id: cap_tables.id
    })

    if(capTableInserted.length !== 1) return { error: 'Failed to create cap table', success: false }

    return { success: true, error: undefined }
})

export const createPitchDeck = cache(async ({ name, document_link }: { name: string, document_link: string }) => {
    const user = await getUser()

    if(!user?.userStartUp?.id) return

    const pitchDeckInserted = await db.insert(pitch_decks).values({
        id: sql`DEFAULT`,
        startup_id: user?.userStartUp?.id,
        name,
        document_link,
        created_at: sql`DEFAULT`,
        updated_at: sql`DEFAULT`,
    }).returning({
        id: pitch_decks.id
    })

    if(pitchDeckInserted.length !== 1) return { error: 'Failed to create cap table', success: false }

    return { success: true, error: undefined }
})

export const createTaxReturns = cache(async ({ name, document_link }: { name: string, document_link: string }) => {
    const user = await getUser()

    if(!user?.userStartUp?.id) return

    const taxReturnsInserted = await db.insert(tax_returns).values({
        id: sql`DEFAULT`,
        startup_id: user?.userStartUp?.id,
        name,
        document_link,
        created_at: sql`DEFAULT`,
        updated_at: sql`DEFAULT`,
    }).returning({
        id: tax_returns.id
    })

    if(taxReturnsInserted.length !== 1) return { error: 'Failed to create cap table', success: false }

    return { success: true, error: undefined }
})
export const createFinancialStatements = cache(async ({ name, document_link }: { name: string, document_link: string }) => {
    const user = await getUser()

    if(!user?.userStartUp?.id) return

    const financialStatementsInserted = await db.insert(financial_statements).values({
        id: sql`DEFAULT`,
        startup_id: user?.userStartUp?.id,
        name,
        document_link,
        created_at: sql`DEFAULT`,
        updated_at: sql`DEFAULT`,
    }).returning({
        id: financial_statements.id
    })

    if(financialStatementsInserted.length !== 1) return { error: 'Failed to create cap table', success: false }

    return { success: true, error: undefined }
})
export const createLegalDocuments = cache(async ({ name, document_link }: { name: string, document_link: string }) => {
    const user = await getUser()

    if(!user?.userStartUp?.id) return

    const legalDocumentsInserted = await db.insert(legal_documents).values({
        id: sql`DEFAULT`,
        startup_id: user?.userStartUp?.id,
        name,
        document_link,
        created_at: sql`DEFAULT`,
        updated_at: sql`DEFAULT`,
    }).returning({
        id: legal_documents.id
    })

    if(legalDocumentsInserted.length !== 1) return { error: 'Failed to create cap table', success: false }

    return { success: true, error: undefined }
})

export const acceptRequest = async (startupId: number, requestId: number) => {
    await db.update(financial_details_requests).set({ accepted: true }).where(and(eq(financial_details_requests.id, requestId), eq(financial_details_requests.startup_id, startupId)))
    revalidatePath('/offers')
}

export const rejectRequest = async (startupId: number, requestId: number) => {
    await db.delete(financial_details_requests).where(and(eq(financial_details_requests.id, requestId), eq(financial_details_requests.startup_id, startupId)))
    revalidatePath('/offers')
}

export const agreeToContract = async (contractId: number) => {
    const user = await getUser()

    const contract = await db.query.contracts.findFirst({
        where: (table, { eq }) => eq(table.id, contractId),
        columns: {
            startup_id: true,
        },
        with: {
            investor: {
                with: {
                    user: {
                        columns: {
                            id: true,
                        }
                    }
                },
                columns: {
                    id: true,
                }
            },
            startup: {
                columns: {
                    company_name: true
                }
            }
        }
    })

    if(user?.userStartUp?.id !== contract?.startup_id) return { error: 'You are not authorized to accept this contract' }

    await Promise.all([
        db.update(contracts).set({ accepted: true }).where(eq(contracts.id, contractId)),
        db.insert(notifications).values({
            id: sql`DEFAULT`,
            user_id: contract?.investor?.user?.id!,
            created_at: sql`DEFAULT`,
            type: 'Contract',
            is_read: false,
            content: `Congratulations! ${contract?.startup.company_name} has accepted your offer. 🎉`
        })
    ])

    revalidatePath('/contracts')
    redirect('/')
}

export const rejectContract = async (contractId: number) => {
    const user = await getUser()
    const supabase = createClient()

    const contract = await db.query.contracts.findFirst({
        where: (table, { eq }) => eq(table.id, contractId),
        columns: {
            startup_id: true,
            term_sheet: true
        },
    })

    if(user?.userStartUp?.id !== contract?.startup_id) return { error: 'You are not authorized to accept this contract' }

    await db.delete(contracts).where(eq(contracts.id, contractId))

    const fileName = contract?.term_sheet?.split('/').pop()

    await supabase.storage
            .from('termSheets')
            .remove([fileName!])

    revalidatePath('/contracts')
    redirect('/')
}

