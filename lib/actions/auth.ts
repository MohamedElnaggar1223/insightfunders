'use server'

import { z } from "zod"
import { signInSchema, signUpSchema } from "../validations/authSchema"
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

export const signUp = async (values: z.infer<typeof signUpSchema>) => {
    const supabase = createClient()

    const { email, password, firstName, lastName, role } = values

    const { error, data } = await supabase.auth.signUp({
        email,
        password,
    })

    await supabase.auth.signInWithPassword({
        email,
        password
    })

    if (error) {
      console.log("error", error)
      return redirect(`/sign-up?error=${error.message}`)
    }


    const { error: insertError } = await supabase.from('users').insert({
        id: data.user?.id,
        first_name: firstName,
        last_name: lastName,
        role,
    })

    if(insertError) console.log("error", insertError)

    revalidatePath('/')
    return redirect("/");
}

export const signIn = async (values: z.infer<typeof signInSchema>) => {
    const supabase = createClient()

    const { error, data } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
    })

    if (error) {
        console.log("error", error)
    }

    revalidatePath('/')
    return redirect("/")
}

export const signOut = async () => {
    const supabase = createClient()

    await supabase.auth.signOut();

    revalidatePath('/')
    return redirect("/");
}

export const getUser = async () => {
    const supabase = createClient()
    
    const { data: { user } } = await supabase.auth.getUser()
    if(!user) return null

    const userInfo = await supabase.from('users').select().eq('id', user?.id!).single()

    if(userInfo.data && userInfo.data.role === 'startup') {
        const userStartUp = await supabase.from('startups').select().eq('user_id', user?.id!).single()
        const userStartUpOwners = await supabase.from('startups_owners').select().eq('startup_id', userStartUp?.data?.id!)

        return { user, userInfo, userStartUp, userStartUpOwners }
    }
    else if(userInfo.data && userInfo.data.role === 'investor') {
        const userInvestor = await supabase.from('investors').select().eq('user_id', user?.id!).single()

        return { user, userInfo, userInvestor }
    }
}