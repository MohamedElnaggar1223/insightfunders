import Image from "next/image";
import Link from "next/link";

export default function Article()
{
    return (
        <section className='flex flex-col flex-1 items-start text-left gap-4'>
            <div className='w-full max-w-[788px] flex bg-[#2828280D] items-center justify-between p-2.5 mx-auto'>
                <p className='text-xs font-light text-[#000000CC]'>Jan 31, 2024</p>
                <div className='flex gap-24 items-center justify-between'>
                    <p className='text-xs font-light text-black'>Share article</p>
                    <div className='flex gap-4 items-center'>
                        <Link href='https://www.linkedin.com/company/insight-funders/' target="_blank">
                            <Image
                                src='/images/in.svg'
                                alt='facebook'
                                width={15}
                                height={15}
                            />
                        </Link>
                        <Image
                            src='/images/instagram.svg'
                            alt='twitter'
                            width={15}
                            height={15}
                        />
                        <Image
                            src='/images/x.svg'
                            alt='linkedin'
                            width={15}
                            height={15}
                        />
                    </div>
                </div>
            </div>
            <div className="flex w-full items-center justify-center">
                <h1 className='text-3xl font-bold text-left mt-4'>The Founders’ Guide to Incorporating in Delaware in 2024</h1>
            </div>
            <div className='flex w-full relative items-start justify-center mt-12 gap-8'>
                <div className='flex sticky top-12 max-md:hidden'>
                    <Image
                        src='/images/finance.png'
                        alt='logo'
                        width={384}
                        height={349}
                    />
                </div>
                <p className='max-w-[788px] flex-1'>
                    Capital marketplaces have quickly taken over the conversation in Finance teams across the board in recent times. They promise to streamline the process and bring competitive terms with minimal effort, but do they deliver? That depends.
                    Having spoken with hundreds of founders and lenders over the past year, most providers over-promise and under-deliver. The single biggest complaint from lenders: the deal-flow quality is poor and inconsistently presented; the biggest complaint from founders: the terms they receive come with a much higher cost of capital and warrant coverage than they expected, the process is lengthy, and the term sheets are riddled with restrictive covenants. To say that both parties were unhappy is an understatement.
                    What separates a “good” capital marketplace from a “not-so-good” one?
                    Answer: it depends on whether you’re the borrower or the lender.
                    Borrowers (startups) want access to a narrowed selection of lenders based on their unique needs and financial profile. They want to self-select which lenders they talk to, and which lenders receive their financial information. They also want to connect their financial accounts once and have the system pull out and make sense of the relevant information and display it in a standardized virtual data room in real time.
                    In addition, they want to minimize the back-and-forth required in a traditional diligence process, and when multiple competing terms are provided, they want to be able to compare them side by side. Most importantly, they want access to a capital markets expert whom they can turn to with questions and look to for guidance throughout the process.
                    In short, they want to have a seamless experience that’s purpose-built for them.
                    Lenders want access to pre-qualified deal flow that matches their credit box. They want standardized disclosure docs that can be executed in one click, and virtual data rooms with all of the necessary financial information prepopulated. They also want standardized deposit account control agreements (DACA), and loan management software for their executed deals.
                    Like the borrowers, they also want to minimize the back-and-forth required in a traditional diligence process. They also want the opportunity to provide competitive terms that are in line with their peers, without having to race to the bottom.
                    In short, lenders want to be matched with top-decile startups that are a fit for the offerings that they provide.
                    So back to the question, what separates a  “good” capital marketplace from a “great” one?
                    That’s simple, the strength of the network on both sides—supply AND demand. On the demand side, it has access to lenders on both sides of the coin: banks that provide a best-in-class cost of capital, and non-bank credit funds that provide more flexible terms to enable borrowers to select the terms that make the most sense for their needs.
                    On the supply side, it’s access to deals that are programmatically qualified for capital and matched based on their unique credit box, so lenders don’t have to waste time talking to borrowers who weren’t a good fit in the first place.
                    By now, you’re probably wondering how you’d actually go about determining the strength of a capital marketplace’s network.
                    Well, if you’re a startup, you can straight up ask them which lenders are in their network, and if you’re a lender, you can ask about the financial profile of the average borrower. But good luck with that—most providers will paint a more rosy picture than the reality. And you’ll realize it, only after you onboarded and tried to run your first deal through the platform.
                    Or…
                    You can sign up for Capital Markets.
                    We’ve mapped and onboarded lenders across the entire private universe, who are contractually obligated to provide terms to qualified startups within a specified period—to ensure deals aren’t drawn out and to ensure that it isn’t a race to the bottom.
                    We’ve also streamlined the onboarding process for borrowers—with a few clicks they can connect all of their financial data, spin up a secure virtual data room, and get matched with a curated selection of funding options (and lenders) based on their financials and capital needs.  
                    Pretty cool, right?
                    That’s not even the best part – it's completely free for both lenders and borrowers to sign up. Borrowers only pay a small “finders fee” if they accept the terms they receive through the platform.
                </p>
                <div className='flex-1 max-w-[295px] border-l border-black pl-4 flex flex-col sticky top-12 max-md:hidden'>
                    <p className='text-sm text-left'>Our latest articles</p>
                    <div className='flex flex-col divide-y divide-black'>
                        <div className='flex gap-4 py-10 items-center justify-start'>
                            <Image
                                src='/images/learninglogo.png'
                                alt='article'
                                width={44}
                                height={44}
                                className='rounded-full'
                            />
                            <p className='text-xs font-medium'>The Founders’ Guide to Incorporating in Delaware in 2024</p>
                        </div>
                        <div className='flex gap-4 py-10 items-center justify-start'>
                            <Image
                                src='/images/learninglogo.png'
                                alt='article'
                                width={44}
                                height={44}
                                className='rounded-full'
                            />
                            <p className='text-xs font-medium'>The Founders’ Guide to Incorporating in Delaware in 2024</p>
                        </div>
                        <div className='flex gap-4 py-10 items-center justify-start'>
                            <Image
                                src='/images/learninglogo.png'
                                alt='article'
                                width={44}
                                height={44}
                                className='rounded-full'
                            />
                            <p className='text-xs font-medium'>The Founders’ Guide to Incorporating in Delaware in 2024</p>
                        </div>
                        <div className='flex gap-4 py-10 items-center justify-start'>
                            <Image
                                src='/images/learninglogo.png'
                                alt='article'
                                width={44}
                                height={44}
                                className='rounded-full'
                            />
                            <p className='text-xs font-medium'>The Founders’ Guide to Incorporating in Delaware in 2024</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-8 py-8">
                <p className='text-xl font-semibold text-left'>Similar blog posts</p>
                <div className='flex gap-4 w-full items-start justify-center max-md:flex-col'>
                    <Link href='/blog/article' className='flex flex-col items-start gap-2'>
                        <div className='relative min-h-[349px] flex'>
                            <Image
                                src='/images/finance.png'
                                alt='logo'
                                width={384}
                                height={349}
                            />
                            <div className='rounded-full border-8 border-[#FAFAFA] absolute -bottom-3 -right-3 flex items-center justify-center'>
                                <Image
                                    src='/images/learninglogo.png'
                                    alt='logo'
                                    width={62}
                                    height={62}
                                />
                            </div>
                        </div>
                        <p className='text-xs font-light text-[#00000099]'>Jan 31, 2024</p>
                        <p className='text-xs font-medium text-black max-w-[447px]'>The Founders’ Guide to Incorporating in Delaware in 2024</p> 
                        <p className='text-xs font-normal text-black max-w-[447px]'>Delaware has long been favored for the incorporation of startups over the past few decades. It offers a business-friendly legal system, tax benefits, and established corporate precedence. However, it also comes with an elevated risk of double taxation, and potential non-compliance with local regulations. In this guide, we explore the benefits and drawbacks of incorporating in Delaware, how the incorporation works, what it costs, and more.</p> 
                    </Link>
                    <Link href='/blog/article' className='flex flex-col items-start gap-2'>
                        <div className='relative min-h-[349px] flex'>
                            <Image
                                src='/images/office.png'
                                alt='logo'
                                width={384}
                                height={349}
                            />
                            <div className='rounded-full border-8 border-[#FAFAFA] absolute -bottom-3 -right-3 flex items-center justify-center'>
                                <Image
                                    src='/images/learninglogo.png'
                                    alt='logo'
                                    width={62}
                                    height={62}
                                />
                            </div>
                        </div>
                        <p className='text-xs font-light text-[#00000099]'>Jan 31, 2024</p>
                        <p className='text-xs font-medium text-black max-w-[447px]'>The Founders’ Guide to Incorporating in Delaware in 2024</p> 
                        <p className='text-xs font-normal text-black max-w-[447px]'>Delaware has long been favored for the incorporation of startups over the past few decades. It offers a business-friendly legal system, tax benefits, and established corporate precedence. However, it also comes with an elevated risk of double taxation, and potential non-compliance with local regulations. In this guide, we explore the benefits and drawbacks of incorporating in Delaware, how the incorporation works, what it costs, and more.</p> 
                    </Link>
                    <Link href='/blog/article' className='flex flex-col items-start gap-2'>
                        <div className='relative min-h-[349px] flex'>
                            <Image
                                src='/images/lender.png'
                                alt='logo'
                                width={384}
                                height={349}
                            />
                            <div className='rounded-full border-8 border-[#FAFAFA] absolute -bottom-3 -right-3 flex items-center justify-center'>
                                <Image
                                    src='/images/learninglogo.png'
                                    alt='logo'
                                    width={62}
                                    height={62}
                                />
                            </div>
                        </div>
                        <p className='text-xs font-light text-[#00000099]'>Jan 31, 2024</p>
                        <p className='text-xs font-medium text-black max-w-[447px]'>The Founders’ Guide to Incorporating in Delaware in 2024</p> 
                        <p className='text-xs font-normal text-black max-w-[447px]'>Delaware has long been favored for the incorporation of startups over the past few decades. It offers a business-friendly legal system, tax benefits, and established corporate precedence. However, it also comes with an elevated risk of double taxation, and potential non-compliance with local regulations. In this guide, we explore the benefits and drawbacks of incorporating in Delaware, how the incorporation works, what it costs, and more.</p> 
                    </Link>
                </div>
            </div>
        </section>
    )
}