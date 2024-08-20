import { getUser } from "@/lib/actions/auth"
import { getPendingContractsWithInvestors } from "@/lib/actions/startup"
import { format } from "date-fns"
import TermSheetButton from "./termsheetbutton"
import Link from "next/link"

export default async function Contracts() 
{
    const user = await getUser()
    const pendingContracts = await getPendingContractsWithInvestors(user?.userStartUp?.id!)

    return (
        <section className='flex flex-1 items-start justify-between gap-6 h-screen py-12 px-12 flex-wrap'>
            {pendingContracts?.map((contract) => (
                <div className='flex flex-col gap-4 items-center justify-center bg-white w-[384px] rounded-[4px] h-[152px] py-4'>
                    <p className='text-sm font-extralight font-Montserrat text-black'>
                        <span className='font-medium'>{contract?.investor?.user?.first_name} {contract?.investor?.user?.last_name}</span>{" "}
                        has sent you an offer
                    </p>
                    <div className={"flex gap-4"}>
                        <Link href={`/contracts/${contract.id}`} className='bg-black text-center flex items-center justify-center rounded-[4px] text-[10px] w-32 font-extralight text-white text-sm h-8'>
                            View Terms
                        </Link>
                        <TermSheetButton termSheet={contract.term_sheet} />
                    </div>
                    <p className='text-xs font-light font-Montserrat text-black ml-auto px-2 mt-auto'>
                        {format(new Date(contract?.createdAt!), "MMMM, do, yyyy")}
                    </p>
                </div>
            ))}
        </section>
    )
}