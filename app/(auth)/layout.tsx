import { createClient } from '@/utils/supabase/server';
import '../globals.css'
// import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import { redirect } from 'next/navigation';
import { getUser } from '@/lib/actions/auth';

export const metadata = {
  title: 'Insight Funders',
  description: 'Insight Funders is a platform for connecting startups with investors.',
}

const inter = Montserrat({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
	// const supabase = createClient()

	// const { data: { user } } = await supabase.auth.getUser()

	// if(user) {
	// 	const userStartUp = await supabase.from('startups').select(`*,user:user_id(*)`).eq('user_id', user?.id!).single()
	// 	//@ts-expect-error user
	// 	if((userStartUp?.user.role) === 'startup') {
	// 		if(!userStartUp?.EIN || !userStartUp?.industry_sector || !userStartUp.address || !userStartUp.business_structure || !userStartUp.company_name || !userStartUp.email || !userStartUp.phone_number) {
	// 			return redirect('/startup-details')
	// 		}

	// 		const userStartUpOwners = await supabase.from('startups_owners').select().eq('startup_id', userStartUp.id)
	// 		if(userStartUpOwners?.length === 0) {
	// 			return redirect('/startup-details')
	// 		}

	// 		if(!userStartUp.submitted) {
	// 			return redirect('/startup-details/submit')
	// 		}
	// 	}
		
	// 	return redirect('/')
	// }

	const user = await getUser()

	// if(!user) return redirect('/')

	if((user?.userInfo.role) === 'startup') {
		if(!user?.userStartUp?.EIN || !user?.userStartUp?.industry_sector || !user?.userStartUp.address || !user?.userStartUp.business_structure || !user?.userStartUp.company_name || !user?.userStartUp.email || !user?.userStartUp.phone_number) {
			return redirect('/startup-details')
		}

		if(user?.userStartUpOwners?.length === 0) {
			return redirect('/startup-details')
		}

		if(!user?.userStartUp.submitted) {
			return redirect('/startup-details/submit')
		}

		return redirect('/')
	}
	else if((user?.userInfo.role) === 'investor') {
		if(!user?.userInvestor?.investor_type || (user?.userInvestor?.investor_type === 'Institution' && (!user?.userInvestor?.submitted || !user?.userInvestor.company_email || !user?.userInvestor.company_name || !user?.userInvestor.company_email || !user?.userInvestor.company_website || !user?.userInvestor.geographies_served || !user?.userInvestor.max_facility_size || !user?.userInvestor.minimum_revenue_requirement || !user?.userInvestor.products_offered || !user.userInvestor.future_investment_amount || !user.userInvestor.institution_type)) || (user?.userInvestor?.investor_type === 'Individual' && (!user?.userInvestor.future_investment_amount || !user?.userInvestor.accreditation || !user?.userInvestor?.submitted))) {
			return redirect('/investor-details')
		}

		return redirect('/')
	}

	return (
		<html lang="en">
			<body className={inter.className}>
				{children}
			</body>
		</html>
	)
}
