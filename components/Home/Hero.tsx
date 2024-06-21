import Header from "@/components/shared/Header";
import Image from "next/image";

export default function Hero() 
{
    return (
        <section className='flex flex-col bg-[#0C111D] min-h-screen'>
			<Header />
			<section className='flex flex-col py-20 w-full gap-12'>
				<h1 className='text-center text-white text-6xl font-medium'>
					Secure, Risk-Adjusted Returns for <br /> Private Credit Investors
				</h1>
				<h3 className='text-[#EAECF0] text-xl text-center font-normal'>
					Our AI-powered platform assesses tech startups' creditworthiness, <br />enabling private credit investors to earn secure returns while<br /> accelerating startup growth without equity dilution.
				</h3>
				<div className='gap-3 flex w-full items-center justify-center font-semibold'>
					<button className='rounded-full text-lg px-5 py-3 bg-strong-purple text-white'>Get Started</button>
					<button className='rounded-full text-lg px-5 py-3 border text-white border-white bg-transparent'>Contact Sales</button>
				</div>
				<div className='flex w-full items-center justify-between gap-2 overflow-hidden'>
					<div className='w-[600px] h-[400px] rounded-3xl -ml-[20px] overflow-hidden'>
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
						className='rounded-3xl object-contain' 
					/>
					<div className='w-[600px] h-[400px] rounded-3xl -mr-[20px] overflow-hidden'>
						<Image
							src='/images/third.png'
							alt='Third'
							width={600}
							height={400}
							className='rounded-3xl object-contain'
						/>
					</div>
				</div>
				<div className='flex flex-col gap-8 mt-2'>
                    <h4 className='text-[#D0D5DD] text-center'>
                        Join 4,000+ startups already growing
                    </h4>
                    <div className='w-full items-center flex justify-center gap-20'>
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