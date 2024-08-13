'use client'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { startUpFinancialDetailsSchema } from "@/lib/validations/onBoardingSchema"
import { useEffect, useState } from "react"
import { updateFinancialDetails } from "@/lib/actions/onboarding"
import PlaidLink from "../plaid/PlaidLink"
import { UserType } from "@/lib/types/user"
import { getBankAccount } from "@/lib/actions/user"
import { X } from "lucide-react"

type Props = {
    user: UserType
}

export default function StartUpFinancialDetailsContainer({ user }: Props)
{
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState('')

    const form = useForm<z.infer<typeof startUpFinancialDetailsSchema>>({
        resolver: zodResolver(startUpFinancialDetailsSchema),
        defaultValues: {
            stage: 'Pre-seed',
            recentRaise: 0,
        },
    })

    const checkBankConnected = async () => {
        const bankAccount = await getBankAccount(user?.user.id!)

        if(!bankAccount) return false
        return true
    }

    const onSubmit = async (values: z.infer<typeof startUpFinancialDetailsSchema>) => {
        setIsPending(true)

        const bankConnected = await checkBankConnected()

        if(!bankConnected) {
            setError('Please connect your bank account')
            setIsPending(false)
            return
        }

        await updateFinancialDetails(values)
        setIsPending(false)
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 max-w-[90vw] flex flex-col pb-8'>
                <PlaidLink user={user} />
                <FormField
                    control={form.control}
                    disabled={isPending}
                    name="stage"
                    render={({ field }) => (
                        <FormItem className='relative flex flex-col gap-1 w-screen max-w-[384px]'>
                            <FormLabel className='text-white'>Stage</FormLabel>
                            <FormControl>
                                <select className='flex flex-1 px-12 placeholder:font-light py-5 rounded-[2px] outline-none' {...field}>
                                    {['Pre-seed', 'Seed', 'Series A', 'Series B', 'Series C', 'Series D', 'Series E', 'Series F', 'Public'].map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </FormControl>
                            <FormMessage className='absolute text-red-600 -bottom-6' />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    disabled={isPending}
                    name="recentRaise"
                    render={({ field }) => (
                        <FormItem className='relative flex flex-col gap-1 w-screen max-w-[384px]'>
                            <FormLabel className='text-white'>Recent Raise (in USD)</FormLabel>
                            <FormControl>
                                <input type='text' className='flex flex-1 px-12 placeholder:font-light py-5 rounded-[2px] outline-none' placeholder="e.g. 15000" {...field} onChange={(e) => (/^\d+$/.test(e.target.value) || e.target.value === '') && form.setValue('recentRaise', e.target.value === '' ? 0 : parseFloat(e.target.value))} />
                            </FormControl>
                            <FormMessage className='absolute text-red-600 -bottom-6' />
                        </FormItem>
                    )}
                />
                <button disabled={isPending} className='w-full !mt-8 bg-[#FF7A00] text-white font-bold rounded-[2px] py-5 text-sm px-4' type="submit">{isPending ? 'Submitting...' : 'Submit'}</button>
                {error && (
                    <div className='border-2 border-[#F86C6C] gap-4 rounded-[8px] bg-[#FEF2F2] flex items-center justify-center px-12 py-6'>
                        <X size={24} className='text-[#F86C6C]' />
                        <p className='text-black font-semibold'>{error}</p>
                    </div>
                )}
            </form>
        </Form>
    )
}