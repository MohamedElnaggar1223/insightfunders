import Image from "next/image";

export default function Testimonial() 
{
    return (
        <section className='p-16 lg:p-24 flex items-start justify-between gap-12 lg:gap-28 bg-strong-gray max-md:flex-wrap'>
            <Image
                src='/images/testimonial.png'
                alt='Testimonial'
                width={328}
                height={328}
                className='rounded-xl object-contain'
            />
            <div className='flex flex-col gap-8 items-start justify-start'>
                <Image
                    src='/images/stars.svg'
                    alt='Stars' 
                    width={105}
                    height={20}
                />
                <p className='font-medium text-2xl lg:text-4xl text-white'>Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.</p>
                <div className='flex flex-col gap-4 items-start justify-start'>
                    <p className='font-semibold text-lg text-white'>— Mathilde Lewis</p>
                    <p className='font-normal text-lg text-[#EAECF0]'>Head of Design, Layers</p>
                </div>
            </div>
        </section>
    )
}