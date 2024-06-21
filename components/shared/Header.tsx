import Image from "next/image";
import Link from "next/link";

export default function Header() 
{
    return (
        <header className='flex justify-between text-base items-center pt-4 px-8 bg-transparent text-white gap-4 font-semibold'>
            <Image
                src='/images/logo.png'
                alt='Logo'
                width={153}
                height={35} 
            /> 

            <div className='gap-8 flex items-center'>
                <Link href='/'>Home</Link>
                <Link href='/'>About us</Link>
                <Link href='/'>How it works</Link>
                <Link href='/'>FAQ</Link>
            </div>

            <div className='gap-8 flex items-center'>
                <Link href='/'>Login</Link>
                <button className='rounded-full px-5 py-2 bg-strong-purple'>Sign up</button>
            </div>
        </header>
    )
}