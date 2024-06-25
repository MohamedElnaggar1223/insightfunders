import SignIn from "@/components/auth/SignIn";
import Image from "next/image";
import Link from "next/link";

export default function SignInPage()
{
    return (
        <section className='w-full flex flex-col'>
            <header className='flex justify-between text-sm lg:text-base items-center py-4 px-2 lg:px-8 text-main-gray gap-2 lg:gap-4 font-semibold'>
                <Link href='/'>
                    <Image
                        src='/images/logoBlack.png'
                        alt='Logo'
                        width={153}
                        height={35} 
                    /> 
                </Link>

                <p className='font-semibold'>
                    Don't have an account? 
                    {" "}
                    <Link href='/sign-up' className='text-main-purple'>
                        Sign up
                    </Link>
                </p>
            </header>
            <div className='flex flex-col items-center justify-center gap-8 mt-24'>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <h1 className='text-3xl font-semibold text-center'>Log in to your account</h1>
                    <h2 className='text-base text-center text-main-gray'>Welcome back! Please enter your details.</h2>
                </div>
                <SignIn />
            </div>
        </section>
    )
}