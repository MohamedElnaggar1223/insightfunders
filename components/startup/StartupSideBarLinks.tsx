'use client'

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function StartupSideBarLinks() 
{
    const pathname = usePathname()

    return (
        <div className='flex flex-col w-full mt-8'>
            <Link href='/' className={cn('py-4 text-sm font-Montserrat w-full', (!pathname.startsWith('/offers') && !pathname.startsWith('/manage')) ? 'bg-white font-medium text-black' : 'text-white')}>Data Rooom</Link>
            <Link href='/offers' className={cn('py-4 text-sm font-Montserrat w-full', pathname.startsWith('/offers') ? 'bg-white font-medium text-black' : 'text-white')}>Offers</Link>
            <Link href='/manage' className={cn('py-4 text-sm font-Montserrat w-full', pathname.startsWith('/manage') ? 'bg-white font-medium text-black' : 'text-white')}>Manage</Link>
        </div>
    )
}