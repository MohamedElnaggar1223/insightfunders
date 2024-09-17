'use client'

import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { Check } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function FeaturesBatches()
{
    const [items, setItems] = useState(['Working Capital', 'Venture Debt', 'Warehouse Facility', 'Asset-Backed Loan', 'Revenue-Based Financing', 'Leverage Financing'])
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

    useEffect(() => {
        const interval = setInterval(() => {
            setItems((prev) => [...prev.slice(1), prev[0]]);
          }, 3000); // Change item every 3 seconds
      
          return () => clearInterval(interval);
    }, [])

    return (
        // <>
            //{firstBatch ? (
                <div style={{ willChange: 'transform' }} className='h-[132px] relative max-h-[132px] overflow-scroll overflow-x-hidden hide-scrollbar'>
                    <div className='flex w-full rounded-[5px] bg-black/5 top-[35%] absolute items-center justify-end py-2 px-4'>
                        <div className="flex items-center justify-center bg-black p-0.5 rounded-full right-2 z-[9999]">
                            <Check size={18} stroke='#fff' />
                        </div>
                    </div>
                    <div style={{ willChange: 'transform' }} className='flex h-[264px] relative min-h-[132px] overflow-scroll flex-col overflow-x-hidden hide-scrollbar w-full'>
                        <AnimatePresence initial={false}>
                            <motion.div layoutId='container' className='flex flex-1 flex-col w-full min-h-[132px]'>
                                {items.map((item, index) => (
                                    <motion.div key={item} className='rounded-[5px] secondDelay change-background py-2 px-4 transition-all text-black text-base relative flex-1 flex items-center'>
                                        <motion.p key={item} layoutId={item}>{item}</motion.p>
                                        {/* <div className="flex absolute secondDelay opacity-0 items-center animate-small-check justify-center bg-black p-0.5 rounded-full top-[25%] right-2">
                                            <Check size={18} stroke='#fff' />
                                        </div> */}
                                    </motion.div>
                                ))}
                            </motion.div>
                            {/* <motion.div className='flex flex-1 flex-col w-full min-h-[132px] text-black opacity-100'>
                                <motion.div layoutId="Asset-Backed Loan" style={{ willChange: 'transform' }} className='rounded-[5px] firstDelay py-2 px-4 transition-all text-black text-base relative flex-1 flex items-center'>
                                    <p>Asset-Backed Loan</p>
                                </motion.div>
                                <motion.div layoutId="Revenue-Based Financing" style={{ willChange: 'transform' }} className='rounded-[5px] change-background py-2 px-4 transition-all text-black text-base relative flex-1 flex items-center'>
                                    <p>Revenue-Based Financing</p>
                                </motion.div>
                                <motion.div layoutId="Leverage Financing" style={{ willChange: 'transform' }} className='rounded-[5px] secondDelay change-background py-2 px-4 transition-all text-black text-base relative flex-1 flex items-center'>
                                    <p>Leverage Financing</p>
                                </motion.div>
                            </motion.div> */}
                        </AnimatePresence>
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