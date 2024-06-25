'use server'

import { z } from "zod"
import { signUpSchema } from "../validations/authSchema"
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

const supabase = createClient()

export const signUp = async (values: z.infer<typeof signUpSchema>) => {
    const { email, password, firstName, lastName, role } = values

    const { error, data } = await supabase.auth.signUp({
        email,
        password,
    })

    if (error) {
      console.log("error", error)
      return redirect(`/sign-up?error=${error.message}`)
    }

    await supabase.from('users').insert({
        id: data.user?.id,
        first_name: firstName,
        last_name: lastName,
        role,
    })

    return redirect("/");
}

export const signOut = async () => {
    await supabase.auth.signOut();
    return redirect("/");
}