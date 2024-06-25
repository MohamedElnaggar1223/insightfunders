'use client'

import { signOut } from "@/lib/actions/auth"
import { useState } from "react"

export default function SignOutBtn()
{
    const [isPending, setIsPending] = useState(false)

    async function handleSignOut()
    {
        setIsPending(true)
        await signOut()
        setIsPending(false)
    }

    return (
        <button onClick={handleSignOut} className='rounded-full px-5 py-2 bg-strong-purple text-white font-semibold'>Sign out</button>
    )
}