export default function DataRequestsLoading()
{
    return (
        <section className='flex flex-1 items-start justify-between gap-6 h-screen py-12 px-12 flex-wrap'>
            {[...Array(9)].map((_, index) => (
                <div className='flex flex-col gap-4 items-center justify-center bg-[#FFFFFF80] w-[384px] rounded-[4px] h-[152px] py-4 animate-pulse' key={index} />
            ))}
        </section>
    )
}