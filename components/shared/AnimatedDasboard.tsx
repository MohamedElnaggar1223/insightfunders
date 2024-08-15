'use client'
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react';

export default function AnimatedDashboard() 
{
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end end']
    })

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        console.log(latest)
    })

    const translateZ = useTransform(scrollYProgress, [0, 1], [300, 0])
    // const skewX = useTransform(scrollYProgress, [0, 1], [0, 10])
    const skew = useTransform(scrollYProgress, [0, 1], [15, 0])
    const rotateX = useTransform(scrollYProgress, [0, 1], [45, 0])
    const rotateY = useTransform(scrollYProgress, [0, 1], [45, 0])

    return (
        <div className='perspective lg:h-[708px]'>
            <motion.div style={{ translateZ, rotateX }} ref={ref} className="lg:absolute lg:-bottom-[180px] w-full">
                <Image
                    src='/images/borrowersDashboard.png'
                    width={1090}
                    height={708}
                    alt='Borrowers Dashboard'
                    className='mx-auto shadow-xl max-lg:max-w-[620px] max-md:max-w-[320px] max-md:-mb-32'   
                    quality={100}
                />
            </motion.div>
        </div>
    )
}