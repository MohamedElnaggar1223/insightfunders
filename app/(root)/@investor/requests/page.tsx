import { getUser } from "@/lib/actions/auth"
import { getAllRequests } from "@/lib/actions/investor"
import Image from "next/image"
import Link from "next/link"

export default async function Requests() 
{
    const user = await getUser()
    const requests = await getAllRequests(user?.userInvestor?.id!, 'startups')

    return (
        <section className='relative flex flex-col flex-1 items-center justify-start gap-6 h-screen max-h-screen px-4 overflow-auto pt-12'>
            <div className='flex flex-1 items-start justify-center gap-6 flex-wrap mb-auto w-full'>
                {requests.map(({ startups }) => (
                    <Link href={`/explore/${startups?.id}`} key={startups?.id} className="flex bg-white max-h-36 min-w-[35vw] flex-1 cursor-pointer">
                        <div className="flex items-center justify-center w-36 h-36 border-r border-2 border-[#00000050]">
                            <Image
                                src='/images/placehodler.jpg'
                                alt={startups?.company_name!}
                                width={144}
                                height={144}
                            />
                        </div>
                        <div className="flex flex-col px-6 py-4 gap-3">
                            <div className="flex flex-col items-start justify-center gap-1">
                                <p className='font-medium text-xs'>    
                                    {startups?.company_name}
                                </p>
                                <p className='font-medium text-[10px] text-[#00000099]'>    
                                    {startups?.industry_sector}
                                </p>
                            </div>
                            <div className="flex gap-2 flex-col items-start justify-center">
                                <div className="flex gap-1 items-center justify-center text-xs">
                                    <Image
                                        src='/images/location.svg'
                                        alt='location'
                                        width={10}
                                        height={12}
                                    />
                                    {startups?.address}
                                </div>
                                <div className="flex gap-1 items-center justify-center text-xs">
                                    <Image
                                        src='/images/series.svg'
                                        alt='series'
                                        width={10}
                                        height={12}
                                    />
                                    {startups?.stage}
                                </div>
                                <div className="flex gap-1 items-center justify-center text-xs">
                                    <Image
                                        src='/images/series.svg'
                                        alt='series'
                                        width={10}
                                        height={12}
                                    />
                                    ${startups?.recent_raise}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}