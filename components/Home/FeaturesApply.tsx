import { cn } from "@/lib/utils";
import { Play } from "lucide-react";
import Link from "next/link";

export default function FeaturesApply()
{
    return (
        <div className='flex gap-4 items-center justify-center max-md:px-4 px-20 lg:px-40 max-xl:flex-wrap max-xl:gap-12'>
            <div className='flex group lg:w-1/2 transition-all max-h-[386px] min-h-[386px] h-[386px]'>
                <div className={cn("flex group-hover:bg-white flex-col gap-6 items-center justify-center w-full border group-hover:border-[#EAEAEA] border-black bg-black rounded-[10px] max-w-[586px] lg:ml-auto")}>
                    <div className="flex items-center max-h-96 min-h-96 justify-center text-center flex-col gap-4 px-8 py-6">
                        <div className="flex gap-2 items-center justify-center border border-[#FF7A00] w-[121px] rounded-3xl py-0.5">
                            <div className='rounded-full w-2.5 h-2.5 bg-[#FF7A0080] group-hover:animate-pulse' />
                            <p className='font-normal text-[#FF7A00] text-sm'>For Borrowers</p>
                        </div>
                        <p className='font-normal text-white group-hover:text-black max-md:text-lg text-2xl'>Empower Your Growth with Flexible, Non-Dilutive Capital</p>
                        <p className='font-normal text-white group-hover:text-black max-md:text-[10px] text-base flex-1'>Secure the capital you need without giving up equity, keeping full control of your business. Our marketplace lets you compare lenders and terms in one place, tailored to your needs. We support your growth with flexible financing options that evolve from Seed to IPO, so you can focus on scaling with a reliable source of capital at every stage.</p>
                        <div className='flex w-full items-center justify-center'>
                            <Link href='/sign-up'>
                                <div className='flex gap-2 bg-[#FF7A00] py-2 px-8'>
                                    <div className='text-white font-medium flex items-center gap-1'>
                                        Apply Now{" "}<Play className='stroke-white fill-white' size={14} />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex group lg:w-1/2 transition-all max-h-[386px] min-h-[386px] h-[386px]'>
                <div className={cn("flex group-hover:bg-white flex-col gap-6 items-center justify-center w-full border group-hover:border-[#EAEAEA] border-black bg-black rounded-[10px] max-w-[586px] lg:mr-auto")}>
                    <div className="flex items-center max-h-96 min-h-96 justify-center text-center flex-col gap-4 px-8 py-6">
                        <div className="flex gap-2 items-center justify-center border border-[#FF7A00] w-[108px] rounded-3xl py-0.5">
                            <div className='rounded-full w-2.5 h-2.5 bg-[#FF7A0080] group-hover:animate-pulse' />
                            <p className='font-normal text-[#FF7A00] text-sm'>For Lenders</p>
                        </div>
                        <p className='font-normal text-white group-hover:text-black max-md:text-lg text-2xl'>Unlock pre-qualified deal flow from the world’s top companies</p>
                        <p className='font-normal text-white group-hover:text-black max-md:text-[10px] text-base flex-1'>Gain access to a curated pipeline of pre-vetted companies with Insight Funders. Our platform delivers quality deal flows with risk-adjusted returns. Invest with confidence, backed by dynamic risk management and real-time, transparent insights into companies' financials—all within a streamlined process.</p>
                        <div className='flex w-full items-center justify-center'>
                            <Link href='/sign-up'>
                                <div className='flex gap-2 bg-[#FF7A00] py-2 px-8'>
                                    <div className='text-white font-medium flex items-center gap-1'>
                                        Apply Now{" "}<Play className='stroke-white fill-white' size={14} />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}