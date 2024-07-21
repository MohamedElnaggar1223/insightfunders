'use client'

import { signOut } from "@/lib/actions/auth"
import { Loader2, LogOutIcon } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent } from "../ui/dialog"

export default function LogOutSlider() 
{
    const [loading, setLoading] = useState(false)

    const handleLogOut = async () => {
        setLoading(true)
        await signOut()
        setLoading
    }

    return (
        <>
            <div onClick={handleLogOut} className='flex gap-1 cursor-pointer'>
                <LogOutIcon size={16} stroke='#fff' />
                <p className='font-Montserrat text-xs text-white'>Log Out</p>
            </div>
            <Dialog open={loading}>
                <DialogContent className='flex items-center justify-center bg-transparent border-none shadow-none outline-none'>
                    <Loader2 className='animate-spin' size={42} color="#000" />
                </DialogContent>
            </Dialog>
        </>
    )
}