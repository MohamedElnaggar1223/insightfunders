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
        <button onClick={handleSignOut} className='rounded-[2px] text-sm px-5 py-2 bg-[#FF7A00] text-white font-light ml-auto'>Sign out</button>
    )
}