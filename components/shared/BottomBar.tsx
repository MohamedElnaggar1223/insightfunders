'use client'
import { cn } from "@/lib/utils";
import { CircleHelp, Home, UsersRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomBar()
{
    const pathname = usePathname()

    return (
        <section className='px-4 py-3 bg-strong-gray flex items-center justify-around fixed w-full bottom-0 z-[99999] lg:hidden'>
            <Link href='/' className={cn('flex flex-col px-1.5 py-3.5 md:p-1.5 rounded-[10px] items-center justify-center gap-0.5 w-16 sm:w-20', pathname === '/' && 'bg-main-purple')}>
                <Home size={24} stroke='#fff' />
                <p className='text-white font-semibold text-xs max-sm:hidden'>Home</p>
            </Link>
            <Link href='/about-us' className={cn('flex flex-col px-1.5 py-3.5 md:p-1.5 rounded-[10px] items-center justify-center gap-0.5 w-16 sm:w-20', pathname.startsWith('/about-us') && 'bg-main-purple')}>
                <UsersRound size={24} stroke='#fff' />
                <p className='text-white font-semibold text-xs max-sm:hidden'>About us</p>
            </Link>
            <Link href='/faq' className={cn('flex flex-col px-1.5 py-3.5 md:p-1.5 rounded-[10px] items-center justify-center gap-0.5 w-16 sm:w-20', pathname.startsWith('/faq') && 'bg-main-purple')}>
                <CircleHelp size={24} stroke='#fff' />
                <p className='text-white font-semibold text-xs max-sm:hidden'>FAQ</p>
            </Link>
        </section>
    )
}