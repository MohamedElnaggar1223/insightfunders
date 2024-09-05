import ForgotPassword from "@/components/auth/ForgotPassword";
import Link from "next/link";

export default function ForgotPasswordPage()
{
    return (
        <section className='w-full flex flex-col bg-[#1A1A1A] min-h-screen'>
            <header className='flex justify-start text-sm lg:text-base items-center py-4 px-2 lg:px-8 text-white gap-2 lg:gap-4 font-semibold'>
                <Link href='/' className='font-IntegralCF font-medium uppercase text-xs text-white'>
                    Insight Funders
                </Link>
            </header>
            <ForgotPassword />
        </section>
    )
}