export default function DashboardLoading()
{
    return (
        <section className='flex flex-1 flex-col gap-6 px-6'>
            <div className='flex flex-wrap items-center justify-between gap-4'>
                <div className="flex bg-[#212121] min-h-20 items-center py-2 justify-center text-center flex-col gap-2 flex-1 rounded-[4px] max-w-[283px]">
                    <p className='font-Montserrat font-light text-xs text-white'>Total amount invested</p>
                    <div className='w-2/5 h-[1.875rem] bg-[#575757] rounded-[4px] animate-pulse' />
                </div>
                <div className="flex bg-[#212121] min-h-20 items-center py-2 justify-center text-center flex-col gap-2 flex-1 rounded-[4px] max-w-[283px]">
                    <p className='font-Montserrat font-light text-xs text-white'>Total ROI</p>
                    <div className='w-2/5 h-[1.875rem] bg-[#575757] rounded-[4px] animate-pulse' />
                </div>
                <div className="flex bg-[#212121] min-h-20 items-center py-2 justify-center text-center flex-col gap-2 flex-1 rounded-[4px] max-w-[283px]">
                    <p className='font-Montserrat font-light text-xs text-white'>Currently investing in</p>
                    <div className='w-2/5 h-[1.875rem] bg-[#575757] rounded-[4px] animate-pulse' />
                </div>
            </div>
            <div className="w-full h-[250px] bg-[#212121] animate-pulse" />
            <div className='flex flex-1 flex-col gap-4'>
                <div className="h-[40px] bg-white w-full animate-pulse" />
                <div className='flex-1 bg-[#575757] animate-pulse' />
            </div>
        </section>
    )
}