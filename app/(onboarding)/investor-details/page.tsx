import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import SignOutBtn from "@/components/startup/SignOutBtn";
import { getUser } from "@/lib/actions/auth";
import { unstable_noStore } from "next/cache";
import InvestorDetailsContainer from "./investordetailscontainer";
import { getBankAccount } from "@/lib/actions/user";

export default async function StartUpDetailsPage()
{
    const user = await getUser()

    if(!user) return redirect('/')
        
    if(!user.userInfo.dwolla_customer_id || !user.userInfo.dwolla_customer_url || !user.userInfo.plaid_id) return redirect('/personal-details')

    if(user.userInfo.role === 'investor') {
		if(user?.userInvestor?.company_email && user?.userInvestor.company_name && user?.userInvestor.company_email && user?.userInvestor.company_website && user?.userInvestor.geographies_served && user?.userInvestor.max_facility_size && user?.userInvestor.minimum_revenue_requirement && user?.userInvestor.products_offered) {
            const bankConnected = await getBankAccount(user.user.id)

            if(!bankConnected) return redirect('/investor-details/financial')
            else if(!user.userInvestor.submitted) return redirect('/investor-details/submit')
            return redirect('/')
        }
    }
    else return redirect('/')

    return (
        <section className='w-full flex flex-col bg-[#1A1A1A] min-h-screen'>
            <header className='flex justify-start text-sm lg:text-base items-center py-4 px-2 lg:px-8 text-white gap-2 lg:gap-4 font-semibold'>
                <Link href='/' className='font-IntegralCF font-medium uppercase text-xs text-white'>
                    Insight Funders
                </Link>
                <SignOutBtn />
            </header>
            <div className='flex flex-col items-center justify-center gap-8 my-12'>
                <div className='flex flex-col items-center justify-center gap-4 mt-8'>
                    <h1 className='text-lg font-semibold text-white text-center'>Company information</h1>
                    <h2 className='text-base text-center font-light text-white'>Give us details information about your business</h2>
                </div>
                <InvestorDetailsContainer />
            </div>
        </section>
    )
}