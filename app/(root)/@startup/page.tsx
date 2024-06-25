import SignOutBtn from "@/components/startup/SignOutBtn";

export default function StartUpPage() 
{
    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center text-center gap-12'>
            <p className='text-5xl font-semibold'>We got your application we will get back to you soon!</p>
            <SignOutBtn />
        </div>
    ) 
}