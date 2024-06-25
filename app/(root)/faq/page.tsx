import Image from "next/image"
import FAQSTabs from "./faqstabs"
import Link from "next/link"

export default function FAQ()
{
    return (
        <section className='flex flex-col gap-16 lg:gap-24'>
            <div className='bg-strong-gray w-full p-16 lg:p-24 flex flex-col items-start justify-center gap-4'>
                <h1 className='text-[#EAECF0] font-semibold'>FAQ</h1>
                <h2 className='text-[#EAECF0] font-semibold text-3xl lg:text-5xl'>Frequently Asked Questions</h2>
            </div>
            <div className='p-16 lg:p-24 flex flex-col gap-12 items-center justify-center'>
                <div className='flex flex-col items-center justify-center gap-8'>
                    <p className='font-semibold text-2xl lg:text-4xl'>Everything you need to know</p>
                    <p className='text-main-gray text-base lg:text-lg'>Everything you need to know about the product and billing.</p>
                </div>
                <FAQSTabs />
                <div className='lg:w-5/6 mx-2 bg-white rounded-3xl flex flex-col items-center justify-around gap-8 py-8 px-8'>
                    <div className='flex'>
                        <div className='flex -mr-4'>
                            <Image
                                src="/images/phoenix.png"
                                alt="phoenix"
                                width={48}
                                height={48}
                                className='rounded-full w-12 h-12' 
                            />
                        </div>
                        <div className='flex -mt-2'>
                            <Image
                                src="/images/olivia.png"
                                alt="olivia"
                                width={56}
                                height={56}
                                className='rounded-full w-14 h-14 z-20 border-2 border-white'
                            />
                        </div>
                        <div className='flex -ml-4'>
                            <Image
                                src="/images/lana.png"
                                alt="lana"
                                width={40}
                                height={40}
                                className='rounded-full w-12 h-12'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <p className='font-semibold text-xl'>
                            Still have questions?
                        </p>
                        <p className='text-main-gray text-lg'>
                            Can't find the answer you're looking for? Please chat to our friendly team.
                        </p>
                    </div>
                    <Link href='/get-in-touch' className='rounded-full px-5 py-3.5 text-white font-semibold bg-strong-purple'>Get in touch</Link>
                </div>
            </div>
        </section>
    )
}