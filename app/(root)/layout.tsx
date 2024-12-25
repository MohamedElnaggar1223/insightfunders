import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { getUser } from "@/lib/actions/auth";
import localFont from "next/font/local";
import React from "react";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--Montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Insight Funders",
  description:
    "Insight Funders is a platform for connecting startups with investors.",
};

const logoFont = localFont({
  src: "../../public/fonts/Fontspring-DEMO-integralcf-medium.otf",
  display: "swap",
  variable: "--IntegralCF",
});

export default async function RootLayout({
  children,
  guest,
  startup,
  investor,
  partner,
}: Readonly<{
  children: React.ReactNode;
  guest: React.ReactNode;
  startup: React.ReactNode;
  investor: React.ReactNode;
  partner: React.ReactNode;
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

  const user = await getUser();

  console.log({ user });

  if (!user)
    return (
      <html lang="en" className="antialiased">
        <body className={cn(inter.className, "bg-[#F9FAFB] overflow-x-hidden")}>
          {guest}
        </body>
      </html>
    );

  if (user?.userInfo && user?.userInfo.role === "startup") {
    //   (user?.userStartUpOwners?.length ?? 0) > 0 &&
    if (
      user?.userStartUp?.submitted &&
      user?.userStartUp?.EIN &&
      user?.userStartUp?.industry_sector &&
      user?.userStartUp.address &&
      user?.userStartUp.business_structure &&
      user?.userStartUp.company_name &&
      user?.userStartUp.email &&
      user?.userStartUp.phone_number
    ) {
      return (
        <html lang="en" className="antialiased">
          <body
            className={cn(
              inter.className,
              "bg-[#1A1A1A] overflow-x-hidden",
              logoFont.variable,
              montserrat.variable
            )}
          >
            {startup}
          </body>
        </html>
      );
    }
  } else if (user?.userInfo && user?.userInfo.role === "investor") {
    if (
      user?.userInvestor?.submitted &&
      user?.userInvestor.company_email &&
      user?.userInvestor.company_name &&
      user?.userInvestor.company_email &&
      user?.userInvestor.company_website &&
      user?.userInvestor.geographies_served &&
      user?.userInvestor.max_facility_size &&
      user?.userInvestor.minimum_revenue_requirement &&
      user?.userInvestor.products_offered
    ) {
      return (
        <html lang="en" className="antialiased">
          <body
            className={cn(
              inter.className,
              "bg-[#F9FAFB] overflow-x-hidden",
              logoFont.variable,
              montserrat.variable
            )}
          >
            {investor}
          </body>
        </html>
      );
    }
  } else if (user?.userInfo && user?.userInfo.role === "partner") {
    return (
      <html lang="en" className="antialiased">
        <body
          className={cn(
            inter.className,
            "bg-[#F9FAFB] overflow-x-hidden",
            logoFont.variable,
            montserrat.variable
          )}
        >
          {partner}
        </body>
      </html>
    );
  }

  return (
    <html lang="en" className="antialiased">
      <body className={cn(inter.className, "bg-[#F9FAFB] overflow-x-hidden")}>
        {guest}
      </body>
    </html>
  );
}
