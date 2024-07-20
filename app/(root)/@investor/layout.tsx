import InvestorSideBar from "@/components/investors/InvestorSideBar";
import PlaidLink from "@/components/plaid/PlaidLink";
import SignOutBtn from "@/components/startup/SignOutBtn";
import { getUser } from "@/lib/actions/auth";
import { getBankAccount } from "@/lib/actions/user";

export default async function InvestorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	const user = await getUser();

	if(!user?.userInvestor?.accepted) {
        return (
            <div className='w-screen h-screen flex flex-col items-center justify-center text-center gap-12 max-w-[920px] mx-auto'>
                <p className='text-3xl font-semibold leading-[3rem]'>Thank you for your application. We will match you with our network of lenders and notify you once they express interest.</p>
                <SignOutBtn />
            </div>

        )
    }

	const investorBankAccount = await getBankAccount(user?.user.id!)

	if(!investorBankAccount) {
        return (
            <section className='w-screen h-screen flex flex-col items-center justify-center text-center gap-12 max-w-[920px] mx-auto'>
                <h1 className='text-3xl font-semibold leading-[3rem]'>Please Connect Your Bank Account To Use InsightFunders!</h1>
                <PlaidLink user={user} />
            </section>
        )
    }
	
    return (
        <section className='min-w-screen min-h-screen flex items-center justify-center text-center bg-[#1A1A1A] gap-1'>
			<InvestorSideBar user={user} />
			{children}
        </section>
    )
}