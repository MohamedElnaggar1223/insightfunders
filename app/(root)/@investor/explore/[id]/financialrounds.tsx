import { getFinancialRounds } from "@/lib/actions/startup"
import { cn } from "@/lib/utils"

export default async function FinancialRounds({ startupId }: { startupId: number })
{
    const financialRounds = await getFinancialRounds(startupId)

    return (
        <div className="flex flex-1 bg-white w-full flex-col overflow-auto">
            <div className='flex w-full items-center justify-between py-8 tableShadow'>
                <p className='text-xs font-medium flex-1'>Investor</p>
                <p className='text-xs font-medium flex-1'>Round</p>
                <p className='text-xs font-medium flex-1'>Date</p>
                <p className='text-xs font-medium flex-1'>Amount</p>
            </div>
            {financialRounds.length > 0 ? financialRounds.map((financialRound, index) => (
                <div className={cn('flex w-full items-center justify-between', (index % 2 !== 0) && 'bg-[#A1A1A133]')}>
                    <p className='text-sm flex-1 flex items-center justify-center py-6'>{financialRound.investor}</p>
                    <div className='flex-1 flex items-center justify-center bg-[#B4B4B4CC] h-full py-6'>{financialRound.round}</div>
                    <div className='flex-1 flex items-center justify-center py-6'>{financialRound.date}</div>
                    <div className='flex-1 flex flex-col items-center justify-center gap-1 py-6 bg-[#B4B4B4CC] max-h-[4.125rem]'>
                        <div className='flex-1 flex items-center justify-center'>${financialRound.amount}</div>
                    </div>
                </div>
            )) : (
                <p className='flex items-center justify-center my-12'>
                    No Data Yet!
                </p>
            )}
        </div>
    )
}