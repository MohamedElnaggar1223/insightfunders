import AnimatedDashboard from "@/components/shared/AnimatedDasboard";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero()
{
    return (
        <section className='flex flex-col gap-12 pt-20 z-10 min-h-screen'>
            <div className="flex flex-col items-center justify-between gap-12">
                <div className="flex gap-2 items-center justify-center">
                    <div className='rounded-full w-2 h-2 bg-[#FF7A0080]' />
                    <p className='font-bold text-[#FF7A00] text-sm'>Private Credit Markets</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-8">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <h1 className='font-bold max-lg:text-xl text-3xl text-black text-center'>Let Insight Funders manage your private credit needs with ease.</h1>
                        <h3 className='font-light max-lg:text-xs text-base text-center'>Leverage Insight Funders' Credit Markets to secure a tailored capital solution. Access fast, flexible credit with a seamless application process through our integrated lender network.</h3>
                    </div>
                    <div className='flex w-full items-center justify-center'>
                        <Link href='/sign-up'>
                            <div className='flex gap-2'>
                                <div className='text-[#FF7A00] max-lg:text-xs font-medium flex items-center gap-1'>
                                    Apply Now{" "}<Play stroke="#FF7A00" fill="#FF7A00" size={14} />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <AnimatedDashboard />
        </section>
    )
}