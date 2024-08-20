import { getUser } from "@/lib/actions/auth"
import { getDataRequests } from "@/lib/actions/startup"
import { format } from "date-fns"
import ActionButtons from "./actionbuttons"

export default async function DataRequests() 
{
    const user = await getUser()
    const requests = await getDataRequests(user?.userStartUp?.id!)

    return (
        <section className='flex flex-1 items-start justify-between gap-6 h-screen py-12 px-12 flex-wrap'>
            {requests.map(({ investor, createdAt, id }) => (
                <div className='flex flex-col gap-4 items-center justify-center bg-white w-[384px] rounded-[4px] h-[152px] py-4'>
                    <p className='text-sm font-extralight font-Montserrat text-black'>
                        <span className='font-medium'>{investor?.user?.first_name} {investor?.user?.last_name}</span>{" "}
                        has requested to view your financial 
                    </p>
                    <ActionButtons user={user!} requestId={id!} />
                    <p className='text-xs font-light font-Montserrat text-black ml-auto px-2 mt-auto'>
                        {format(new Date(createdAt!), "MMMM, do, yyyy")}
                    </p>
                </div>
            ))}
        </section>
    )
}