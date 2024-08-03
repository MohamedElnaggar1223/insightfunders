'use client'

import { Check } from "lucide-react"
import { useState, useEffect } from "react"

export default function FeaturesBatches()
{
    const [firstBatch, setFirstBatch] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setFirstBatch(prev => !prev)
        }, 4500)

        return () => clearInterval(interval)
    }, [])

    return (
        <>
            {firstBatch ? (
                <>
                    <div className='rounded-[5px] firstDelay animate-change-background py-2 px-4 transition-all text-black text-base relative'>
                        <p>Working Capital</p>
                        <div className="flex absolute firstDelay opacity-0 items-center animate-small-check justify-center bg-black p-0.5 rounded-full top-[25%] right-2">
                            <Check size={18} stroke='#fff' />
                        </div>
                    </div>
                    <div className='rounded-[5px] change-background py-2 px-4 transition-all text-black text-base relative'>
                        <p>Venture Debt</p>
                        <div className="flex absolute items-center opacity-0 animate-small-check justify-center bg-black p-0.5 rounded-full top-[25%] right-2">
                            <Check size={18} stroke='#fff' />
                        </div>
                    </div>
                    <div className='rounded-[5px] secondDelay change-background py-2 px-4 transition-all text-black text-base relative'>
                        <p>Warehouse Facility</p>
                        <div className="flex absolute secondDelay opacity-0 items-center animate-small-check justify-center bg-black p-0.5 rounded-full top-[25%] right-2">
                            <Check size={18} stroke='#fff' />
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className='rounded-[5px] firstDelay animate-change-background py-2 px-4 transition-all text-black text-base relative'>
                        <p>Asset-Backed Loan</p>
                        <div className="flex absolute firstDelay opacity-0 items-center animate-small-check justify-center bg-black p-0.5 rounded-full top-[25%] right-2">
                            <Check size={18} stroke='#fff' />
                        </div>
                    </div>
                    <div className='rounded-[5px] change-background py-2 px-4 transition-all text-black text-base relative'>
                        <p>Revenue-Based Financing</p>
                        <div className="flex absolute items-center opacity-0 animate-small-check justify-center bg-black p-0.5 rounded-full top-[25%] right-2">
                            <Check size={18} stroke='#fff' />
                        </div>
                    </div>
                    <div className='rounded-[5px] secondDelay change-background py-2 px-4 transition-all text-black text-base relative'>
                        <p>Leverage Financing</p>
                        <div className="flex absolute secondDelay opacity-0 items-center animate-small-check justify-center bg-black p-0.5 rounded-full top-[25%] right-2">
                            <Check size={18} stroke='#fff' />
                        </div>
                    </div>
                </>
            )}
        </>
    )
}