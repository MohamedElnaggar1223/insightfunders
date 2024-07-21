import { getStartup } from "@/lib/actions/investor";
import { cn, getNextDueDate } from "@/lib/utils";
import { Search, Settings2 } from "lucide-react";

type Props = {
    contracts: {
        payment_interval: "week" | "month" | "quarter" | "year" | null;
        id: number;
        investor_id: number;
        accepted: boolean;
        startup_id: number;
        amount_invested: string;
        interest_rate: string | null;
        total_return_paid: string | null;
        maturity_date: string | null;
        createdAt: string | null;
    }[]
}

export default async function InvestorsStartups({ contracts }: Props)
{
    const contractsWithStartUps = await Promise.all(contracts.map(async contract => {
        const startup = await getStartup(contract.startup_id)
        return { ...contract, startup }
    }))

    return (
        <div className='flex flex-1 flex-col gap-4'>
            <div className="h-[40px] bg-white w-full flex items-center gap-4 px-2">
                <Search size={28} stroke='#000' />
                <input type="text" placeholder='Search for startups' className='bg-transparent text-xs w-full h-full outline-none border-none' />
                <Settings2 size={28} stroke='#000' className='ml-auto' />
            </div>
            <div className="flex flex-1 bg-white w-full flex-col">
                <div className='flex w-full items-center justify-between p-8 tableShadow'>
                    <p className='text-xs font-medium'>Name & Startup Details</p>
                    <p className='text-xs font-medium'>Amount Invested</p>
                    <p className='text-xs font-medium'>Return of Investment</p>
                    <p className='text-xs font-medium'>Maturity Date</p>
                    <p className='text-xs font-medium'>Due Payment Date</p>
                </div>
                {contracts.length > 0 ? contractsWithStartUps.map((contract, index) => (
                    <div className={cn('flex w-full items-center justify-between p-4', (index % 2 !== 0) && 'bg-[#A1A1A133]')}>
                        <div className='flex-1 flex flex-col items-center justify-center gap-1'>
                            <p className='text-sm underline'>{contract.startup?.company_name}</p>
                            <p className='text-xs font-light'>{contract.startup?.industry_sector}</p>
                        </div>
                        <div className='flex-1 flex items-center justify-center bg-[#B4B4B4CC]'>${contract.amount_invested}</div>
                        <div className='flex-1 flex items-center justify-center'>{contract.interest_rate}%</div>
                        <div className='flex-1 flex items-center justify-center bg-[#B4B4B4CC]'>{contract.maturity_date}</div>
                        <div className='flex-1 flex items-center justify-center'>{getNextDueDate(new Date(contract.createdAt!), contract.payment_interval!).toDateString()}</div>
                    </div>
                )) : (
                    <p className='mb-auto flex items-center justify-center mt-12'>
                        No Data Yet!
                    </p>
                )}
            </div>
        </div>
    )
}