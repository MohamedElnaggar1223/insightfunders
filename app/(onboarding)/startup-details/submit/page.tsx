import Image from "next/image";
import Link from "next/link";
import StartUpSubmitApplication from "./submitapplication";
import SignOutBtn from "@/components/startup/SignOutBtn";

export default function SubmitStartUpDetailsPage()
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

                <SignOutBtn />
            </header>
            <div className='flex flex-col items-center justify-center gap-8 my-12'>
                <div className='flex flex-col items-center justify-center gap-4 w-screen max-w-[1200px]'>
                    <div className='flex w-full items-center justify-center'>
                        <div className='flex-[0.5] flex items-center justify-end'>
                            <div className='rounded-full flex items-center justify-center w-8 h-8 bg-[#7F56D9] shadow-[0px_0px_0px_4px_rgba(158,119,237,0.24)]'>
                                <div className='bg-white h-2.5 w-2.5 rounded-full' />
                            </div>
                        </div>
                        <div className='flex-[0.85] bg-[#7F56D9] flex min-h-[3px] max-h-[3px]' />
                        <div className='rounded-full flex items-center justify-center w-8 h-8 bg-[#7F56D9] shadow-[0px_0px_0px_4px_rgba(158,119,237,0.24)]'>
                            <div className='bg-white h-2.5 w-2.5 rounded-full' />
                        </div>
                        <div className='flex-[0.85] bg-[#7F56D9] flex min-h-[3px] max-h-[3px]' />
                        <div className='flex-[0.5] flex items-center justify-start'>
                            <div className='rounded-full flex items-center justify-center w-8 h-8 bg-[#7F56D9] shadow-[0px_0px_0px_4px_rgba(158,119,237,0.24)]'>
                                <div className='bg-white h-2.5 w-2.5 rounded-full' />
                            </div>
                        </div>
                    </div>
                    <div className='flex w-full items-center justify-between text-center'>
                        <div className='flex flex-col gap-1 items-center justify-center text-center w-1/3'>
                            <p className='font-semibold text-[#7F56D9]'>Sign up</p>
                            <p className='text-[rgba(158,119,237,0.75)] font-medium'>Create Your Account</p>
                        </div>
                        <div className='flex flex-col gap-1 items-center justify-center text-center w-1/3'>
                            <p className='font-semibold text-[#7F56D9]'>Company Information</p>
                            <p className='text-[rgba(158,119,237,0.75)] font-medium'>Set up your company's information</p>
                        </div>
                        <div className='flex flex-col gap-1 items-center justify-center text-center w-1/3'>
                            <p className='font-semibold text-[#7F56D9]'>Submit</p>
                            <p className='text-[rgba(158,119,237,0.75)] font-medium'>Submit you application for review</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center gap-4 mt-8 max-w-[640px]'>
                    <h1 className='text-3xl font-semibold text-center'>Submit your initial application for InsightFunder's review</h1>
                    <h2 className='text-base text-center text-main-gray'>Following this step, your initial application will be submitted, and you'll have access to InsightFunder's secure Dashboard to connect your financials</h2>
                </div>
                <StartUpSubmitApplication />
            </div>
        </section>
    )
}