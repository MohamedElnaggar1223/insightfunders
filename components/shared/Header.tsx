import Image from "next/image";
import Link from "next/link";
import HeadersButtons from "./HeaderButtons";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Menu } from "lucide-react";

export default function Header() 
{
    return (
        <header className='flex justify-between text-sm lg:text-base items-center py-4 bg-[#1A1A1A] px-2 z-[9999999] lg:px-40 text-white gap-2 lg:gap-4 font-semibold absolute top-0 w-full'>
            <div className='md:hidden'>
                <Popover>
                    <PopoverTrigger asChild>
                        <Menu />
                    </PopoverTrigger>
                    <PopoverContent className='w-screen gap-4 border border-[#434343] bg-[#1A1A1A] flex flex-col items-center justify-center text-center mt-5 text-white p-4'>
                        <Link href='/'>Home</Link>
                        <Link href='/borrowers'>Borrowers</Link>
                        <Link href='/lenders'>Lenders</Link>
                        <Link href='/about-us'>About</Link>
                        <HeadersButtons />
                    </PopoverContent>
                </Popover>
            </div>
            <Link href='/' className='font-IntegralCF font-medium uppercase text-xs'>
                <Image
                    src='/images/logo.png'
                    alt='logo'
                    width={153}
                    height={35}
                />
            </Link>

            <div className='gap-12 font-light flex text-base items-center max-lg:hidden lg:flex-1 justify-center'>
                <Link href='/'>Home</Link>
                <Link href='/borrowers'>Borrowers</Link>
                <Link href='/lenders'>Lenders</Link>
                <Link href='/about-us'>About</Link>
            </div>

            <div className='max-lg:hidden'>
                <HeadersButtons />
            </div>
            <div className='lg:hidden' />
        </header>
    )
}