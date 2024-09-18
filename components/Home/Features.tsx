import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FeaturesApply from "./FeaturesApply";
import FeaturesBatches from "./FeaturesBatches";

export default function Features()
{
    return (
        <section className='flex flex-col py-20 lg:gap-20 max-lg:gap-20 bg-[#FAFAFA]'>
            <div className='w-full flex gap-8 items-start justify-center px-2 lg:px-60 mb-12 max-lg:flex-wrap bg-[#FAFAFA]'>
                <div className='flex flex-col gap-3 items-center justify-center text-center lg:flex-1'>
                    <Image
                        src='/images/accelerate.svg'
                        alt='SecureReturns'
                        width={52}
                        height={52} 
                    />
                    <p className='font-normal max-xl:text-lg text-2xl text-center'>Fast and Flexible</p>
                    <p className='text-main-gray max-xl:text-sm max-lg:max-w-[580px] max-w-[362px] text-base text-center'>
                        Choose to receive flexible, bespoke terms from multiple lenders within days.
                    </p>
                </div>
                <div className='flex flex-col gap-3 items-center justify-center text-center lg:flex-1'>
                    <Image
                        src='/images/feature2.svg'
                        alt='Accelerate'
                        width={52}
                        height={52} 
                    />
                    <p className='font-normal max-xl:text-lg text-2xl text-center'>
                        Accelerate Growth
                    </p>
                    <p className='text-main-gray max-xl:text-sm max-lg:max-w-[580px] max-w-[362px] text-base text-center'>
                        Access growth capital without equity dilution, fueling expansion.
                    </p>
                </div>
                <div className='flex flex-col gap-3 items-center justify-center text-center lg:flex-1'>
                    <Image
                        src='/images/aipowered.svg'
                        alt='Aipowered'
                        width={52}
                        height={52} 
                    />
                    <p className='font-normal max-xl:text-lg text-2xl text-center'>
                        AI-Powered Insights
                    </p>
                    <p className='text-main-gray max-xl:text-sm max-lg:max-w-[580px] max-w-[362px] text-base text-center'>
                        Proprietary ML algorithm generates instant credit scores, completing due diligence in minutes.
                    </p>
                </div>
            </div>
            <FeaturesApply />
            <div className="flex flex-col gap-20 items-center justify-center px-2 lg:px-40 bg-[#F7F7F7]">
                <p className='max-md:px-6 text-4xl max-w-[824px] text-center'>Easily raise the right type of debt from the best lending partners</p>
                <div className="flex gap-4 w-full items-start justify-center 2xl:justify-between flex-wrap">
                    <div className='flex flex-col items-center justify-center gap-3 text-center flex-1'>
                        <p className='text-[#FF7A00] text-5xl'>100+</p>
                        <p className='text-black text-2xl font-normal mt-2'>Companies Funded</p>
                        <p className='text-black text-base font-light max-w-[268px]'>We've helped fund 100+ amazing businesses.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-3 text-center flex-1'>
                        <p className='text-[#FF7A00] text-5xl'>$12M</p>
                        <p className='text-black text-2xl font-normal mt-2'>Average size of investments</p>
                        <p className='text-black text-base font-light max-w-[268px]'>Average credit facility received by qualified companies.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-3 text-center flex-1'>
                        <p className='text-[#FF7A00] text-5xl'>$20B</p>
                        <p className='text-black text-2xl font-normal mt-2'>Total credit available</p>
                        <p className='text-black text-base font-light max-w-[268px]'>Total credit available through our lender ecosystem.</p>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 px-4 max-xl:flex-col flex-wrap lg:px-32 -mb-48 z-50">
                <div className="flex flex-col flex-1 rounded-[10px] min-h-[375px] max-h-[375px] h-[375px] bg-[#2F2F2F] items-center justify-center">
                    <div className='flex flex-1 items-center justify-center p-4'>
                        <div className='relative flex max-w-[284px] w-screen pl-12 max-h-[81px] min-h-[81px] items-center justify-start rounded-[90px] bg-white'>
                            <div className="flex absolute animate-check-animate items-center justify-center bg-[#FF7A00] p-1 rounded-full">
                                <Check size={60} stroke='#fff' />
                            </div>
                            <div className="flex items-center animate-match justify-end text-xl">Perfect Match</div>
                        </div>
                    </div>
                    <div className='flex flex-col text-center flex-1 items-center justify-start gap-4 px-4'>
                        <p className='font-normal text-[#FF7A00] text-xl'>Compare lenders all in one place</p>
                        <p className='font-normal max-w-[323px] text-white text-base'>Whether you’re self-funded, venture-backed, or in growth mode, easily connect with private  lenders in one place, saving you both time and effort.</p>
                    </div>
                </div>
                <div className="flex flex-col flex-1 rounded-[10px] min-h-[375px] max-h-[375px] h-[375px] bg-[#2F2F2F] items-center justify-center">
                    <div className='flex flex-1 items-center justify-center p-4'>
                        <div className='bg-white rounded-[14px] w-screen max-w-[323px] flex flex-col p-1.5'>
                            <FeaturesBatches />
                        </div>
                    </div>
                    <div className='flex flex-col text-center flex-1 items-center justify-start gap-4 px-4'>
                        <p className='font-normal text-[#FF7A00] text-xl'>One application, bespoke capital solutions.</p>
                        <p className='font-normal max-w-[323px] text-white text-base'>Strengthen your balance sheet by combining flexible working capital, helping you reach your next funding round or profitability.</p>
                    </div>
                </div>
                <div className="flex flex-col flex-1 rounded-[10px] min-h-[375px] max-h-[375px] h-[375px] bg-[#2F2F2F] items-center justify-center">
                    <div className='flex flex-1 items-center justify-center p-4'>
                        <Image
                            src="/images/shield.svg"
                            width={100}
                            height={131} 
                            alt="secured"
                        />
                    </div>
                    <div className='flex flex-col text-center flex-1 items-center justify-start gap-4 px-4'>
                        <p className='font-normal text-[#FF7A00] text-xl'>Secure your data</p>
                        <p className='font-normal max-w-[323px] text-white text-base'>We use bank-level security and blockchain technology to ensure your data is encrypted and secure. Your data will only be shared with lenders if you give explicit consent.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}