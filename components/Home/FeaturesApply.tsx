'use client'
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function FeaturesApply()
{
    const [hovered, setHovered] = useState('')

    return (
        <div className='flex gap-4 items-center justify-center max-md:px-4 px-20 lg:px-40 max-xl:flex-wrap max-xl:gap-12'>
            <div onMouseEnter={() => setHovered('Borrowers')} onMouseLeave={() => setTimeout(() => setHovered(''), 1000)} className={cn("flex flex-col gap-6 items-center justify-center lg:w-1/2 transition-all max-h-[336px] min-h-[336px] h-[336px]", hovered === 'Borrowers' && 'lg:animate-fullWidth', hovered === 'Lenders' && 'lg:animate-shrinkToZero')}>
                <div className="flex gap-2 items-center justify-center">
                    <div className='rounded-full w-3 h-3 bg-[#FF7A0080]' />
                    <p className='font-bold text-[#FF7A00] text-base'>For Borrowers</p>
                </div>
                <div className="flex items-center max-h-72 min-h-72 justify-between text-center flex-col gap-6 bg-black rounded-[10px] p-8">
                    <p className='font-medium text-white max-md:text-lg text-2xl'>Save months of time and millions of fees with Insight Funders</p>
                    <p className='font-normal text-white max-md:text-[10px] text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className='flex w-full items-center justify-center'>
                        <Link href='/sign-up'>
                            <div className='flex gap-2'>
                                <div className='text-[#FF7A00] font-medium flex items-center gap-1'>
                                    Apply Now{" "}<Play stroke="#FF7A00" fill="#FF7A00" size={14} />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div onMouseEnter={() => setHovered('Lenders')} onMouseLeave={() => setTimeout(() => setHovered(''), 1000)} className={cn("flex flex-col gap-6 items-center justify-center lg:w-1/2 transition-all max-h-[336px] min-h-[336px] h-[336px]", hovered === 'Lenders' && 'lg:animate-fullWidth', hovered === 'Borrowers' && 'lg:animate-shrinkToZero')}>
                <div className="flex gap-2 items-center justify-center">
                    <div className='rounded-full w-3 h-3 bg-[#FF7A0080]' />
                    <p className='font-bold text-[#FF7A00] text-base'>For Lenders</p>
                </div>
                <div className="flex items-center max-h-72 min-h-72 justify-between text-center flex-col gap-6 bg-black rounded-[10px] p-8">
                    <p className='font-medium text-white max-md:text-lg text-2xl'>Unlock pre-qualified deal flow from the world’s top tech companies</p>
                    <p className='font-normal text-white max-md:text-[10px] text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className='flex w-full items-center justify-center'>
                        <Link href='/sign-up'>
                            <div className='flex gap-2'>
                                <div className='text-[#FF7A00] font-medium flex items-center gap-1'>
                                    Apply Now{" "}<Play stroke="#FF7A00" fill="#FF7A00" size={14} />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}