'use server'

import 'server-only'
import { z } from "zod"
import { signInSchema, signUpSchema } from "../validations/authSchema"
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { cache } from "react"
import { db } from "@/db"
import { extractCustomerIdFromUrl } from "../utils"
import { createDwollaCustomer } from "./dwolla"
import { nanoid } from 'nanoid';

export const signUp = async (values: z.infer<typeof signUpSchema>) => {
    const supabase = createClient()

    const { email, password, firstName, lastName, role } = values

    const { error, data } = await supabase.auth.signUp({
        email,
        password,
    })

    if (error) {
      console.error("error", error)
      return redirect(`/sign-up?error=${error.message}`)
    }

    const { error: insertError } = await supabase.from('users').insert({
        id: data.user?.id,
        first_name: firstName,
        last_name: lastName,
        role,
        plaid_id: nanoid(30)
    })

    if(insertError) console.error("error", insertError)

    revalidatePath('/')
    return redirect("/");
}

export const signIn = async (values: z.infer<typeof signInSchema>) => {
    const supabase = createClient()

    const { error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
    })

    if (error) {
        return { error: { message: error.message, code: error.code } }
    }
    
    revalidatePath('/')
    return { error: null }
}

export const signOut = async () => {
    const supabase = createClient()

    await supabase.auth.signOut();

    revalidatePath('/')
    return redirect("/")
}

export const getUser = cache(async () => {

    const supabase = createClient()

    const { data: { user } } = await supabase.auth.getUser()
    if(!user) return null

    const userInfo = await db.query.users.findFirst({
        columns: {
            role: true,
            first_name: true,
            last_name: true,
            plaid_id: true,
            dwolla_customer_id: true,
            dwolla_customer_url: true
        },
        where: (table, { eq }) => eq(table.id, user?.id!)
    })

    if(userInfo?.role === 'startup') {
        const userStartUpData = await db.query.startups.findFirst({
            with: {
                startups_owners: {
                    columns: {
                        name: true,
                        share: true,
                        id: true
                    }
                },
            },
            where: (table, { eq }) => eq(table.user_id, user?.id!)
        })

        if(!userStartUpData) return { user, userInfo }

        const userStartUp = {...userStartUpData, startups_owners: userStartUpData?.startups_owners.map((owner) => ({...owner, share: parseInt((owner.share! ?? 0))}))}

        return { user, userInfo, userStartUp, userStartUpOwners: userStartUp?.startups_owners }
    }
    else if(userInfo?.role === 'investor') {
        const userInvestor = await db.query.investors.findFirst({
            where: (table, { eq }) => eq(table.user_id, user?.id!)
        })

        return { user, userInfo, userInvestor }
    }
})

export const createBankAccount = async ({ userId, bankId, accountId, accessToken, fundingSourceUrl, shareableId }: { userId: string, bankId: string, accountId: string, accessToken: string, fundingSourceUrl: string, shareableId: string }) => {
    const supabase = createClient()

    const { error } = await supabase.from('bank_accounts').insert({
        user_id: userId,
        bank_id: bankId,
        account_id: accountId,
        access_token: accessToken,
        funding_source_url: fundingSourceUrl,
        shareable_id: shareableId
    })

    if(error) console.error("error", error)

    revalidatePath('/')

    return {
        success: true
    }
}