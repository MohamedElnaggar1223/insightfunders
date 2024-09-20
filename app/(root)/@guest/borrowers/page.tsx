import Link from "next/link";
import Hero from "./hero";
import Steps from "./steps";
import { Play } from "lucide-react";

export default function BorrowersPage() 
{
    return (
        <section className='flex flex-col'>
            <Hero />
            <Steps />
            <div className='flex flex-col py-20 px-8 items-center justify-center text-center bg-[#212121] gap-8'>
                <p className='leading-[2rem] font-normal text-[1.75rem] text-white'>Never Dilute Your Equity</p>
                <p className='text-white text-base font-light max-w-[1054px]'>
                    We value long-term investments that enable sustainable growth through flexible financing options. This approach eases the pressure for quick exits, allowing businesses to grow at their own pace—without giving up equity.
                </p>
                <Link href='/sign-up'>
                    <button className='px-12 bg-[#FF7A00] py-3 text-sm text-center text-white flex items-center justify-center gap-1'>
                        Apply Now{" "}<Play stroke="#fff" fill="#fff" size={14} />
                    </button>
                </Link>
            </div>
        </section>
    )
}