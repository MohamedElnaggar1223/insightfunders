import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Faq()
{
    return (
        <section className='flex flex-col flex-1 items-start text-left gap-4'>
            <h1 className='text-3xl font-semibold mb-8'>Frequently Asked Questions</h1>
            <h2 className='text-xl font-medium text-black'>General Information</h2>
            <Accordion type="multiple" className="w-full">
                <AccordionItem value="item-1" className='bg-black text-white py-0.5'>
                    <AccordionTrigger className='font-medium text-base lg:text-xl px-2 lg:px-8'>Who is eligible to borrow?</AccordionTrigger>
                    <AccordionContent className='flex flex-col text-black bg-[#D2D2D2] p-8 text-sm'>
                        {"We serve companies at all stages that are revenue-generating. Any company with significant cash reserves and a strong financial profile is eligible to borrow through Insight Funders."}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className='bg-black text-white py-0.5'>
                    <AccordionTrigger className='font-medium text-base lg:text-xl px-2 lg:px-8'>What is working capital?</AccordionTrigger>
                    <AccordionContent className='flex flex-col text-black bg-[#D2D2D2] p-8 text-sm'>
                        {"Insight Funders Venture Debt term sheets range from $1 million for early stage startups to $100M for Growth stage companies. If you're a startup that has either raised venture capital and / or is revenue generating, we have a growth capital solution for you. Insight Funders pre-qualification questionnaire takes <1 minute to complete. Get started today."}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className='bg-black text-white py-0.5'>
                    <AccordionTrigger className='font-medium text-base lg:text-xl px-2 lg:px-8'>What is venture debt?</AccordionTrigger>
                    <AccordionContent className='flex flex-col text-black bg-[#D2D2D2] p-8 text-sm'>
                        {"Insight Funders Venture Debt term sheets range from $1 million for early stage startups to $100M for Growth stage companies. If you're a startup that has either raised venture capital and / or is revenue generating, we have a growth capital solution for you. Insight Funders pre-qualification questionnaire takes <1 minute to complete. Get started today."}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <h2 className='text-xl font-medium text-black'>Loan Application Process</h2>
            <Accordion type="multiple" className="w-full">
                <AccordionItem value="item-1" className='bg-black text-white py-0.5'>
                    <AccordionTrigger className='font-medium text-base lg:text-xl px-2 lg:px-8'>How do I apply for a loan through Insight Funders?</AccordionTrigger>
                    <AccordionContent className='flex flex-col text-black bg-[#D2D2D2] p-8 text-sm'>
                        {"We serve companies at all stages that are revenue-generating. Any company with significant cash reserves and a strong financial profile is eligible to borrow through Insight Funders."}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className='bg-black text-white py-0.5'>
                    <AccordionTrigger className='font-medium text-base lg:text-xl px-2 lg:px-8'>What information do I need to provide during the loan application process?</AccordionTrigger>
                    <AccordionContent className='flex flex-col text-black bg-[#D2D2D2] p-8 text-sm'>
                        {"Insight Funders Venture Debt term sheets range from $1 million for early stage startups to $100M for Growth stage companies. If you're a startup that has either raised venture capital and / or is revenue generating, we have a growth capital solution for you. Insight Funders pre-qualification questionnaire takes <1 minute to complete. Get started today."}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className='bg-black text-white py-0.5'>
                    <AccordionTrigger className='font-medium text-base lg:text-xl px-2 lg:px-8'>How long does it take to get approved for a loan?</AccordionTrigger>
                    <AccordionContent className='flex flex-col text-black bg-[#D2D2D2] p-8 text-sm'>
                        {"Insight Funders Venture Debt term sheets range from $1 million for early stage startups to $100M for Growth stage companies. If you're a startup that has either raised venture capital and / or is revenue generating, we have a growth capital solution for you. Insight Funders pre-qualification questionnaire takes <1 minute to complete. Get started today."}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <h2 className='text-xl font-medium text-black'>Loan Terms and Options</h2>
            <Accordion type="multiple" className="w-full">
                <AccordionItem value="item-1" className='bg-black text-white py-0.5'>
                    <AccordionTrigger className='font-medium text-base lg:text-xl px-2 lg:px-8'>What are the interest rates and fees associated with loans?</AccordionTrigger>
                    <AccordionContent className='flex flex-col text-black bg-[#D2D2D2] p-8 text-sm'>
                        {"We serve companies at all stages that are revenue-generating. Any company with significant cash reserves and a strong financial profile is eligible to borrow through Insight Funders."}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className='bg-black text-white py-0.5'>
                    <AccordionTrigger className='font-medium text-base lg:text-xl px-2 lg:px-8'>Can I apply for multiple types of financing at the same time?</AccordionTrigger>
                    <AccordionContent className='flex flex-col text-black bg-[#D2D2D2] p-8 text-sm'>
                        {"Insight Funders Venture Debt term sheets range from $1 million for early stage startups to $100M for Growth stage companies. If you're a startup that has either raised venture capital and / or is revenue generating, we have a growth capital solution for you. Insight Funders pre-qualification questionnaire takes <1 minute to complete. Get started today."}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className='bg-black text-white py-0.5'>
                    <AccordionTrigger className='font-medium text-base lg:text-xl px-2 lg:px-8'>What happens after I apply for a loan?</AccordionTrigger>
                    <AccordionContent className='flex flex-col text-black bg-[#D2D2D2] p-8 text-sm'>
                        {"Insight Funders Venture Debt term sheets range from $1 million for early stage startups to $100M for Growth stage companies. If you're a startup that has either raised venture capital and / or is revenue generating, we have a growth capital solution for you. Insight Funders pre-qualification questionnaire takes <1 minute to complete. Get started today."}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <h2 className='text-xl font-medium text-black'>Refinancing and Repayment</h2>
            <Accordion type="multiple" className="w-full">
                <AccordionItem value="item-1" className='bg-black text-white py-0.5'>
                    <AccordionTrigger className='font-medium text-base lg:text-xl px-2 lg:px-8'>What if I’ve already taken venture debt from another provider?</AccordionTrigger>
                    <AccordionContent className='flex flex-col text-black bg-[#D2D2D2] p-8 text-sm'>
                        {"We serve companies at all stages that are revenue-generating. Any company with significant cash reserves and a strong financial profile is eligible to borrow through Insight Funders."}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className='bg-black text-white py-0.5'>
                    <AccordionTrigger className='font-medium text-base lg:text-xl px-2 lg:px-8'>Can I refinance a loan through Insight Funders?</AccordionTrigger>
                    <AccordionContent className='flex flex-col text-black bg-[#D2D2D2] p-8 text-sm'>
                        {"Insight Funders Venture Debt term sheets range from $1 million for early stage startups to $100M for Growth stage companies. If you're a startup that has either raised venture capital and / or is revenue generating, we have a growth capital solution for you. Insight Funders pre-qualification questionnaire takes <1 minute to complete. Get started today."}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className='bg-black text-white py-0.5'>
                    <AccordionTrigger className='font-medium text-base lg:text-xl px-2 lg:px-8'>What is the repayment process like?</AccordionTrigger>
                    <AccordionContent className='flex flex-col text-black bg-[#D2D2D2] p-8 text-sm'>
                        {"Insight Funders Venture Debt term sheets range from $1 million for early stage startups to $100M for Growth stage companies. If you're a startup that has either raised venture capital and / or is revenue generating, we have a growth capital solution for you. Insight Funders pre-qualification questionnaire takes <1 minute to complete. Get started today."}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <h2 className='text-xl font-medium text-black'>Data Security and Compliance</h2>
            <Accordion type="multiple" className="w-full">
                <AccordionItem value="item-1" className='bg-black text-white py-0.5'>
                    <AccordionTrigger className='font-medium text-base lg:text-xl px-2 lg:px-8'>How is my data protected during the loan application process?</AccordionTrigger>
                    <AccordionContent className='flex flex-col text-black bg-[#D2D2D2] p-8 text-sm'>
                        {"We serve companies at all stages that are revenue-generating. Any company with significant cash reserves and a strong financial profile is eligible to borrow through Insight Funders."}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className='bg-black text-white py-0.5'>
                    <AccordionTrigger className='font-medium text-base lg:text-xl px-2 lg:px-8'>How does Insight Funders handle lender verification?</AccordionTrigger>
                    <AccordionContent className='flex flex-col text-black bg-[#D2D2D2] p-8 text-sm'>
                        {"Insight Funders Venture Debt term sheets range from $1 million for early stage startups to $100M for Growth stage companies. If you're a startup that has either raised venture capital and / or is revenue generating, we have a growth capital solution for you. Insight Funders pre-qualification questionnaire takes <1 minute to complete. Get started today."}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <h2 className='text-xl font-medium text-black'>Investor Information</h2>
            <Accordion type="multiple" className="w-full">
                <AccordionItem value="item-1" className='bg-black text-white py-0.5'>
                    <AccordionTrigger className='font-medium text-base lg:text-xl px-2 lg:px-8'>How do I become an investor on the Insight Funders platform?</AccordionTrigger>
                    <AccordionContent className='flex flex-col text-black bg-[#D2D2D2] p-8 text-sm'>
                        {"We serve companies at all stages that are revenue-generating. Any company with significant cash reserves and a strong financial profile is eligible to borrow through Insight Funders."}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <p className='text-[#00000099] mt-24'>
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