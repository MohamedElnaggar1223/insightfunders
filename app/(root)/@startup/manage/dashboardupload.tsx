// ManageLink.js
'use client'

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function ManageLink() {
    const pathname = usePathname()

    return (
        <Link
            href='/manage'
            className={cn(
                'py-3 px-4  text-sm inline-block w-auto ml-auto bg-[#FF7A00] rounded-[5px] text-[14px]', // inline-block and ml-auto to align right
                pathname.startsWith('/manage') ? 'bg-white font-medium text-black' : 'text-white'
            )}
        >
            Complete Profile
        </Link>
    )
}
