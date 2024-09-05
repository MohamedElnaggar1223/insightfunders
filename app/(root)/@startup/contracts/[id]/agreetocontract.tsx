'use client'

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { agreeToContract } from "@/lib/actions/startup"
import { UserType } from "@/lib/types/user"
import { Loader2 } from "lucide-react"
import { useState } from "react"

type Props = {
    contractId: number,
    user: UserType
}

export default function AgreeToContract({ contractId, user }: Props)
{
    const [loading, setLoading] = useState(false)
    const [signature, setSignature] = useState('')
    const [signatureError, setSignatureError] = useState('')

    const handleSubmitSignature = async () => {
        if (!signature || !(user?.userInfo?.first_name === signature || user?.userInfo?.last_name === signature || signature === `${user?.userInfo?.first_name} ${user?.userInfo?.last_name}`)) {
            setSignatureError('Signature does not match user name')
        }
        else {
            setSignatureError('')
            setLoading(true)
            const addedContract = await agreeToContract(contractId)
            if(addedContract?.error) setSignatureError(addedContract.error)
            else setLoading(false)
        }
    }

    return (
        <>
            <div className='mt-4 relative flex flex-col ml-auto'>
                <input type='text' placeholder="Signature" className='bg-transparent border-b border-white text-white w-[294px] outline-none py-1.5' value={signature} onChange={(e) => setSignature(e.target.value)} />
                {signatureError && <p className='text-red-500 text-left mr-auto mt-[2px] text-[10px]'>{signatureError}</p>}
                <button onMouseDown={handleSubmitSignature} className='w-fit rounded-[2px] bg-white text-black !text-[10px] mt-4 ml-auto text-xs px-2.5 text-nowrap py-1.5'>I Agree to all terms & Conditions</button>
            </div>
            <Dialog open={loading}>
                <DialogContent className='flex items-center justify-center bg-transparent border-none shadow-none outline-none'>
                    <Loader2 className='animate-spin' size={42} color="#000" />
                </DialogContent>
            </Dialog>
        </>
    )
}