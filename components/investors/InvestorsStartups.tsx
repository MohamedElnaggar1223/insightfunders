import { Search, Settings2 } from "lucide-react";

type Props = {
    contracts: {
        id: number;
        payment_interval: "week" | "month" | "quarter" | "year" | null;
        investor_id: number;
        accepted: boolean;
        startup_id: number;
        amount_invested: string;
        interest_rate: string | null;
        total_return_paid: string | null;
        maturity_date: string | null;
    }[]
}

export default function InvestorsStartups({ contracts }: Props)
{
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
                <p className='mb-auto flex items-center justify-center mt-12'>
                    No Data Yet!
                </p>
            </div>
        </div>
    )
}