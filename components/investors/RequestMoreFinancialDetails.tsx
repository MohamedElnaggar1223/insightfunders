'use client'

import { addFinancialDetailsRequest } from "@/lib/actions/investor"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

type Props = {
    investorId: number
    startupId: number
    hasRequested: boolean
}

export default function RequestMoreFinancialDetails({ investorId, startupId, hasRequested }: Props)
{
    const [loading, setLoading] = useState(false)
    const [requested, setRequested] = useState(false)

    const requestMoreFinancialDetails = async () =>
    {
        setLoading(true)
        
        const { success, error } = await addFinancialDetailsRequest(investorId, startupId)

        if(success) setRequested(true)
        else console.error(error)

        setLoading(false)
    }

    return (
        <>
            {requested || hasRequested ? (
                <p className='text-xs font-light text-white font-Montserrat text-center w-full mx-auto mt-6'>
                    This company has received your request. Upon accepting your request to view their financial details, a notification will appear in <Link href='/requests' className='font-medium underline text-[#FF7A00]'>Requests</Link> ,<br /> 
                    where you can download their financial details PDF(s).
                </p>
            ) : (
                <div className="flex w-full items-center justify-end mt-6">
                    <button onMouseDown={requestMoreFinancialDetails} disabled={loading || hasRequested} className="bg-white flex items-center justify-center gap-1 disabled:opacity-65 rounded-[2px] text-black font-Montserrat text-xs font-light p-2">
                        {loading && <Loader2 size={16} className='animate-spin' />}
                        Request More Financial Details
                    </button>
                </div>
            )}
        </>
    )
}