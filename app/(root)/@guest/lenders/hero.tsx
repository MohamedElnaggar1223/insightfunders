'use client'
import { motion, useInView, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Hero()
{
    const parentRef = useRef<HTMLDivElement>(null)
    const firstTargetRef = useRef<HTMLDivElement>(null)
    const secondTargetRef = useRef<HTMLDivElement>(null)
    const thirdTargetRef = useRef<HTMLDivElement>(null)

    const parentInView = useInView(parentRef, { amount: 'all' })
    const firstSectionInView = useInView(firstTargetRef, { amount: 'all' })
    const secondSectionInView = useInView(secondTargetRef, { amount: 'all' })
    const thirdSectionInView = useInView(thirdTargetRef, { amount: 'all' })

    const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isScrolling = false;
    let startY = 0;

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;
      isScrolling = true;

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSection = container.scrollTop + direction * window.innerHeight;
      container.scrollTo({ top: nextSection, behavior: 'smooth' });

      setTimeout(() => { isScrolling = false; }, 1000);
    };

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isScrolling) return;
      isScrolling = true;

      const currentY = e.touches[0].clientY;
      const direction = startY > currentY ? 1 : -1;
      const nextSection = container.scrollTop + direction * window.innerHeight;
      container.scrollTo({ top: nextSection, behavior: 'smooth' });

      setTimeout(() => { isScrolling = false; }, 1000);
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  console.log(parentInView)

    return (
        <>
            <section className='max-h-screen overflow-auto scroll-jump hide-scrollbar'>
                <section className='scroll-jump'>
                    <section ref={firstTargetRef} className='scroll-align flex gap-4 max-lg:gap-12 pt-24 pb-10 z-10 max-lg:flex-col max-lg:pb-12 max-lg:pt-24 min-h-screen'>
                        <motion.div animate={firstSectionInView ? "enter" : "exit"} variants={{ enter: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 50 } }} className="flex flex-col items-start max-lg:items-center justify-center gap-4 pl-12 xl:pl-32 pr-4 flex-1">
                            <div className="flex flex-col items-start max-lg:items-center justify-center gap-6">
                                <h1 className='font-normal max-lg:text-2xl text-4xl text-black text-left max-lg:text-center'>Explore the Marketplace</h1>
                                <h3 className='font-light max-lg:text-lg text-2xl text-left max-lg:text-center'>Insight Funders offers a diverse range of credit investments. Explore our marketplace to discover opportunities in creditworthy companies</h3>
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
                        <motion.div animate={firstSectionInView ? "enter" : "exit"} variants={{ enter: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 150 } }} className='flex items-center justify-center flex-1 max-lg:px-4'>
                            <Image
                                src='/images/lenders.png'
                                alt='Hero'
                                width={850}
                                height={560}
                            />
                        </motion.div>
                    </section>
                    <section ref={secondTargetRef} className='scroll-align flex gap-4 max-lg:gap-12 pt-24 pb-10 z-10 max-lg:flex-col max-lg:pb-12 max-lg:pt-24 min-h-screen'>
                        <motion.div animate={secondSectionInView ? "enter" : "exit"} variants={{ enter: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 50 } }} className="flex flex-col items-start max-lg:items-center justify-center gap-4 pl-12 xl:pl-32 pr-4 flex-1">
                            <div className="flex flex-col items-start max-lg:items-center justify-center gap-6">
                                <h1 className='font-normal max-lg:text-2xl text-4xl text-black text-left max-lg:text-center'>Browse companies with complete data transparency.</h1>
                                <h3 className='font-light max-lg:text-lg text-2xl text-left max-lg:text-center'>Unlock exclusive deals with complete financial visibility. Join Insight Funders to connect with top-tier companies and make informed investment decisions with confidence.</h3>
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
                        <motion.div animate={secondSectionInView ? "enter" : "exit"} variants={{ enter: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 150 } }} className='flex items-center justify-center flex-1 max-lg:px-4'>
                            <Image
                                src='/images/dashboard2.png'
                                alt='Hero'
                                width={850}
                                height={560}
                            />
                        </motion.div>
                    </section>
                    <section ref={thirdTargetRef} className='scroll-align flex gap-4 max-lg:gap-12 pt-24 pb-10 z-10 max-lg:flex-col max-lg:pb-12 max-lg:pt-24 min-h-screen'>
                        <motion.div animate={(thirdSectionInView || parentInView) ? "enter" : "exit"} variants={{ enter: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 50 } }} className="flex flex-col items-start max-lg:items-center justify-center gap-4 pl-12 xl:pl-32 pr-4 flex-1">
                            <div className="flex flex-col items-start max-lg:items-center justify-center gap-6">
                                <h1 className='font-normal max-lg:text-2xl text-4xl text-black text-left max-lg:text-center'>Manage your investments</h1>
                                <h3 className='font-light max-lg:text-lg text-2xl text-left max-lg:text-center'>The Insight Funders lender dashboard is your hub for viewing, managing, and receiving payouts, giving you full control over your investments.</h3>
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
                        <motion.div animate={(thirdSectionInView || parentInView) ? "enter" : "exit"} variants={{ enter: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 150 } }} className='flex items-center justify-center flex-1 max-lg:px-4'>
                            <Image
                                src='/images/dashboard3.png'
                                alt='Hero'
                                width={850}
                                height={560}
                            />
                        </motion.div>
                    </section>
                </section>
            </section>
            <div className='min-h-[1px]' ref={parentRef} />
        </>
    )
}