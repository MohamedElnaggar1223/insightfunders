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
  import { Checkbox } from "@/components/ui/checkbox"
import { partnerSignInSchema } from "@/lib/validations/authSchema"
import { partnerSignIn } from '@/lib/actions/auth';
import Link from "next/link"
import { useState } from "react"
import { Eye, EyeOff, Loader2 } from "lucide-react"
import { signIn } from "@/lib/actions/auth"
import { useRouter } from "next/navigation"
// import '../../app/globals.css' 

export default function SignIn()
{
    const router = useRouter()
    const [checked, setChecked] = useState(false)
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [loading, setLoading] = useState(false)

    const form = useForm<z.infer<typeof partnerSignInSchema>>({
        resolver: zodResolver(partnerSignInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    async function onSubmit(values: z.infer<typeof partnerSignInSchema>) {
        setLoading(true)
        const { error } = await partnerSignIn(values)
        setLoading(false)
        if (error) {
            form.setError('password', { message: 'An error occurred. Please try again.' });
        }
        else router.push('/partners')
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 signinformipfield flex flex-col gap-5">
                <FormField
                    control={form.control}
                    disabled={loading}
                    name="email"
                    render={({ field }) => (
                        <FormItem className='relative flex flex-col gap-1  '>
                            <FormControl>
                                <input className='flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none ipfield' placeholder="Email" {...field} />
                            </FormControl>
                            <FormMessage className='absolute text-red-600 -bottom-6' />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    disabled={loading}
                    name="password"
                    render={({ field }) => (
                        <FormItem className='relative flex flex-col gap-1   !mt-0'>
                            <FormControl>
                                <div className='relative'>
                                    <input type={passwordVisible ? 'text' : "password"} className='flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none w-full' placeholder="password" {...field} />
                                    {passwordVisible ? (
                                        <Eye
                                            className={'absolute top-[36%] z-50 cursor-pointer left-[92%]'} 
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                setPasswordVisible(prev => !prev)
                                            }}
                                            size={18}
                                        />
                                    ) : (
                                        <EyeOff
                                            className={'absolute top-[36%] z-50 cursor-pointer left-[92%]'} 
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                setPasswordVisible(prev => !prev)
                                            }} 
                                            size={18}
                                        />
                                    )}
                                </div>
                            </FormControl>
                            <FormMessage className='absolute text-red-600 -bottom-6' />
                        </FormItem>
                    )}
                />


                <div className="flex !mt-0">
                 <div className='flex gap-2 items-center justify-center'>
                    <Checkbox className='rounded-[4px] border-white' checked={checked} onCheckedChange={(value) => setChecked(value ? true : false)} id="terms" />
                    <label
                    htmlFor="terms"
                    className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                     >
                    Remember for 30 days
                </label>
            </div>
                <Link href='/forgot-password' className='text-white underline font-light  text-sm ml-auto'>Forgot password?</Link>
                </div>


                <button disabled={loading} className='w-full !mt-8 bg-[#FF7A00] text-white font-bold rounded-[8px] mx-auto py-3.5 text-sm px-4 max-w-[216px] disabled:opacity-70' type="submit">{loading ? <Loader2 stroke="#fff" className='animate-spin mx-auto' /> : 'Sign in'}</button>
            </form>
            <p className='text-white font-normal text-sm font-Montserrat mx-auto'>Don't have an account? <Link href='/partner/sign-up' className='text-[#FF7A00] underline font-normal'>Sign up</Link></p>
        </Form>
    )
}