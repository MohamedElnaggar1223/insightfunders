'use client'

import { cn } from "@/lib/utils"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Steps()
{
    const [steps, setSteps] = useState('step1')

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setSteps(prevSteps => {
    //             const newSteps = [...prevSteps]
    //             const lastStep = newSteps.pop() as string
    //             newSteps.unshift(lastStep)
    //             return newSteps
    //         })
    //     }, 4500)

    //     return () => clearInterval(interval)
    // }, [])

    return (
        <section className='flex flex-col pt-72 z-[5] pb-32 bg-[#1A1A1A] gap-32'>
            <p className='text-white font-bold leading-[2rem] !text-[1.75rem] text-center'>3 steps away to get funded</p>
            <div className='flex gap-4 w-full items-center justify-between max-md:flex-col px-4 md:px-24 max-lg:flex-wrap'>
                <div onMouseEnter={() => setSteps('step1')} className={cn("flex flex-col items-center justify-between gap-4 lg:gap-8 rounded-[4px] w-fit transition-all duration-300 p-6 flex-1", steps === 'step1' ? 'bg-black scale-105 md:scale-110' : 'bg-transparent scale-75')}>
                    <p className={cn('text-white text-center', steps === 'step1' ? 'max-lg:text-lg text-2xl' : 'max-lg:text-sm text-xs')}>Step 1: Register</p>
                    <div className="flex flex-col items-center justify-start">
                        <Image
                            src='/images/step1.png' 
                            width={284}
                            height={131}
                            alt='Plaid Step'
                            quality={100}
                        />
                        <div className={cn("flex flex-col items-center justify-center gap-1 text-white mt-4 text-[10px] lg:text-xs text-center", steps === 'step1' ? 'opacity-100' : 'opacity-0')}>
                            Invest as an accredited investor with Insight Funders. Whether you’re a family office, bank, credit fund, or high-net-worth individual, signing up is simple, and you'll quickly find deals tailored to your investment needs.
                        </div>
                    </div>
                </div>
                <div onMouseEnter={() => setSteps('step2')} className={cn("flex flex-col items-center justify-between gap-4 lg:gap-8 rounded-[4px] w-fit transition-all duration-300 p-6 flex-1", steps === 'step2' ? 'bg-black scale-105 md:scale-110' : 'bg-transparent scale-75')}>
                    <p className={cn('text-white text-center', steps === 'step2' ? 'max-lg:text-lg text-2xl' : 'max-lg:text-sm text-xs')}>Step 2: Source deals & Access real-time financials</p>
                    <div className="flex flex-col items-center justify-start">
                        <Image
                            src='/images/step2.png' 
                            width={406}
                            height={56}
                            alt='Plaid Step'
                            quality={100}
                        />
                        <div className={cn("flex flex-col items-center justify-center gap-1 text-white mt-4 text-[10px] lg:text-xs text-center", steps === 'step2' ? 'opacity-100' : 'opacity-0')}>
                            Leverage AI-driven monitoring to gain real-time insights into company financials, including bank account activity and business structure. Our platform provides lenders with all critical data at their fingertips, empowering them to manage risk efficiently and make data-backed investment decisions with confidence.
                        </div>
                    </div>
                </div>
                <div onMouseEnter={() => setSteps('step3')} className={cn("flex flex-col items-center justify-between gap-4 lg:gap-8 rounded-[4px] w-fit transition-all duration-300 p-6 flex-1", steps === 'step3' ? 'bg-black scale-105 md:scale-110' : 'bg-transparent scale-75')}>
                    <p className={cn('text-white text-center', steps === 'step3' ? 'max-lg:text-lg text-2xl' : 'max-lg:text-sm text-xs')}>Step 3: Make an offer with your own terms</p>
                    <div className="flex flex-col items-center justify-start">
                        <div className='flex items-center justify-center relative'>
                            <Image
                                src='/images/step3.png' 
                                width={238}
                                height={120}
                                alt='Plaid Step'
                                className='z-10'
                                quality={100}
                            />
                            <Image
                                src='/images/step3Btn.png' 
                                width={147}
                                height={40}
                                alt='Plaid Step'
                                className='absolute -bottom-2 -right-12 z-20'
                                quality={100}
                            />
                        </div>
                        <div className={cn("flex flex-col items-center justify-center gap-1 text-white mt-4 text-[10px] lg:text-xs text-center", steps === 'step3' ? 'opacity-100' : 'opacity-0')}>
                            Submitting an offer is effortless—simply set your terms and let us handle the rest. Our platform streamlines the entire legal and transaction process, saving you both time and money. With Insight Funders, you can complete your deal seamlessly, from offer to closing, all in one place.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}