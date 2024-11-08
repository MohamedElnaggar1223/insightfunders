import { getUser } from "@/lib/actions/auth";
import { Edit } from "lucide-react";
import Link from "next/link";
import CompanyInfoDetails from "./company-info-details";
import { getOwners } from "@/lib/actions/startup";

export default async function CompanyInfo()
{
    const user = await getUser()
    const startUpOwners = await getOwners(user?.userStartUp?.id!)

    return (
        <section className='flex flex-1 flex-col gap-6'>
            <div className='flex items-center justify-between gap-4 border-b border-black   py-4'>
                <p className='font-bold font-Montserrat text-black text-xl'>Company Information</p>
                <Link href='/profile?tab=company-info&edit=true' className='w-24 h-10 bg-[#FF7A00] gap-2 text-white text-sm font-semibold rounded-[8px] flex items-center justify-center'>
                    <Edit size={16} />
                    Edit
                </Link>
            </div>
            <CompanyInfoDetails user={user!} startUpOwners={startUpOwners} />
        </section>
    )
}