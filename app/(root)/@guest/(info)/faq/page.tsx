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
                        {"Working capital is a type of financing that supports startups in their day-to-day operations. At Insight Funders, the amount of working capital we provide, and the terms we offer, are algorithmically calculated based on your startup's financial health, ensuring you get tailored and competitive rates."}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className='bg-black text-white py-0.5'>
                    <AccordionTrigger className='font-medium text-base lg:text-xl px-2 lg:px-8'>What is venture debt?</AccordionTrigger>
                    <AccordionContent className='flex flex-col text-black bg-[#D2D2D2] p-8 text-sm'>
                        {"Venture debt is a term loan specifically designed for startups that have raised venture capital within the past year. Unlike traditional commercial loans, which focus heavily on cash flow, Insight Funders' venture debt is primarily based on the strength of your VC investors, the capabilities of your founding team, and your startup’s growth potential."}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <h2 className='text-xl font-medium text-black'>Loan Application Process</h2>
            <Accordion type="multiple" className="w-full">
                <AccordionItem value="item-1" className='bg-black text-white py-0.5'>
                    <AccordionTrigger className='font-medium text-base lg:text-xl px-2 lg:px-8'>How do I apply for a loan through Insight Funders?</AccordionTrigger>
                    <AccordionContent className='flex flex-col text-black bg-[#D2D2D2] p-8 text-sm'>
                        {"You can start your application by signing up on our platform, providing basic information about your company, and selecting the type of financing you need. Our platform will guide you through the process."}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className='bg-black text-white py-0.5'>
                    <AccordionTrigger className='font-medium text-base lg:text-xl px-2 lg:px-8'>What information do I need to provide during the loan application process?</AccordionTrigger>
                    <AccordionContent className='flex flex-col text-black bg-[#D2D2D2] p-8 text-sm'>
                        {"Typically, you'll need to provide financial statements, details about your funding history, and information about your investors. The specific requirements may vary depending on the loan type."}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className='bg-black text-white py-0.5'>
                    <AccordionTrigger className='font-medium text-base lg:text-xl px-2 lg:px-8'>How long does it take to get approved for a loan?</AccordionTrigger>
                    <AccordionContent className='flex flex-col text-black bg-[#D2D2D2] p-8 text-sm'>
                        {"The approval time varies based on the type of loan and the completeness of your application. However, Insight Funders uses AI-driven assessments to provide decisions quickly, often within days."}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <h2 className='text-xl font-medium text-black'>Loan Terms and Options</h2>
            <Accordion type="multiple" className="w-full">
                <AccordionItem value="item-1" className='bg-black text-white py-0.5'>
                    <AccordionTrigger className='font-medium text-base lg:text-xl px-2 lg:px-8'>What are the interest rates and fees associated with loans?</AccordionTrigger>
                    <AccordionContent className='flex flex-col text-black bg-[#D2D2D2] p-8 text-sm'>
                        {"Interest rates and fees depend on the specific loan product and your financial profile. Insight Funders offers competitive, transparent pricing with no hidden costs."}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className='bg-black text-white py-0.5'>
                    <AccordionTrigger className='font-medium text-base lg:text-xl px-2 lg:px-8'>Can I apply for multiple types of financing at the same time?</AccordionTrigger>
                    <AccordionContent className='flex flex-col text-black bg-[#D2D2D2] p-8 text-sm'>
                        {"Yes, you can explore and apply for various financing options through Insight Funders to find the best fit for your business needs."}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className='bg-black text-white py-0.5'>
                    <AccordionTrigger className='font-medium text-base lg:text-xl px-2 lg:px-8'>What happens after I apply for a loan?</AccordionTrigger>
                    <AccordionContent className='flex flex-col text-black bg-[#D2D2D2] p-8 text-sm'>
                        {"After applying, our team and technology review your application. If approved, you'll receive tailored loan offers, and you can choose the one that best suits your needs."}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <h2 className='text-xl font-medium text-black'>Refinancing and Repayment</h2>
            <Accordion type="multiple" className="w-full">
                <AccordionItem value="item-1" className='bg-black text-white py-0.5'>
                    <AccordionTrigger className='font-medium text-base lg:text-xl px-2 lg:px-8'>What if I’ve already taken venture debt from another provider?</AccordionTrigger>
                    <AccordionContent className='flex flex-col text-black bg-[#D2D2D2] p-8 text-sm'>
                        {"It's common for companies to refinance their venture debt with a new provider. If you've recently completed an equity round or plan to do so soon, Insight Funders may be able to offer better terms or restructure your existing loan to align with your current financial needs."}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className='bg-black text-white py-0.5'>
                    <AccordionTrigger className='font-medium text-base lg:text-xl px-2 lg:px-8'>Can I refinance a loan through Insight Funders?</AccordionTrigger>
                    <AccordionContent className='flex flex-col text-black bg-[#D2D2D2] p-8 text-sm'>
                        {"Yes, if you have an existing loan and are looking for better terms, you can explore refinancing options on our platform."}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className='bg-black text-white py-0.5'>
                    <AccordionTrigger className='font-medium text-base lg:text-xl px-2 lg:px-8'>What is the repayment process like?</AccordionTrigger>
                    <AccordionContent className='flex flex-col text-black bg-[#D2D2D2] p-8 text-sm'>
                        {"Repayment terms vary based on the loan type. Insight Funders ensures you have a clear understanding of your repayment schedule and offers flexible options to meet your financial needs."}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <h2 className='text-xl font-medium text-black'>Data Security and Compliance</h2>
            <Accordion type="multiple" className="w-full">
                <AccordionItem value="item-1" className='bg-black text-white py-0.5'>
                    <AccordionTrigger className='font-medium text-base lg:text-xl px-2 lg:px-8'>How is my data protected during the loan application process?</AccordionTrigger>
                    <AccordionContent className='flex flex-col text-black bg-[#D2D2D2] p-8 text-sm'>
                        {"Insight Funders uses bank-level security and blockchain technology to ensure your data is encrypted and secure. Your information is only shared with lenders if you provide explicit consent."}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className='bg-black text-white py-0.5'>
                    <AccordionTrigger className='font-medium text-base lg:text-xl px-2 lg:px-8'>How does Insight Funders handle lender verification?</AccordionTrigger>
                    <AccordionContent className='flex flex-col text-black bg-[#D2D2D2] p-8 text-sm'>
                        {"Insight Funders uses industry-leading identity verification services to comply with Know Your Customer (KYC) regulations, ensuring that all lenders on our platform are verified and trustworthy."}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <h2 className='text-xl font-medium text-black'>Investor Information</h2>
            <Accordion type="multiple" className="w-full">
                <AccordionItem value="item-1" className='bg-black text-white py-0.5'>
                    <AccordionTrigger className='font-medium text-base lg:text-xl px-2 lg:px-8'>How do I become an investor on the Insight Funders platform?</AccordionTrigger>
                    <AccordionContent className='flex flex-col text-black bg-[#D2D2D2] p-8 text-sm'>
                        {"Insight Funders currently accepts only accredited investors. You can qualify as an accredited investor through various criteria, such as income, net worth, or professional certifications. For example:"}
                        <ul>
                            <li>• Annual income exceeding $200,000 ($300,000 with a spouse) for the past two years, with an expectation of the same this year.</li>
                            <li>• Net worth over $1 million, excluding the value of your primary residence.</li>
                            <li>• Holding certain professional licenses (e.g., Series 7, Series 65, Series 82).</li>
                            <li>• Being a “knowledgeable employee” of a private fund or an accredited investor's spouse.</li>
                        </ul>
                        For a full list of qualifications, please refer to the detailed criteria provided on our platform.
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