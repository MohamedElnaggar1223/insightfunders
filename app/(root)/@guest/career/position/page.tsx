import Link from "next/link";

export default function PositionPage() 
{
    return (
        <section className='flex flex-col px-36 pb-8 pt-16'>
            <Link href="/career" className='cursor-pointer mr-auto text-nowrap font-light font-Montserrat text-black text-xs my-6 flex items-center justify-center gap-2'><span className='text-xl'>{"< "}</span> Back</Link>
            <section className='flex flex-col pl-12 gap-12'>
                <div className='flex flex-col gap-4'>
                    <div className="flex flex-col gap-2">
                        <h1 className='text-3xl text-black font-bold'>Backend Engineer</h1>
                        <p className='text-xs text-black/50 font-light'>Full time - Remote - Engineering</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        This is a full-time, fully-remote position as a Backend Engineer. While we're very much still a startup in the sense that you may be asked to help with a variety of problems, in this role you can expect to spend most of your time working on the code and systems that power Insight Funder's Go-to-Market efforts. 
                        You'll work closely with the Sales, Marketing and Product teams and write code needed to integrate CRM and marketing tools (Salesforce, Hubspot, Sendgrid etc) within Insight Funder's backend systems.
                        <ul className='list-disc list-inside font-light pl-2 mt-4 text-sm'>
                            <li>As a Backend Engineer, beyond specific GTM related tasks, you will also help design and improve new tooling and systems as needed to support our CRM and application needs.</li>
                            <li>You will keep up to date on technology trends. Understand the impact of technology choices in the company.</li>
                            <li>You will contribute to our team culture.</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p className='text-2xl text-black font-bold'>Tech Stack</p>
                    <p>
                        We are committed to using the right tools for the problems we are trying to solve. We are not dogmatic, but currently, our stack is mostly comprised of:
                        Backend: Go, PostgreSQL, Pyspark, BigQuery, Kubernetes, Pulumi, Buildkite, Google Cloud Platform.
                        Frontend: Typescript, React, Next.js.
                        You do not need to have prior experience with ALL of these technologies. We believe great candidates are capable of learning new tools and we provide mentorship and guidance as needed.
                        We try to adopt tools that are a delight to use, and that help us be productive. We have a strong focus on always maintaining and improving developer productivity. We experiment frequently, but pragmatically, with new technology.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <p className='text-2xl text-black font-bold'>Qualifications</p>
                    <p>
                        We are committed to using the right tools for the problems we are trying to solve. We are not dogmatic, but currently, our stack is mostly comprised of:
                        Backend: Go, PostgreSQL, Pyspark, BigQuery, Kubernetes, Pulumi, Buildkite, Google Cloud Platform.
                        Frontend: Typescript, React, Next.js.
                        You do not need to have prior experience with ALL of these technologies. We believe great candidates are capable of learning new tools and we provide mentorship and guidance as needed.
                        We try to adopt tools that are a delight to use, and that help us be productive. We have a strong focus on always maintaining and improving developer productivity. We experiment frequently, but pragmatically, with new technology.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <p className='text-2xl text-black font-bold'>Compensation and Benefits</p>
                    <p>
                        We are committed to using the right tools for the problems we are trying to solve. We are not dogmatic, but currently, our stack is mostly comprised of:
                        Backend: Go, PostgreSQL, Pyspark, BigQuery, Kubernetes, Pulumi, Buildkite, Google Cloud Platform.
                        Frontend: Typescript, React, Next.js.
                        You do not need to have prior experience with ALL of these technologies. We believe great candidates are capable of learning new tools and we provide mentorship and guidance as needed.
                        We try to adopt tools that are a delight to use, and that help us be productive. We have a strong focus on always maintaining and improving developer productivity. We experiment frequently, but pragmatically, with new technology.
                    </p>
                </div>
            </section>
        </section>
    )
}