'use client'

import { createClient } from "@/utils/supabase/client"
import { Loader2 } from "lucide-react"
import { useState } from "react"

export default function ForgotPassword()
{
    const supabase = createClient()

    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
        e?.preventDefault()
        setLoading(true)
        await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${window.location.origin}/reset-password`
        })
        setLoading(true)
        setSubmitted(true)
    }

    return (
        <div className="flex flex-col w-full">
            {submitted ? (
                <div className='flex flex-col items-center justify-center gap-8 mt-24'>
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <h1 className='text-2xl font-bold font-Montserrat text-white text-center'>Check your email</h1>
                        <h2 className='text-base text-center font-normal text-white'>We sent a password reset link to <br /> {email}</h2>
                    </div>
                    <p className='text-white font-normal text-sm font-Montserrat mx-auto'>Didn't receive the email? <span onMouseDown={() => handleSubmit()} className='text-[#FF7A00] underline cursor-pointer font-normal'>Resend</span></p> 
                </div>
            ) : (
                <div className='flex flex-col items-center justify-center gap-8 mt-24'>
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <h1 className='text-2xl font-bold font-Montserrat text-white text-center'>Forgot Password</h1>
                        <h2 className='text-base text-center font-normal text-white'>No worries, we'll send you reset instructions.</h2>
                    </div>
                    <form onSubmit={handleSubmit} className='space-y-8 flex flex-col'>
                        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} className='flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none w-screen max-w-[450px]' placeholder="Email" />
                        <button disabled={loading || !email} className='w-full !mt-8 bg-[#FF7A00] text-white font-bold rounded-[8px] mx-auto py-3.5 text-sm px-4 max-w-[216px] disabled:opacity-70' type="submit">{loading ? <Loader2 stroke="#fff" className='animate-spin mx-auto' /> : 'Send instructions'}</button>
                    </form>
                </div>
            )}
        </div>
    )
}