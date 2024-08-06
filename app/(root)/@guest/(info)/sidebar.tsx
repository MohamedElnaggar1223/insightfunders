'use client'

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Sidebar()
{
    const pathname = usePathname()

    return (
        <aside className='flex flex-col items-start justify-center gap-8 w-64 sticky top-24 shadow-xl py-12 pl-16'>
            <Link href='/contact-us' className={cn('text-center text-sm', pathname === '/contact-us' ? 'text-[#FF7A00] font-semibold' : 'text-black font-light')}>
                Contact Us
            </Link>
            <Link href='/career-page' className={cn('text-center text-sm', pathname === '/career-page' ? 'text-[#FF7A00] font-semibold' : 'text-black font-light')}>
                Career Page
            </Link>
            <Link href='/faq' className={cn('text-center text-sm', pathname === '/faq' ? 'text-[#FF7A00] font-semibold' : 'text-black font-light')}>
                FAQ
            </Link>
            <Link href='/blog' className={cn('text-center text-sm', pathname === '/blog' ? 'text-[#FF7A00] font-semibold' : 'text-black font-light')}>
                Blog
            </Link>
            <Link href='/referral-program' className={cn('text-center text-sm', pathname === '/referral-program' ? 'text-[#FF7A00] font-semibold' : 'text-black font-light')}>
                Referral Program
            </Link>
            <Link href='/learning-center' className={cn('text-center text-sm', pathname === '/learning-center' ? 'text-[#FF7A00] font-semibold' : 'text-black font-light')}>
                Learning Center
            </Link>
        </aside>
    )
}