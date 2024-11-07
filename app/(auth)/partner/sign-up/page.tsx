import SignUp from "@/components/auth/Partner/SignUp";
import Image from "next/image";
import Link from "next/link";

type Props = {
    searchParams: { [key: string]: string | string[] | undefined }
}

export default function PartnerSignUpPage({ searchParams }: Props)
{
    const error = typeof searchParams.error === 'string' ? searchParams.error : undefined
    const message = typeof searchParams.message === 'string' ? searchParams.message : undefined

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
            <div className='flex flex-col items-center justify-center gap-1 mt-24'>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <h1 className='text-2xl  font-semibold text-white text-center'>Create an account</h1>
                </div>
                <SignUp />
            </div>
        </section>
    )
}