import Header from "@/components/shared/Header";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Chart from "./Chart";

export default function Hero() 
{
    return (
        <section className='flex flex-col bg-black overflow-x-hidden'>
			<section className='flex items-center justify-center pl-2 max-lg:flex-wrap lg:pl-40 w-full gap-12 pt-4 h-full'>
				<div className='flex flex-col items-start justify-between gap-4 lg:max-w-[55%]'>
					<h1 className='text-left text-white text-2xl mb-6 lg:text-4xl font-normal max-lg:px-4'>
                        Fuel your growth with private credit
					</h1>
					<h2 className='text-[#EAECF0] text-base lg:text-lg text-left font-light max-lg:px-4'>
						Insight Funders is the first LLM-powered private credit marketplace, connecting companies with non-dilutive capital and investors with pre-qualified, high-growth opportunities.					
					</h2>
                    <div className='flex flex-col gap-2 max-lg:px-4'>
                        <Link className='text-[#FF7A00] font-medium flex items-center gap-1' href='/sign-up'>
                            Get Started{" "}<Play stroke="#FF7A00" fill="#FF7A00" size={14} />
                        </Link>
                        <p className='text-xs font-extralight text-white'>60 second qualification</p>
                    </div>
				</div>
				<div className="flex flex-1 justify-end ml-auto relative min-w-[50vw]">
					<Image
						src='/images/hero-image.png'
						alt='Hero'
						width={720}
						height={450}
						quality={100}
						className='w-full'
					/>
				</div>
			</section>
		</section>
    )
}