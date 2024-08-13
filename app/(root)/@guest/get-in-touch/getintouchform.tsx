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
import { countryDialingCodes } from "@/constants"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { getInTouchSchema } from "@/lib/validations/contactSchema"
import { sendMail } from "@/lib/actions/contact"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function GetInTouchForm()
{
    const [pending, setPending] = useState(false)

    const form = useForm<z.infer<typeof getInTouchSchema>>({
        resolver: zodResolver(getInTouchSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            annual_recurring: '',
            runway: '',
            description: '',
            company_name: '',
            business_email: '',
        },
    })

    async function onSubmit(values: z.infer<typeof getInTouchSchema>) {
        setPending(true)
        await sendMail(values)
        setPending(false)
        form.reset()
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className='flex gap-8 w-full items-center justify-between max-lg:flex-wrap'>
                    <FormField
                        control={form.control}
                        disabled={pending}
                        name="firstname"
                        render={({ field }) => (
                            <FormItem className='flex gap-1 flex-1 relative'>
                                <FormControl>
                                    <input className='flex flex-1 px-12 placeholder:font-light py-5 rounded-[2px] outline-none' placeholder="First name" {...field} />
                                </FormControl>
                                <FormMessage className='absolute text-red-700 font-semibold -bottom-6' />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        disabled={pending}
                        name="lastname"
                        render={({ field }) => (
                            <FormItem className='flex gap-1 flex-1 relative'>
                                <FormControl>
                                    <input className='flex flex-1 px-12 placeholder:font-light py-5 rounded-[2px] outline-none' placeholder="Last name" {...field} />
                                </FormControl>
                                <FormMessage className='absolute text-red-700 font-semibold -bottom-6' />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        disabled={pending}
                        name="company_name"
                        render={({ field }) => (
                            <FormItem className='flex gap-1 flex-1 relative'>
                                <FormControl>
                                    <input className='flex flex-1 px-12 placeholder:font-light py-5 rounded-[2px] outline-none' placeholder="Company Name" {...field} />
                                </FormControl>
                                <FormMessage className='absolute text-red-700 font-semibold -bottom-6' />
                            </FormItem>
                        )}
                    />
                </div>
                <div className='flex gap-8 w-full items-center justify-between max-lg:flex-wrap'>
                    <FormField
                        control={form.control}
                        disabled={pending}
                        name="business_email"
                        render={({ field }) => (
                            <FormItem className='flex gap-1 flex-1 relative'>
                                <FormControl>
                                    <input type='email' className='flex flex-1 px-12 placeholder:font-light py-5 rounded-[2px] outline-none' placeholder="Business Email" {...field} />
                                </FormControl>
                                <FormMessage className='absolute text-red-700 font-semibold -bottom-6' />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        disabled={pending}
                        name="annual_recurring"
                        render={({ field }) => (
                            <FormItem className='flex gap-1 flex-1 relative'>
                                <FormControl>
                                    <select defaultValue='' className='flex flex-1 px-12 placeholder:font-light py-5 rounded-[2px] outline-none' {...field}>
                                        <option value='' disabled>Annual Recurring</option>
                                        {['0-$120k', '$120k-$1M', '$1M-$5M', '$5M or more'].map((item, index) => (
                                            <option key={index} value={item}>{item}</option>
                                        ))}
                                    </select>
                                </FormControl>
                                <FormMessage className='absolute text-red-700 font-semibold -bottom-6' />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        disabled={pending}
                        name="runway"
                        render={({ field }) => (
                            <FormItem className='flex gap-1 flex-1 relative'>
                                <FormControl>
                                    <select defaultValue='' className='flex flex-1 px-12 placeholder:font-light py-5 rounded-[2px] outline-none' {...field}>
                                        <option value='' disabled>Runway</option>
                                        {['0-6 months', '6-12 months', '12+ months', 'Profitable'].map((item, index) => (
                                            <option key={index} value={item}>{item}</option>
                                        ))}
                                    </select>
                                </FormControl>
                                <FormMessage className='absolute text-red-700 font-semibold -bottom-6' />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    disabled={pending}
                    name="description"
                    render={({ field }) => (
                        <FormItem className='flex gap-1 flex-1 relative'>
                            <FormControl>
                                <Textarea rows={5} className='flex flex-1 px-12 placeholder:font-light placeholder:text-[#999] py-5 bg-white rounded-[2px] outline-none' placeholder="Description" {...field} />
                            </FormControl>
                            <FormMessage className='absolute text-red-700 font-semibold -bottom-6' />
                        </FormItem>
                    )}
                />
                <button disabled={pending} className={cn('w-full !mt-12 max-w-[241px] bg-[#FF7A00] text-white font-bold rounded-[2px] py-5 text-sm px-4', (pending) && 'opacity-65')} type="submit">Submit</button>
            </form>
        </Form>
    )
}