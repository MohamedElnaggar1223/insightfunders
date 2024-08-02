import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero()
{
    return (
        <section className='flex flex-col gap-12 pt-20 z-10'>
            <div className="flex flex-col items-center justify-between gap-12">
                <div className="flex gap-2 items-center justify-center">
                    <div className='rounded-full w-2 h-2 bg-[#FF7A0080]' />
                    <p className='font-bold text-[#FF7A00] text-sm'>Capital Markets</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-8">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <h1 className='font-bold text-3xl text-black text-center'>Outsource your next debt raise with Insight Funders private credit markets</h1>
                        <h3 className='font-light text-base text-center'>Leverage Insight Funders Capital Markets to secure a customized debt solution. Save months of time and hundreds of <br /> thousands in fees through one frictionless application and Insight Funders integrated lender network.</h3>
                    </div>
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
            <Image
                src='/images/borrowersDashboard.png'
                width={1090}
                height={708}
                alt='Borrowers Dashboard'
                className='-mb-48 mx-auto shadow-xl'
                quality={100}
            />
        </section>
    )
}