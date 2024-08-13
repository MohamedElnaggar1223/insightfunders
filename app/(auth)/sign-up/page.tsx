import SignUp from "@/components/auth/SignUp";
import Image from "next/image";
import Link from "next/link";

type Props = {
    searchParams: { [key: string]: string | string[] | undefined }
}

export default function SignUpPage({ searchParams }: Props)
{
    const error = typeof searchParams.error === 'string' ? searchParams.error : undefined
    const message = typeof searchParams.message === 'string' ? searchParams.message : undefined

    return (
        <section className='w-full flex flex-col bg-[#1A1A1A] min-h-screen'>
            <header className='flex justify-start text-sm lg:text-base items-center py-4 px-2 lg:px-8 text-white gap-2 lg:gap-4 font-semibold'>
                <Link href='/' className='font-IntegralCF font-medium uppercase text-xs text-white'>
                    Insight Funders
                </Link>
            </header>
            <div className='flex flex-col items-center justify-center gap-8 mt-24'>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <h1 className='text-lg font-semibold text-white text-center'>Create an account</h1>
                </div>
                <SignUp />
            </div>
            {message && (
                <div className='flex gap-1.5 border border-[#E9D7FE] rounded-[10px] bg-light-purple w-fit items-center justify-center px-3 py-2'>
                    <p className='text-xl text-main-purple font-medium'>{message}</p>
                </div>
            )}
            {error && (
                <div className='flex gap-1.5 border border-red-500 rounded-[10px] bg-red-200 w-fit items-center justify-center px-3 py-2'>
                    <p className='text-xl text-white font-medium'>{error}</p>
                </div>
            )}
        </section>
    )
}