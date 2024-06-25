import Header from "@/components/shared/Header";
import Image from "next/image";
import Link from "next/link";

export default function Hero() 
{
    return (
        <section className='flex flex-col bg-strong-gray min-h-screen'>
			<section className='flex flex-col py-20 w-full gap-12'>
				<h1 className='text-center text-white text-4xl lg:text-6xl font-medium max-lg:px-4'>
					Secure, Risk-Adjusted Returns for <br /> Private Credit Investors
				</h1>
				<h2 className='text-[#EAECF0] text-lg lg:text-xl text-center font-normal max-lg:px-4'>
					Our AI-powered platform assesses tech startups' creditworthiness, <br />enabling private credit investors to earn secure returns while<br /> accelerating startup growth without equity dilution.
				</h2>
				<div className='gap-3 flex w-full items-center justify-center font-semibold'>
					<Link href='/sign-up'>
						<button className='rounded-full text-sm lg:text-lg px-5 py-3 bg-strong-purple text-white'>Get Started</button>
					</Link>
				</div>
				<div className='flex w-[200vw] items-center justify-between overflow-hidden animate-banner animate-banner-hover'>
					<div className='w-[49%] flex items-center justify-between'>
						<div className='w-1/3 rounded-3xl overflow-hidden'>
							<Image
								src='/images/first.png'
								alt='First'
								width={600}
								height={400}
								className='rounded-3xl object-contain' 
							/>
						</div>
						<Image
							src='/images/second.png'
							alt='Second'
							width={400}
							height={400}
							className='rounded-3xl max-h-[450px] object-contain w-1/3' 
						/>
						<div className='rounded-3xl overflow-hidden w-1/3'>
							<Image
								src='/images/third.png'
								alt='Third'
								width={600}
								height={400}
								className='rounded-3xl object-contain'
							/>
						</div>
					</div>
					<div className='w-[49%] flex items-center justify-between'>
						<div className='w-1/3 rounded-3xl overflow-hidden'>
							<Image
								src='/images/first.png'
								alt='First'
								width={600}
								height={400}
								className='rounded-3xl object-contain' 
							/>
						</div>
						<Image
							src='/images/second.png'
							alt='Second'
							width={400}
							height={400}
							className='rounded-3xl max-h-[450px] object-contain w-1/3' 
						/>
						<div className='rounded-3xl overflow-hidden w-1/3'>
							<Image
								src='/images/third.png'
								alt='Third'
								width={600}
								height={400}
								className='rounded-3xl object-contain'
							/>
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-8 mt-2 overflow-hidden w-fit mx-auto'>
                    <h3 className='text-[#D0D5DD] text-center'>
                        Join 4,000+ startups already growing
                    </h3>
                    <div className='w-full items-center flex justify-center gap-20 max-lg:flex-wrap animate-banner-full'>
                        <Image 
                            src='/images/boltshift.svg'
                            alt='Boltshift'
                            width={106}
                            height={30}
                        />
                        <Image 
                            src='/images/lightbox.svg'
                            alt='Lightbox'
                            width={104}
                            height={30}
                        />
                        <Image 
                            src='/images/featherdev.svg'
                            alt='Featherdev'
                            width={123}
                            height={30}
                        />
                        <Image 
                            src='/images/spherule.svg'
                            alt='Spherule'
                            width={104}
                            height={30}
                        />
                        <Image 
                            src='/images/globalbank.svg'
                            alt='Globalbank'
                            width={123}
                            height={30}
                        />
                    </div>
				</div>
			</section>
		</section>
    )
}