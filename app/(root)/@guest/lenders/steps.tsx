'use client'

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
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
        <section className='flex flex-col py-24 z-[5] bg-[#1A1A1A] gap-32 scroll-none'>
            <p className='text-white font-bold leading-[2rem] !text-[1.75rem] text-center'>Get started easily</p>
            <div className='flex gap-4 w-full items-center justify-center max-md:flex-col px-4 md:px-24 max-lg:flex-wrap'>
                <div onMouseEnter={() => setSteps('step1')} className={cn("flex flex-col items-center justify-center gap-8 transition-all duration-300 p-6 flex-1 border max-w-full md:w-[396px] md:max-w-[396px] h-[450px] rounded-[12px]", steps === 'step1' ? 'bg-black border-black scale-105 md:scale-110' : 'bg-transparent border-[#212121] scale-95 md:scale-90')}>
                    <motion.p layoutId='step1' key='step1' className={cn('text-white text-center max-lg:text-lg', steps === 'step1' ? 'text-xl' : 'text-base')}>Step 1: Sync your data</motion.p>
                    <div className="flex flex-col items-center justify-start">
                        <motion.div layoutId='step1image' key='step1image'>
                            <Image
                                src='/images/step1.png' 
                                width={284}
                                height={131}
                                alt='Plaid Step'
                                quality={100}
                                className={cn(steps !== 'step1' && 'scale-90')}
                            />
                        </motion.div>
                        <div className={cn(steps === 'step1' ? "flex flex-col items-center justify-center gap-1 text-white mt-4 text-base text-center" : 'hidden')}>
                            Invest as an accredited investor with Insight Funders. Whether you’re a family office, bank, credit fund, or high-net-worth individual, signing up is simple, and you'll quickly find deals tailored to your investment needs.
                        </div>
                    </div>
                </div>
                <div onMouseEnter={() => setSteps('step2')} className={cn("flex flex-col items-center justify-center gap-8 transition-all duration-300 p-6 flex-1 border max-w-full md:w-[396px] md:max-w-[396px] h-[450px] rounded-[12px]", steps === 'step2' ? 'bg-black border-black scale-105 md:scale-110' : 'bg-transparent border-[#212121] scale-95 md:scale-90')}>
                    <motion.p layoutId='step2' key='step2' className={cn('text-white text-center max-lg:text-lg', steps === 'step2' ? 'text-xl' : 'text-base')}>Step 2: Approve who you wish to share your data with</motion.p>
                    <div className="flex flex-col items-center justify-start">
                        <motion.div layoutId='step2image' key='step2image'>
                            <Image
                                src='/images/step2.png' 
                                width={406}
                                height={56}
                                alt='Plaid Step'
                                quality={100}
                            />
                        </motion.div>
                        <div className={cn(steps === 'step2' ? "flex flex-col items-center justify-center gap-1 text-white mt-4 text-base text-center" : 'hidden')}>
                            Leverage AI-driven monitoring to gain real-time insights into company financials, including bank account activity and business structure. Our platform provides lenders with all critical data at their fingertips, empowering them to manage risk efficiently and make data-backed investment decisions with confidence.
                        </div>
                    </div>
                </div>
                <div onMouseEnter={() => setSteps('step3')} className={cn("flex flex-col items-center justify-center gap-8 transition-all duration-300 p-6 flex-1 border max-w-full md:w-[396px] md:max-w-[396px] h-[450px] rounded-[12px]", steps === 'step3' ? 'bg-black border-black scale-105 md:scale-110' : 'bg-transparent border-[#212121] scale-95 md:scale-90')}>
                    <motion.p layoutId='step3' key='step3' className={cn('text-white text-center max-lg:text-lg', steps === 'step3' ? 'text-xl' : 'text-base')}>Step 3: Access your capital</motion.p>
                    <div className="flex flex-col items-center justify-start">
                        <motion.div layoutId='step3image' key='step3image' className='flex items-center justify-center relative'>
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
                        </motion.div>
                        <div className={cn(steps === 'step3' ? "flex flex-col items-center justify-center gap-1 text-white mt-4 text-base text-center" : 'hidden')}>
                            Submitting an offer is effortless—simply set your terms and let us handle the rest. Our platform streamlines the entire legal and transaction process, saving you both time and money. With Insight Funders, you can complete your deal seamlessly, from offer to closing, all in one place.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}