'use client'

import { CircleCheck, CircleX, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { agreeToContract, rejectContract } from "@/lib/actions/startup";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function StartUpContractActionBtns({ contractId }: { contractId: number })
{
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    const handleAccept = async () => {
        if(loading) return

        setLoading(true)
        await agreeToContract(contractId)
        setLoading(false)

        router.refresh()
    }

    const handleReject = async () => {
        if(loading) return

        setLoading(true)
        await rejectContract(contractId)
        setLoading(false)
        
        router.refresh()
    }

    return (
        <>
            <div onClick={handleAccept} className="flex items-center justify-center gap-2 cursor-pointer">
                <CircleCheck />
                Accept
            </div>
            {"|"}
            <div onClick={handleReject} className="flex items-center justify-center gap-2 cursor-pointer">
                <CircleX />
                Reject
            </div>
            {"|"}
            <Dialog open={loading}>
                <DialogContent className='flex items-center justify-center bg-transparent border-none shadow-none outline-none'>
                    <Loader2 className='animate-spin' size={42} color="#000" />
                </DialogContent>
            </Dialog>
        </>
    )
}