import SignOutBtn from "@/components/startup/SignOutBtn";

export default function InvestorPage() 
{
    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center text-center gap-12 max-w-[920px] mx-auto'>
            <p className='text-3xl font-semibold leading-[3rem]'>Thank you for your application. We will match you with our network of lenders and notify you once they express interest.</p>
            <SignOutBtn />
        </div>
    ) 
}