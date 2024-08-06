import Link from "next/link";

export default function ReferralAgreement()
{
    return (
        <section className='flex flex-col flex-1 items-start text-left gap-8'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-3xl font-semibold'>Referral Agreement</h1>
                <p>Last Updated: 22 Jan 2024</p>
            </div>
            <p className='text-sm'>Earning rewards for making referrals or as a referee is governed by this Insight Funders Referral Agreement, which also lays out the requirements that must be met in order for you to be eligible for, earn, redeem, or receive monetary prizes (“Referral Credits”). "You" refers to the person with an Insight Funders login for an Insight Funders customer in good standing who is making a referral; or to a person who was sent an Insight Funders referral and is signing up for an Insight Funders account. Only if you agree to all of these referral terms may you take part in the Insight Funders Referral Program. By sending a Referral Link or by applying for an Insight Funders account using a Referral Link, you will be deemed to have accepted and be bound by this Referral Agreement.
            Through the use of a Referral Link, this program gives you the opportunity to send referrals to Insight Funders as potential customers. The terms and conditions of the Referral Program apply to your participation. We may update or replace these Referral Program Terms at any time by posting an updated version to our website.</p>
            <div className='flex flex-col gap-4'>
                <p className='text-xl font-semibold'>1. Eligibility</p>
                <p className='text-sm'>To remain eligible to receive Referral Credits, your Insight Funders account must be open and not restricted at the time of fulfillment. Insight Funders may terminate your eligibility to receive Referral Credits at any time, for any reason, including if you violate the <Link href='/terms-of-use' className='underline'>Insight Funders Terms of Use</Link> or any agreement between you and Insight Funders or our account providers; fail to maintain your Insight Funders account in good standing; or if you violate this Referral Agreement. To be eligible to earn a Referral Credit as a referee, you must use the Referral Link that was sent to you when creating your application. If you begin the application and finish it at a later time, you may have to use the Referral Link to return the application to be eligible. Referral Links may expire without notice to you.</p>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='text-xl font-semibold'>2. Qualifying Referrals</p>
                <p className='text-sm'>You may be eligible to earn Referral Credits for each Qualifying Referral that you refer. Insight Funders will provide you with a unique URL (the “Referral Link”) that can be provided to prospective Insight Funders customers. The Referral Link should only be provided directly to your personal acquaintances. Additionally, you may not use any paid advertisement to promote the Referral Program. Insight Funders may limit access or use of the Referral Link, or establish maximum Referral Credits, at any time and in its sole discretion. You may not use a Referral Link to create a new Insight Funders account for the Referral Party, its affiliated entities, or yourself.</p>
                <p className='text-sm'>Referral Credits will only be awarded for Qualifying Referrals. A “Qualifying Referral” must meet all of the following conditions:</p>
                <ul className='list-disc list-inside font-light pl-2 mt-4 text-sm'>
                    <li>The Referred Party is not already registered, and has not previously submitted an application for an Arc Account;</li>
                    <li>The referred customer completes the registration process with Insight Funders using the referrer's Referral Link. If a referred customer registers with Insight Funders using any other link or method, the registration will not count as a Qualifying Referral;</li>
                    <li>The referred customer submits an application for an Insight Funders Cash Management account, and is approved by Insight Funders.</li>
                </ul>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='text-xl font-semibold'>3. Referral Credits</p>
                <p className='text-sm'>You may be eligible to earn Referral Credits for each Qualifying Referral that you refer. The Referral Credits changes from time to time and will be set forth on the relevant promotion page. The Referral Credits is set to the value displayed on the relevant promotion page at the time the Referral Link is clicked by the prospective customer, which may be different from the time you sent Referral Link, or the reward may have been removed by that time.<br/>
                    You will be notified if your referral has become a Qualifying Referral that earned you a Referral Credit. Referral Credits will be issued within 30 days of being earned. Your Referral Credits may expire after a certain period (e.g., your virtual card may auto-lock) and will not be re-issued.
                    Referral Credits will be provided to you in a manner stated on your referral page (for example, as a gift card or as points attributed to your Insight Funders Account) or an equivalent manner at Insight Funders discretion. Insight Funders may withhold Referral Credits that you are otherwise entitled to if we believe that you breached this Referral Agreement or other agreements with Insight Funders, if you engaged in activity that was illegal or fraudulent, or if we determine that Referral Credits were provided to you erroneously.<br />
                    You are responsible for all taxes arising from or related to Referral Credits you receive. Arc will not report any income or earnings related to Referral Credits to taxing authorities except where required under law.
                </p>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='text-xl font-semibold'>4. Restrictions</p>
                <p className='text-sm'>As part of this Referral Agreement, you agree to:</p>
                <ul className='list-disc list-inside font-light pl-2 mt-4 text-sm'>
                    <li>not represent yourself as an employee, or claim to be authorized to speak on behalf of Insight Funders;</li>
                    <li>not use automatic dialing apps, scripts, or bots to send messages to third parties; and will at all times comply with applicable laws, including but not limited to CAN-SPAM, TCPA, and state and federal privacy laws; always send Referral Links as your true self and will not impersonate or claim to represent either real or fictitious third parties;</li>
                    <li>not create or use Referral Links in the context of anything that violates individual rights, promotes violence, hate, or discrimination, or is obscene or offensive;</li>
                    <li>not infringe the privacy or intellectual property rights of third parties. Violation of this section will result in your termination from the Referral Program and forfeiture of any Referral Credits that you have not already received;</li>
                </ul>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='text-xl font-semibold'>5. Information Sharing</p>
                <p className='text-sm'>By issuing a referral to a third party under these Referral Agreement, you authorize Insight Funders to share your full name with the Referred Party for the purposes of facilitating the Insight Funders Referral Program. <br />By clicking on a Referral Link and completing an application, you authorize Insight Funders to share with the person who sent you the Referral Link certain status information about your application so that Insight Funders may communicate with the referrer about the status of their referral.</p>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='text-xl font-semibold'>6. Termination</p>
                <p className='text-sm'>Insight Funders reserves the right to suspend or terminate the Referral Program at any time or to change this Referral Agreement at any time without notice.We may modify this Referral Agreement at any time in our sole discretion by posting an updated version or by providing notice to you. We may update or change the eligibility criteria, Referral Credits limit, restrictions, and requirements at any time. Any delay by us in enforcing our rights does not constitute waiver of such rights.</p>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='text-xl font-semibold'>7. Defined Terms</p>
                <p className='text-sm'>Capitalized terms in this Insight Funders Referral Agreement will have the meaning as defined below:</p>
                <ul className='list-disc list-inside font-light pl-2 mt-4 text-sm'>
                    <li>Referred Party means a company that submits an application for an Insight Funders Account using your Referral Link.</li>
                    <li>Referral Credits means a monetary amount (such as a gift card or other monetary credit) or other benefit conferred by Insight Funders for a Qualifying Referral.</li>
                    <li>Referral Link means a URL that Insight Funders generates for you, which you can then provide to businesses you want to recommend to Insight Funders.</li>
                </ul>
                <p className='text-[#00000099]'>
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