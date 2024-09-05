import InvestorsChart from "@/components/investors/InvestorsChart"
import InvestorsStartups from "@/components/investors/InvestorsStartups"
import { getUser } from "@/lib/actions/auth"
import { getContracts } from "@/lib/actions/investor"

export default async function Dashboard({ searchParams }: { searchParams: { page?: string } })
{
    const user = await getUser()
    const investorContracts = await getContracts(user?.userInvestor?.id!)

    // await new Promise(resolve => setTimeout(resolve, 10000))

    const totalAmountInvested = investorContracts.acceptedContracts?.reduce((acc, contract) => acc + (contract.investment_amount_paid ? parseFloat(contract.amount_invested) : 0), 0)
    const totalROI = investorContracts.acceptedContracts?.reduce((acc, contract) => acc + (contract.investment_amount_paid ? (parseFloat(contract.amount_invested) * ((parseFloat(contract.interest_rate ?? '0') + 100) / 100)) : 0), 0)
    const totalStartups = investorContracts.acceptedContracts?.filter(contract => contract.investment_amount_paid).length

    return (
        <section className='flex flex-1 flex-col w-full gap-6 px-6 overflow-auto'>
            <div className='flex flex-wrap items-center justify-between gap-4'>
                <div className="flex bg-[#212121] min-h-20 items-center justify-center text-center flex-col gap-2 flex-1 rounded-[4px] max-w-[283px]">
                    <p className='font-Montserrat font-light text-xs text-white'>Total amount invested</p>
                    <p className='text-white font-[800] font-Montserrat text-[20px]'>${totalAmountInvested}</p>
                </div>
                <div className="flex bg-[#212121] min-h-20 items-center justify-center text-center flex-col gap-2 flex-1 rounded-[4px] max-w-[283px]">
                    <p className='font-Montserrat font-light text-xs text-white'>Total ROI</p>
                    <p className='text-white font-[800] font-Montserrat text-[20px]'>${totalROI}</p>
                </div>
                <div className="flex bg-[#212121] min-h-20 items-center justify-center text-center flex-col gap-2 flex-1 rounded-[4px] max-w-[283px]">
                    <p className='font-Montserrat font-light text-xs text-white'>Currently investing in</p>
                    <p className='text-white font-[800] font-Montserrat text-[20px]'>{totalStartups} <span className='font-normal'>startups</span></p>
                </div>
            </div>
            <InvestorsChart contracts={investorContracts.acceptedContracts!} totalROI={totalROI!} />
            <InvestorsStartups searchParams={searchParams} contracts={investorContracts.acceptedContracts!} />
        </section>
    )
}