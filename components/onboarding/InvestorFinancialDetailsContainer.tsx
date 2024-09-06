'use client'

import { useState } from "react"
import PlaidLink from "../plaid/PlaidLink"
import { UserType } from "@/lib/types/user"
import { getBankAccount } from "@/lib/actions/user"
import { X } from "lucide-react"
import { updatePage } from "@/lib/server"
import { useRouter } from "next/navigation"

type Props = {
    user: UserType
}

export default function StartUpFinancialDetailsContainer({ user }: Props)
{
    const router = useRouter()

    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState('')

    const checkBankConnected = async () => {
        const bankAccount = await getBankAccount(user?.user.id!)

        if(!bankAccount) return false
        return true
    }

    const onSubmit = async () => {
        setIsPending(true)

        const bankConnected = await checkBankConnected()

        if(!bankConnected) {
            setError('Please connect your bank account')
            setIsPending(false)
            return
        }

        setIsPending(false)
        await updatePage('/investor-details/financial')
        await updatePage('/investor-details')
        await updatePage('/investor-details/submit')

        router.replace('/investor-details/submit')
    }


    return (
        <div className='space-y-8 w-screen max-w-[384px] flex flex-col pb-8'>
            <PlaidLink user={user} />
            <button onClick={onSubmit} disabled={isPending} className='w-full !mt-8 bg-[#FF7A00] text-white font-bold rounded-[8px] mx-auto py-3.5 text-sm px-4 max-w-[216px] disabled:opacity-70' type="submit">{isPending ? 'Submitting...' : 'Submit'}</button>
            {error && (
                <div className='border-2 border-[#F86C6C] gap-4 rounded-[8px] bg-[#FEF2F2] flex items-center justify-center px-12 py-6'>
                    <X size={24} className='text-[#F86C6C]' />
                    <p className='text-black font-semibold'>{error}</p>
                </div>
            )}
        </div>
    )
}