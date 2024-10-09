import Image from "next/image";
import GetInTouchForm from "./getintouchform";
import Link from "next/link";

export default function GetInTouch()
{
    return (
        <section className='flex flex-col items-center justify-stretch p-12'>
            <div className="flex flex-col gap-16 text-center bg-[#1A1A1A] p-12 w-screen max-w-[1400px] rounded-[12px]">
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-medium text-white">Get In Touch</h1>
                    <div className='flex gap-6 mx-auto'>
                        <Link href='https://www.linkedin.com/company/insight-funders/' target="_blank">
                            <Image
                                src='/images/in.svg'
                                alt='linkedin'
                                width={15}
                                height={15} 
                            />
                        </Link>
                        <Image
                            src='/images/instagramWhite.svg'
                            alt='instagram'
                            width={15}
                            height={15} 
                        />
                        <Image
                            src='/images/xWhite.svg'
                            alt='x'
                            width={15}
                            height={15} 
                        />
                    </div>
                    <p className="text-white text-xs font-light max-w-[442px] mx-auto">Securing startup financing can be tough. Don’t waste valuable time and energy on fundraising when you could be focusing on growing your business. With Insight Funders, you get the smart, flexible financing solution you deserve.</p>
                </div>
                <GetInTouchForm />
            </div>
        </section>
    )
}