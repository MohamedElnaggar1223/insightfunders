'use client'

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import localFont from '@next/font/local';


export default function StartupSideBarLinks() 
{
    const pathname = usePathname()

    return (
        <div className={`flex flex-col w-[90%] mt-8 gap-2  `}>
            <Link href='/' className={cn('py-4 text-sm t w-full', (!pathname.startsWith('/offers') && !pathname.startsWith('/manage')) ? 'bg-white font-medium text-black' : 'text-white')}>Data Room</Link>
            <Link href='/offers' className={cn('py-4 text-sm  w-full', pathname.startsWith('/offers') ? 'bg-white font-medium text-black' : 'text-white')}>Offers</Link>
            <Link href='/manage' className={cn('py-4 text-sm  w-full', pathname.startsWith('/manage') ? 'bg-white font-medium text-black' : 'text-white')}>Documents</Link>
        </div>
    )
}