'use client'

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Sidebar()
{
    const pathname = usePathname()

    return (
        <aside className='flex flex-col items-start justify-center gap-8 w-64 sticky top-24 shadow-xl py-12 pl-16'>
            <Link href='/privacy-policy' className={cn('text-center text-sm', pathname === '/privacy-policy' ? 'text-[#FF7A00] font-semibold' : 'text-black font-light')}>
                Privacy Policy
            </Link>
            <Link href='/referral-agreement' className={cn('text-center text-sm', pathname === '/referral-agreement' ? 'text-[#FF7A00] font-semibold' : 'text-black font-light')}>
                Referral Agreement
            </Link>
            <Link href='/terms-of-use' className={cn('text-center text-sm', pathname === '/terms-of-use' ? 'text-[#FF7A00] font-semibold' : 'text-black font-light')}>
                Terms of Use
            </Link>
        </aside>
    )
}