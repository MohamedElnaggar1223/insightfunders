import Image from "next/image";
import Link from "next/link";

export default function LearningCenter() 
{
    return (
        <section className='flex flex-col flex-1 items-start text-left gap-4'>
            <div className='flex flex-col gap-12 pt-8 text-black text-center w-full items-center justify-center'>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <h1 className='text-3xl font-bold'>Insight Funders Learning Center</h1>
                    <h2 className='text-base'>In-depth articles and insights around startup funding, banking and growth from the Insight Funders Team.</h2>
                </div>
                <div className="flex flex-col gap-6 py-4 w-full max-w-[788px] bg-[#111111E5] text-white h-[226px] items-center justify-center">
                    <p className='text-base text-center'>Subscribe to our newsletter</p>
                    <div className='flex flex-col gap-4 items-center justify-center'>
                        <input type='email' placeholder='Email' className='flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[2px] outline-none max-w-[180px] md:max-w-[283px] h-[49px]' />
                        <button className='bg-[#FF7A00] text-white font-bold rounded-[2px] py-3.5 text-sm px-4 max-w-[180px] md:max-w-[283px] w-full disabled:opacity-70 h-[49px]'>Subscribe</button>
                    </div>
                </div>
            </div>
            <section className='w-full flex flex-col gap-4 items-center justify-center'>
                <div className='flex gap-4 w-full items-start justify-center min-h-[349px] max-md:flex-col'>
                    <Link href='/learning-center/article' className='flex flex-col items-start gap-2 flex-1 md:max-w-[485px]'>
                        <div className='relative flex'>
                            <Image
                                src='/images/pig.png'
                                alt='logo'
                                width={485}
                                height={349}
                                className='min-h-[150px] md:min-h-[349px] object-cover'
                            />
                            <div className='rounded-full border-4 md:border-8 border-[#FAFAFA] absolute -bottom-3 -right-3 flex items-center justify-center'>
                                <Image
                                    src='/images/learninglogo.png'
                                    alt='logo'
                                    width={62}
                                    height={62}
                                    className='max-md:w-9 max-md:h-9'
                                />
                            </div>
                        </div>
                        <p className='text-xs font-light text-[#00000099]'>Jan 31, 2024</p>
                        <p className='text-xs font-medium text-black md:max-w-[447px]'>The Founders’ Guide to Incorporating in Delaware in 2024</p> 
                        <p className='text-xs font-normal text-black md:max-w-[447px]'>Delaware has long been favored for the incorporation of startups over the past few decades. It offers a business-friendly legal system, tax benefits, and established corporate precedence. However, it also comes with an elevated risk of double taxation, and potential non-compliance with local regulations. In this guide, we explore the benefits and drawbacks of incorporating in Delaware, how the incorporation works, what it costs, and more.</p> 
                    </Link>
                    <Link href='/learning-center/article' className='flex flex-col items-start gap-2 flex-1 max-w-[687px]'>
                        <div className='relative flex'>
                            <Image
                                src='/images/hand.png'
                                alt='logo'
                                width={687}
                                height={349}
                                className='min-h-[150px] md:min-h-[349px] object-cover'
                            />
                            <div className='rounded-full border-4 md:border-8 border-[#FAFAFA] absolute -bottom-3 -right-3 flex items-center justify-center'> 
                                <Image
                                    src='/images/learninglogo.png'
                                    alt='logo'
                                    width={62}
                                    height={62}
                                    className='max-md:w-9 max-md:h-9'
                                />
                            </div>
                        </div>
                        <p className='text-xs font-light text-[#00000099]'>Jan 31, 2024</p>
                        <p className='text-xs font-medium text-black max-w-[662px]'>The Founder’s Guide to Finance: Statement of Retained Earnings</p> 
                        <p className='text-xs font-normal text-black max-w-[662px]'>The statement of retained earnings is one of the core financial documents regularly prepared by startups. In this guide, we break down what it is, what it’s used for, what its components are, and more.</p> 
                    </Link>
                </div>
                <div className='flex gap-4 w-full items-start justify-center max-md:flex-col'>
                    <Link href='/learning-center/article' className='flex flex-col items-start gap-2'>
                        <div className='relative min-h-[150px] md:min-h-[349px] flex'>
                            <Image
                                src='/images/finance.png'
                                alt='logo'
                                width={384}
                                height={349}
                            />
                            <div className='rounded-full border-4 md:border-8 border-[#FAFAFA] absolute -bottom-3 -right-3 flex items-center justify-center'>
                                <Image
                                    src='/images/learninglogo.png'
                                    alt='logo'
                                    width={62}
                                    height={62}
                                    className='max-md:w-9 max-md:h-9'
                                />
                            </div>
                        </div>
                        <p className='text-xs font-light text-[#00000099]'>Jan 31, 2024</p>
                        <p className='text-xs font-medium text-black max-w-[447px]'>The Founders’ Guide to Incorporating in Delaware in 2024</p> 
                        <p className='text-xs font-normal text-black max-w-[447px]'>Delaware has long been favored for the incorporation of startups over the past few decades. It offers a business-friendly legal system, tax benefits, and established corporate precedence. However, it also comes with an elevated risk of double taxation, and potential non-compliance with local regulations. In this guide, we explore the benefits and drawbacks of incorporating in Delaware, how the incorporation works, what it costs, and more.</p> 
                    </Link>
                    <Link href='/learning-center/article' className='flex flex-col items-start gap-2'>
                        <div className='relative min-h-[150px] md:min-h-[349px] flex'>
                            <Image
                                src='/images/office.png'
                                alt='logo'
                                width={384}
                                height={349}
                            />
                            <div className='rounded-full border-4 md:border-8 border-[#FAFAFA] absolute -bottom-3 -right-3 flex items-center justify-center'>
                                <Image
                                    src='/images/learninglogo.png'
                                    alt='logo'
                                    width={62}
                                    height={62}
                                    className='max-md:w-9 max-md:h-9'
                                />
                            </div>
                        </div>
                        <p className='text-xs font-light text-[#00000099]'>Jan 31, 2024</p>
                        <p className='text-xs font-medium text-black max-w-[447px]'>The Founders’ Guide to Incorporating in Delaware in 2024</p> 
                        <p className='text-xs font-normal text-black max-w-[447px]'>Delaware has long been favored for the incorporation of startups over the past few decades. It offers a business-friendly legal system, tax benefits, and established corporate precedence. However, it also comes with an elevated risk of double taxation, and potential non-compliance with local regulations. In this guide, we explore the benefits and drawbacks of incorporating in Delaware, how the incorporation works, what it costs, and more.</p> 
                    </Link>
                    <Link href='/learning-center/article' className='flex flex-col items-start gap-2'>
                        <div className='relative min-h-[150px] md:min-h-[349px] flex'>
                            <Image
                                src='/images/lender.png'
                                alt='logo'
                                width={384}
                                height={349}
                            />
                            <div className='rounded-full border-4 md:border-8 border-[#FAFAFA] absolute -bottom-3 -right-3 flex items-center justify-center'>
                                <Image
                                    src='/images/learninglogo.png'
                                    alt='logo'
                                    width={62}
                                    height={62}
                                    className='max-md:w-9 max-md:h-9'
                                />
                            </div>
                        </div>
                        <p className='text-xs font-light text-[#00000099]'>Jan 31, 2024</p>
                        <p className='text-xs font-medium text-black max-w-[447px]'>The Founders’ Guide to Incorporating in Delaware in 2024</p> 
                        <p className='text-xs font-normal text-black max-w-[447px]'>Delaware has long been favored for the incorporation of startups over the past few decades. It offers a business-friendly legal system, tax benefits, and established corporate precedence. However, it also comes with an elevated risk of double taxation, and potential non-compliance with local regulations. In this guide, we explore the benefits and drawbacks of incorporating in Delaware, how the incorporation works, what it costs, and more.</p> 
                    </Link>
                </div>
            </section>
        </section>
    )
}