import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero()
{
    return (
        <section className='flex gap-4 max-lg:gap-12 pt-4 z-10 max-lg:flex-col max-lg:pt-12'>
            <div className="flex flex-col items-start max-lg:items-center justify-center gap-4 pl-12 xl:pl-32 pr-4 flex-1">
                <div className="flex flex-col items-start max-lg:items-center justify-center gap-4">
                    <h1 className='font-bold max-lg:text-xl text-3xl text-black text-left max-lg:text-center'>Explore the Marketplace</h1>
                    <h3 className='font-light max-lg:text-lg text-xl text-left max-lg:text-center'>Insight Funders offers a diverse range of credit investments. Explore our marketplace to discover opportunities in creditworthy companies</h3>
                </div>
                <div className='flex w-full items-center justify-start max-lg:justify-center'>
                    <Link href='/sign-up'>
                        <div className='flex gap-2'>
                            <div className='text-[#FF7A00] max-lg:text-xs font-medium flex items-center gap-1'>
                                Apply Now{" "}<Play stroke="#FF7A00" fill="#FF7A00" size={14} />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='flex items-center justify-center -mb-8 flex-1 max-lg:px-4'>
                <Image
                    src='/images/lenders.png'
                    alt='Hero'
                    width={850}
                    height={560}
                />
            </div>
        </section>
    )
}