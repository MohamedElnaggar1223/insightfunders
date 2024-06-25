'use client'
import { useState } from "react"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSTabs()
{
    const [activeTab, setActiveTab] = useState('general')

    return (
        <AnimatePresence>
            <div className='flex flex-col items-center justify-center gap-8 lg:w-screen lg:max-w-[768px]'>
                <div className='divide-x border border-[#D0D5DD] rounded-[8px] flex overflow-hidden'>
                    <div role="tab" onClick={() => setActiveTab('general')} className={cn('relative cursor-pointer text-main-gray font-semibold text-xs text-center lg:text-sm px-4 py-2')}>
                        <p className='z-20'>
                            General Questions
                        </p>
                        {activeTab === 'general' && <motion.div layoutId="bg" className={cn('absolute w-full h-full z-[-1] top-0 left-0 bg-slate-100')} />}
                    </div>
                    <div role="tab" onClick={() => setActiveTab('startups')} className={cn('relative cursor-pointer text-main-gray font-semibold text-xs text-center lg:text-sm px-4 py-2')}>
                        <p className='z-20'>
                            For Startups
                        </p>
                        {activeTab === 'startups' && <motion.div layoutId="bg" className={cn('absolute w-full h-full z-[-1] top-0 left-0 bg-slate-100')} />}                    
                    </div>
                    <div role="tab" onClick={() => setActiveTab('investors')} className={cn('relative cursor-pointer text-main-gray font-semibold text-xs text-center lg:text-sm px-4 py-2')}>
                        <p className='z-20'>
                            For Investors
                        </p>
                        {activeTab === 'investors' && <motion.div layoutId="bg" className={cn('absolute w-full h-full z-[-1] top-0 left-0 bg-slate-100')} />}
                    </div>
                </div>
                {activeTab === 'general' && (
                    <Accordion type="single" collapsible className="w-full space-y-6">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>What is Insight Funders?</AccordionTrigger>
                            <AccordionContent className='text-main-gray'>
                                Insight Funders is a marketplace connecting startups with private credit investors. Our platform leverages AI to assess the creditworthiness of startups, offering investors secure, risk-adjusted returns and helping startups grow without equity dilution.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent className='text-main-gray'>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent className='text-main-gray'>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent className='text-main-gray'>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent className='text-main-gray'>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent className='text-main-gray'>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                )}
                {activeTab === 'startups' && (
                    <Accordion type="single" collapsible className="w-full space-y-6">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent className='text-main-gray'>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent className='text-main-gray'>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent className='text-main-gray'>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent className='text-main-gray'>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent className='text-main-gray'>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent className='text-main-gray'>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                )}
                {activeTab === 'investors' && (
                    <Accordion type="single" collapsible className="w-full space-y-6">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent className='text-main-gray'>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent className='text-main-gray'>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent className='text-main-gray'>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent className='text-main-gray'>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent className='text-main-gray'>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent className='text-main-gray'>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                )}
            </div>
        </AnimatePresence>
    )
}