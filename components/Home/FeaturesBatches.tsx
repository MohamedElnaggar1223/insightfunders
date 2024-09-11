'use client'

import { motion, useAnimationControls } from "framer-motion";
import { Check } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function FeaturesBatches()
{
    // const [firstBatch, setFirstBatch] = useState(true)

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setFirstBatch(prev => !prev)
    //     }, 4500)

    //     return () => clearInterval(interval)
    // }, [])

    // const containerRef = useRef<HTMLDivElement>(null);
    // const controls = useAnimationControls();

    // useEffect(() => {
    //     const container = containerRef.current;
    //     if (!container) return;

    //     const animate = async () => {
    //         const contentHeight = container.scrollHeight;
    //         const containerHeight = container.clientHeight;

    //         await controls.start({
    //             y: -(contentHeight - containerHeight),
    //             transition: {
    //                 duration: 10,
    //                 ease: 'linear',
    //                 repeat: Infinity,
    //                 repeatType: 'loop'
    //             }
    //         });
    //     };

    //     animate();
    // }, [controls]);

    console.log("rendered")

    return (
        // <>
            //{firstBatch ? (
                <div style={{ willChange: 'transform' }} className='h-[132px] relative overflow-hidden max-h-[132px]'>
                    <div className="flex absolute items-center justify-center bg-black p-0.5 rounded-full top-[40%] right-2 z-[9999]">
                        <Check size={18} stroke='#fff' />
                    </div>
                    <div style={{ willChange: 'transform' }} className='flex h-[264px] relative min-h-[132px] overflow-scroll animate-scrollY flex-col overflow-x-hidden hide-scrollbar w-full'>
                        <div style={{ willChange: 'transform' }} className='flex flex-1 flex-col w-full min-h-[132px]'>
                            <div style={{ willChange: 'transform' }} className='rounded-[5px] firstDelay py-2 px-4 transition-all text-black text-base relative flex-1 flex items-center'>
                                <p>Working Capital</p>
                                {/* <div className="flex absolute firstDelay opacity-0 items-center animate-small-check justify-center bg-black p-0.5 rounded-full top-[25%] right-2">
                                    <Check size={18} stroke='#fff' />
                                </div> */}
                            </div>
                            <div style={{ willChange: 'transform' }} className='rounded-[5px] change-background py-2 px-4 transition-all text-black text-base relative flex-1 flex items-center'>
                                <p>Venture Debt</p>
                            </div>
                            <div style={{ willChange: 'transform' }} className='rounded-[5px] secondDelay change-background py-2 px-4 transition-all text-black text-base relative flex-1 flex items-center'>
                                <p>Warehouse Facility</p>
                                {/* <div className="flex absolute secondDelay opacity-0 items-center animate-small-check justify-center bg-black p-0.5 rounded-full top-[25%] right-2">
                                    <Check size={18} stroke='#fff' />
                                </div> */}
                            </div>
                        </div>
                        <div className='flex flex-1 flex-col w-full min-h-[132px] text-black opacity-100'>
                            <div style={{ willChange: 'transform' }} className='rounded-[5px] firstDelay py-2 px-4 transition-all text-black text-base relative flex-1 flex items-center'>
                                <p>Asset-Backed Loan</p>
                                {/* <div className="flex absolute firstDelay opacity-0 items-center animate-small-check justify-center bg-black p-0.5 rounded-full top-[25%] right-2">
                                    <Check size={18} stroke='#fff' />
                                </div> */}
                            </div>
                            <div style={{ willChange: 'transform' }} className='rounded-[5px] change-background py-2 px-4 transition-all text-black text-base relative flex-1 flex items-center'>
                                <p>Revenue-Based Financing</p>
                            </div>
                            <div style={{ willChange: 'transform' }} className='rounded-[5px] secondDelay change-background py-2 px-4 transition-all text-black text-base relative flex-1 flex items-center'>
                                <p>Leverage Financing</p>
                                {/* <div className="flex absolute secondDelay opacity-0 items-center animate-small-check justify-center bg-black p-0.5 rounded-full top-[25%] right-2">
                                    <Check size={18} stroke='#fff' />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
        //     ) : (
        //         <>
        //             <div style={{ willChange: 'transform' }} className='rounded-[5px] firstDelay py-2 px-4 transition-all text-black text-base relative'>
        //                 <p>Asset-Backed Loan</p>
        //                 <div className="flex absolute firstDelay opacity-0 items-center animate-small-check justify-center bg-black p-0.5 rounded-full top-[25%] right-2">
        //                     <Check size={18} stroke='#fff' />
        //                 </div>
        //             </div>
        //             <div style={{ willChange: 'transform' }} className='rounded-[5px] change-background py-2 px-4 transition-all text-black text-base relative'>
        //                 <p>Revenue-Based Financing</p>
        //                 <div className="flex absolute items-center opacity-0 animate-small-check justify-center bg-black p-0.5 rounded-full top-[25%] right-2">
        //                     <Check size={18} stroke='#fff' />
        //                 </div>
        //             </div>
        //             <div style={{ willChange: 'transform' }} className='rounded-[5px] secondDelay change-background py-2 px-4 transition-all text-black text-base relative'>
        //                 <p>Leverage Financing</p>
        //                 <div className="flex absolute secondDelay opacity-0 items-center animate-small-check justify-center bg-black p-0.5 rounded-full top-[25%] right-2">
        //                     <Check size={18} stroke='#fff' />
        //                 </div>
        //             </div>
        //         </>
        //     )}
        // </>
    )
}