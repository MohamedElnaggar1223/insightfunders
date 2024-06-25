import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { createClient } from "@/utils/supabase/server";
import { cn } from "@/lib/utils";

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
	const supabase = createClient()

	const { data: { user } } = await supabase.auth.getUser()

	if(!user) return (
		<html lang="en">
			<body className={cn(inter.className, 'bg-[#F9FAFB] overflow-x-hidden')}>
				{guest}
			</body>
		</html>
	)

	if(user) {
		const userInfo = await supabase.from('users').select().eq('id', user?.id!).single()
		
		if(userInfo.data && userInfo.data.role === 'startup') {
			const userStartUp = await supabase.from('startups').select().eq('user_id', user?.id!).single()
			const userStartUpOwners = await supabase.from('startups_owners').select().eq('startup_id', userStartUp.data?.id!)

			if(userStartUp.data?.submitted && (userStartUpOwners.data?.length ?? 0) > 0 && userStartUp.data?.EIN && userStartUp.data?.industry_sector && userStartUp.data.address && userStartUp.data.business_structure && userStartUp.data.company_name && userStartUp.data.email && userStartUp.data.phone_number) {
				return (
					<html lang="en">
						<body className={cn(inter.className, 'bg-[#F9FAFB] overflow-x-hidden')}>
							{startup}
						</body>
					</html>
				)
			}
		}
		else {
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
