import { getStartup } from "@/lib/actions/investor";
import { cn, getNextDueDate } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Search, Settings2 } from "lucide-react";
import Link from "next/link";
import SearchStartupsBar from "./SearchStartupsBar";

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
    }[],
    searchParams: { 
        page?: string
     }
}

export default async function InvestorsStartups({ contracts, searchParams }: Props)
{
    const contractsWithStartUps = await Promise.all(contracts.map(async contract => {
        const startup = await getStartup(contract.startup_id)
        return { ...contract, startup }
    }))

    // const contractsWithStartUps = [
    //     {
    //         "payment_interval": "week",
    //         "id": 1,
    //         "investor_id": 1,
    //         "accepted": true,
    //         "startup_id": 1,
    //         "amount_invested": "100000",
    //         "interest_rate": "10",
    //         "total_return_paid": "110000",
    //         "maturity_date": "2022-10-10",
    //         "createdAt": "2022-10-10",
    //         "startup": {
    //             "id": 1,
    //             "company_name": "Startup 1",
    //             "industry_sector": "Tech"
    //         }
    //     },
    //     {
    //         "payment_interval": "month",
    //         "id": 2,
    //         "investor_id": 1,
    //         "accepted": true,
    //         "startup_id": 2,
    //         "amount_invested": "200000",
    //         "interest_rate": "10",
    //         "total_return_paid": "220000",
    //         "maturity_date": "2022-10-10",
    //         "createdAt": "2022-10-10",
    //         "startup": {
    //             "id": 2,
    //             "company_name": "Startup 2",
    //             "industry_sector": "Tech"
    //         }
    //     },
    //     {
    //         "payment_interval": "quarter",
    //         "id": 3,
    //         "investor_id": 1,
    //         "accepted": true,
    //         "startup_id": 3,
    //         "amount_invested": "300000",
    //         "interest_rate": "10",
    //         "total_return_paid": "330000",
    //         "maturity_date": "2022-10-10",
    //         "createdAt": "2022-10-10",
    //         "startup": {
    //             "id": 3,
    //             "company_name": "Startup 3",
    //             "industry_sector": "Tech"
    //         }
    //     },
    //     {
    //         "payment_interval": "year",
    //         "id": 4,
    //         "investor_id": 1,
    //         "accepted": true,
    //         "startup_id": 4,
    //         "amount_invested": "400000",
    //         "interest_rate": "10",
    //         "total_return_paid": "440000",
    //         "maturity_date": "2022-10-10",
    //         "createdAt": "2022-10-10",
    //         "startup": {
    //             "id": 4,
    //             "company_name": "Startup 4",
    //             "industry_sector": "Tech"
    //         }
    //     },
    //     {
    //         "payment_interval": "week",
    //         "id": 5,
    //         "investor_id": 1,
    //         "accepted": true,
    //         "startup_id": 5,
    //         "amount_invested": "500000",
    //         "interest_rate": "10",
    //         "total_return_paid": "550000",
    //         "maturity_date": "2022-10-10",
    //         "createdAt": "2022-10-10",
    //         "startup": {
    //             "id": 5,
    //             "company_name": "Startup 5",
    //             "industry_sector": "Tech"
    //         }
    //     },
    //     {
    //         "payment_interval": "month",
    //         "id": 6,
    //         "investor_id": 1,
    //         "accepted": true,
    //         "startup_id": 6,
    //         "amount_invested": "600000",
    //         "interest_rate": "10",
    //         "total_return_paid": "660000",
    //         "maturity_date": "2022-10-10",
    //         "createdAt": "2022-10-10",
    //         "startup": {
    //             "id": 6,
    //             "company_name": "Startup 6",
    //             "industry_sector": "Tech"
    //         }
    //     },
    //     {
    //         "payment_interval": "quarter",
    //         "id": 7,
    //         "investor_id": 1,
    //         "accepted": true,
    //         "startup_id": 7,
    //         "amount_invested": "700000",
    //         "interest_rate": "10",
    //         "total_return_paid": "770000",
    //         "maturity_date": "2022-10-10",
    //         "createdAt": "2022-10-10",
    //         "startup": {
    //             "id": 7,
    //             "company_name": "Startup 7",
    //             "industry_sector": "Tech"
    //         }
    //     },
    //     {
    //         "payment_interval": "year",
    //         "id": 8,
    //         "investor_id": 1,
    //         "accepted": true,
    //         "startup_id": 8,
    //         "amount_invested": "800000",
    //         "interest_rate": "10",
    //         "total_return_paid": "880000",
    //         "maturity_date": "2022-10-10",
    //         "createdAt": "2022-10-10",
    //         "startup": {
    //             "id": 8,
    //             "company_name": "Startup 8",
    //             "industry_sector": "Tech"
    //         }
    //     }
    // ]

    const page = searchParams?.page ? parseInt(searchParams.page) : 1

    const startIndex = ((page - 1) * 5) + 1
    const endIndex = contractsWithStartUps.length >= page * 5 ? page * 5 : contractsWithStartUps.length
    
    const nextAvailable = endIndex < contractsWithStartUps.length
    const prevAvailable = page > 1

    return (
        <div className='flex flex-1 flex-col gap-4'>
            <SearchStartupsBar />
            <div className="flex flex-1 bg-white w-full flex-col overflow-auto">
                <div className='flex w-full items-center justify-between px-4 py-8 tableShadow'>
                    <p className='text-xs font-medium flex-1'>Name & Startup Details</p>
                    <p className='text-xs font-medium flex-1'>Amount Invested</p>
                    <p className='text-xs font-medium flex-1'>Return of Investment</p>
                    <p className='text-xs font-medium flex-1'>Maturity Date</p>
                    <p className='text-xs font-medium flex-1'>Due Payment Date</p>
                </div>
                {contractsWithStartUps.length > 0 ? contractsWithStartUps.slice(startIndex - 1, endIndex).map((contract, index) => (
                    <div className={cn('flex w-full items-center justify-between px-4', (index % 2 !== 0) && 'bg-[#A1A1A133]')}>
                        <div className='flex-1 flex flex-col items-center justify-center gap-1'>
                            <Link href={`/startup/${contract.startup?.id.toString()}`}>
                                <p className='text-sm underline'>{contract.startup?.company_name}</p>
                            </Link>
                            <p className='text-xs font-light'>{contract.startup?.industry_sector}</p>
                        </div>
                        <div className='flex-1 flex items-center justify-center bg-[#B4B4B4CC] h-full py-6'>${contract.amount_invested}</div>
                        <div className='flex-1 flex items-center justify-center py-6'>{contract.interest_rate}%</div>
                        <div className='flex-1 flex items-center justify-center bg-[#B4B4B4CC] h-full py-6'>{contract.maturity_date}</div>
                        <div className='flex-1 flex items-center justify-center py-6'>{getNextDueDate(new Date(contract.createdAt!), contract.payment_interval!).toDateString()}</div>
                    </div>
                )) : (
                    <p className='mb-auto flex items-center justify-center mt-12'>
                        No Data Yet!
                    </p>
                )}
                <div className='h-10 flex items-center px-4 justify-between mt-auto'>
                    <p className='text-xs font-medium'>Showing {startIndex} - {endIndex}</p>
                    <div className='flex gap-2'>
                        <Link prefetch={true} href={prevAvailable ? `/?page=${page - 1}` : '#'}>
                            <ChevronLeft stroke={prevAvailable ? '#000' : '#00000050'} size={16} />
                        </Link>
                        <Link prefetch={true} href={nextAvailable ? `/?page=${page + 1}` : '#'}>
                            <ChevronRight stroke={nextAvailable ? '#000' : '#00000050'} size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}