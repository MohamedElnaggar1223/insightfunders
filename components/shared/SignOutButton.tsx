'use client'
import { signOut } from "@/lib/actions/auth"
import { useState } from "react"
import { Dialog, DialogContent } from "../ui/dialog"
import { Loader2 } from "lucide-react"

export default function SignOutButton()
{
    const [isPending, setIsPending] = useState(false)
    const [confirmSignOut, setConfirmSignOut] = useState(false)

    async function handleSignOut()
    {
        setIsPending(true)
        setConfirmSignOut(false)
        await signOut()
        setIsPending(false)
    }
    
    return (
        <>
            <button onClick={() => setConfirmSignOut(true)} className='rounded-[2px] text-base px-5 h-9 bg-[#FF7A00] text-white font-light ml-auto max-lg:w-[338px] max-lg:mx-auto text-nowrap'>Sign out</button>
            <Dialog open={confirmSignOut}>
                <DialogContent className='flex items-center justify-center gap-12 flex-col bg-[#1A1A1A] border-none shadow-none outline-none'>
                    <p className='text-center text-white text-base'>Are you sure you want to sign out?</p>
                    <div className='flex items-center justify-center gap-4 w-full'>
                        <button onClick={() => setConfirmSignOut(false)} className='bg-[#FF7A00] rounded-[2px] text-base px-5 h-9 text-white font-light'>No</button>
                        <button onClick={handleSignOut} className='bg-white rounded-[2px] text-base px-5 h-9 text-black font-light'>Yes</button>
                    </div>
                </DialogContent>
            </Dialog>
            <Dialog open={isPending}>
                <DialogContent className='flex items-center justify-center bg-transparent border-none shadow-none outline-none'>
                    <Loader2 className='animate-spin' size={42} color="#000" />
                </DialogContent>
            </Dialog>
        </>
    )
}