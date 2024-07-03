import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css"; 
import { createClient } from "@/utils/supabase/server";
import { cn } from "@/lib/utils";
import { getUser } from "@/lib/actions/auth";
import { unstable_noStore } from "next/cache";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Insight Funders",
  description: "Insight Funders is a platform for connecting startups with investors.",
};

export default async function RootLayout({
  children,
  guest,
  startup,
  investor,
}: Readonly<{
  children: React.ReactNode;
  guest: React.ReactNode;
  startup: React.ReactNode;
  investor: React.ReactNode;
}>) {
	// const supabase = createClient()

	// const { data: { user } } = await supabase.auth.getUser()

	// if(!user) return (
	// 	<html lang="en">
	// 		<body className={cn(inter.className, 'bg-[#F9FAFB] overflow-x-hidden')}>
	// 			{guest}
	// 		</body>
	// 	</html>
	// )

	// if(user) {
	// 	const userInfo = await supabase.from('users').select().eq('id', user?.id!).single()
		
	// 	if(userInfo && userInfo.role === 'startup') {
	// 		const userStartUp = await supabase.from('startups').select().eq('user_id', user?.id!).single()
	// 		const userStartUpOwners = await supabase.from('startups_owners').select().eq('startup_id', userStartUp?.id!)

	// 		if(userStartUp?.submitted && (userStartUpOwners?.length ? 0) > 0 && userStartUp?.EIN && userStartUp?.industry_sector && userStartUp.address && userStartUp.business_structure && userStartUp.company_name && userStartUp.email && userStartUp.phone_number) {
	// 			return (
	// 				<html lang="en">
	// 					<body className={cn(inter.className, 'bg-[#F9FAFB] overflow-x-hidden')}>
	// 						{startup}
	// 					</body>
	// 				</html>
	// 			)
	// 		}
	// 	}
	// 	else {
	// 		return (
	// 			<html lang="en">
	// 				<body className={cn(inter.className, 'bg-[#F9FAFB] overflow-x-hidden')}>
	// 					{investor}
	// 				</body>
	// 			</html>
	// 		)
	// 	}
	// }
	// unstable_noStore()

	const user = await getUser()

	if(!user) return (
		<html lang="en">
	 		<body className={cn(inter.className, 'bg-[#F9FAFB] overflow-x-hidden')}>
	 			{guest}
	 		</body>
	 	</html>
	)

	if(user?.userInfo && user?.userInfo.role === 'startup') {
		if(user?.userStartUp?.submitted && (user?.userStartUpOwners?.length ?? 0) > 0 && user?.userStartUp?.EIN && user?.userStartUp?.industry_sector && user?.userStartUp.address && user?.userStartUp.business_structure && user?.userStartUp.company_name && user?.userStartUp.email && user?.userStartUp.phone_number) {
			return (
				<html lang="en">
					<body className={cn(inter.className, 'bg-[#F9FAFB] overflow-x-hidden')}>
						{startup}
					</body>
				</html>
			)
		}
	}
	else if(user?.userInfo && user?.userInfo.role === 'investor') {
		if(user?.userInvestor?.submitted && user?.userInvestor.company_email && user?.userInvestor.company_name && user?.userInvestor.company_email && user?.userInvestor.company_website && user?.userInvestor.geographies_served && user?.userInvestor.max_facility_size && user?.userInvestor.minimum_revenue_requirement && user?.userInvestor.products_offered) {
			return (
				<html lang="en">
					<body className={cn(inter.className, 'bg-[#F9FAFB] overflow-x-hidden')}>
						{investor}
					</body>
				</html>
			)
		}
	}

	return (
		<html lang="en">
			<body className={cn(inter.className, 'bg-[#F9FAFB] overflow-x-hidden')}>
				{guest}
			</body>
		</html>
	)
}
