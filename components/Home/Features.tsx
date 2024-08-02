import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FeaturesApply from "./FeaturesApply";

export default function Features()
{
    return (
        <section className='flex flex-col py-20 lg:gap-40'>
            <div className='w-full flex gap-8 items-center justify-center px-2 lg:px-60 max-md:flex-wrap'>
                <div className='flex flex-col gap-4 items-center justify-center text-center'>
                    <Image
                        src='/images/secureReturns.svg'
                        alt='SecureReturns'
                        width={52}
                        height={52} 
                    />
                    <p className='font-semibold text-xl text-center'>Secure Returns</p>
                    <p className='text-main-gray text-base text-center'>
                        Our AI-powered credit assessment ensures secure, risk-adjusted returns for private credit investors.
                    </p>
                </div>
                <div className='flex flex-col gap-4 items-center justify-center text-center'>
                    <Image
                        src='/images/accelerate.svg'
                        alt='Accelerate'
                        width={52}
                        height={52} 
                    />
                    <p className='font-semibold text-xl text-center'>
                        Accelerate Startup Growth
                    </p>
                    <p className='text-main-gray text-base text-center'>
                        Our platform enables startups to access growth capital without equity dilution, fueling their expansion.
                    </p>
                </div>
                <div className='flex flex-col gap-4 items-center justify-center text-center'>
                    <Image
                        src='/images/aipowered.svg'
                        alt='Aipowered'
                        width={52}
                        height={52} 
                    />
                    <p className='font-semibold text-xl text-center'>
                        AI-Powered Insights
                    </p>
                    <p className='text-main-gray text-base text-center'>
                        Our advanced AI algorithms analyze startups' creditworthiness, providing investors with data-driven insights.
                    </p>
                </div>
            </div>
            <FeaturesApply />
            <div className="flex flex-col gap-32 items-center justify-center px-2 lg:px-40">
                <p className='text-3xl'>Easily raise the right type of debt from the best banks and credit funds.</p>
                <div className="flex gap-12 w-full items-start justify-center 2xl:justify-between flex-wrap">
                    <div className='flex flex-col items-center justify-center gap-4 text-center'>
                        <p className='text-[#FF7A00] text-5xl'>200+</p>
                        <p className='text-black text-xl font-bold mt-2'>Companies Funded</p>
                        <p className='text-black text-base font-light'>We've helped build over 400 amazing projects.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-4 text-center'>
                        <p className='text-[#FF7A00] text-5xl'>600%</p>
                        <p className='text-black text-xl font-bold mt-2'>Average size of investments</p>
                        <p className='text-black text-base font-light'>Our customers have reported an average of ~600% ROI.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-4 text-center'>
                        <p className='text-[#FF7A00] text-5xl'>$20M</p>
                        <p className='text-black text-xl font-bold mt-2'>Total debt capital available</p>
                        <p className='text-black text-base font-light'>Our free UI kit has been downloaded over 100k times.</p>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 px-4 flex-wrap lg:px-32 -mb-48 z-50">
                <div className="flex flex-col flex-1 rounded-[10px] min-h-[339px] max-h-[339px] h-[339px] bg-[#2F2F2F] items-center justify-center">
                    <div className='flex flex-1 items-center justify-center p-4'>
                        <div className='relative flex max-w-[284px] w-screen pl-1 pr-12 max-h-[81px] min-h-[81px] items-center justify-end rounded-[90px] bg-white'>
                            <div className="flex absolute animate-check-animate items-center justify-center bg-black p-1 rounded-full">
                                <Check size={60} stroke='#fff' />
                            </div>
                            <div className="flex items-center animate-match justify-end text-xl">Perfect Match</div>
                        </div>
                    </div>
                    <div className='flex flex-col text-center flex-1 items-center justify-start gap-4 px-4'>
                        <p className='font-bold text-[#FF7A00] text-xl'>One platform, all the right lenders.</p>
                        <p className='font-light text-white text-sm'>Whether you're bootstrapped, venture-backed, or growth stage, get connected with dozens of pre-qualified lenders,saving months of time.</p>
                    </div>
                </div>
                <div className="flex flex-col flex-1 rounded-[10px] min-h-[339px] max-h-[339px] h-[339px] bg-[#2F2F2F] items-center justify-center">
                    <div className='flex flex-1 items-center justify-center p-4'>
                        <div className='bg-white rounded-[14px] w-screen max-w-[323px] flex flex-col p-1.5'>
                            <div className='rounded-[5px] firstDelay animate-change-background py-2 px-4 transition-all text-black text-base relative'>
                                <p>Working Capital</p>
                                <div className="flex absolute firstDelay opacity-0 items-center animate-small-check justify-center bg-black p-0.5 rounded-full top-[25%] right-2">
                                    <Check size={18} stroke='#fff' />
                                </div>
                            </div>
                            <div className='rounded-[5px] change-background py-2 px-4 transition-all text-black text-base relative'>
                                <p>Venture Debt</p>
                                <div className="flex absolute items-center opacity-0 animate-small-check justify-center bg-black p-0.5 rounded-full top-[25%] right-2">
                                    <Check size={18} stroke='#fff' />
                                </div>
                            </div>
                            <div className='rounded-[5px] secondDelay change-background py-2 px-4 transition-all text-black text-base relative'>
                                <p>Warehouse Facility</p>
                                <div className="flex absolute secondDelay opacity-0 items-center animate-small-check justify-center bg-black p-0.5 rounded-full top-[25%] right-2">
                                    <Check size={18} stroke='#fff' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col text-center flex-1 items-center justify-start gap-4 px-4'>
                        <p className='font-bold text-[#FF7A00] text-xl'>One platform, all the right lenders.</p>
                        <p className='font-light text-white text-sm'>Whether you're bootstrapped, venture-backed, or growth stage, get connected with dozens of pre-qualified lenders,saving months of time.</p>
                    </div>
                </div>
                <div className="flex flex-col flex-1 rounded-[10px] min-h-[339px] max-h-[339px] h-[339px] bg-[#2F2F2F] items-center justify-center">
                    <div className='flex flex-1 items-center justify-center p-4'>
                        <div className='flex'>
                            <div className='flex -mr-4'>
                                <Image
                                    src="/images/phoenix.jpg"
                                    alt="phoenix"
                                    width={250}
                                    height={180}
                                    className='rounded-full w-20 h-20 object-cover' 
                                />
                            </div>
                            <div className='flex -mt-2'>
                                <Image
                                    src="/images/olivia.jpg"
                                    alt="olivia"
                                    width={250}
                                    height={180}
                                    className='rounded-full w-24 h-24 z-20 object-cover'
                                />
                            </div>
                            <div className='flex -ml-4'>
                                <Image
                                    src="/images/lana.jpg"
                                    alt="lana"
                                    width={250}
                                    height={180}
                                    className='rounded-full w-20 h-20 object-cover'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col text-center flex-1 items-center justify-start gap-4 px-4'>
                        <p className='font-bold text-[#FF7A00] text-xl'>One team, dedicated to your success</p>
                        <p className='font-light text-white text-sm'>Receive dedicated support from a Capital Markets expert throughout the entire process, from onboarding to funding.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}