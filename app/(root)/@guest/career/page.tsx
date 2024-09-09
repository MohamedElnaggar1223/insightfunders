import Image from "next/image";
import './career.css'
import { CSSProperties } from "react";
import Link from "next/link";

export default function CareerPage() 
{
    return (
        <section className='flex flex-col text-center items-center'>
            <div className='flex flex-col items-center justify-between gap-10 w-full py-20'>
                <h1 className='font-bold text-3xl max-w-[1100px] px-4'>
                    Our creative, global team is passionate about building tools that make business growth easier. If you're driven by innovation and eager to make an impact, come join us and help shape the future of business finance!
                </h1>
                <button className='bg-[#FF7A00] text-white font-bold rounded-[2px] lg:w-[241px] px-4 py-4 text-sm'> 
                    Current openings
                </button>
                <div className="marquee fadeout-horizontal" style={{ "--num-items": 4 } as CSSProperties}>
                    <div className="marquee-track group">
                        {/* First set of images */}
                        <div className="marquee-item group-hover:paused h-[260px]" style={{ "--item-position" :1 } as CSSProperties}>
                            <Image 
                                src="/images/career1.png" 
                                width={460} 
                                height={260} 
                                alt="Image 1" 
                                className='object-contain'
                            />
                        </div>
                        <div className="marquee-item group-hover:paused h-[260px]" style={{ "--item-position" :2 } as CSSProperties}>
                            <Image 
                                src="/images/career2.png" 
                                width={460} 
                                height={260} 
                                alt="Image 2" 
                                className='object-contain'
                            />
                        </div>
                        <div className="marquee-item group-hover:paused h-[260px]" style={{ "--item-position" :3 } as CSSProperties}>
                            <Image 
                                src="/images/career3.png" 
                                width={460} 
                                height={260} 
                                alt="Image 3" 
                                className='object-contain'
                            />
                        </div>
                        <div className="marquee-item group-hover:paused" style={{ "--item-position" :4 } as CSSProperties}>
                            <Image 
                                src="/images/career1.png" 
                                width={460} 
                                height={260} 
                                alt="Image 4" 
                                className='h-[260px]'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-[#1A1A1A] p-24 gap-12 w-full">
                <p className='text-3xl text-white'>Perks</p>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 w-full text-white'>
                    <div className="flex flex-col items-start justify-center gap-6">
                        <div className="flex gap-2 items-center justify-center">
                            <Image
                                src='/images/home.svg'
                                alt='home'
                                width={26}
                                height={18} 
                            />
                            <p className='font-normal'>
                                Remote first, flexibility is key
                            </p>
                        </div>
                        <p className='text-sm text-white/80 text-left max-w-[362px]'>
                            Work from where you want and meet up with your colleagues somewhere new each quarter.
                        </p>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-6">
                        <div className="flex gap-2 items-center justify-center">
                            <Image
                                src='/images/money.svg'
                                alt='home'
                                width={26}
                                height={18} 
                            />
                            <p className='font-normal'>
                                Competitive equity & compensation
                            </p>
                        </div>
                        <p className='text-sm text-white/80 text-left max-w-[362px]'>
                            Join a team that values your contribution and own a piece of the fastest growing fintech company in history. (Seriously.)
                        </p>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-6">
                        <div className="flex gap-2 items-center justify-center">
                            <Image
                                src='/images/health.svg'
                                alt='home'
                                width={26}
                                height={18} 
                            />
                            <p className='font-normal'>
                                Health, dental, vision benefits
                            </p>
                        </div>
                        <p className='text-sm text-white/80 text-left max-w-[362px]'>
                            For you and your dependents, so you can all feel your best without worry.
                        </p>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-6">
                        <div className="flex gap-2 items-center justify-center">
                            <Image
                                src='/images/parental.svg'
                                alt='home'
                                width={26}
                                height={18} 
                            />
                            <p className='font-normal'>
                                Parental leave, fertility, & family planning benefits
                            </p>
                        </div>
                        <p className='text-sm text-white/80 text-left max-w-[362px]'>
                            We're proud to offer meaningful programs that help you put your family first.
                        </p>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-6">
                        <div className="flex gap-2 items-center justify-center">
                            <Image
                                src='/images/calendar.svg'
                                alt='home'
                                width={26}
                                height={18} 
                            />
                            <p className='font-normal'>
                                Unlimited PTO
                            </p>
                        </div>
                        <p className='text-sm text-white/80 text-left max-w-[362px]'>
                            We really mean it when we say we want you to take time off when you need it—and we love a good company holiday.
                        </p>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-6">
                        <div className="flex gap-2 items-center justify-center">
                            <Image
                                src='/images/workstation.svg'
                                alt='home'
                                width={26}
                                height={18} 
                            />
                            <p className='font-normal'>
                                Customized workstations
                            </p>
                        </div>
                        <p className='text-sm text-white/80 text-left max-w-[362px]'>
                            Choose a comfortable work-from-home set up that makes sense for you.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col p-24 gap-12 w-full">
                <p className='text-3xl'>Shared Values</p>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 w-full'>
                    <div className="flex flex-col items-start justify-center gap-6">
                        <div className="flex gap-2 items-center justify-center">
                            <p className='font-normal'>
                                Customer-first
                            </p>
                        </div>
                        <p className='text-sm text-black/80 text-left max-w-[362px]'>
                            Insight Funders values its customers and strives to provide them with the best possible experience. We're committed to understanding and meeting the needs of our customers, and delivering products and services that exceed their expectations.
                        </p>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-6">
                        <div className="flex gap-2 items-center justify-center">
                            <p className='font-normal'>
                            Teamwork
                            </p>
                        </div>
                        <p className='text-sm text-black/80 text-left max-w-[362px]'>
                        Collaboration is essential to success. We encourage everyone to work together, share knowledge and expertise, and support each other in achieving common goals.
                        </p>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-6">
                        <div className="flex gap-2 items-center justify-center">
                            <p className='font-normal'>
                            Innovation
                            </p>
                        </div>
                        <p className='text-sm text-black/80 text-left max-w-[362px]'>
                        We're constantly looking for new ideas and approaches, and encourage everyone to be innovative and take creative ownership in their work.
                        </p>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-6">
                        <div className="flex gap-2 items-center justify-center">
                            <p className='font-normal'>
                            Excellence
                            </p>
                        </div>
                        <p className='text-sm text-black/80 text-left max-w-[362px]'>
                        We're committed to achieving the highest standard of quality in all aspects of the business. And we're dedicated to continuous improvement, striving to be the best for all of our customers.
                        </p>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-6">
                        <div className="flex gap-2 items-center justify-center">
                            <p className='font-normal'>
                            Accountability
                            </p>
                        </div>
                        <p className='text-sm text-black/80 text-left max-w-[362px]'>
                        Transparency and honesty are key pillars at Insight Funders, and we strive to earn the trust and confidence of all of customers and partners.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full bg-[#1A1A1A] p-24 gap-12 items-center">
                <p className='font-medium text-[#F2F2F2] text-2xl'>Come help us build the future. <span className='italic font-normal text-[#A3A3A3]'>We can't wait to meet you.</span></p>
                <select className='bg-white w-[283px] h-[49px] px-8 rounded-[2px] outline-none text-black/50 text-xs'>
                    <option disabled>All Departments</option>
                </select>
                <div className='flex flex-col gap-16 w-full max-w-[1512px]'>
                    <div className='flex flex-col gap-8'>
                        <p className='text-white/60 text-sm text-left'>Department</p>
                        <div className="flex items-center justify-between">
                            <p className='text-white text-sm'>Position/Title</p>
                            <Link href='/career/position'>
                                <button className='bg-white text-black rounded-3xl w-[137px] h-[40px]'>Details</button>
                            </Link>
                        </div>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <p className='text-white/60 text-sm text-left'>Department</p>
                        <div className="flex items-center justify-between">
                            <p className='text-white text-sm'>Position/Title</p>
                            <Link href='/career/position'>
                                <button className='bg-white text-black rounded-3xl w-[137px] h-[40px]'>Details</button>
                            </Link>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className='text-white text-sm'>Position/Title</p>
                            <Link href='/career/position'>
                                <button className='bg-white text-black rounded-3xl w-[137px] h-[40px]'>Details</button>
                            </Link>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className='text-white text-sm'>Position/Title</p>
                            <Link href='/career/position'>
                                <button className='bg-white text-black rounded-3xl w-[137px] h-[40px]'>Details</button>
                            </Link>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className='text-white text-sm'>Position/Title</p>
                            <Link href='/career/position'>
                                <button className='bg-white text-black rounded-3xl w-[137px] h-[40px]'>Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-[#00000099] text-left p-24'>
                Insight Funders INC is a financial technology company focused on providing data analytics and financial insights to startups and potential lenders. We facilitate connections and information sharing through our platform.
                Our platform offers the following services:<br/>
                Connection Services: We connect startups with potential lenders based on data analytics and other financial insights.
                Data and Insights: Provision of data-driven insights and analytics to assist startups and lenders in making informed decisions.
                Insight Funders INC does not provide investment advisory services or banking services. We do not manage client funds or provide investment advice.<br />
                The information provided on our platform is for informational purposes only and should not be construed as financial, legal, or investment advice. Users are responsible for their own financial decisions and should consult with qualified professionals as necessary.
                Users of our platform are responsible for ensuring that their use complies with all applicable laws and regulations. Insight Funders INC is not responsible for any decisions made based on the information provided through our services.<br />
                We are committed to protecting the privacy and confidentiality of our users. For detailed information on how we handle data, please refer to our Privacy Policy.<br />
                Insight Funders INC reserves the right to update or modify these Terms of Use at any time. Users will be notified of any significant changes through our platform.<br />
                For any inquiries or concerns regarding these Terms of Use, please contact us at Team@insightfunders.com.
            </p>
        </section>
    )
}