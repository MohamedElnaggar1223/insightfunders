import Image from "next/image";
import Link from "next/link";
import HeadersButtons from "./HeaderButtons";

export default function Header() 
{
    return (
        <header className='flex justify-between text-sm lg:text-base items-center py-4 bg-black px-2 lg:px-40 text-white gap-2 lg:gap-4 font-semibold absolute top-0 w-full'>
            <Link href='/' className='font-IntegralCF font-medium uppercase text-xs'>
                <Image
                    src='/images/logo.png'
                    alt='logo'
                    width={153}
                    height={35}
                />
            </Link>

            <div className='gap-12 font-light flex text-sm items-center max-lg:hidden'>
                <Link href='/'>Home</Link>
                <Link href='/borrowers'>Borrowers</Link>
                <Link href='/lenders'>Lenders</Link>
                <Link href='/about-us'>About</Link>
            </div>

            <HeadersButtons />
        </header>
    )
}