import Header from "@/components/shared/Header";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() 
{
    return (
        <section className='flex flex-col bg-black overflow-x-hidden'>
			<section className='flex items-center justify-center px-2 max-lg:flex-wrap lg:px-40 w-full gap-12 py-32 h-full'>
				<div className='flex flex-col items-start justify-between gap-16'>
					<h1 className='text-left text-white text-2xl lg:text-4xl font-normal max-lg:px-4'>
                        Fuel your growth with private credit
					</h1>
					<h2 className='text-[#EAECF0] text-base lg:text-lg text-left font-light max-lg:px-4'>
						Our AI-powered platform assesses tech startups' creditworthiness, enabling private credit investors to earn secure returns while accelerating startup growth without equity dilution. ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</h2>
                    <div className='flex flex-col gap-2'>
                        <Link className='text-[#FF7A00] font-medium flex items-center gap-1' href='/sign-up'>
                            Get Started{" "}<Play stroke="#FF7A00" fill="#FF7A00" size={14} />
                        </Link>
                        <p className='text-xs font-extralight text-white'>60 second qualification</p>
                    </div>
				</div>
				<div className='flex items-center justify-center bg-gray-500 min-w-[320px] h-[180px] lg:min-w-[539px] lg:h-[367px]'>
					
				</div>
			</section>
		</section>
    )
}