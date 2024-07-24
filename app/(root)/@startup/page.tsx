import PlaidLink from "@/components/plaid/PlaidLink";
import SignOutBtn from "@/components/startup/SignOutBtn";
import { getUser } from "@/lib/actions/auth";

export default async function StartUpPage() 
{
    const user = await getUser()

    if(!user?.userStartUp?.accepted) {
        return (
            <div className='w-screen h-screen flex flex-col items-center justify-center text-center gap-12 max-w-[920px] mx-auto'>
                <p className='text-3xl font-semibold leading-[3rem]'>Thank you for your application. We will match you with our network of lenders and notify you once they express interest.</p>
                <SignOutBtn />
            </div>

        )
    }
    else return (
        <div className='w-screen h-screen flex flex-col items-center justify-center text-center gap-12 max-w-[920px] mx-auto'>
            <SignOutBtn />
        </div>
    ) 
}