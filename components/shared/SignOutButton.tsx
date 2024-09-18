'use client'
import { signOut } from "@/lib/actions/auth"
import { useState } from "react"
import { Dialog, DialogContent } from "../ui/dialog"
import { Loader2 } from "lucide-react"

export default function SignOutButton()
{
    const [isPending, setIsPending] = useState(false)

    async function handleSignOut()
    {
        setIsPending(true)
        await signOut()
        setIsPending(false)
    }
    
    return (
        <>
            <button onClick={handleSignOut} className='rounded-[2px] text-sm px-5 py-2 bg-[#FF7A00] text-white font-light ml-auto max-lg:w-[338px] max-lg:mx-auto text-nowrap'>Sign out</button>
            <Dialog open={isPending}>
                <DialogContent className='flex items-center justify-center bg-transparent border-none shadow-none outline-none'>
                    <Loader2 className='animate-spin' size={42} color="#000" />
                </DialogContent>
            </Dialog>
        </>
    )
}