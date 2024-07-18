import Image from "next/image";

export default function Features()
{
    return (
        <section className='flex flex-col py-20 w-full gap-12'>
            <div className='flex flex-col gap-6 items-center justify-center'>
                <div className='flex gap-1.5 border border-[#E9D7FE] rounded-[10px] bg-light-purple w-fit items-center justify-center px-3 py-1'>
                    <div className='w-1.5 h-1.5 bg-main-purple rounded-full' />
                    <p className='text-sm text-main-purple font-medium'>Features</p>
                </div>
                <h4 className='text-center text-[#101828] text-3xl lg:text-4xl font-semibold max-md:px-5'>
                    Secure, Risk-Adjusted Returns for Private <br/> Credit Investors
                </h4>
                <h5 className='text-main-gray text-lg lg:text-xl text-center font-normal leading-[30px] max-md:px-5'>
                    Our AI-powered platform assesses tech startups' creditworthiness, enabling <br /> private credit investors to earn secure returns while accelerating startup growth <br /> without equity dilution.				
                </h5>
            </div>
            <div className='flex items-center justify-center w-full'>
                <Image
                    src='/images/features.png'
                    alt='Features'
                    width={768}
                    height={512}
                />
            </div>
            <div className='w-full flex gap-8 items-center justify-center px-20 max-md:flex-wrap'>
                <div className='flex flex-col gap-4 items-center justify-center text-center'>
                    <Image
                        src='/images/secureReturns.svg'
                        alt='SecureReturns'
                        width={48}
                        height={48} 
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
                        width={48}
                        height={48} 
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
                        src='/images/secureReturns.svg'
                        alt='SecureReturns'
                        width={48}
                        height={48} 
                    />
                    <p className='font-semibold text-xl text-center'>AI-Powered Insights</p>
                    <p className='text-main-gray text-base text-center'>
                        Our advanced AI algorithms analyze startups' creditworthiness, providing investors with data-driven insights.
                    </p>
                </div>
            </div>
        </section>
    )
}