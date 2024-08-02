'use client'

import { cn } from "@/lib/utils"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Steps()
{
    const [steps, setSteps] = useState(['step1', 'step3', 'step2'])

    useEffect(() => {
        const interval = setInterval(() => {
            setSteps(prevSteps => {
                const newSteps = [...prevSteps]
                const lastStep = newSteps.pop() as string
                newSteps.unshift(lastStep)
                return newSteps
            })
        }, 4500)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className='flex flex-col pt-72 z-[5] pb-32 bg-[#1A1A1A] gap-32'>
            <p className='text-white font-bold leading-[2rem] !text-[1.75rem] text-center'>3 steps away to get funded</p>
            <div className='flex gap-4 w-full items-center justify-between px-24 max-lg:flex-wrap'>
                <div className={cn("flex flex-col items-center justify-between gap-16 rounded-[4px] w-fit transition-all duration-300 p-6 flex-1", steps[0] === 'step1' ? 'bg-black scale-110' : 'bg-transparent scale-75')}>
                    <p className={cn('text-white', steps[0] === 'step1' ? 'text-2xl' : 'text-xs')}>Step 1: Sync your data</p>
                    <div className="flex flex-col items-center justify-start">
                        <Image
                            src='/images/plaidStep.png' 
                            width={388}
                            height={151}
                            alt='Plaid Step'
                        />
                        <div className={cn("flex flex-col items-center justify-center gap-1 text-white mt-4 text-xs text-center", steps[0] === 'step1' ? 'opacity-100' : 'opacity-0')}>
                            We integrate with your bank and accounting system so you 
                            can easily and securely connect your data.
                            <ul>
                                <li>
                                • Robust security measures
                                </li>
                                <li>
                                • Capchase is SOC 2 Type II certified
                                </li>
                                <li>
                                • Compliant with financial services regulatory requirements
                                </li>
                                <li>
                                • Pre-configured integrations
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={cn("flex flex-col items-center justify-between gap-16 rounded-[4px] w-fit transition-all duration-300 p-6 flex-1", steps[0] === 'step2' ? 'bg-black scale-110' : 'bg-transparent scale-75')}>
                    <p className={cn('text-white', steps[0] === 'step2' ? 'text-2xl' : 'text-xs')}>Step 2: Approve who you wish to share your data with</p>
                    <div className="flex flex-col items-center justify-start">
                        <Image
                            src='/images/approveStep.png' 
                            width={284}
                            height={89}
                            alt='Plaid Step'
                        />
                        <div className={cn("flex flex-col items-center justify-center gap-1 text-white mt-4 text-xs text-center", steps[0] === 'step2' ? 'opacity-100' : 'opacity-0')}>
                            Once approved, you can easily manage what financial data you 
                            share with lenders through our intuitive platform. Track activity, and 
                            access detailed reports. This platform empowers businesses with:
                            <ul>
                                <li>
                                    • Customizable data sharing options
                                </li>
                                <li>
                                • Advanced underwriting technology licensed for banks
                                </li>
                            </ul>
                            Maintain control over your financial information and ensure secure, 
                            transparent transactions with our comprehensive tools and support.
                        </div>
                    </div>
                </div>
                <div className={cn("flex flex-col items-center justify-between gap-16 rounded-[4px] w-fit transition-all duration-300 p-6 flex-1", steps[0] === 'step3' ? 'bg-black scale-110' : 'bg-transparent scale-75')}>
                    <p className={cn('text-white', steps[0] === 'step3' ? 'text-2xl' : 'text-xs')}>Step 3: Access your capital</p>
                    <div className="flex flex-col items-center justify-start">
                        <Image
                            src='/images/accessStep.png' 
                            width={181}
                            height={51}
                            alt='Plaid Step'
                        />
                        <div className={cn("flex flex-col items-center justify-center gap-1 text-white mt-4 text-xs text-center", steps[0] === 'step3' ? 'opacity-100' : 'opacity-0')}>
                            Once approved, you can immediately make draws in our 
                            intuitive platform, track activity and pull data for financial reporting. 
                            Draw additional funds as you need
                            <ul>
                                <li>
                                • Dashboard for clear visibility into your financing
                                </li>
                                <li>
                                • Dedicated Growth Advisor providing expertise and support along 
                                your journey
                                </li>
                                <li>
                                • Credit cap increases with your ARR!
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}