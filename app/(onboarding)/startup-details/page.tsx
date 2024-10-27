import Image from "next/image";
import Link from "next/link";
import StartUpDetailsContainer from "./startupdetailscontainer";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import SignOutBtn from "@/components/startup/SignOutBtn";
import { getUser } from "@/lib/actions/auth";
import { unstable_noStore } from "next/cache";
// import { Montserrat } from "next/font/google";
// Import Montserrat font
// const inter = Montserrat({ subsets: ["latin"] });

export default async function StartUpDetailsPage()
{
    // unstable_noStore()
    // const supabase = createClient()

	// const { data: { user } } = await supabase.auth.getUser()

	// if(user) {
	// 	const userInfo = await supabase.from('users').select().eq('id', user?.id!).single()
		
	// 	if(userInfo && userInfo.role === 'startup') {
    //         const userStartUp = await supabase.from('startups').select().eq('user_id', user?.id!).single()
    //         const userStartUpOwners = await supabase.from('startups_owners').select().eq('startup_id', userStartUp?.id!)
			
    //         if(userStartUpOwners?.length !== 0 && userStartUp?.EIN && userStartUp?.industry_sector && userStartUp.address && userStartUp.business_structure && userStartUp.company_name && userStartUp.email && userStartUp.phone_number) {
	// 			if(!userStartUp.submitted) return redirect('/startup-details/submit')
	// 			return redirect('/')
	// 		}
	// 	}
	// }
	// else return redirect('/')

    const user = await getUser()

    if(!user) return redirect('/')

    if(!user.userInfo.dwolla_customer_id || !user.userInfo.dwolla_customer_url || !user.userInfo.plaid_id) return redirect('/personal-details')

    if(user.userInfo.role === 'startup') {
        if(user.userStartUpOwners?.length !== 0 && user?.userStartUp?.EIN && user?.userStartUp?.industry_sector && user?.userStartUp?.address && user?.userStartUp?.business_structure && user?.userStartUp?.company_name && user?.userStartUp?.email && user?.userStartUp?.phone_number) {
            if(!user.userStartUp.stage || !user.userStartUp.recent_raise) return redirect('/startup-details/financial')
            else if(!user.userStartUp.submitted) return redirect('/startup-details/submit')
            return redirect('/')
        }
    }
    else return redirect('/')

    return (
        <section className={`w-full flex flex-col bg-[#1A1A1A] min-h-screen `} >
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
                <div className='flex flex-col items-center justify-center gap-2 mt-8'>
                    <h1 className='text-2xl font-semibold text-white text-center'>Company information</h1>
                    <h2 className='text-base text-center font-light text-white'>Give us details information about your business</h2>
                </div>
                <StartUpDetailsContainer />
            </div>
        </section>
    )
}