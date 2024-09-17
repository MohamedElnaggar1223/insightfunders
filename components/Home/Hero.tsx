import Header from "@/components/shared/Header";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Chart from "./Chart";

export default function Hero() 
{
    return (
        <section className='flex flex-col items-center justify-center bg-black overflow-x-hidden min-h-screen'>
			<section className='flex items-center justify-center pl-2 max-lg:flex-wrap lg:pl-40 w-full gap-12 h-full max-lg:pt-32 max-lg:overflow-hidden'>
				<div className='flex flex-col items-start justify-between gap-12 lg:max-w-[55%]'>
					<h1 className='text-left text-white text-2xl lg:text-4xl font-normal max-lg:px-4 text-nowrap max-md:text-wrap'>
                        Fuel your growth with private credit
					</h1>
					<h2 className='text-[#EAECF0] text-base lg:text-lg text-left font-light max-lg:px-4'>
						Insight Funders is the first LLM-powered private credit marketplace, connecting companies with non-dilutive capital and investors with pre-qualified, high-growth opportunities.					
					</h2>
                    <div className='flex flex-col gap-2 max-lg:px-4'>
                        <Link className='text-[#fff] bg-[#FF7A00] justify-center py-2 px-8 font-medium flex items-center gap-1' href='/sign-up'>
                            Get Started{" "}<Play stroke="#fff" fill="#fff" size={14} />
                        </Link>
                        <p className='text-xs font-extralight text-white'>60 second qualification</p>
                    </div>
				</div>
				<div className="flex flex-1 justify-end ml-auto relative min-w-[50vw] lg:scale-110">
					<Image
						src='/images/hero-image.png'
						alt='Hero'
						width={720}
						height={450}
						quality={100}
						className='w-full animate-dashboard-bounce'
					/>
				</div>
			</section>
		</section>
    )
}