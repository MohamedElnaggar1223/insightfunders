import Link from "next/link";

export default function ReferralProgram()
{
    return (
        <section className='flex flex-col flex-1 items-start text-left gap-12'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-3xl font-semibold'>Insight Funders Benefits and Referral Program</h1>
                <p>Last Updated: 22 Jan 2024</p>
            </div>
            <p className='text-sm'>Welcome to the Insight Funders Referral Program! We’re excited to offer startup founders the opportunity to join our exclusive community and earn unique incentives by referring their peers. Our platform connects companies from Series Seed to IPO with top-tier lenders, providing essential non-dilutive financing solutions. By participating in our referral program, founders can not only gain financial rewards but also become part of a vibrant network of like-minded entrepreneu</p>
            <div className='flex flex-col gap-4'>
                <p className='text-xl font-semibold'>How it Works</p>
                <div className="flex flex-col gap-1">
                    <p className='text-base pl-1'><span className='font-semibold'>1. Join the Program:</span> Sign up and receive a unique referral link.</p>
                    <p className='text-base pl-1'><span className='font-semibold'>2. Refer Your Peers:</span> Share your referral link with other startup founders who could benefit from non-dilutive financing solutions through Insight Funders.</p>
                    <p className='text-base pl-1'><span className='font-semibold'>3. Earn Rewards:</span> When a referred company signs up and secures funding through our platform, both you and the referred founder will receive exclusive rewards.</p>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='text-xl font-semibold'>Benefits</p>
                <div className="flex flex-col gap-1">
                    <p className='text-base pl-1'><span className='font-semibold'>1. Financial Incentives:</span> <ul className='list-disc list-inside font-light pl-2 mt-1 text-base ml-4'><li>Earn direct financial rewards for successful referrals. Both the referrer and the referred company can also enjoy discounts on platform services or credits toward future transactions.</li></ul></p>
                    <p className='text-base pl-1'><span className='font-semibold'>2. Exclusive Networking Opportunities:</span> <ul className='list-disc list-inside font-light pl-2 mt-1 text-base ml-4'><li>Receive invitations to high-end events, private roundtable discussions, and networking dinners with industry leaders and successful entrepreneurs. These events offer valuable opportunities to connect, learn, and grow.</li></ul></p>
                    <p className='text-base pl-1'><span className='font-semibold'>3. Personalized Gifts:</span> <ul className='list-disc list-inside font-light pl-2 mt-1 text-base ml-4'><li>As a token of appreciation, receive personalized gifts such as branded items, tech gadgets, or bespoke art pieces that resonate with our brand.</li></ul></p>
                    <p className='text-base pl-1'><span className='font-semibold'>4. Educational Resources:</span> <ul className='list-disc list-inside font-light pl-2 mt-1 text-base ml-4'><li>Access exclusive workshops, webinars, and a library of resources focused on scaling businesses, fundraising, and leadership. Learn from experts in venture debt, finance, and business strategy.</li></ul></p>
                    <p className='text-base pl-1'><span className='font-semibold'>5. Recognition and Publicity:</span> <ul className='list-disc list-inside font-light pl-2 mt-1 text-base ml-4'><li>Be featured on our platform and social media channels as one of our top referrers. This recognition highlights your startup’s achievements and contributions to the community.</li></ul></p>
                    <p className='text-base pl-1'><span className='font-semibold'>6. Access to Premium Services:</span> <ul className='list-disc list-inside font-light pl-2 mt-1 text-base ml-4'><li>Unlock premium features or services on our platform, including advanced analytics, priority support, and early access to new tools and features.</li></ul></p>
                    <p className='text-base pl-1'><span className='font-semibold'>7. Founder Community:</span> <ul className='list-disc list-inside font-light pl-2 mt-1 text-base ml-4'><li>Join our exclusive group chat and online forum to connect with other referred founders, share experiences, and receive advice. Participate in regular meet-ups and foster a sense of belonging and mutual support within our community.</li></ul></p>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='text-xl font-semibold'>How to Get Started</p>
                <div className="flex flex-col gap-1">
                    <p className='text-base pl-1'><span className='font-semibold'>1. Sign up:</span> Visit our referral program page and sign up to receive your unique referral link.</p>
                    <p className='text-base pl-1'><span className='font-semibold'>2. Share:</span> Spread the word by sharing your link with fellow founders and encouraging them to join Insight Funders.</p>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='text-xl font-semibold'>Terms and Conditions:</p>
                <div className="flex flex-col gap-1">
                    <p className='text-base pl-1'>1. Referrals must be new to Insight Funders and meet our platform’s eligibility criteria.</p>
                    <p className='text-base pl-1'>2. Rewards are subject to verification and will be awarded after the referred company successfully secures funding.</p>
                    <p className='text-base pl-1'>2. Insight Funders reserves the right to modify or discontinue the referral program at any time.</p>
                </div>
            </div>
            <p className='text-sm'>Join the Insight Funders Referral Program today and help us build a thriving community of innovative founders while enjoying exclusive benefits and rewards!</p>
            <div className='flex flex-col w-full bg-[#111111E5] text-white py-8 items-center justify-center gap-8'>
                <p className='max-w-[693px] text-center font-Montserrat'>Join the Insight Funders Referral Program today and help us build a thriving community of innovative founders while enjoying exclusive benefits and rewards!</p>
                <button className='bg-[#FF7A00] text-white font-light rounded-[2px] font-Montserrat py-3.5 text-sm px-4 max-w-[180px] md:max-w-[283px] w-full disabled:opacity-70 h-[49px]'>Join Now</button>
            </div>
        </section>
    )
}