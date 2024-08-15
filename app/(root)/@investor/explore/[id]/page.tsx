import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { getUser } from "@/lib/actions/auth"
import { getExploreStartups } from "@/lib/actions/investor"
import { Loader2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"
import FinancialRounds from "./financialrounds"
import RequestMoreFinancialDetailsContainer from "./requestmorefinancialdetails"
import ContractContainer from "./contractcontainer"

type Props = {
    params: {
        id: string
    }
}

export default async function SingleStartUpPage({ params }: Props)
{
    const user = await getUser()

    if(!user?.userInvestor?.accepted) return null

    const startUpDetails = await getExploreStartups(user?.userInvestor?.id!, { id: isNaN(parseInt(params.id)) ? undefined : parseInt(params.id) })

    if(startUpDetails.length === 0) return null

    const startup = startUpDetails[0].startup

    return (
        <section className='relative flex flex-col flex-1 font-Montserrat items-center justify-start gap-1 h-screen max-h-screen px-4 overflow-auto'>
            <Link href="/explore" className='cursor-pointer mr-auto text-nowrap font-light font-Montserrat text-white text-xs my-6 flex items-center justify-center gap-2'><span className='text-xl'>{"< "}</span> Back</Link>
            <div className='w-full flex gap-8 rounded-[2px] bg-[#313131] py-8 pl-6 pr-4'>
                <div className='flex flex-col items-center justify-start'>
                    <Image
                        src='/images/placehodler.jpg'
                        alt={startup?.company_name!}
                        width={112}
                        height={112}
                        className='rounded-full w-28 h-28'
                    />
                </div>
                <div className="flex flex-col gap-4 items-start w-1/3 justify-between">
                    <div className="flex flex-col gap-1.5">
                        <div className='flex gap-1'>
                            <p className='font-bold text-xs text-white'>About</p>
                            <div className='h-4 w-16 bg-[#484848] rounded-[2px]' />
                        </div>
                        <div className="w-16 h-[1px] bg-white" />
                    </div>
                    <div className="flex justify-between text-white gap-6 w-full">
                        <div className="flex gap-2 flex-1 flex-col items-start justify-center">
                            <div className="flex gap-1.5 items-center justify-center text-xs">
                                <Image
                                    src='/images/industryName.svg'
                                    alt='location'
                                    width={10}
                                    height={12}
                                />
                                {startup?.industry_sector}
                            </div>
                            <div className="flex gap-1.5 items-center justify-center text-xs">
                                <Image
                                    src='/images/series2.svg'
                                    alt='series'
                                    width={10}
                                    height={12}
                                />
                                {startup?.stage}
                            </div>
                            <div className="flex gap-1.5 items-center justify-center text-xs">
                                <Image
                                    src='/images/raised.svg'
                                    alt='series'
                                    width={10}
                                    height={12}
                                />
                                ${startup.recent_raise}
                            </div>
                        </div>
                        <div className="flex gap-2 flex-1 flex-col items-start justify-center">
                            <div className="flex gap-1.5 items-center justify-center text-xs">
                                <Image
                                    src='/images/location2.svg'
                                    alt='location'
                                    width={10}
                                    height={12}
                                />
                                {startup?.address}
                            </div>
                            <div className="flex gap-1.5 items-center justify-center text-xs">
                                <Image
                                    src='/images/website.svg'
                                    alt='series'
                                    width={10}
                                    height={12}
                                />
                                {startup?.email}
                            </div>
                            <div className="flex gap-1.5 items-center justify-center text-xs">
                                <Image
                                    src='/images/sector.svg'
                                    alt='series'
                                    width={10}
                                    height={12}
                                />
                                {startup.business_structure}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Accordion type="single" collapsible className="w-full mt-6">
                <AccordionItem value="financialRecords" className='bg-white py-1'>
                    <AccordionTrigger className='font-bold px-12'>Financial Details</AccordionTrigger>
                    <AccordionContent className='flex flex-col bg-[#313131] px-24 py-12'>
                        <Suspense fallback={<Loader2 className='w-6 h-6 animate-spin' />}>
                            <FinancialRounds startupId={startup.id} />
                        </Suspense>
                        <Suspense fallback={<Loader2 className='w-6 h-6 animate-spin' />}>
                            <RequestMoreFinancialDetailsContainer investorId={user.userInvestor.id} startupId={startup.id} />
                        </Suspense>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="request" className='bg-white'>
                    <AccordionTrigger className='font-bold px-12'>Contract</AccordionTrigger>
                    <AccordionContent className='flex flex-col bg-[#313131] px-24 py-12'>
                        <Suspense fallback={<Loader2 className='w-6 h-6 animate-spin' />}>
                            <ContractContainer startupId={startup.id} />
                        </Suspense>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    )
}