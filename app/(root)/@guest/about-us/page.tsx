import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutUsPage() 
{
    return (
        <section className="flex flex-col gap-12 w-full pt-24 pb-4">
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-3xl font-bold">Built by Founders, for Founders</h1>
                <h2 className="text-center max-w-[800px]">
                    Insight Funders is revolutionizing business financing by delivering customized private credit solutions tailored to the unique needs of high-growth companies
                </h2>
                <Link href='/career' className='text-[#FF7A00] font-semibold flex items-center gap-1'>
                    We're hiring{" "}<Play stroke="#FF7A00" fill="#FF7A00" size={14} />
                </Link>
            </div>
            <div className="flex flex-col bg-[#1A1A1A] pb-20">
                <Image
                    src='/images/about-us.png' 
                    alt="About"
                    width={1538}
                    height={800}
                    quality={100}
                    className='max-h-[800px] w-full object-cover'
                    loading="lazy"
                />
                <div className="flex p-4 md:px-12 md:pt-12 pb-8 lg:pt-32 lg:px-32 gap-16 lg:gap-4 max-lg:flex-col">
                    <div className='flex-1 flex items-center justify-center'>
                        <Image
                            src='/images/ourstoryabout.png'
                            alt="About"
                            width={484}
                            height={600}
                            quality={100}
                        />
                    </div>
                    <div className="flex items-center justify-center text-left flex-col gap-4 flex-1">
                        <p className='text-white font-bold leading-[2rem] text-[28px] md:w-[394px]'>Our Story</p>
                        <p className='text-white text-xl md:max-w-[394px]'>
                            Insight Funders was built by experienced entrepreneurs with deep roots in finance and technology, who understand the challenges of securing funding while preserving equity. We’ve experienced the frustrations firsthand—months of meetings, endless paperwork, and the uncertainty of opaque, costly, and time-consuming processes.
                            We knew there had to be a better way. That’s why we created Insight Funders, a platform designed to provide growing startups with fast, transparent access to the funding they need to grow.
                        </p>
                    </div>
                </div>
                <div className="flex p-4 md:px-12 md:pb-12 pt-8 lg:pb-32 lg:px-32 gap-16 lg:gap-4 max-lg:flex-col">
                    <div className="flex items-center justify-center text-left flex-col gap-4 flex-1">
                        <p className='text-white font-bold leading-[2rem] text-[28px] md:w-[394px]'>Our Mission</p>
                        <p className='text-white text-xl md:max-w-[394px]'>
                            At Insight Funders, our mission is to revolutionize how companies access credit. We bridge the gap between private lenders and entrepreneurs, offering a platform where founders can secure funding without sacrificing equity. By outsourcing your credit needs to us, we streamline the process and make it easier to access the capital you need.
                            We aim to be your lifelong credit partner, supporting you at every stage of your business’s growth. When banks turn you away, we make funding more accessible, helping you unlock your business’s full potential.
                        </p>
                    </div>
                    <div className='flex-1 flex items-center justify-center'>
                        <Image
                            src='/images/ourmissionabout.png'
                            alt="About"
                            width={484}
                            height={600}
                            quality={100}
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-12 px-8 text-center py-32 items-center justify-center">
                <div className="flex flex-col gap-6 items-center justify-center">
                    <p className='font-medium text-[25px] leading-[2rem]'>Our customers are backed by the best</p>
                    <p className='max-w-[708px] text-center'>
                        Top investors trust Insight Funders to manage the private credit needs of their portfolio companies. We’re proud to offer startups a smarter way to extend their runway, accelerate growth, and optimize their capital structure. We empower founders to scale on their terms, with the flexibility they need to succeed.
                    </p>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <div className='flex w-full gap-2 flex-wrap'>
                        <div className='flex flex-1 max-md:flex-wrap gap-2 max-xl:justify-center xl:justify-end'>
                            <div className='bg-white w-[283px] h-[121px] shadow-md flex items-center justify-center'>
                                <Image
                                    src='/images/sequoia.png'
                                    alt="sequoia"
                                    width={178}
                                    height={72}
                                    quality={100}
                                />
                            </div>
                            <div className='bg-white w-[283px] h-[121px] shadow-md flex items-center justify-center'>
                                <Image
                                    src='/images/accel.png'
                                    alt="accel"
                                    width={87}
                                    height={29}
                                    quality={100}
                                />
                            </div>
                        </div>
                        <div className='flex flex-1 max-md:flex-wrap gap-2 max-xl:justify-center'>
                            <div className='bg-white w-[283px] h-[121px] shadow-md flex items-center justify-center'>
                                <Image
                                    src='/images/khosla.png'
                                    alt="khosla"
                                    width={220}
                                    height={116}
                                    quality={100}
                                />
                            </div>
                            <div className='bg-white w-[283px] h-[121px] shadow-md flex items-center justify-center'>
                                <Image
                                    src='/images/bessemer.png'
                                    alt="bessemer"
                                    width={193}
                                    height={50}
                                    quality={100}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex w-full gap-2 flex-wrap'>
                        <div className='flex flex-1 max-md:flex-wrap gap-2 max-xl:justify-center xl:justify-end'>
                            <div className='bg-white w-[283px] h-[121px] shadow-md flex items-center justify-center'>
                                <Image
                                    src='/images/lightspeed.png'
                                    alt="lightspeed"
                                    width={226}
                                    height={118}
                                    quality={100}
                                />
                            </div>
                            <div className='bg-white w-[283px] h-[121px] shadow-md flex items-center justify-center'>
                                <Image
                                    src='/images/combinator.png'
                                    alt="combinator"
                                    width={226}
                                    height={65}
                                    quality={100}
                                />
                            </div>
                        </div>
                        <div className='flex flex-1 max-md:flex-wrap gap-2 max-xl:justify-center'>
                            <div className='bg-white w-[283px] h-[121px] shadow-md flex items-center justify-center'>
                                <Image
                                    src='/images/a16z.png'
                                    alt="a16z"
                                    width={173}
                                    height={33}
                                    quality={100}
                                />
                            </div>
                            <div className='bg-white w-[283px] h-[121px] shadow-md flex items-center justify-center'>
                                <Image
                                    src='/images/generalCatalyst.png'
                                    alt="generalCatalyst"
                                    width={212}
                                    height={110}
                                    quality={100}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col px-8 md:px-12 gap-2 py-24 bg-[#1A1A1A]">
                <p className='text-white font-medium text-2xl text-center'>Meet our team</p>
                <div className='flex gap-4 max-md:flex-wrap items-center justify-center'>
                    <div className='flex flex-col gap-2 mt-12 h-[480px]'>
                        <Image
                            src='/images/zoe.png'
                            alt="zoe"
                            width={384}
                            height={389}
                            quality={100}
                            className='rounded-[8px]'
                        />
                        <div className='flex items-start justify-between gap-1 pr-2'>
                            <div className="flex flex-col">
                                <p className='text-white text-lg font-medium'>Zoe Zou</p>
                                <p className='text-white text-lg font-light'>Founder & CEO</p>
                            </div>
                            <Link href='https://www.linkedin.com/in/yizou-zoe/' target="_blank">
                                <Image
                                    src='/images/in.svg'
                                    alt="linkedin"
                                    width={26}
                                    height={26}
                                    quality={100}
                                />
                            </Link>
                        </div>
                        <p className='text-white text-sm font-light max-w-[370px]'>Serial entrepreneur and finance professional, passionate about advancing finance through AI and dedicated to helping founders succeed.</p>
                    </div>
                    <div className='flex flex-col gap-2 mt-12 h-[480px]'>
                        <Image
                            src='/images/yazan.png'
                            alt="yazan"
                            width={384}
                            height={389}
                            quality={100}
                            className='rounded-[8px]'
                        />
                        <div className='flex items-start justify-between gap-1 pr-2'>
                            <div className="flex flex-col">
                                <p className='text-white text-lg font-medium'>Yazan Zeeshan Ali</p>
                                <p className='text-white text-lg font-light'>CTO</p>
                            </div>
                            <Link href='https://www.linkedin.com/in/yazan-data-scientist/' target="_blank">
                                <Image
                                    src='/images/in.svg'
                                    alt="linkedin"
                                    width={26}
                                    height={26}
                                    quality={100}
                                />
                            </Link>
                        </div>
                        <p className='text-white text-sm font-light max-w-[370px]'>Serial entrepreneur with experience leading technical teams and an early adopter of emerging technologies.</p>
                    </div>
                    <div className='flex flex-col gap-2 mt-12 h-[480px]'>
                        <Image
                            src='/images/hubert.png'
                            alt="hubert"
                            width={384}
                            height={389}
                            quality={100}
                            className='rounded-[8px]'
                        />
                        <div className='flex items-start justify-between gap-1 pr-2'>
                            <div className="flex flex-col">
                                <p className='text-white text-lg font-medium'>Hubert Dzieciol</p>
                                <p className='text-white text-lg font-light'>Senior Engineer</p>
                            </div>
                            <Link href='https://www.linkedin.com/in/hubertdz/' target="_blank">
                                <Image
                                    src='/images/in.svg'
                                    alt="linkedin"
                                    width={26}
                                    height={26}
                                    quality={100}
                                />
                            </Link>
                        </div>
                        <p className='text-white text-sm font-light max-w-[370px]'>Technologist with a passion for solving complex problems and building innovative ML solutions.</p>
                    </div>
                    <div className='flex flex-col gap-2 mt-12 h-[480px]'>
                        <Image
                            src='/images/weiyee.png'
                            alt="weiyee"
                            width={384}
                            height={389}
                            quality={100}
                            className='rounded-[8px]'
                        />
                        <div className='flex items-start justify-between gap-1 pr-2'>
                            <div className="flex flex-col">
                                <p className='text-white text-lg font-medium'>Weiyee In</p>
                                <p className='text-white text-lg font-light'>CIO</p>
                            </div>
                            <Link href='https://www.linkedin.com/in/weiyee/' target="_blank">
                                <Image
                                    src='/images/in.svg'
                                    alt="linkedin"
                                    width={26}
                                    height={26}
                                    quality={100}
                                />
                            </Link>
                        </div>
                        <p className='text-white text-sm font-light max-w-[370px]'>With over 30 years on Wall Street and as a venture investor, passionate about strategic leadership and innovative tech solutions.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-12 px-4 md:px-8 lg:px-16 text-center pt-32 pb-4 items-center justify-center bg-[#FAFAFA]">
                <p className='font-medium text-[25px] leading-[2rem]'>Unrivaled team of tech & finance leaders, ready to scale</p>
                <div className='flex gap-4 flex-wrap items-center justify-center'>
                    <div className='bg-white w-[283px] h-[121px] shadow-md flex items-center justify-center'>
                        <Image
                            src='/images/blackstone.png'
                            alt="blackstone"
                            width={142}
                            height={57}
                            quality={100}
                        />
                    </div>
                    <div className='bg-white w-[283px] h-[121px] shadow-md flex items-center justify-center'>
                        <Image
                            src='/images/deepmind.png'
                            alt="deepmind"
                            width={173}
                            height={58}
                            quality={100}
                        />
                    </div>
                    <div className='bg-white w-[283px] h-[121px] shadow-md flex items-center justify-center'>
                        <Image
                            src='/images/goldman.png'
                            alt="goldman"
                            width={122}
                            height={63}
                            quality={100}
                        />
                    </div>
                    <div className='bg-white w-[283px] h-[121px] shadow-md flex items-center justify-center'>
                        <Image
                            src='/images/jpMorgan.png'
                            alt="jpMorgan"
                            width={165}
                            height={42}
                            quality={100}
                        />
                    </div>
                    <div className='bg-white w-[283px] h-[121px] shadow-md flex items-center justify-center'>
                        <Image
                            src='/images/morganStanley.png'
                            alt="morganStanley"
                            width={192}
                            height={100}
                            quality={100}
                        />
                    </div>
                    <div className='bg-white w-[283px] h-[121px] shadow-md flex items-center justify-center'>
                        <Image
                            src='/images/microsoft.png'
                            alt="microsoft"
                            width={177}
                            height={51}
                            quality={100}
                        />
                    </div>
                    <div className='bg-white w-[283px] h-[121px] shadow-md flex items-center justify-center'>
                        <Image
                            src='/images/spGlobal.png'
                            alt="spGlobal"
                            width={163}
                            height={86}
                            quality={100}
                        />
                    </div>
                </div>
            </div>
            <div className="flex w-full bg-[#1A1A1A] items-center justify-center p-24">
                <p className='text-[#ffffff99] max-w-[889px] text-left'>
                    Insight Funders INC is a financial technology company focused on providing data analytics and financial insights to startups and potential lenders. We facilitate connections and information sharing through our platform.
                    Our platform offers the following services:<br/>
                    Connection Services: We connect startups with potential lenders based on data analytics and other financial insights.
                    Data and Insights: Provision of data-driven insights and analytics to assist startups and lenders in making informed decisions.
                    Insight Funders INC does not provide investment advisory services or banking services. We do not manage client funds or provide investment advice.<br />
                    The information provided on our platform is for informational purposes only and should not be construed as financial, legal, or investment advice. Users are responsible for their own financial decisions and should consult with qualified professionals as necessary.
                    Users of our platform are responsible for ensuring that their use complies with all applicable laws and regulations. Insight Funders INC is not responsible for any decisions made based on the information provided through our services.<br />
                    We are committed to protecting the privacy and confidentiality of our users. For detailed information on how we handle data, please refer to our Privacy Policy.<br />
                    Insight Funders INC reserves the right to update or modify these Terms of Use at any time. Users will be notified of any significant changes through our platform.<br />
                    For any inquiries or concerns regarding these Terms of Use, please contact us at <span className='font-semibold text-[#FF7A00]'>Team@insightfunders.com</span>.
                </p>
            </div>
        </section>
    )
}