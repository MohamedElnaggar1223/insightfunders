'use client'
import { motion, useInView, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Hero()
{
    const [image, setImage] = useState('lenders.png')
    const [text, setText] = useState('first')

    const parentRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: parentRef,
        offset: ['start start', 'end end']
    })
    
    const x = useTransform(scrollYProgress, [0, 0.25, 0.45, 0.5, 0.70, 0.75, 1], ['0vw', '50vw', '0vw', '0vw', '50vw', '50vw', '0vw']);

    useMotionValueEvent(scrollYProgress, 'change', (progress) => {
        if(progress < 0.25 && image !== 'lenders.png') setImage('lenders.png')
        else if(progress >= 0.25 && progress < 0.5 && image !== 'dashboard2.png') setImage('dashboard2.png')
        else if(progress >= 0.70 && image !== 'dashboard3.png') setImage('dashboard3.png')
    })

    useMotionValueEvent(scrollYProgress, 'change', (progress) => {
        if(progress < 0.25 && text !== 'first') setText('first')
        else if(progress >= 0.25 && progress < 0.5 && image !== 'second') setText('second')
        else if(progress >= 0.70 && image !== 'third') setText('third')
    })

//     const firstTargetRef = useRef<HTMLDivElement>(null)
//     const secondTargetRef = useRef<HTMLDivElement>(null)
//     const thirdTargetRef = useRef<HTMLDivElement>(null)

//     const parentInView = useInView(parentRef, { amount: 'all' })
//     const firstSectionInView = useInView(firstTargetRef, { amount: 'all' })
//     const secondSectionInView = useInView(secondTargetRef, { amount: 'all' })
//     const thirdSectionInView = useInView(thirdTargetRef, { amount: 'all' })

//     const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     let isScrolling = false;
//     let startY = 0;

//     const handleWheel = (e: WheelEvent) => {
//       if (isScrolling) return;
//       isScrolling = true;

//       const direction = e.deltaY > 0 ? 1 : -1;
//       const nextSection = container.scrollTop + direction * window.innerHeight;
//       container.scrollTo({ top: nextSection, behavior: 'smooth' });

//       setTimeout(() => { isScrolling = false; }, 1000);
//     };

//     const handleTouchStart = (e: TouchEvent) => {
//       startY = e.touches[0].clientY;
//     };

//     const handleTouchMove = (e: TouchEvent) => {
//       if (isScrolling) return;
//       isScrolling = true;

//       const currentY = e.touches[0].clientY;
//       const direction = startY > currentY ? 1 : -1;
//       const nextSection = container.scrollTop + direction * window.innerHeight;
//       container.scrollTo({ top: nextSection, behavior: 'smooth' });

//       setTimeout(() => { isScrolling = false; }, 1000);
//     };

//     container.addEventListener('wheel', handleWheel, { passive: false });
//     container.addEventListener('touchstart', handleTouchStart);
//     container.addEventListener('touchmove', handleTouchMove, { passive: false });

//     return () => {
//       container.removeEventListener('wheel', handleWheel);
//       container.removeEventListener('touchstart', handleTouchStart);
//       container.removeEventListener('touchmove', handleTouchMove);
//     };
//   }, []);

