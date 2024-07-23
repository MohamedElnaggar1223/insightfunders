import Image from "next/image";
import Link from "next/link";
import StartUpDetailsContainer from "./startupdetailscontainer";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import SignOutBtn from "@/components/startup/SignOutBtn";
import { getUser } from "@/lib/actions/auth";
import { unstable_noStore } from "next/cache";

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
            if(!user.userStartUp.submitted) return redirect('/startup-details/submit')
            return redirect('/')
        }
    }
    else return redirect('/')

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
                            <div className='rounded-full flex items-center justify-center w-8 h-8 border-2 border-[#D0D5DD]'>
                                <div className='bg-[#D0D5DD] h-2.5 w-2.5 rounded-full' />
                            </div>
                        </div>
                    </div>
                    <div className='flex w-full items-center justify-between text-center'>
                        <div className='flex flex-col gap-1 items-center justify-center text-center w-1/3'>
                            <p className='font-semibold text-[#7F56D9]'>Personal Information</p>
                            <p className='text-[rgba(158,119,237,0.75)] font-medium'>Add your personal information</p>
                        </div>
                        <div className='flex flex-col gap-1 items-center justify-center text-center w-1/3'>
                            <p className='font-semibold text-[#7F56D9]'>Company Information</p>
                            <p className='text-[rgba(158,119,237,0.75)] font-medium'>Set up your company's information</p>
                        </div>
                        <div className='flex flex-col gap-1 items-center justify-center text-center w-1/3'>
                            <p className='font-semibold text-black'>Financial Information</p>
                            <p className='text-main-gray font-medium'>Submit your financial information</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center gap-4 mt-8'>
                    <h1 className='text-3xl font-semibold text-center'>Company information</h1>
                    <h2 className='text-base text-center text-main-gray'>Give us details information about your business</h2>
                </div>
                <StartUpDetailsContainer />
            </div>
        </section>
    )
}