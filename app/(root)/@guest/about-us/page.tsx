import { Play } from "lucide-react";
import Image from "next/image";

export default function AboutUsPage() 
{
    return (
        <section className="flex flex-col gap-12 w-full pt-24 pb-4">
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-3xl font-bold">Built by Founders, for Founders</h1>
                <h2 className="text-center">
                    Insight Funders is the future of finance for startups, providing software companies with the customized financial products they deserve.
                </h2>
                <div className='text-[#FF7A00] font-semibold flex items-center gap-1'>
                    We're hiring{" "}<Play stroke="#FF7A00" fill="#FF7A00" size={14} />
                </div>
            </div>
            <div className="flex flex-col bg-[#1A1A1A] pb-20">
                <Image
                    src='/images/about.png' 
                    alt="About"
                    width={1538}
                    height={800}
                    quality={100}
                    className='max-h-[800px] w-full object-cover'
                />
                <div className="flex p-4 md:p-12 lg:p-32 gap-16 lg:gap-4 max-lg:flex-col">
                    <div className="flex flex-col gap-4 flex-1">
                        <p className='text-white font-bold leading-[2rem] text-[28px]'>Our Story</p>
                        <p className='text-white'>
                            Insight Founders was established by a team of experienced entrepreneurs with backgrounds in finance and technology, who have firsthand knowledge of the challenges involved in securing funding while preserving equity. Witnessing the struggles of fellow founders with the opaque and often frustrating traditional financing processes—and experiencing their own challenges with the lack of transparency and feedback from lenders—they identified a critical gap in the market. Founders often find themselves in a vulnerable position when raising capital, unsure of where to turn, spending months in meetings, and submitting documents to various lenders, only to face uncertain rejections or receive no responses at all.<br/> <br/>
                            Driven by a passion to transform this landscape, Insight Founders was created as a venture debt platform specifically designed to support early-stage startups from Seed to Series C. Our platform not only provides access to essential funding but also ensures transparency and guidance throughout the entire process. We believe that every founder deserves clear feedback and constructive insights, even if they are not initially approved for funding. This commitment to transparency and support distinguishes Insight Founders, making us a trusted partner in the startup ecosystem.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 flex-1">
                        <p className='text-white font-bold leading-[2rem] text-[28px]'>Our Mission</p>
                        <p className='text-white'>
                        At Insight Founders, our mission is to revolutionize the way startups access funding by making the process transparent, supportive, and empowering. We aim to bridge the gap between lenders and entrepreneurs, offering a platform where founders can secure venture debt without sacrificing equity. Our goal is to demystify the funding process, providing not just capital but also invaluable feedback and resources to help startups enhance their financial health and business strategies.<br/> <br/>
                        We are dedicated to building a community where founders can grow and thrive, equipped with the knowledge and tools they need to succeed. By offering complimentary due diligence checks and clear, actionable insights, we strive to make the journey to funding not only more accessible but also educational. Insight Founders is here to support you every step of the way, transforming challenges into opportunities and helping you unlock the full potential of your business.
                        </p>
                    </div>
                </div>
                <button className="bg-[#FF7A00] text-white px-4 max-w-[241px] w-full py-4 rounded-lg mx-auto">Contact Us</button>
            </div>
            <div className="flex flex-col gap-12 px-8 text-center py-32 items-center justify-center">
                <div className="flex flex-col gap-6 items-center justify-center">
                    <p className='font-medium text-[25px] leading-[2rem]'>Our customers are backed by the best</p>
                    <p className='max-w-[708px] text-center'>
                        Top VCs from both coasts trust Arc to manage the finances of their portfolio companies. We’re proud to provide a friendlier way for startups to extend their runway, accelerate their growth and maximize their capital stack. We help founders scale sooner, on their terms, and without restriction.
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
                <div className='flex gap-4 flex-wrap items-center justify-center'>
                    <div className='flex flex-col gap-2 mt-12'>
                        <Image
                            src='/images/woman1.png'
                            alt="woman1"
                            width={384}
                            height={389}
                            quality={100}
                        />
                        <div className='flex items-start justify-between gap-1 pr-2'>
                            <div className="flex flex-col">
                                <p className='text-white text-lg font-medium'>Name Here</p>
                                <p className='text-white text-lg font-light'>Position</p>
                            </div>
                            <Image
                                src='/images/in.svg'
                                alt="linkedin"
                                width={26}
                                height={26}
                                quality={100}
                            />
                        </div>
                        <p className='text-white text-sm font-light max-w-[370px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className='flex flex-col gap-2 mt-12'>
                        <Image
                            src='/images/man1.png'
                            alt="man1"
                            width={384}
                            height={389}
                            quality={100}
                        />
                        <div className='flex items-start justify-between gap-1 pr-2'>
                            <div className="flex flex-col">
                                <p className='text-white text-lg font-medium'>Name Here</p>
                                <p className='text-white text-lg font-light'>Position</p>
                            </div>
                            <Image
                                src='/images/in.svg'
                                alt="linkedin"
                                width={26}
                                height={26}
                                quality={100}
                            />
                        </div>
                        <p className='text-white text-sm font-light max-w-[370px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className='flex flex-col gap-2 mt-12'>
                        <Image
                            src='/images/man2.png'
                            alt="man2"
                            width={384}
                            height={389}
                            quality={100}
                        />
                        <div className='flex items-start justify-between gap-1 pr-2'>
                            <div className="flex flex-col">
                                <p className='text-white text-lg font-medium'>Name Here</p>
                                <p className='text-white text-lg font-light'>Position</p>
                            </div>
                            <Image
                                src='/images/in.svg'
                                alt="linkedin"
                                width={26}
                                height={26}
                                quality={100}
                            />
                        </div>
                        <p className='text-white text-sm font-light max-w-[370px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className='flex flex-col gap-2 mt-12'>
                        <Image
                            src='/images/woman1.png'
                            alt="woman1"
                            width={384}
                            height={389}
                            quality={100}
                        />
                        <div className='flex items-start justify-between gap-1 pr-2'>
                            <div className="flex flex-col">
                                <p className='text-white text-lg font-medium'>Name Here</p>
                                <p className='text-white text-lg font-light'>Position</p>
                            </div>
                            <Image
                                src='/images/in.svg'
                                alt="linkedin"
                                width={26}
                                height={26}
                                quality={100}
                            />
                        </div>
                        <p className='text-white text-sm font-light max-w-[370px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className='flex flex-col gap-2 mt-12'>
                        <Image
                            src='/images/man1.png'
                            alt="man1"
                            width={384}
                            height={389}
                            quality={100}
                        />
                        <div className='flex items-start justify-between gap-1 pr-2'>
                            <div className="flex flex-col">
                                <p className='text-white text-lg font-medium'>Name Here</p>
                                <p className='text-white text-lg font-light'>Position</p>
                            </div>
                            <Image
                                src='/images/in.svg'
                                alt="linkedin"
                                width={26}
                                height={26}
                                quality={100}
                            />
                        </div>
                        <p className='text-white text-sm font-light max-w-[370px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
                <p className='text-[#00000099] max-w-[889px] text-left mt-16'>
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
            </div>
        </section>
    )
}