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
	// 	const userStartUp = await supabase.from('startups').select(`*,user:user_id(*)`).eq('user_id', user?.id!).single()
	// 	//@ts-expect-error user
	// 	if((userStartUp.data?.user.role) === 'startup') {
	// 		if(!userStartUp.data?.EIN || !userStartUp.data?.industry_sector || !userStartUp.data.address || !userStartUp.data.business_structure || !userStartUp.data.company_name || !userStartUp.data.email || !userStartUp.data.phone_number) {
	// 			return redirect('/startup-details')
	// 		}

	// 		const userStartUpOwners = await supabase.from('startups_owners').select().eq('startup_id', userStartUp.data.id)
	// 		if(userStartUpOwners.data?.length === 0) {
	// 			return redirect('/startup-details')
	// 		}

	// 		if(!userStartUp.data.submitted) {
	// 			return redirect('/startup-details/submit')
	// 		}
	// 	}
		
	// 	return redirect('/')
	// }

	const user = await getUser()

	// if(!user) return redirect('/')

	if((user?.userInfo.data.role) === 'startup') {
		if(!user?.userStartUp?.data?.EIN || !user?.userStartUp.data?.industry_sector || !user?.userStartUp.data.address || !user?.userStartUp.data.business_structure || !user?.userStartUp.data.company_name || !user?.userStartUp.data.email || !user?.userStartUp.data.phone_number) {
			return redirect('/startup-details')
		}

		if(user?.userStartUpOwners?.data?.length === 0) {
			return redirect('/startup-details')
		}

		if(!user?.userStartUp.data.submitted) {
			return redirect('/startup-details/submit')
		}

		return redirect('/')
	}

	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	)
}
