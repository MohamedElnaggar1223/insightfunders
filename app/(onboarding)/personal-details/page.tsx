import PersonalDetails from "@/components/onboarding/PersonalDetails"
import SignOutBtn from "@/components/startup/SignOutBtn"
import { getUser } from "@/lib/actions/auth"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"

export default async function PersonalDetailsPage()
{
    const user = await getUser()

    if(!user) return redirect('/')
    
    if(user.userInfo.dwolla_customer_id && user.userInfo.dwolla_customer_url && user.userInfo.plaid_id) {
        if(user.userInfo.role === 'startup') return redirect('/startup-details')
        else return redirect('/investor-details')
    }
    

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
                <SignOutBtn />
            </header>
            <div className='flex flex-col items-center justify-center gap-8 my-12'>
                <div className='flex flex-col items-center justify-center gap-4 mt-8'>
                    <h1 className='text-lg font-semibold text-white text-center'>Personal Information</h1>
                    <h2 className='text-base text-center font-light text-white'>Submit detailed information about yourself</h2>
                </div>
                <PersonalDetails />
            </div>
        </section>
    )
}