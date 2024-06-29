import { getUser } from "@/lib/actions/auth";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function HeadersButtons()
{
    const user = await getUser()

	if(user) {
		if(user?.userInfo.data?.role === 'startup') {
			if(!user?.userStartUp?.data?.EIN || !user?.userStartUp.data?.industry_sector || !user?.userStartUp.data.address || !user?.userStartUp.data.business_structure || !user?.userStartUp.data.company_name || !user?.userStartUp.data.email || !user?.userStartUp.data.phone_number || !user?.userStartUp.data.submitted) {
				return (
                    <Link href='/startup-details'>
                        <button className='rounded-full px-5 py-2 bg-strong-purple'>Continue</button>
                    </Link>
                )
			}

			if(user.userStartUpOwners.data?.length === 0) {
				return (
                    <Link href='/startup-details'>
                        <button className='rounded-full px-5 py-2 bg-strong-purple'>Continue</button>
                    </Link>
                )
			}
		}
        else if(user?.userInfo.data?.role === 'investor') {
            if(!user?.userInvestor?.data?.submitted || !user?.userInvestor.data.company_email || !user?.userInvestor.data.company_name || !user?.userInvestor.data.company_email || !user?.userInvestor.data.company_website || !user?.userInvestor.data.geographies_served || !user?.userInvestor.data.max_facility_size || !user?.userInvestor.data.minimum_revenue_requirement || !user?.userInvestor.data.products_offered) {
                return (
                    <Link href='/investor-details'>
                        <button className='rounded-full px-5 py-2 bg-strong-purple'>Continue</button>
                    </Link>
                )
            }
        }
	}

    return (
        <div className='gap-8 flex items-center'>
            <Link href='/sign-in'>Login</Link>
            <Link href='/sign-up'>
                <button className='rounded-full px-5 py-2 bg-strong-purple'>Sign up</button>
            </Link>
        </div>
    )
}