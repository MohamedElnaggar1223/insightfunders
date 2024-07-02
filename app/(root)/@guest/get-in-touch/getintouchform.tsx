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
    const [checked, setChecked] = useState(false)

    const form = useForm<z.infer<typeof getInTouchSchema>>({
        resolver: zodResolver(getInTouchSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            email: "",
            mobile: "",
            countryCode: "US",
            message: "",
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-[90vw]">
                <div className='flex gap-8 w-full items-center justify-between max-lg:flex-wrap'>
                    <FormField
                        control={form.control}
                        disabled={pending}
                        name="firstname"
                        render={({ field }) => (
                            <FormItem className='flex flex-col gap-1 max-lg:flex-1'>
                                <FormLabel>First name</FormLabel>
                                <FormControl>
                                    <input className='flex flex-1 border border-[#D0D5DD] rounded-[8px] px-4 py-2 outline-none' placeholder="First name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        disabled={pending}
                        name="lastname"
                        render={({ field }) => (
                            <FormItem className='flex flex-col gap-1 max-lg:flex-1'>
                                <FormLabel>Last name</FormLabel>
                                <FormControl>
                                    <input className='flex flex-1 border border-[#D0D5DD] rounded-[8px] px-4 py-2 outline-none' placeholder="Last name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    disabled={pending}
                    name="email"
                    render={({ field }) => (
                        <FormItem className='flex flex-col gap-1 flex-1'>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <input className='flex flex-1 border border-[#D0D5DD] rounded-[8px] px-4 py-2 outline-none' placeholder="you@company.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormItem>
                    <FormLabel>Phone number</FormLabel>
                    <div className='flex flex-1 overflow-hidden'>
                        <FormField
                            control={form.control}
                            disabled={pending}
                            name="countryCode"
                            render={({ field }) => (
                                <FormItem className='flex'>
                                    <FormControl>
                                        <select className='flex border-y border-l border-[#D0D5DD] rounded-tl-[8px] rounded-bl-[8px] px-4 py-2 outline-none' defaultValue='US' {...field}>
                                            {Object.entries(countryDialingCodes).map(([code, country]) => (
                                                <option key={code} value={code}>{code} {country}</option>
                                            ))}
                                        </select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            disabled={pending}
                            name="mobile"
                            render={({ field }) => (
                                <FormItem className='flex flex-col gap-1 flex-1'>
                                    <FormControl>
                                        <input className='flex border-y border-r border-[#D0D5DD] rounded-tr-[8px] rounded-br-[8px] flex-1 px-4 py-2 outline-none' placeholder="(555) 000 0000" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </FormItem>
                <FormField
                    control={form.control}
                    disabled={pending}
                    name="message"
                    render={({ field }) => (
                        <FormItem className='flex flex-col gap-1 flex-1'>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea rows={6} className='flex flex-1 border bg-white border-[#D0D5DD] rounded-[8px] px-4 py-2 outline-none placeholder:text-[#9CA3AF] text-base' placeholder="Leave us a message..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className='flex items-center justify-start gap-2'>
                    <input checked={checked} onChange={() => setChecked(prev => !prev)} type="checkbox" className='rounded-[2px]' />
                    <p className='text-main-gray text-sm'>You agree to our friendly <Link href='/' className='underline'>privacy policy</Link>.</p>
                </div>
                <button disabled={pending || !checked} className={cn('w-full bg-main-purple text-white font-semibold rounded-full py-3 px-4', (pending || !checked) && 'text-gray-500')} type="submit">Send message</button>
            </form>
        </Form>
    )
}