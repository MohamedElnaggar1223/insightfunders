import Image from "next/image";

export default function LearnMore()
{
    return (
        <section className='p-24 flex items-center justify-between gap-16 bg-strong-gray'>
            <div className='flex flex-1 flex-col items-start justify-center text-left gap-12'>
                <div className='flex flex-col items-start justify-center text-left gap-6'>
                    <p className='text-white text-wrap font-semibold text-5xl leading-[60px]'>Transparent relation between startups and investors.</p>
                    <p className='text-xl text-[#EAECF0]'>We build the relation and reduce the gaps</p>
                </div>
                <button className='rounded-full text-base px-5 py-3 border text-white border-white bg-transparent'>Learn more</button>
            </div>
            <div className='flex flex-1 flex-col gap-3'>
                <div className='flex items-end justify-center gap-3'>
                    <div className='rounded-xl overflow-hidden'>
                        <Image
                            src='/images/learnMoreFirst.png'
                            alt='LearnMoreFirst'
                            width={160}
                            height={160}
                        />
                    </div>
                    <div className='rounded-xl overflow-hidden'>
                        <Image
                            src='/images/learnMoreSecond.png'
                            alt='LearnMoreSecond'
                            width={160}
                            height={240}
                        />
                    </div>
                </div>
                <div className='flex items-start justify-center gap-3'>
                    <div className='rounded-xl overflow-hidden'>
                        <Image
                            src='/images/learnMoreThird.png'
                            alt='LearnMoreThird'
                            width={192}
                            height={128}
                        />
                    </div>
                    <div className='rounded-xl overflow-hidden'>
                        <Image
                            src='/images/learnMoreFourth.png'
                            alt='LearnMoreFourth'
                            width={160}
                            height={240}
                        />
                    </div>
                    <div className='rounded-xl overflow-hidden'>
                        <Image
                            src='/images/learnMoreFifth.png'
                            alt='LearnMoreFifth'
                            width={192}
                            height={128}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}