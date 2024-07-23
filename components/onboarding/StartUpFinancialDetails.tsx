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
import { useState } from "react"
import { updateFinancialDetails } from "@/lib/actions/onboarding"

export default function StartUpFinancialDetailsContainer()
{
    const [isPending, setIsPending] = useState(false)

    const form = useForm<z.infer<typeof startUpFinancialDetailsSchema>>({
        resolver: zodResolver(startUpFinancialDetailsSchema),
        defaultValues: {
            stage: 'Pre-seed',
            recentRaise: 0,
        },
    })

    const onSubmit = async (values: z.infer<typeof startUpFinancialDetailsSchema>) => {
        setIsPending(true)
        await updateFinancialDetails(values)
        setIsPending(false)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 max-w-[90vw] flex flex-col pb-8'>
                <FormField
                    control={form.control}
                    disabled={isPending}
                    name="stage"
                    render={({ field }) => (
                        <FormItem className='relative flex flex-col gap-1 w-screen max-w-[384px]'>
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                                <input className='flex flex-1 border border-[#D0D5DD] rounded-[8px] px-4 py-2 outline-none' placeholder="e.g. 55 st name." {...field} />
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
                            <FormLabel>City</FormLabel>
                            <FormControl>
                                <input className='flex flex-1 border border-[#D0D5DD] rounded-[8px] px-4 py-2 outline-none' placeholder="e.g. New York" {...field} />
                            </FormControl>
                            <FormMessage className='absolute text-red-600 -bottom-6' />
                        </FormItem>
                    )}
                />
                <button disabled={isPending} className='w-full bg-main-purple disabled:opacity-70 text-white font-semibold rounded-[8px] py-2 px-4' type="submit">{isPending ? 'Submitting...' : 'Submit'}</button>
            </form>
        </Form>
    )
}