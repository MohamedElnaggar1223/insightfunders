import Image from "next/image";
import Link from "next/link";

export default function Footer()
{
    return (
        <footer className='flex flex-col gap-16 py-16 px-2 lg:px-40 bg-white'>
            <div className='flex flex-col items-start justify-center gap-4'>
                <p className='text-black font-semibold'>Disclaimer</p>
                <p className='text-xs text-black leading-[20px]'>
                    Insight Funders LLC is not a registered investment adviser or registered broker-dealer and does not provide investment recommendations or advice of any kind. Any materials provided are solely for informational purposes and should not be construed as an offer to sell or the solicitation of an offer to buy any securities, or participate in any investment, nor as intended to provide, and should not be relied on for, investment, tax, financial, accounting, legal, regulatory or compliance advice. The opinions and analysis contained in any materials provided may be based on published and non-published sources prepared by unrelated third parties. While such sources are believed to be reliable and written in good faith, they have not been independently verified and no representation or warranty, expressed or implied, is made as to the accuracy, completeness, or timeliness of such information. Except where otherwise indicated, any materials provided are based on information in existence as of the date of preparation, and not as of any future date, and will not be updated or otherwise revised to reflect information that subsequently becomes available, or circumstances existing or changes occurring after the date of preparation. Prior to making an investment decision, you should (i) conduct your own investigation and analysis, (ii) carefully consider an investment’s risk factors, investment objectives and strategy, fees and expenses, and any tax consequences that may result from investing, and (iii) consult with your own investment, tax, financial, accounting, and legal advisors. The value of an investment may go down as well as up, and you may lose some or all of the money that you invest. You should ensure that you have the financial capacity to hold any investments that you make for an indefinite period of time, regardless of any resale restrictions, and only invest an amount that you can afford to lose. Neither the U.S. Securities and Exchange Commission nor any state securities commission or federal or state regulatory authority has recommended or approved any investment or reviewed or approved the accuracy or completeness of any of the information or materials provided through the Insight Funders portal. Past performance is no guarantee of future results. Investing in private credit involves a high degree of risk, including the potential for a complete loss of an investment.
                </p>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex justify-between text-sm lg:text-base items-center bg-white text-black gap-2 lg:gap-4 font-semibold'>
                    <Link href='/' className='font-IntegralCF font-medium uppercase text-xs'>
                        Insight Funders
                    </Link>

                    <div className='gap-12 font-light flex text-sm items-center max-lg:hidden'>
                        <Link href='/'>Home</Link>
                        <Link href='#'>Borrowers</Link>
                        <Link href='#'>Lenders</Link>
                        <Link href='/about-us'>About</Link>
                    </div>

                    <div className='flex gap-6'>
                        <Image
                            src='/images/linkedin.svg'
                            alt='linkedin'
                            width={15}
                            height={15} 
                        />
                        <Image
                            src='/images/instagram.svg'
                            alt='instagram'
                            width={15}
                            height={15} 
                        />
                        <Image
                            src='/images/x.svg'
                            alt='x'
                            width={15}
                            height={15} 
                        />
                    </div>
                </div>
                <div className='flex items-center justify-between pt-4 border-t border-[#98A2B3]'>
                    <p className='text-black text-center text-[10px]'>© 2024 Insight Funders. All rights reserved.</p>
                    <p className='text-black text-center text-[10px]'>General Disclosures</p>
                    <p className='text-black text-center text-[10px]'>Privacy Policy</p>
                    <p className='text-black text-center text-[10px]'>Referral Agreement</p>
                    <p className='text-black text-center text-[10px]'>Terms of Use</p>
                    <p className='text-black text-center text-[10px]'>Cookies</p>
                </div>
            </div>
        </footer>
    )
}