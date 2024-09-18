import Image from "next/image";

export default function Reviews()
{
    return (
        <section className='flex flex-col bg-black px-4 lg:px-40 pb-20 pt-40 gap-32'>
            <div className='flex flex-col py-4 gap-4 px-4 lg:px-24 rounded-[10px] bg-[#2F2F2F] items-center justify-center text-center'>
                <p className='text-[#FF7A00] text-xl'>Receive terms at no cost</p>
                <p className='text-[#FFF] text-base'>
                Receiving terms through Private Credit Markets is completely free. A small facilitation fee applies only if you proceed with funding.<br /> We ensure 100% transparency throughout the process.
                </p>
            </div>
            <div className='flex flex-col gap-8'>
                <p className='text-white font-normal text-2xl text-center'>Our clients' reviews</p>
                <div className='flex w-full gap-8 flex-wrap max-lg:flex-col'>
                    <div className="flex flex-col flex-1 h-fit lg:min-w-[535px] bg-[#2F2F2F] rounded-[10px] p-8 gap-6 md:max-h-[340px] max-2xl:gap-4">
                        <Image
                            src='/images/quote.svg'
                            width={33}
                            height={27}
                            alt='quote'
                        />
                        <div className='flex flex-col h-1/2 justify-between'>
                            <div className="flex flex-col w-full gap-4">
                                <p className='text-white font-normal text-base text-clip'>Insight Funders was a game-changer for our post-Series B funding. We needed capital to scale without giving up equity, and the platform made it incredibly easy to connect with multiple lenders. Within days, we had offers tailored to our exact needs. The transparency and efficiency were impressive—no hidden fees, no surprises. When we decided to move forward, the process was straightforward, saving our CFO a lot of headaches</p>
                            </div>
                        </div>
                        <div className='flex flex-1 items-center justify-start gap-3 mt-auto max-h-[60px]'>
                            <div className="flex items-center justify-center rounded-full w-[3.75rem] h-[3.75rem] overflow-hidden">
                                <Image
                                    src='/images/review-man.png'
                                    width={60}
                                    height={60}
                                    alt='man'
                                    className='rounded-full object-contain' 
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className='text-white font-medium text-lg'>Connor McCarthy</p>
                                <p className='text-white font-extralight text-sm'>Co-Founder at Rize Education</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 h-fit lg:min-w-[535px] bg-[#2F2F2F] rounded-[10px] p-8 gap-6 md:max-h-[340px] max-2xl:gap-4">
                        <Image
                            src='/images/quote.svg'
                            width={33}
                            height={27}
                            alt='quote'
                        />
                        <div className='flex flex-col h-1/2 justify-between'>
                            <div className="flex flex-col w-full gap-4">
                                <p className='text-white font-normal text-base'>Getting funding used to be stressful and time-consuming, but Insight Funders made it easy. Comparing offers from multiple lenders in one place saved us months of work. I also loved knowing my data was secure and only shared when I gave the okay. We got flexible capital that fit our growth plans without giving up equity—perfect for startups looking to stay in control while getting the funds they need to grow.</p>
                            </div>
                        </div>
                        <div className='flex flex-1 items-center justify-start gap-3 mt-auto max-h-[60px]'>
                            <div className="flex items-center justify-center rounded-full w-[3.75rem] h-[3.75rem] overflow-hidden">
                                <Image
                                    src='/images/review-man2.png'
                                    width={60}
                                    height={60}
                                    alt='man'
                                    className='rounded-full object-contain' 
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className='text-white font-medium text-lg'>Sheridan Clayborne</p>
                                <p className='text-white font-extralight text-sm'>Co-Founder of Lendtable</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}