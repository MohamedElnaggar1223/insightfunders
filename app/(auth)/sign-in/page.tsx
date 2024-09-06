import SignIn from "@/components/auth/SignIn";
import Image from "next/image";
import Link from "next/link";

export default function SignInPage()
{
    return (
        <section className='w-full flex flex-col bg-[#1A1A1A] min-h-screen'>
            <header className='flex justify-start text-sm lg:text-base items-center py-4 px-2 lg:px-8 text-white gap-2 lg:gap-4 font-semibold'>
                <Link href='/' className='font-IntegralCF font-medium uppercase text-xs text-white'>
                    <Image
                        src='/images/iflogo.png'
                        alt='logo'
                        width={153}
                        height={35}
                    />
                </Link>
            </header>
            <div className='flex flex-col items-center justify-center gap-8 mt-24'>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <h1 className='text-2xl font-bold font-Montserrat text-white text-center'>Log in to your account</h1>
                    <h2 className='text-base text-center font-normal text-white'>Welcome back! Please enter your details.</h2>
                </div>
                <SignIn />
            </div>
        </section>
    )
}