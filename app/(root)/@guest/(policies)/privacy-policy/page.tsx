import { formatDate } from "@/lib/utils"

export default function PrivacyPolicy()
{
    const initialDate = formatDate(new Date())

    return (
        <section className='flex flex-col flex-1 items-start text-left gap-8'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-3xl font-semibold'>Privacy Policy</h1>
                <p>Effective Date: {initialDate}</p>
            </div>
            <p className='text-sm'>Insight Funders INC ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site.</p>
            <div className='flex flex-col gap-4'>
                <p className='text-2xl font-semibold'>Information We Collect</p>
                <p className='text-sm'>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='text-xl font-semibold'>1. Personal Data</p>
                <p className='text-sm'>Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.</p>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='text-xl font-semibold'>2. Derivative Data</p>
                <p className='text-sm'>Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</p>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='text-xl font-semibold'>3. Financial Data</p>
                <p className='text-sm'>Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site. We store only very limited, if any, financial information that we collect. Otherwise, all financial information is stored by our payment processor, [Processor Name], and you are encouraged to review their privacy policy and contact them directly for responses to your questions.</p>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='text-xl font-semibold'>4. Data From Social Networks</p>
                <p className='text-sm'>User information from social networking sites, such as [social media sites that your site uses], including your name, your social network username, location, gender, birth date, email address, profile picture, and public data for contacts, if you connect your account to such social networks. If you choose to link or sign up using your social network credentials, we may also collect your user ID associated with any social media accounts you use to sign up.</p>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='text-xl font-semibold'>5. Mobile Device Data</p>
                <p className='text-sm'>Device information, such as your mobile device ID, model, and manufacturer, and information about the location of your device, if you access the Site from a mobile device.</p>
            </div>
            <div className='w-full h-[1px] bg-gray-200 my-12' />
            <div className='flex flex-col gap-4'>
                <p className='text-2xl font-semibold'>Use of Your Information</p>
                <p className='text-sm'>We use the information we collect in the following ways:</p>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='text-xl font-semibold'>1. General Use</p>
                <p className='text-sm'>We may use the information we collect about you in any of the following ways:</p>
                <ul className='list-disc list-inside font-light pl-2 mt-4 text-sm'>
                    <li>To create and manage your account.</li>
                    <li>To process your transactions.</li>
                    <li>To manage our services, including the secure collection and processing of bank account details via Plaid API.</li>
                    <li>To communicate with you, including sending you administrative emails, updates, security alerts, and support messages.</li>
                    <li>To manage your user profile.</li>
                    <li>To personalize your experience and improve our website.</li>
                    <li>To enforce our terms, conditions, and policies.</li>
                    <li>To conduct analytics and gather insights to enhance our services.</li>
                </ul>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='text-xl font-semibold'>2. Sharing of Information</p>
                <p className='text-sm'>We may share the information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
                <ul className='list-disc list-inside font-light pl-2 mt-4 text-sm'>
                    <li>With our service providers who perform services on our behalf under strict confidentiality agreements.</li>
                    <li>When we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.</li>
                    <li>With your consent, we may share information with third parties.</li>
                </ul>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='text-xl font-semibold'>3. Data Security</p>
                <p className='text-sm'>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other types of misuse.</p>
            </div>
            <div className='w-full h-[1px] bg-gray-200 my-12' />
            <div className='flex flex-col gap-4'>
                <p className='text-2xl font-semibold'>Your Rights</p>
                <p className='text-sm'>Depending on your location, you may have the following rights regarding your personal information:</p>
                <ul className='list-disc list-inside font-light pl-2 my-4'>
                    <li>The right to access - You have the right to request copies of your personal information.</li>
                    <li>The right to rectification - You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
                    <li>The right to erasure - You have the right to request that we erase your personal information, under certain conditions.</li>
                    <li>The right to restrict processing - You have the right to request that we restrict the processing of your personal information, under certain conditions.</li>
                    <li>The right to object to processing - You have the right to object to our processing of your personal information, under certain conditions.</li>
                    <li>The right to data portability - You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
                </ul>
                <p className='text-sm'>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us at our provided contact information.</p>
            </div>
            <div className='w-full h-[1px] bg-gray-200 my-12' />
            <div className='flex flex-col gap-4'>
                <p className='text-2xl font-semibold'>Changes to This Policy</p>
                <p className='text-sm'>We may update this privacy policy from time to time in order to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new policy on our website and updating the effective date at the top of this page.</p>
            </div>
            <div className='w-full h-[1px] bg-gray-200 my-12' />
            <div className='flex flex-col gap-4'>
                <p className='text-2xl font-semibold'>Contact Information</p>
                <p className='text-sm'>If you have questions or comments about this Privacy Policy, please contact us at:<br />Email: <span className='underline cursor-pointer'>Team@insightfunders.com</span></p>
            </div>
        </section>
    )
}