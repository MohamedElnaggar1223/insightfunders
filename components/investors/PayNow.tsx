'use client'

import { useState } from "react"
import { Dialog, DialogContent } from "../ui/dialog"
import { Loader2 } from "lucide-react"
import { payContractAmount } from "@/lib/actions/investor"

type Props = {
    contractId: number
}

export default function PayNow({ contractId }: Props)
{
    const [loading, setLoading] = useState(false)

    const handlePayContractAmount = async () => {
        setLoading(true)
        await payContractAmount(contractId)
        // if(error) setError(error)
        setLoading(false)
    }

    return (
        <>
            <button onMouseDown={handlePayContractAmount} className='text-xs text-black font-light rounded-[2px] px-2 py-1 bg-white'>Pay Now</button>
            <Dialog open={loading}>
                <DialogContent className='flex items-center justify-center bg-transparent border-none shadow-none outline-none'>
                    <Loader2 className='animate-spin' size={42} color="#000" />
                </DialogContent>
            </Dialog>
        </>
    )
}