import InvestorsChart from "@/components/investors/InvestorsChart"
import InvestorsStartups from "@/components/investors/InvestorsStartups"
import Notifications from "@/components/shared/Notifications"
import { getUser } from "@/lib/actions/auth"
import { getContracts } from "@/lib/actions/startup"
import { getNotifications } from "@/lib/actions/user"

export default async function Dashboard({ searchParams }: { searchParams: { page?: string } })
{
    const user = await getUser()
    const startupContracts = await getContracts(user?.userStartUp?.id!)
    const notifications = await getNotifications(user?.user.id!)

    // await new Promise(resolve => setTimeout(resolve, 10000))

    const totalAmountInvested = startupContracts.acceptedContracts?.reduce((acc, contract) => acc + parseFloat(contract.amount_invested), 0)
    const totalInvestors = startupContracts.acceptedContracts?.length

    return (
        <section className='flex flex-1 flex-col w-full gap-6 px-6 overflow-auto'>
            <div className='flex flex-wrap items-center justify-start gap-4'>
                <div className="flex bg-[#212121] min-h-20 items-center justify-center text-center flex-col gap-2 flex-1 rounded-[4px] max-w-[283px]">
                    <p className='font-Montserrat font-light text-xs text-white'>Total funds</p>
                    <p className='text-white font-[800] font-Montserrat text-[20px]'>${totalAmountInvested}</p>
                </div>
                <div className="flex bg-[#212121] min-h-20 items-center justify-center text-center flex-col gap-2 flex-1 rounded-[4px] max-w-[283px]">
                    <p className='font-Montserrat font-light text-xs text-white'>Currently invested in by</p>
                    <p className='text-white font-[800] font-Montserrat text-[20px]'>{totalInvestors} <span className='font-normal'>investors</span></p>
                </div>
                <div className='ml-auto flex items-start justify-center h-full pt-2'>
                    <Notifications user={user!} notifications={notifications!} />
                </div>
            </div>
            {/* <InvestorsChart contracts={startupContracts.acceptedContracts!} totalROI={totalROI!} /> */}
            {/* <InvestorsStartups searchParams={searchParams} contracts={startupContracts.acceptedContracts!} /> */}
        </section>
    )
}