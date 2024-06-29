import { createClient } from '@/utils/supabase/server';
import '../globals.css'
import { Inter } from "next/font/google";
import { redirect } from 'next/navigation';
import { getUser } from '@/lib/actions/auth';

export const metadata = {
  title: 'Insight Funders',
  description: 'Insight Funders is a platform for connecting startups with investors.',
}

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
	// const supabase = createClient()

	// const { data: { user } } = await supabase.auth.getUser()

	// if(user) {
	// 	const userInfo = await supabase.from('users').select().eq('id', user?.id!).single()
		
	// 	if(userInfo.data && userInfo.data.role === 'startup') {
	// 		const userStartUp = await supabase.from('startups').select().eq('user_id', user?.id!).single()
	// 		const userStartUpOwners = await supabase.from('startups_owners').select().eq('startup_id', userStartUp?.data?.id!)
			
	// 		if(userStartUp.data?.submitted && userStartUpOwners.data?.length !== 0 && userStartUp.data?.EIN && userStartUp.data?.industry_sector && userStartUp.data.address && userStartUp.data.business_structure && userStartUp.data.company_name && userStartUp.data.email && userStartUp.data.phone_number) {
	// 			return redirect('/')
	// 		}
	// 	}
	// 	else if(userInfo.data && userInfo.data.role === 'investor') {
	// 		const userInvestor = await supabase.from('investors').select().eq('user_id', user?.id!).single()

	// 		// if()
	// 	}
	// }
	// else return redirect('/')

	const user = await getUser()

    if(!user) return redirect('/')

    if(user.userInfo.data.role === 'startup') {
		if(user?.userStartUp?.data?.submitted && user?.userStartUpOwners.data?.length !== 0 && user.userStartUp.data?.EIN && user.userStartUp.data?.industry_sector && user.userStartUp.data.address && user.userStartUp.data.business_structure && user.userStartUp.data.company_name && user.userStartUp.data.email && user.userStartUp.data.phone_number) {
			return redirect('/')
		}
	}
	else if(user.userInfo.data.role === 'investor') {
		if(user?.userInvestor?.data?.submitted && user?.userInvestor.data.company_email && user?.userInvestor.data.company_name && user?.userInvestor.data.company_email && user?.userInvestor.data.company_website && user?.userInvestor.data.geographies_served && user?.userInvestor.data.max_facility_size && user?.userInvestor.data.minimum_revenue_requirement && user?.userInvestor.data.products_offered) {
			return redirect('/')
		}
	}


	return (
	<html lang="en">
		<body className={inter.className}>{children}</body>
	</html>
	)
}
