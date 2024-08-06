import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Faq()
{
    return (
        <section className='flex flex-col flex-1 items-start text-left gap-12'>
            <h1 className='text-3xl font-semibold'>Frequently Asked Questions</h1>
            <Accordion type="multiple" className="w-full">
                <AccordionItem value="item-1" className='bg-black text-white py-0.5'>
                    <AccordionTrigger className='font-medium text-base lg:text-xl px-2 lg:px-10'>How much Venture Debt does my startup qualify for?</AccordionTrigger>
                    <AccordionContent className='flex flex-col text-black bg-[#D2D2D2] p-8 text-sm'>
                        {"Insight Funders Venture Debt term sheets range from $1 million for early stage startups to $100M for Growth stage companies. If you're a startup that has either raised venture capital and / or is revenue generating, we have a growth capital solution for you. Insight Funders pre-qualification questionnaire takes <1 minute to complete. Get started today."}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className='bg-black text-white py-0.5'>
                    <AccordionTrigger className='font-medium text-base lg:text-xl px-2 lg:px-10'>What does Venture Debt cost?</AccordionTrigger>
                    <AccordionContent className='flex flex-col text-black bg-[#D2D2D2] p-8 text-sm'>
                        {"Insight Funders Venture Debt term sheets range from $1 million for early stage startups to $100M for Growth stage companies. If you're a startup that has either raised venture capital and / or is revenue generating, we have a growth capital solution for you. Insight Funders pre-qualification questionnaire takes <1 minute to complete. Get started today."}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className='bg-black text-white py-0.5'>
                    <AccordionTrigger className='font-medium text-base lg:text-xl px-2 lg:px-10'>Do I need to be venture-backed to raise venture debt?</AccordionTrigger>
                    <AccordionContent className='flex flex-col text-black bg-[#D2D2D2] p-8 text-sm'>
                        {"Insight Funders Venture Debt term sheets range from $1 million for early stage startups to $100M for Growth stage companies. If you're a startup that has either raised venture capital and / or is revenue generating, we have a growth capital solution for you. Insight Funders pre-qualification questionnaire takes <1 minute to complete. Get started today."}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className='bg-black text-white py-0.5'>
                    <AccordionTrigger className='font-medium text-base lg:text-xl px-2 lg:px-10'>What if I don’t qualify for Venture Debt?</AccordionTrigger>
                    <AccordionContent className='flex flex-col text-black bg-[#D2D2D2] p-8 text-sm'>
                        {"Insight Funders Venture Debt term sheets range from $1 million for early stage startups to $100M for Growth stage companies. If you're a startup that has either raised venture capital and / or is revenue generating, we have a growth capital solution for you. Insight Funders pre-qualification questionnaire takes <1 minute to complete. Get started today."}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className='bg-black text-white py-0.5'>
                    <AccordionTrigger className='font-medium text-base lg:text-xl px-2 lg:px-10'>What should I know about raising venture debt?</AccordionTrigger>
                    <AccordionContent className='flex flex-col text-black bg-[#D2D2D2] p-8 text-sm'>
                        {"Insight Funders Venture Debt term sheets range from $1 million for early stage startups to $100M for Growth stage companies. If you're a startup that has either raised venture capital and / or is revenue generating, we have a growth capital solution for you. Insight Funders pre-qualification questionnaire takes <1 minute to complete. Get started today."}
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