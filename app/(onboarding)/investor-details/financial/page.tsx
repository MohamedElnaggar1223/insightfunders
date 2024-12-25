import Image from "next/image";
import Link from "next/link";
import SignOutBtn from "@/components/startup/SignOutBtn";
import { getUser } from "@/lib/actions/auth";
import { redirect } from "next/navigation";
import { unstable_noStore } from "next/cache";
import StartUpFinancialDetailsContainer from "@/components/onboarding/StartUpFinancialDetails";
import { getBankAccount } from "@/lib/actions/user";
import InvestorFinancialDetailsContainer from "@/components/onboarding/InvestorFinancialDetailsContainer";

export default async function InvestorFinancialDetails() {
  // unstable_noStore()

  const user = await getUser();

  if (!user) return redirect("/");

  if (
    !user.userInfo.dwolla_customer_id &&
    !user.userInfo.dwolla_customer_url &&
    !user.userInfo.plaid_id
  )
    return redirect("/personal-details");

  if (user.userInfo.role === "investor") {
    const bankConnected = await getBankAccount(user.user.id);

    if (
      !user?.userInvestor?.investor_type ||
      (user?.userInvestor?.investor_type === "Institution" &&
        (!user?.userInvestor.company_email ||
          !user?.userInvestor.company_name ||
          !user?.userInvestor.company_email ||
          !user?.userInvestor.company_website ||
          !user?.userInvestor.geographies_served ||
          !user?.userInvestor.max_facility_size ||
          !user?.userInvestor.minimum_revenue_requirement ||
          !user?.userInvestor.products_offered ||
          !user.userInvestor.future_investment_amount ||
          !user.userInvestor.institution_type)) ||
      (user?.userInvestor?.investor_type === "Individual" &&
        (!user?.userInvestor.future_investment_amount ||
          !user?.userInvestor.accreditation))
    ) {
      return redirect("/investor-details");
    } else if (bankConnected) {
      if (!user.userInvestor.submitted)
        return redirect("/investor-details/submit");
      else return redirect("/");
    }
  } else return redirect("/");

  return (
    <section className="w-full flex flex-col bg-[#1A1A1A] min-h-screen">
      <header className="flex justify-start text-sm lg:text-base items-center py-4 px-2 lg:px-8 text-white gap-2 lg:gap-4 font-semibold">
        <Link
          href="/"
          className="font-IntegralCF font-medium uppercase text-xs text-white"
        >
          <Image src="/images/iflogo.png" alt="logo" width={153} height={35} />
        </Link>
        <SignOutBtn />
      </header>
      <div className="flex flex-col items-center justify-center gap-8 my-12">
        <div className="flex flex-col items-center justify-center gap-4 mt-8 max-w-[640px]">
          <h1 className="text-lg font-semibold text-white text-center">
            Financial information
          </h1>
          <h2 className="text-base text-center font-light text-white">
            Give us detailed information about your finance
          </h2>
        </div>
        <InvestorFinancialDetailsContainer user={user} />
      </div>
    </section>
  );
}
