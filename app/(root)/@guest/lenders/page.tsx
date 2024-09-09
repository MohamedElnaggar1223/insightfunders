import Link from "next/link";
import Hero from "./hero";
import Steps from "./steps";

export default function BorrowersPage() 
{
    return (
        <section className='flex flex-col'>
            <Hero />
            <Steps />
            <div className='flex flex-col py-20 px-8 items-center justify-center text-center bg-[#212121] gap-8'>
                <p className='leading-[2rem] font-bold text-[1.75rem] text-white'>Private credit opportunities find you</p>
                <p className='text-white text-sm font-light max-w-[1240px]'>
                    Investing in private credit offers consistent returns, less exposure to market volatility, and the potential for higher, risk-adjusted returns. With shorter lock-up periods and diversification benefits, private credit is an attractive option for investors seeking stability and growth in their portfolios
                </p>
                <Link href='/sign-up'>
                    <button className='px-12 bg-[#FF7A00] py-3 text-sm text-center text-white'>
                        Apply Now
                    </button>
                </Link>
            </div>
        </section>
    )
}