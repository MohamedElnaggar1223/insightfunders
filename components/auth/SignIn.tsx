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
import { signInSchema } from "@/lib/validations/authSchema"
import Link from "next/link"

export default function SignIn()
{
    const form = useForm<z.infer<typeof signInSchema>>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    function onSubmit(values: z.infer<typeof signInSchema>) {
        
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-[90vw] flex flex-col">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className='relative flex flex-col gap-1 w-screen max-w-[384px]'>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <input className='flex flex-1 border border-[#D0D5DD] rounded-[8px] px-4 py-2 outline-none' placeholder="you@company.com" {...field} />
                            </FormControl>
                            <FormMessage className='absolute text-red-600 -bottom-6' />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem className='relative flex flex-col gap-1 w-screen max-w-[384px]'>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <input type="password" className='flex flex-1 border border-[#D0D5DD] rounded-[8px] px-4 py-2 outline-none' placeholder="you@company.com" {...field} />
                            </FormControl>
                            <FormMessage className='absolute text-red-600 -bottom-6' />
                        </FormItem>
                    )}
                />
                <Link href='/forgot-password' className='text-main-purple font-semibold text-sm'>Forgot password?</Link>
                <button className='w-full bg-main-purple text-white font-semibold rounded-[8px] py-2 px-4' type="submit">Sign in</button>
            </form>
        </Form>
    )
}