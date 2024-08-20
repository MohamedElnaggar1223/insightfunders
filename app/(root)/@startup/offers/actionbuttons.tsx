'use client'
import { acceptRequest, rejectRequest } from "@/lib/actions/startup";
import { UserType } from "@/lib/types/user";
import { cn } from "@/lib/utils";
import { useState } from "react";

type Props = { 
    user: UserType
    requestId: number 
}

export default function ActionButtons({ user, requestId }: Props)
{
    const [loading, setLoading] = useState(false)

    const handleAccept = async () => {
        setLoading(true)
        await acceptRequest(user?.userStartUp?.id!, requestId)
        setLoading(false)
    }

    const handleReject = async () => {
        setLoading(true)
        await rejectRequest(user?.userStartUp?.id!, requestId)
        setLoading(false)
    }

    return (
        <div className={cn("flex gap-4", loading && 'opacity-50')}>
            <button onMouseDown={handleAccept} disabled={loading} className='bg-black rounded-[4px] text-[10px] w-32 font-extralight text-white text-sm h-8'>
                Accept
            </button>
            <button onMouseDown={handleReject} disabled={loading} className='border-[#FF4040] border rounded-[4px] bg-[#FF8080] text-[10px] w-32 font-extralight text-black text-sm h-8'>
                Reject
            </button>
        </div>
    )
}