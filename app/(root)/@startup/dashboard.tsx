import Notifications from "@/components/shared/Notifications"
import StartUpsChart from "@/components/startup/StartUpsChart"
import StartUpsInvestors from "@/components/startup/StartUpsInvestors"
import { getUser } from "@/lib/actions/auth"
import { getContracts } from "@/lib/actions/startup"
import { getNotifications } from "@/lib/actions/user"

export default async function Dashboard({ searchParams }: { searchParams: { page?: string } })
{
    const user = await getUser()
    const startupContracts = await getContracts(user?.userStartUp?.id!)

    // await new Promise(resolve => setTimeout(resolve, 10000))

    const totalAmountInvested = startupContracts.acceptedContracts?.reduce((acc, contract) => acc + (contract.investment_amount_paid ? parseFloat(contract.amount_invested) : 0), 0)
    const totalInvestors = startupContracts.acceptedContracts?.filter(contract => contract.investment_amount_paid).length

    return (
        <section className='flex flex-1 flex-col w-full gap-6 px-6 overflow-auto pt-6'>
            <div className='flex flex-wrap items-center justify-center gap-4 min-h-[295px]'>
                <div className='flex flex-col gap-4 h-full'>
                    <div className="flex bg-[#212121] min-h-32 items-center justify-center text-center flex-col gap-2 flex-1 rounded-[8px] w-screen max-w-[332px]">
                        <p className='font-Montserrat font-light text-xs text-white'>Total funds</p>
                        <p className='text-white font-[800] font-Montserrat text-[20px]'>${totalAmountInvested}</p>
                    </div>
                    <div className="flex bg-[#212121] min-h-32 items-center justify-center text-center flex-col gap-2 flex-1 rounded-[8px] w-screen max-w-[332px]">
                        <p className='font-Montserrat font-light text-xs text-white'>Currently invested in by</p>
                        <p className='text-white font-[800] font-Montserrat text-[20px]'>{totalInvestors} <span className='font-normal'>investors</span></p>
                    </div>
                </div>
                <StartUpsChart totalAmountInvested={totalAmountInvested!} />
            </div>
            <StartUpsInvestors searchParams={searchParams} contracts={startupContracts.acceptedContracts!} />
        </section>
    )
}