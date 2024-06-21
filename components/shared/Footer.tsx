import Image from "next/image";
import Link from "next/link";

export default function Footer()
{
    return (
        <footer className='flex flex-col gap-16 pt-16 pb-10 px-20 bg-strong-gray'>
            <div className='w-full flex items-center justify-between'>
                <div className='flex flex-col gap-8 text-white font-semibold'>
                    <Image
                        src='/images/logo.png'
                        alt='Logo'
                        width={153}
                        height={35} 
                    /> 
                    <div className='gap-8 flex items-center'>
                        <Link href='/'>Overview</Link>
                        <Link href='/'>Features</Link>
                        <Link href='/about-us'>About</Link>
                        <Link href='/'>FAQ</Link>
                        <Link href='/'>Privacy</Link>
                    </div>
                </div>
                <div className='gap-8 flex items-center'>
                    <Image
                        src='/images/x.svg'
                        alt='x'
                        width={24}
                        height={24} 
                    />
                    <Image
                        src='/images/linkedin.svg'
                        alt='linkedin'
                        width={24}
                        height={24} 
                    />
                    <Image
                        src='/images/fb.svg'
                        alt='fb'
                        width={24}
                        height={24} 
                    />
                    <Image
                        src='/images/github.svg'
                        alt='github'
                        width={24}
                        height={24} 
                    />
                    <Image
                        src='/images/peace.svg'
                        alt='peace'
                        width={24}
                        height={24} 
                    />
                    <Image
                        src='/images/ball.svg'
                        alt='ball'
                        width={24}
                        height={24} 
                    />
                </div>
            </div>
            <div className='flex flex-col items-start justify-center gap-4'>
                <p className='text-[#98A2B3]'>Disclaimer</p>
                <p className='text-xs text-[#EAECF0] leading-[20px]'>
                    Insight Funders LLC is not a registered investment adviser or registered broker-dealer and does not provide investment recommendations or advice of any kind. Any materials provided are solely for informational purposes and should not be construed as an offer to sell or the solicitation of an offer to buy any securities, or participate in any investment, nor as intended to provide, and should not be relied on for, investment, tax, financial, accounting, legal, regulatory or compliance advice. The opinions and analysis contained in any materials provided may be based on published and non-published sources prepared by unrelated third parties. While such sources are believed to be reliable and written in good faith, they have not been independently verified and no representation or warranty, expressed or implied, is made as to the accuracy, completeness, or timeliness of such information. Except where otherwise indicated, any materials provided are based on information in existence as of the date of preparation, and not as of any future date, and will not be updated or otherwise revised to reflect information that subsequently becomes available, or circumstances existing or changes occurring after the date of preparation. Prior to making an investment decision, you should (i) conduct your own investigation and analysis, (ii) carefully consider an investment’s risk factors, investment objectives and strategy, fees and expenses, and any tax consequences that may result from investing, and (iii) consult with your own investment, tax, financial, accounting, and legal advisors. The value of an investment may go down as well as up, and you may lose some or all of the money that you invest. You should ensure that you have the financial capacity to hold any investments that you make for an indefinite period of time, regardless of any resale restrictions, and only invest an amount that you can afford to lose. Neither the U.S. Securities and Exchange Commission nor any state securities commission or federal or state regulatory authority has recommended or approved any investment or reviewed or approved the accuracy or completeness of any of the information or materials provided through the Insight Funders portal. Past performance is no guarantee of future results. Investing in private credit involves a high degree of risk, including the potential for a complete loss of an investment.
                </p>
            </div>
            <p className='text-[#D0D5DD] border-t pt-8 text-center border-[#98A2B3]'>© 2024 Insight Funders. All rights reserved.</p>
        </footer>
    )
}