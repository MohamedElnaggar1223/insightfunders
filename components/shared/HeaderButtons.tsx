import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function HeadersButtons()
{
    const supabase = createClient()

	const { data: { user } } = await supabase.auth.getUser()

	if(user) {
		const userDetails = await supabase.from('users').select().eq('id', user?.id!).single()
		if(userDetails.data?.role === 'startup') {
			const userStartUp = await supabase.from('startups').select().eq('user_id', user?.id!).single()
			if(!userStartUp.data?.EIN || !userStartUp.data?.industry_sector || !userStartUp.data.address || !userStartUp.data.business_structure || !userStartUp.data.company_name || !userStartUp.data.email || !userStartUp.data.phone_number || !userStartUp.data.submitted) {
				return (
                    <Link href='/startup-details'>
                        <button className='rounded-full px-5 py-2 bg-strong-purple'>Continue</button>
                    </Link>
                )
			}

			const userStartUpOwners = await supabase.from('startups_owners').select().eq('startup_id', userStartUp.data.id)
			if(userStartUpOwners.data?.length === 0) {
				return (
                    <Link href='/startup-details'>
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