//   console.log(parentInView)

    return (
        // <>
        //     <motion.section ref={parentRef} className='min-h-[300vh] flex flex-col w-full relative'>
        //         <section className='flex gap-4 max-lg:gap-12 pt-24 pb-10 z-10 max-lg:flex-col max-lg:pb-12 max-lg:pt-24 min-h-screen'>
        //             <motion.div className="flex flex-col items-start max-lg:items-center justify-center gap-4 pl-12 xl:pl-32 pr-4 flex-1 sticky top-0">
        //                 <div className="flex flex-col items-start max-lg:items-center justify-center gap-6">
        //                     <h1 className='font-normal max-lg:text-2xl text-4xl text-black text-left max-lg:text-center'>Explore the Marketplace</h1>
        //                     <h3 className='font-light max-lg:text-lg text-2xl text-left max-lg:text-center'>Insight Funders offers a diverse range of credit investments. Explore our marketplace to discover opportunities in creditworthy companies</h3>
        //                 </div>
        //                 <div className='flex w-full items-center justify-start'>
        //                     <Link href='/sign-up'>
        //                         <div className='flex gap-2 bg-[#FF7A00] py-2 px-8'>
        //                             <div className='text-white font-medium flex items-center gap-1'>
        //                                 Apply Now{" "}<Play className='stroke-white fill-white' size={14} />
        //                             </div>
        //                         </div>
        //                     </Link>
        //                 </div>
        //             </motion.div>
        //             <motion.div style={{ opacity }} className='flex items-center justify-center flex-1 max-lg:px-4 sticky top-0'>
        //                 <Image
        //                     src='/images/lenders.png'
        //                     alt='Hero'
        //                     width={850}
        //                     height={560}
        //                 />
        //             </motion.div>
        //         </section>
        //         <section className='flex gap-4 max-lg:gap-12 pt-24 pb-10 z-10 max-lg:flex-col max-lg:pb-12 max-lg:pt-24 min-h-screen'>
        //             <motion.div className="flex flex-col items-start max-lg:items-center justify-center gap-4 pl-12 xl:pl-32 pr-4 flex-1">
        //                 <div className="flex flex-col items-start max-lg:items-center justify-center gap-6">
        //                     <h1 className='font-normal max-lg:text-2xl text-4xl text-black text-left max-lg:text-center'>Browse companies with complete data transparency.</h1>
        //                     <h3 className='font-light max-lg:text-lg text-2xl text-left max-lg:text-center'>Unlock exclusive deals with complete financial visibility. Join Insight Funders to connect with top-tier companies and make informed investment decisions with confidence.</h3>
        //                 </div>
        //                 <div className='flex w-full items-center justify-start'>
        //                     <Link href='/sign-up'>
        //                         <div className='flex gap-2 bg-[#FF7A00] py-2 px-8'>
        //                             <div className='text-white font-medium flex items-center gap-1'>
        //                                 Apply Now{" "}<Play className='stroke-white fill-white' size={14} />
        //                             </div>
        //                         </div>
        //                     </Link>
        //                 </div>
        //             </motion.div>
        //             <motion.div className='flex items-center justify-center flex-1 max-lg:px-4'>
        //                 <Image
        //                     src='/images/dashboard2.png'
        //                     alt='Hero'
        //                     width={850}
        //                     height={560}
        //                 />
        //             </motion.div>
        //         </section>
        //         <section className='flex gap-4 max-lg:gap-12 pt-24 pb-10 z-10 max-lg:flex-col max-lg:pb-12 max-lg:pt-24 min-h-screen'>
        //             <motion.div className="flex flex-col items-start max-lg:items-center justify-center gap-4 pl-12 xl:pl-32 pr-4 flex-1">
        //                 <div className="flex flex-col items-start max-lg:items-center justify-center gap-6">
        //                     <h1 className='font-normal max-lg:text-2xl text-4xl text-black text-left max-lg:text-center'>Manage your investments</h1>
        //                     <h3 className='font-light max-lg:text-lg text-2xl text-left max-lg:text-center'>The Insight Funders lender dashboard is your hub for viewing, managing, and receiving payouts, giving you full control over your investments.</h3>
        //                 </div>
        //                 <div className='flex w-full items-center justify-start'>
        //                     <Link href='/sign-up'>
        //                         <div className='flex gap-2 bg-[#FF7A00] py-2 px-8'>
        //                             <div className='text-white font-medium flex items-center gap-1'>
        //                                 Apply Now{" "}<Play className='stroke-white fill-white' size={14} />
        //                             </div>
        //                         </div>
        //                     </Link>
        //                 </div>
        //             </motion.div>
        //             <motion.div className='flex items-center justify-center flex-1 max-lg:px-4'>
        //                 <Image
        //                     src='/images/dashboard3.png'
        //                     alt='Hero'
        //                     width={850}
        //                     height={560}
        //                 />
        //             </motion.div>
        //         </section>
        //     </motion.section>
        //     <div className='min-h-[1px]' ref={parentRef} />
        // </>
        <section ref={parentRef} className="h-[800vh] relative">
            <div className="flex w-full sticky top-0">
                <motion.div className="flex flex-col items-start max-lg:items-center justify-center gap-4 pl-12 xl:pl-32 pr-4 flex-1">
                    <div className="flex flex-col items-start max-lg:items-center justify-center gap-6">
                        <h1 className='font-normal max-lg:text-2xl text-4xl text-black text-left max-lg:text-center'>{text === 'first' ? "Explore the Marketplace" : text === 'second' ? "Browse companies with complete data transparency." : "Manage your investments"}</h1>
                        <h3 className='font-light max-lg:text-lg text-2xl text-left max-lg:text-center'>{text === 'first' ? "Insight Funders offers a diverse range of credit investments. Explore our marketplace to discover opportunities in creditworthy companies" : text === 'second' ? "Unlock exclusive deals with complete financial visibility. Join Insight Funders to connect with top-tier companies and make informed investment decisions with confidence." : "The Insight Funders lender dashboard is your hub for viewing, managing, and receiving payouts, giving you full control over your investments."}</h3>
                    </div>
                    <div className='flex w-full items-center justify-start'>
                        <Link href='/sign-up'>
                            <div className='flex gap-2 bg-[#FF7A00] py-2 px-8'>
                                <div className='text-white font-medium flex items-center gap-1'>
                                    Apply Now{" "}<Play className='stroke-white fill-white' size={14} />
                                </div>
                            </div>
                        </Link>
                    </div>
                </motion.div>
                <div className='flex flex-1 items-center justify-center h-screen'>
                    <motion.div style={{ x }} className="">
                        <Image
                            src={`/images/${image}`}
                            key={image}
                            alt="Sticky Image"
                            className="w-full h-full object-cover"
                            width={850}
                            height={560}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}