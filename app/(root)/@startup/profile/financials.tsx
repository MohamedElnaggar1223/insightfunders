import { getUser } from "@/lib/actions/auth";
import { Edit } from "lucide-react";
import Link from "next/link";
import FinancialsDetails from "./financials-details";
import { getFinancialRounds } from "@/lib/actions/startup";
import FinancialAddBtn from "./financial-add-btn";

export default async function Financials()
{
    const user = await getUser()
    const financialRounds = await getFinancialRounds(user?.userStartUp?.id!)

    return (
        <section className='flex flex-1 flex-col gap-6'>
            <div className='flex items-center justify-between gap-4 border-b border-black py-4'>
                <p className='font-bold font-Montserrat text-black text-xl'>Financials</p>
                <FinancialAddBtn user={user!} />
            </div>
            <FinancialsDetails user={user!} startUpFinancialRounds={financialRounds} />
        </section>
    )
}