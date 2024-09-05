import { cn } from "@/lib/utils";
import { Play } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function FeaturesApply()
{

    return (
        <div className='flex gap-4 items-center justify-center max-md:px-4 px-20 lg:px-40 max-xl:flex-wrap max-xl:gap-12'>
            <div className={cn("flex group flex-col gap-6 items-center justify-center lg:w-1/2 transition-all max-h-[336px] min-h-[336px] h-[336px]")}>
                <div className="flex gap-2 items-center justify-center">
                    <div className='rounded-full w-3 h-3 bg-[#FF7A0080]' />
                    <p className='font-bold text-[#FF7A00] text-base'>For Borrowers</p>
                </div>
                <div className="flex group-hover:bg-white items-center max-h-72 min-h-72 justify-between text-center flex-col gap-4 lg:gap-6 border border-black bg-black rounded-[10px] p-8">
                    <p className='font-bold max-w-[302px] text-white group-hover:text-black max-md:text-lg text-lg'>Empower Your Growth with Flexible, Non-Dilutive Capital</p>
                    <p className='font-normal text-white group-hover:text-black max-md:text-[10px] text-xs'>Secure the capital you need without sacrificing equity, ensuring you retain full control of your business. Our marketplace allows you to rate shop in one place, connecting you with the best lenders and terms tailored to your unique needs. Beyond just funding, we support your long-term growth with flexible financing options that evolve with your company, from Seed through IPO. Focus on scaling your business, knowing you have a reliable, efficient source of capital at every stage.</p>
                    <div className='flex w-full items-center justify-center'>
                        <Link href='/sign-up'>
                            <div className='flex gap-2 border border-white group-hover:border-black py-1 px-2'>
                                <div className='text-white group-hover:text-black font-medium flex items-center gap-1'>
                                    Apply Now{" "}<Play className='stroke-white fill-white group-hover:fill-black group-hover:stroke-black' size={14} />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={cn("flex group flex-col gap-6 items-center justify-center lg:w-1/2 transition-all max-h-[336px] min-h-[336px] h-[336px]")}>
                <div className="flex gap-2 items-center justify-center">
                    <div className='rounded-full w-3 h-3 bg-[#FF7A0080]' />
                    <p className='font-bold text-[#FF7A00] text-base'>For Lenders</p>
                </div>
                <div className="flex group-hover:bg-white items-center max-h-72 min-h-72 justify-between text-center flex-col gap-4 lg:gap-6 border border-black bg-black rounded-[10px] p-8">
                    <p className='font-bold max-w-[302px] text-white group-hover:text-black max-md:text-lg text-lg'>Unlock pre-qualified deal flow from the world’s top companies</p>
                    <p className='font-normal text-white group-hover:text-black max-md:text-[10px] text-xs'>Gain access to a curated pipeline of pre-vetted companies with Insight Funders. Our platform delivers quality deal flows with risk-adjusted returns. Invest with confidence, backed by dynamic risk management and real-time, transparent insights into companies' financials—all within a streamlined process.</p>
                    <div className='flex w-full items-center justify-center'>
                        <Link href='/sign-up'>
                            <div className='flex gap-2 border border-white group-hover:border-black py-1 px-2'>
                                <div className='text-white group-hover:text-black font-medium flex items-center gap-1'>
                                    Apply Now{" "}<Play className='stroke-white fill-white group-hover:fill-black group-hover:stroke-black' size={14} />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}