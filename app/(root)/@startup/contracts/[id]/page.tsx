import { getUser } from "@/lib/actions/auth"
import { getContract } from "@/lib/actions/startup"
import { format } from "date-fns"

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
            <div className='flex flex-col w-full bg-[#313131] rounded-[4px] py-4'>
                
            </div>
        </section>
    )
}