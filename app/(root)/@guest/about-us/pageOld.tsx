import Image from "next/image";

export default function AboutUs()
{
    return (
        <section className='flex flex-col gap-16 lg:gap-24'>
            <div className='bg-strong-gray w-full p-16 lg:p-24 flex flex-col items-start justify-center gap-4'>
                <h1 className='text-[#EAECF0] font-semibold'>Nice to meet you</h1>
                <h2 className='text-[#EAECF0] font-semibold text-3xl lg:text-5xl'>About Insight Funders</h2>
            </div>
            <div className='flex w-full items-center justify-center max-lg:flex-col'>
                <div className='p-16 lg:p-24 flex flex-col items-start justify-center lg:w-1/2 gap-4'>
                    <h3 className='text-[#101828] font-semibold text-2xl lg:text-3xl'>Our Mission</h3>
                    <p className='text-main-gray font-normal text-base lg:text-lg leading-[28px]'>
                        At Insight Funders, our mission is to bridge the gap between ambitious startups and visionary investors. We provide seamless access to non-dilutive capital while offering investors robust opportunities to grow their portfolios. Traditionally, private credit deals have been accessible only to large institutions. Our goal is to democratize access to these opportunities, enabling more investors to participate in private credit deals and helping startups secure essential funding to grow their businesses.
                    </p>
                </div>
                <div className='flex-1 lg:w-1/2'>
                    <Image
                        src='/images/ourmission.png'
                        alt='AboutUs'
                        width={760}
                        height={560}
                        className='w-full object-contain' 
                    />
                </div>
            </div>
            <div className='flex w-full items-center justify-center pb-24 max-lg:flex-col'>
                <div className='flex-1 lg:w-1/2'>
                    <Image
                        src='/images/ourstory.png'
                        alt='AboutUs'
                        width={760}
                        height={560}
                        className='w-full object-contain' 
                    />
                </div>
                <div className='p-16 lg:p-24 flex flex-col items-start justify-center lg:w-1/2 gap-4'>
                    <h3 className='text-[#101828] font-semibold text-3xl'>Our Story</h3>
                    <p className='text-main-gray font-normal text-lg leading-[28px]'>
                        Founded in 2022, Insight Funders is driven by a team of seasoned fintech operators and data security experts. Our advanced AI algorithms, trained on extensive private credit data, accurately assess the creditworthiness of startups, ensuring reliable and data-driven investment decisions. We are committed to creating a trusted environment for both borrowers and lenders to thrive.
                    </p>
                </div>
            </div>
        </section>

    )
}