import { getUser } from "@/lib/actions/auth";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import SignOutButton from "./SignOutButton";

export default async function HeadersButtons()
{
    const user = await getUser()

	if(user) {
		if(user?.userInfo?.role === 'startup') {
			if(!user?.userStartUp?.EIN || !user?.userStartUp?.industry_sector || !user?.userStartUp.address || !user?.userStartUp.business_structure || !user?.userStartUp.company_name || !user?.userStartUp.email || !user?.userStartUp.phone_number || !user?.userStartUp.submitted) {
				return (
                    <Link href='/startup-details' className='flex items-center gap-8 max-lg:w-full max-lg:flex-col max-lg:gap-4'>
                        <button className='bg-white rounded-[2px] w-32 font-light text-black text-base h-9 max-lg:w-[338px]'>Continue</button>
                        <SignOutButton />
                    </Link>
                )
			}

			if(user.userStartUpOwners?.length === 0) {
				return (
                    <Link href='/startup-details' className='flex items-center gap-8 max-lg:w-full max-lg:flex-col max-lg:gap-4'>
                        <button className='bg-white rounded-[2px] w-32 font-light text-black text-base h-9 max-lg:w-[338px]'>Continue</button>
                        <SignOutButton />
                    </Link>
                )
			}
		}
        else if(user?.userInfo?.role === 'investor') {
            if(!user?.userInvestor?.submitted || !user?.userInvestor.company_email || !user?.userInvestor.company_name || !user?.userInvestor.company_email || !user?.userInvestor.company_website || !user?.userInvestor.geographies_served || !user?.userInvestor.max_facility_size || !user?.userInvestor.minimum_revenue_requirement || !user?.userInvestor.products_offered) {
                return (
                    <Link href='/investor-details' className='flex items-center gap-8 max-lg:w-full max-lg:flex-col max-lg:gap-4'>
                        <button className='bg-white rounded-[2px] w-32 font-light text-black text-base h-9 max-lg:w-[338px]'>Continue</button>
                        <SignOutButton />
                    </Link>
                )
            }
        }
	}

    return (
        <div className='gap-8 flex items-center max-lg:w-full max-lg:flex-col max-lg:gap-4'>
            <Link className='font-light text-base' href='/sign-in'>Login</Link>
            <Link href='/sign-up'>
                <button className='bg-white rounded-[2px] w-32 font-light text-black text-base h-9 max-lg:w-[338px]'>Create account</button>
            </Link>
        </div>
    )
}