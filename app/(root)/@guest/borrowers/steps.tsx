'use client'

import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
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
        <AnimatePresence>
            <section className='flex flex-col pt-72 z-[5] pb-32 bg-[#1A1A1A] gap-32'>
                <p className='text-white font-bold leading-[2rem] !text-[1.75rem] text-center'>3 steps away to get funded</p>
                <div className='flex gap-4 w-full items-center justify-center max-md:flex-col px-4 md:px-24 max-lg:flex-wrap'>
                    <div onMouseEnter={() => setSteps('step1')} className={cn("flex flex-col items-center justify-center gap-8 transition-all duration-300 p-6 flex-1 border max-w-full md:w-[396px] md:max-w-[396px] h-[450px] rounded-[12px]", steps === 'step1' ? 'bg-black border-black' : 'bg-transparent border-[#212121]')}>
                        <motion.p layoutId='step1' key='step1' className={cn('text-white text-center max-lg:text-lg', steps === 'step1' ? 'text-xl' : 'text-base')}>Step 1: Sync your data</motion.p>
                        <div className="flex flex-col items-center justify-start">
                            <motion.div layoutId='step1image' key='step1image'>
                                <Image
                                    src='/images/plaidStep.png' 
                                    width={388}
                                    height={151}
                                    alt='Plaid Step'
                                    className={cn(steps !== 'step1' && 'scale-90')}
                                />
                            </motion.div>
                            <div className={cn(steps === 'step1' ? "flex flex-col items-center justify-center gap-1 text-white mt-4 text-base text-center" : 'hidden')}>
                                We integrate with your bank and accounting system so you 
                                can easily and securely connect your data.<br />
                                Robust security measures<br />
                                Capchase is SOC 2 Type II certified<br />
                                Compliant with financial services regulatory requirements<br />
                                Pre-configured integrations
                            </div>
                        </div>
                    </div>
                    <div onMouseEnter={() => setSteps('step2')} className={cn("flex flex-col items-center justify-center gap-8 transition-all duration-300 p-6 flex-1 border max-w-full md:w-[396px] md:max-w-[396px] h-[450px] rounded-[12px]", steps === 'step2' ? 'bg-black border-black' : 'bg-transparent border-[#212121]')}>
                        <motion.p layoutId='step2' key='step2' className={cn('text-white text-center max-lg:text-lg', steps === 'step2' ? 'text-xl' : 'text-base')}>Step 2: Approve who you wish to share your data with</motion.p>
                        <div className="flex flex-col items-center justify-start">
                            <motion.div layoutId='step2image' key='step2image'>
                                <Image
                                    src='/images/step2borrowers.png' 
                                    width={284}
                                    height={89}
                                    alt='Plaid Step'
                                    className={cn(steps !== 'step2' && 'scale-75')}
                                />
                            </motion.div>
                            <div className={cn(steps === 'step2' ? "flex flex-col items-center justify-center gap-1 text-white mt-4 text-base text-center" : 'hidden')}>
                            You have full control over your data—choose which lender to share it with. Your data is securely encrypted and will only be shared with a lender upon your approval
                            </div>
                        </div>
                    </div>
                    <div onMouseEnter={() => setSteps('step3')} className={cn("flex flex-col items-center justify-center gap-8 transition-all duration-300 p-6 flex-1 border max-w-full md:w-[396px] md:max-w-[396px] h-[450px] rounded-[12px]", steps === 'step3' ? 'bg-black border-black' : 'bg-transparent border-[#212121]')}>
                        <motion.p layoutId='step3' key='step3' className={cn('text-white text-center max-lg:text-lg', steps === 'step3' ? 'text-xl' : 'text-base')}>Step 3: Access your capital</motion.p>
                        <div className="flex flex-col items-center justify-start">
                            <motion.div layoutId='step3image' key='step3image'>
                                <Image
                                    src='/images/accessStep.png' 
                                    width={181}
                                    height={60}
                                    alt='Plaid Step'
                                    className={cn('rounded-[12px]', steps !== 'step1' && 'scale-90')}
                                />
                            </motion.div>
                            <div className={cn(steps === 'step3' ? "flex flex-col items-center justify-center gap-1 text-white mt-4 text-base text-center" : 'hidden')}>
                            Access fast, flexible, and patient capital with Insight Funders. Easily increase your credit line and refinance as needed. Our commitment is to be your lifelong debt partner, supporting the growth and success of your company
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AnimatePresence>
    )
}