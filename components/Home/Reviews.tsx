import Image from "next/image";

export default function Reviews()
{
    return (
        <section className='flex flex-col bg-black px-4 lg:px-40 pb-20 pt-52 gap-40'>
            <div className='flex flex-col py-12 gap-8 px-24 rounded-[10px] bg-[#2F2F2F] items-center justify-center text-center'>
                <p className='text-white text-3xl'>100% free to receive terms</p>
                <p className='text-[#FFFFFF80] text-xl'>
                There is no cost to receive terms through Capital Markets. A nominal platform fee will only apply 
                once you move forward with funding (discounted for Insight Funders Platinum members).
                </p>
            </div>
            <div className='flex flex-col gap-8'>
                <p className='text-white text-2xl text-center'>Our client's reviews</p>
                <div className='flex w-full gap-8 flex-wrap'>
                    <div className="flex flex-col flex-1 h-fit lg:min-w-[535px] bg-[#2F2F2F] rounded-[10px] p-8 gap-4">
                        <div className='flex flex-1 h-1/2 items-center justify-start gap-3'>
                            <div className="flex items-center justify-center rounded-full w-[5.5rem] h-[5.5rem] overflow-hidden">
                                <Image
                                    src='/images/image-man.png'
                                    width={88}
                                    height={88}
                                    alt='man'
                                    className='rounded-full object-contain' 
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className='text-white font-medium text-sm'>Vivas Kumar</p>
                                <p className='text-white font-extralight text-sm'>Founder & CEO of Mitra Chem</p>
                            </div>
                        </div>
                        <div className='flex flex-col h-1/2 justify-between'>
                            <div className="flex flex-col w-full gap-4">
                                <p className='text-white font-light text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <div className="flex w-full items-center justify-end">
                                    <p className='text-white font-extralight text-sm'>May, 14, 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 h-fit lg:min-w-[535px] bg-[#2F2F2F] rounded-[10px] p-8 gap-4">
                        <div className='flex flex-1 h-1/2 items-center justify-start gap-3'>
                            <div className="flex items-center justify-center rounded-full w-[5.5rem] h-[5.5rem] overflow-hidden">
                                <Image
                                    src='/images/image.png'
                                    width={88}
                                    height={88}
                                    alt='man'
                                    className='rounded-full object-contain' 
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className='text-white font-medium text-sm'>Raya Silvister</p>
                                <p className='text-white font-extralight text-sm'>Founder & CEO of Mitra Chem</p>
                            </div>
                        </div>
                        <div className='flex flex-col h-1/2 justify-between'>
                            <div className="flex flex-col w-full gap-4">
                                <p className='text-white font-light text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <div className="flex w-full items-center justify-end">
                                    <p className='text-white font-extralight text-sm'>May, 14, 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}