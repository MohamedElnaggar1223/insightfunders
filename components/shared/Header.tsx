import Image from "next/image";
import Link from "next/link";

export default function Header() 
{
    return (
        <header className='flex justify-between text-sm lg:text-base items-center py-4 bg-[#0C111D] px-2 lg:px-8 text-white gap-2 lg:gap-4 font-semibold'>
            <Image
                src='/images/logo.png'
                alt='Logo'
                width={153}
                height={35} 
            /> 

            <div className='gap-8 flex items-center max-lg:hidden'>
                <Link href='/'>Home</Link>
                <Link href='/about-us'>About us</Link>
                <Link href='/'>How it works</Link>
                <Link href='/faq'>FAQ</Link>
            </div>

            <div className='gap-8 flex items-center'>
                <Link href='/'>Login</Link>
                <button className='rounded-full px-5 py-2 bg-strong-purple'>Sign up</button>
            </div>
        </header>
    )
}