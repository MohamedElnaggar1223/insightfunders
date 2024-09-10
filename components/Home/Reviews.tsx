import Image from "next/image";

export default function Reviews()
{
    return (
        <section className='flex flex-col bg-black px-4 lg:px-40 pb-20 pt-40 gap-40'>
            <div className='flex flex-col py-4 gap-4 px-4 lg:px-24 rounded-[10px] bg-[#2F2F2F] items-center justify-center text-center'>
                <p className='text-[#FF7A00] text-xl'>Receive terms at no cost!</p>
                <p className='text-[#FFF] text-base'>
                Receiving terms through Private Credit Markets is completely free. A small facilitation fee applies only if you proceed with funding.<br /> We ensure 100% transparency throughout the process.
                </p>
            </div>
            <div className='flex flex-col gap-8'>
                <p className='text-white text-2xl text-center'>Our client's reviews</p>
                <div className='flex w-full gap-8 flex-wrap max-lg:flex-col'>
                    <div className="flex flex-col flex-1 h-fit lg:min-w-[535px] bg-[#2F2F2F] rounded-[10px] p-8 gap-4 lg:min-h-[356px]">
                        <Image
                            src='/images/quote.svg'
                            width={33}
                            height={27}
                            alt='quote'
                        />
                        <div className='flex flex-col h-1/2 justify-between'>
                            <div className="flex flex-col w-full gap-4">
                                <p className='text-white font-light text-base'>Insight Funders was a game-changer for our post-Series B funding. We needed capital to scale without giving up equity, and the platform made it incredibly easy to connect with multiple lenders. Within days, we had offers tailored to our exact needs. The transparency and efficiency were impressive—no hidden fees, no surprises. When we decided to move forward, the process was straightforward, saving our CFO a lot of headaches</p>
                            </div>
                        </div>
                        <div className='flex flex-1 h-1/2 items-center justify-start gap-3'>
                            <div className="flex items-center justify-center rounded-full w-[5.5rem] h-[5.5rem] overflow-hidden">
                                <Image
                                    src='/images/review-man.png'
                                    width={88}
                                    height={88}
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
                    <div className="flex flex-col flex-1 h-fit lg:min-w-[535px] bg-[#2F2F2F] rounded-[10px] p-8 gap-4 lg:min-h-[356px]">
                        <Image
                            src='/images/quote.svg'
                            width={33}
                            height={27}
                            alt='quote'
                        />
                        <div className='flex flex-col h-1/2 justify-between'>
                            <div className="flex flex-col w-full gap-4">
                                <p className='text-white font-light text-base'>Securing funding used to be a time-consuming and stressful process, but Insight Funders made it seamless. The ability to compare offers from multiple lenders in one place saved us months of work. Plus, knowing that my data was secure and only shared with lenders when I agreed gave me peace of mind. We were able to secure flexible working capital that aligned with our growth strategy, all without sacrificing equity. It’s the perfect solution for startups wanting to maintain control while accessing the funds they need to grow</p>
                            </div>
                        </div>
                        <div className='flex flex-1 h-1/2 items-center justify-start gap-3'>
                            <div className="flex items-center justify-center rounded-full w-[5.5rem] h-[5.5rem] overflow-hidden">
                                <Image
                                    src='/images/review-man2.png'
                                    width={88}
                                    height={88}
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