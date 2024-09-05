import { getUser } from "@/lib/actions/auth"
import { getContract } from "@/lib/actions/startup"
import { format } from "date-fns"
import TermSheetPDF from "./termsheetpdf"
import AgreeToContract from "./agreetocontract"

type Props = {
    params: {
        id: string
    }
}

export default async function ContractPage({ params }: Props) 
{   
    const user = await getUser()
    const contract = await getContract(parseInt(params.id), user?.userStartUp?.id!)
    
    if(!contract || contract?.accepted) return null

    return (
        <section className='flex flex-1 gap-4 flex-col h-screen justify-start pt-12 px-12'>
            <div className="flex w-full items-center justify-between">
                <div className="flex gap-1 flex-col items-start justify-center text-left text-white">
                    <p className='text-sm font-medium font-Montserrat'>
                        {contract?.investor?.user?.first_name} {contract?.investor?.user?.last_name}
                    </p>
                    <p className='text-xs font-extralight font-Montserrat'>
                        {format(new Date(contract.createdAt!), "MMMM, do, yyyy")}
                    </p>
                </div>
                <div className="flex gap-2 items-end">
                    <button className='border-[#C50707] border rounded-[4px] bg-[#8C0D0D] text-sm w-32 font-extralight text-white h-9'>Reject</button>
                    <button className='rounded-[4px] bg-white text-sm w-32 font-extralight text-black h-9'>Negotiate</button>
                </div>
            </div>
            <div className='flex flex-col w-full bg-[#313131] rounded-[4px] py-4 px-8 gap-4'>
                <div className='flex flex-wrap w-full gap-4'>
                    <div className='flex flex-col min-w-[40%] items-start justify-center gap-2 flex-1 py-2 px-4 bg-[#202020] rounded-[8px]'>
                        <p className='text-white font-light text-base'>Amount Invested</p>
                        <p className='text-white font-bold text-xl'>${contract.amount_invested}</p>
                    </div>
                    <div className='flex flex-col min-w-[40%] items-start justify-center gap-2 flex-1 py-2 px-4 bg-[#202020] rounded-[8px]'>
                        <p className='text-white font-light text-base'>Interest Rate</p>
                        <p className='text-white font-bold text-xl'>{contract.interest_rate}%</p>
                    </div>
                    <div className='flex flex-col min-w-[40%] items-start justify-center gap-2 flex-1 py-2 px-4 bg-[#202020] rounded-[8px]'>
                        <p className='text-white font-light text-base'>Maturity Date</p>
                        <p className='text-white font-bold text-xl'>{format(new Date(contract.maturity_date!), "MMMM, do, yyyy")}</p>
                    </div>
                    <div className='flex flex-col min-w-[40%] items-start justify-center gap-2 flex-1 py-2 px-4 bg-[#202020] rounded-[8px]'>
                        <p className='text-white font-light text-base'>Payment Interval</p>
                        <p className='text-white font-bold text-xl'>{contract.payment_interval}</p>
                    </div>
                    <div className='flex flex-col min-w-[40%] items-start justify-center gap-2 flex-1 py-2 px-4 bg-[#202020] rounded-[8px]'>
                        <p className='text-white font-light text-base'>Term Sheet</p>
                        <TermSheetPDF url={contract.term_sheet} />
                    </div>
                </div>
                <AgreeToContract contractId={contract.id} user={user!} />
            </div>
        </section>
    )
}