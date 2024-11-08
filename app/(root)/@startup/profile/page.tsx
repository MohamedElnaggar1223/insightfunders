import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"
import CompanyInfo from "./company-info"
import BasicInfo from "./basic-info"
import Financials from "./financials"

type Props = {
    searchParams: { [key: string]: string | string[] | undefined }
}

export default function OffersPage({ searchParams }: Props)
{
    const tab = typeof searchParams.tab === 'string' ? searchParams.tab : undefined

    return (
        <section className='flex flex-1 flex-col gap-6 h-screen  py-16 dashboardcont userinfospacingcont'>
            <div className='flex w-full'>
                <Link
                    href='/profile?tab=basic-info'
                    className={cn('text-sm font-semibold font-Montserrat flex-1 text-center border-b-2 pb-2', (tab === undefined || tab === 'basic-info') ? 'text-[#FF7A00] font-semibold border-[#FF7A00]' : 'text-black border-[#FFFFFF80]')} 
                >
                    Basic Information
                </Link>
                <Link
                    href='/profile?tab=company-info'
                    className={cn('text-sm font-semibold font-Montserrat flex-1 text-center border-b-2 pb-2', (tab === 'company-info') ? 'text-[#FF7A00] font-semibold border-[#FF7A00]' : 'text-black border-[#FFFFFF80]')} 
                >
                    Company Information
                </Link>
                <Link
                    href='/profile?tab=financials'
                    className={cn('text-sm font-semibold font-Montserrat flex-1 text-center border-b-2 pb-2', (tab === 'financials') ? 'text-[#FF7A00] font-semibold border-[#FF7A00]' : 'text-black border-[#FFFFFF80]')} 
                >
                    Financials
                </Link>
            </div>
            {tab === 'company-info' ? (
                <Suspense fallback={<Loader2 className='animate-spin text-black' size={24} />}>
                    <CompanyInfo />
                </Suspense>
            ) 
            : tab === 'financials' ? (
                <Suspense fallback={<Loader2 className='animate-spin text-black' size={24} />}>
                    <Financials />
                </Suspense>
            ) : (
                <Suspense fallback={<Loader2 className='animate-spin text-black' size={24} />}>
                    <BasicInfo />
                </Suspense>
            )} 
        </section>
    )
}