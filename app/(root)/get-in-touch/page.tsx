import Image from "next/image";
import GetInTouchForm from "./getintouchform";

export default function GetInTouch()
{
    return (
        <section className='flex flex-col'>
            <div className='bg-strong-gray w-full p-16 lg:p-24 flex flex-col items-start justify-center gap-4'>
                <h1 className='text-[#EAECF0] font-semibold'>Contact Us</h1>
                <h2 className='text-[#EAECF0] font-semibold text-3xl lg:text-5xl'>Get in touch</h2>
            </div>
            <div className='p-4 lg:p-16 flex items-center justify-between gap-12 max-lg:flex-col'>
                <div className='flex flex-col items-center justify-start gap-12 flex-1 p-4 lg:p-12 max-lg:max-w-[90vw]'>
                    <p className='text-main-gray text-xl'>Reach out to us directly for any inquiries or support. Our customer service team is here to assist you every step of the way.</p>
                    <GetInTouchForm />
                </div>
                <div className='flex flex-1'>
                    <Image
                        src='/images/getInTouch.png'
                        alt='ContactUs'
                        width={800}
                        height={800}
                        className='w-full object-contain' 
                    />
                </div>
            </div>
        </section>
    )
}