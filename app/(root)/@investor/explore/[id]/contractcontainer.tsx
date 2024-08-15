import { getUser } from "@/lib/actions/auth"
import { getContracts } from "@/lib/actions/investor"
import CreateContract from "./createcontract"

export default async function ContractContainer({ startupId }: { startupId: number }) 
{
    const user = await getUser()
    const contract = await getContracts(user?.userInvestor?.id!, startupId)

    console.log(contract.contract)

    return (
        <div className='flex flex-col'>
            {contract.contract ? (
                <p className='text-white font-light max-w-[920px] text-center mx-auto'>This Company has received your terms sheet. Upon accepting your request, a notification will appear in Requests, where you can then wire the funds for it to go into escrow & complete the investing process.</p>
            ) : (
                <CreateContract />
            )}
        </div>
    )
}