'use client'

import { cn } from "@/lib/utils";
import { createClient } from "@/utils/supabase/client";
import { Check, CircleCheck, Eye, EyeOff, Loader2, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ResetPasswordPage()
{
    const supabase = createClient()
    const router = useRouter()

    const searchParams = useSearchParams()

    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [passwordVisible, setPasswordVisible] = useState(false)

    useEffect(() => {
        supabase.auth.onAuthStateChange(async (event, session) => {
            if (event == "SIGNED_IN") {
                // const newPassword = prompt("What would you like your new password to be?");
                // const { data, error } = await supabase.auth
                //     .updateUser({ password: newPassword! })
            
                // if (data) alert("Password updated successfully!")
                // if (error) alert("There was an error updating your password.")
                console.log(session)
            }
        })
    }, [])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        const { error } = await supabase.auth.updateUser({ password: password })
        if (error) setLoading(false)
        else router.push('/')
    }

    const longerThanEightCharacters = (password: string) => password.length >= 8
    const containsSpecialCharacters = (password: string) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)

    useEffect(() => {
        const authCode = searchParams.get('code')
        if(authCode) {
            const exchangeCodeForSession = async () => {
                try
                {
                    const { error } = await supabase.auth.exchangeCodeForSession(authCode!)
                    if (error) router.push('/')
                }
                catch(e)
                {
                    console.error(e)
                }
            }
            exchangeCodeForSession()
        }
        else router.push('/')
    }, [searchParams])

    return (
        <div className='flex flex-col items-center justify-center gap-8 mt-24'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <h1 className='text-2xl font-bold font-Montserrat text-white text-center'>Set new password</h1>
                <h2 className='text-base text-center font-normal text-white max-w-[400px]'>Your new password must be different to previously used passwords.</h2>
            </div>
            <form onSubmit={handleSubmit} className='space-y-8 flex flex-col'>
                <div className='relative'>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type={passwordVisible ? 'text' : "password"} className='flex flex-1 px-6 placeholder:font-light py-3.5 text-sm w-screen max-w-[450px] rounded-[8px] outline-none' placeholder="password" />
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
                <div className='flex flex-col gap-4 justify-center items-start'>
                    <p className={cn('text-xs flex gap-2', longerThanEightCharacters(password) ? 'text-[#FF7A00]' : 'text-white/60')}>
                        {longerThanEightCharacters(password) ? <div className='w-4 h-4 bg-[#FF7A00] rounded-full flex items-center justify-center'><Check size={14} stroke='#1A1A1A' /></div> : <X size={16} fill='#FF7A00' />}
                        Must be at least 8 characters long
                    </p>
                    <p className={cn('text-xs flex gap-2', containsSpecialCharacters(password) ? 'text-[#FF7A00]' : 'text-white/60')}>
                        {containsSpecialCharacters(password) ? <div className='w-4 h-4 bg-[#FF7A00] rounded-full flex items-center justify-center'><Check size={14} stroke='#1A1A1A' /></div> : <X size={16} fill='#FF7A00' />}
                        Must contain at least 1 special character
                    </p>
                </div>
                <button disabled={loading || !password || !longerThanEightCharacters(password) || !containsSpecialCharacters(password)} className='w-full !mt-8 bg-[#FF7A00] text-white font-bold rounded-[8px] mx-auto py-3.5 text-sm px-4 max-w-[216px] disabled:opacity-70' type="submit">{loading ? <Loader2 stroke="#fff" className='animate-spin mx-auto' /> : 'Confirm new password'}</button>
            </form>
        </div>
    )
}