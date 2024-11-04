'use client'

import { Database } from "@/types/supabase"
import { useEffect, useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { investorDetailsSchema } from "@/lib/validations/onBoardingSchema"
import { Check, CheckCircle2, Circle, Loader2, X } from "lucide-react"
import { saveInvestorDetails } from "@/lib/actions/onboarding"
import { useRouter } from "next/navigation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "../ui/checkbox"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { cn } from "@/lib/utils"
// import { Montserrat } from "next/font/google";
// const inter = Montserrat({ subsets: ["latin"] });

type Props = {
    investorDetails: {
        accepted: boolean
        company_email: string | null
        company_name: string | null
        company_website: string | null
        geographies_served:
        | Database["public"]["Enums"]["geographies_served"][]
        | null
        id: number
        max_facility_size:
        | Database["public"]["Enums"]["max_facility_size"]
        | null
        minimum_revenue_requirement:
        | Database["public"]["Enums"]["minimum_revenue_requirement"]
        | null
        products_offered:
        | Database["public"]["Enums"]["products_offered"][]
        | null
        submitted: boolean | null
        user_id: string
        investor_type: Database["public"]["Enums"]["investor_type"] | null
        accreditation: string | null
        future_investment_amount: Database["public"]["Enums"]["future_investment_amounts"] | null
        institution_type: Database["public"]["Enums"]["institution_types"] | null
    }
}

export default function InvestorDetails({ investorDetails }: Props)
{
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [saveSuccess, setSaveSuccess] = useState(false)
    const [typePage, setTypePage] = useState(!investorDetails.investor_type)
    const [accreditedInvestorPage, setAccreditedInvestorPage] = useState(true)
    const [investorType, setInvestorType] = useState(investorDetails.investor_type ?? 'Individual')
    const [accreditation, setAccreditation] = useState(investorDetails.accreditation ?? 'I earn $200k+ yearly (or $300k+ if filing jointly)')

    const router = useRouter()

    const form = useForm<z.infer<typeof investorDetailsSchema>>({
        resolver: zodResolver(investorDetailsSchema),
        defaultValues: {
            companyName: investorDetails.company_name ?? "",
            companyEmail: investorDetails.company_email ?? "",
            companyWebsite: investorDetails.company_website ?? "",
            minimumRevenueRequirement: investorDetails.minimum_revenue_requirement ?? "N/A",
            maxFacilitySize: investorDetails.max_facility_size ?? "N/A",
            geographiesServed: investorDetails.geographies_served ?? [],
            productsOffered: investorDetails.products_offered ?? [],
            investorType: investorDetails.investor_type ?? "Individual",
            accreditation: investorDetails.accreditation ?? "",
            futureInvestmentAmount: investorDetails.future_investment_amount ?? "",
            institutionType: investorDetails.institution_type ?? "",
        },
    })

    form.watch('geographiesServed')
    form.watch('productsOffered')

    console.log(form.getValues())

    const onSubmit = async (values: z.infer<typeof investorDetailsSchema>) => {
        setIsPending(true)

        const { error } = await saveInvestorDetails(investorDetails.id, values)

        console.log(error)

        if(error) setError(error)
        else setSaveSuccess(true)

        router.push('/investor-details/submit')

        setIsPending(false)
    }

    const handleSaveInvestorDetails = async () => {
        setIsPending(true)
        
        const { error } = await saveInvestorDetails(investorDetails.id, form.getValues())

        if(error) setError(error)
        else setSaveSuccess(true)

        setIsPending(false)
    }

    useEffect(() => {
        if(saveSuccess) setTimeout(() => setSaveSuccess(false), 5000)
    }, [saveSuccess])

    useEffect(() => {
        if(error) setTimeout(() => setError(null), 5000)
    }, [error])

    const accreditationWatch = form.watch('accreditation')
    const investorTypeWatch = form.watch('investorType')

    useEffect(() => {
        console.log(investorType)
        form.setValue('investorType', investorType)
    }, [investorType, accreditationWatch, accreditedInvestorPage])

    useEffect(() => {
        console.log(accreditation)
        form.setValue('accreditation', accreditation)
    }, [accreditation, investorTypeWatch])

    console.log(form.getValues())

    return (
        <>
            <div className="flex flex-col items-center justify-center gap-2 mt-8">
                <h1 className='text-2xl font-semibold text-white text-center'>{investorType === 'Individual' ? "Individual" : "Company"} information</h1>
                <h2 className='text-base text-center font-light text-white'>Give us details information about {investorType === 'Individual' ? "yourself" : "your company"}</h2>
            </div>
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-[90vw] flex flex-col gap-5">
                    {typePage ? (
                        <>
                        <p className='font-light text-white text-center'>Select an option from below</p>
                        <FormField
                            control={form.control}
                            disabled={isPending}
                            name="investorType"
                            render={({ field }) => (
                                <FormItem className="space-y-3">
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex flex-col space-y-1 selectcarddiv"
                                        >
                                            <FormItem className={cn("flex justify-between items-center pt-4 pl-4 pr-2 pb-6 gap-4  border-2 rounded-[12px] bg-white", form.getValues().investorType === 'Individual' ? 'border-[#FF7A00]' : 'border-white')}>
                                                <FormLabel className="font-normal">
                                                    <div className='flex gap-4 pl-2 items-center justify-between cursor-pointer'>
                                                        {form.getValues().investorType !== 'Individual' ? (<Circle size={24} fill="#fff" stroke="#00000080" className='min-w-6' />) : (<CheckCircle2 size={24} fill="#FF7A00" stroke="#fff" className='min-w-6' />)}
                                                        <div className='flex flex-col gap-1'>
                                                            <p className='text-black font-semibold text-base font-Montserrat'>Individual</p>
                                                            <p className='text-black text-xs leading-5 font-Montserrat'>Invest on your own behalf. This includes individual, joint, or retirement accounts as well as trusts or single-person business entities.</p>
                                                        </div>
                                                    </div>
                                                </FormLabel>
                                                <FormControl>
                                                    <RadioGroupItem defaultChecked={true} value="Individual" className={cn("mt-0imp opacity-0", form.getValues().investorType === 'Individual' ? 'bg-main-purple' : 'bg-white')} />
                                                </FormControl>
                                            </FormItem>
                                            <FormItem className={cn("flex justify-between items-center pt-4 pl-4 pr-2 pb-6 gap-4  border-2 rounded-[12px] bg-white", form.getValues().investorType === 'Institution' ? 'border-[#FF7A00]' : 'border-white')}> 
                                                <FormLabel className="font-normal">
                                                    <div className='flex gap-4 pl-2 items-center justify-between cursor-pointer'>
                                                        {form.getValues().investorType !== 'Institution' ? (<Circle size={24} fill="#fff" stroke="#00000080" className='min-w-6' />) : (<CheckCircle2 size={24} fill="#FF7A00" stroke="#fff" className='min-w-6' />)}
                                                        <div className='flex flex-col gap-1'>
                                                            <p className='text-black font-semibold text-base font-Montserrat'>Institution</p>
                                                            <p className='text-black text-xs leading-5 font-Montserrat'>Invest on behalf of a legal entity. Examples include corporations, family offices, funds, registered Investment advisors, etc</p>
                                                        </div>
                                                    </div>
                                                </FormLabel>
                                                <FormControl>
                                                    <RadioGroupItem value="Institution" className={cn("mt-0imp opacity-0", form.getValues().investorType === 'Institution' ? 'bg-main-purple' : 'bg-white')} />
                                                </FormControl>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <button onMouseDown={() => { 
                            setInvestorType(form.getValues('investorType'))
                            setTypePage(false)
                        }} type='button' className='w-full !mt-8 bg-[#FF7A00] text-white font-bold rounded-[8px] mx-auto py-3.5 text-sm px-4 max-w-[216px] disabled:opacity-70'>Continue</button>
                        </>
                    ) : (form.getValues('investorType') === 'Individual' && accreditedInvestorPage) ? (
                        <>
                        <p className='font-light text-white text-center'>Select an option from below</p>
                        <FormField
                            control={form.control}
                            disabled={isPending}
                            name="accreditation"
                            render={({ field }) => (
                                <FormItem className="space-y-3 max-w-[90vw]">
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex flex-col space-y-1 "
                                        >
                                            <FormItem className={cn("flex justify-between items-center pt-4 pl-2 pr-2 pb-4 gap-4  border-2 rounded-[12px] bg-white", form.getValues().accreditation === 'I earn $200k+ yearly (or $300k+ if filing jointly)' ? 'border-[#FF7A00]' : 'border-white')}>
                                                <FormLabel className="font-normal">
                                                    <div className='flex gap-4 pl-2 items-center justify-between cursor-pointer'>
                                                        {form.getValues().accreditation !== 'I earn $200k+ yearly (or $300k+ if filing jointly)' ? (<Circle size={24} fill="#fff" stroke="#00000080" className='min-w-6' />) : (<CheckCircle2 size={24} fill="#FF7A00" stroke="#fff" className='min-w-6' />)}
                                                        <div className='flex flex-col gap-1'>
                                                            <p className='text-black font-semibold text-base font-Montserrat'>I earn $200k+ yearly (or $300k+ if filing jointly)</p>
                                                        </div>
                                                    </div>
                                                </FormLabel>
                                                <FormControl>
                                                    <RadioGroupItem defaultChecked={true} value="I earn $200k+ yearly (or $300k+ if filing jointly)" className={cn("mt-0imp opacity-0", form.getValues().accreditation === 'Individual' ? 'bg-main-purple' : 'bg-white')} />
                                                </FormControl>
                                            </FormItem>
                                            <FormItem className={cn("flex justify-between items-center pt-4 pl-2 pr-2 pb-4 gap-4  border-2 rounded-[12px] bg-white", form.getValues().accreditation === 'I have $1M+ in assets, excl. primary residence' ? 'border-[#FF7A00]' : 'border-white')}> 
                                                <FormLabel className="font-normal">
                                                    <div className='flex gap-4 pl-2 items-center justify-between cursor-pointer'>
                                                        {form.getValues().accreditation !== 'I have $1M+ in assets, excl. primary residence' ? (<Circle size={24} fill="#fff" stroke="#00000080" className='min-w-6' />) : (<CheckCircle2 size={24} fill="#FF7A00" stroke="#fff" className='min-w-6' />)}
                                                        <div className='flex flex-col gap-1'>
                                                            <p className='text-black font-semibold text-base font-Montserrat'>I have $1M+ in assets, excl. primary residence</p>
                                                        </div>
                                                    </div>
                                                </FormLabel>
                                                <FormControl>
                                                    <RadioGroupItem value="I have $1M+ in assets, excl. primary residence" className={cn("mt-0imp opacity-0", form.getValues().accreditation === 'I have $1M+ in assets, excl. primary residence' ? 'bg-main-purple' : 'bg-white')} />
                                                </FormControl>
                                            </FormItem>
                                            <FormItem className={cn("flex justify-between items-center pt-4 pl-2 pr-2 pb-4 gap-4  border-2 rounded-[12px] bg-white", form.getValues().accreditation === 'I hold a current Series 7, 65 or 82 license' ? 'border-[#FF7A00]' : 'border-white')}> 
                                                <FormLabel className="font-normal">
                                                    <div className='flex gap-4 pl-2 items-center justify-between cursor-pointer'>
                                                        {form.getValues().accreditation !== 'I hold a current Series 7, 65 or 82 license' ? (<Circle size={24} fill="#fff" stroke="#00000080" className='min-w-6' />) : (<CheckCircle2 size={24} fill="#FF7A00" stroke="#fff" className='min-w-6' />)}
                                                        <div className='flex flex-col gap-1'>
                                                            <p className='text-black font-semibold text-base font-Montserrat'>I hold a current Series 7, 65 or 82 license</p>
                                                        </div>
                                                    </div>
                                                </FormLabel>
                                                <FormControl>
                                                    <RadioGroupItem value="I hold a current Series 7, 65 or 82 license" className={cn("mt-0imp opacity-0", form.getValues().accreditation === 'I hold a current Series 7, 65 or 82 license' ? 'bg-main-purple' : 'bg-white')} />
                                                </FormControl>
                                            </FormItem>
                                            <FormItem className={cn("flex justify-between items-center pt-4 pl-2 pr-2 pb-4 gap-4  border-2 rounded-[12px] bg-white", form.getValues().accreditation === 'I am accredited in another way' ? 'border-[#FF7A00]' : 'border-white')}> 
                                                <FormLabel className="font-normal">
                                                    <div className='flex gap-4 pl-2 items-center justify-between cursor-pointer'>
                                                        {form.getValues().accreditation !== 'I am accredited in another way' ? (<Circle size={24} fill="#fff" stroke="#00000080" className='min-w-6' />) : (<CheckCircle2 size={24} fill="#FF7A00" stroke="#fff" className='min-w-6' />)}
                                                        <div className='flex flex-col gap-1'>
                                                            <p className='text-black font-semibold text-base font-Montserrat'>I am accredited in another way</p>
                                                        </div>
                                                    </div>
                                                </FormLabel>
                                                <FormControl>
                                                    <RadioGroupItem value="I am accredited in another way" className={cn("mt-0imp opacity-0", form.getValues().accreditation === 'I am accredited in another way' ? 'bg-main-purple' : 'bg-white')} />
                                                </FormControl>
                                            </FormItem>
                                            <FormItem className={cn("flex justify-between items-center pt-4 pl-2     pr-2 pb-4 gap-4  border-2 rounded-[12px] bg-white", form.getValues().accreditation === 'None of the above. I am not accredited' ? 'border-[#FF7A00]' : 'border-white')}> 
                                                <FormLabel className="font-normal">
                                                    <div className='flex gap-4 pl-2 items-center justify-between cursor-pointer'>
                                                        {form.getValues().accreditation !== 'None of the above. I am not accredited' ? (<Circle size={24} fill="#fff" stroke="#00000080" className='min-w-6' />) : (<CheckCircle2 size={24} fill="#FF7A00" stroke="#fff" className='min-w-6' />)}
                                                        <div className='flex flex-col gap-1'>
                                                            <p className='text-black font-semibold text-base font-Montserrat'>None of the above. I am not accredited</p>
                                                        </div>
                                                    </div>
                                                </FormLabel>
                                                <FormControl>
                                                    <RadioGroupItem value="None of the above. I am not accredited" className={cn("mt-0imp opacity-0", form.getValues().accreditation === 'None of the above. I am not accredited' ? 'bg-main-purple' : 'bg-white')} />
                                                </FormControl>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                            />
                            <button disabled={!form.getValues().accreditation} type='button' onMouseDown={() => {
                                setAccreditedInvestorPage(false)
                                setAccreditation(form.getValues().accreditation!)
                                setInvestorType(prev => prev === 'Individual' ? 'Individual' : 'Institution')
                            }} className='w-full !mt-8 bg-[#FF7A00] text-white font-bold rounded-[8px] mx-auto py-3.5 text-sm px-4 max-w-[216px] disabled:opacity-70'>{isPending ? <Loader2 stroke="#fff" className='animate-spin mx-auto' /> : 'Continue'}</button>
                        </>
                    ) : (
                        <>
                            <FormField
                                control={form.control}
                                disabled={isPending}
                                name="accreditation"
                                render={({ field }) => (<></>)}
                            />
                            <FormField
                                control={form.control}
                                disabled={isPending}
                                name="investorType"
                                render={({ field }) => (<></>)}
                            />
                              <FormField
                                control={form.control}
                                disabled={isPending}
                                name="firstName"
                                render={({ field }) => form.getValues('investorType') === 'Institution' ? (
                                    <FormItem className='relative flex flex-col gap-1 w-screen ipfield !mt-0'>
                                        <FormControl>
                                            <input className='flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none' placeholder="First Name" {...field} />
                                        </FormControl>
                                        <FormMessage className='absolute text-red-600 -bottom-6' />
                                    </FormItem>
                                ) : <></>}
                            />
                             <FormField
                                control={form.control}
                                disabled={isPending}
                                name="lastname"
                                render={({ field }) => form.getValues('investorType') === 'Institution' ? (
                                    <FormItem className='relative flex flex-col gap-1 w-screen ipfield !mt-0'>
                                        <FormControl>
                                            <input className='flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none' placeholder="Last Name" {...field} />
                                        </FormControl>
                                        <FormMessage className='absolute text-red-600 -bottom-6' />
                                    </FormItem>
                                ) : <></>}
                            />
                            <FormField
                                control={form.control}
                                disabled={isPending}
                                name="companyName"
                                render={({ field }) => form.getValues('investorType') === 'Institution' ? (
                                    <FormItem className='relative flex flex-col gap-1 w-screen ipfield !mt-0'>
                                        <FormControl>
                                            <input className='flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none' placeholder="Company name" {...field} />
                                        </FormControl>
                                        <FormMessage className='absolute text-red-600 -bottom-6' />
                                    </FormItem>
                                ) : <></>}
                            />
                              
                            <FormField
                                control={form.control}
                                disabled={isPending}
                                name="companyEmail"
                                render={({ field }) => form.getValues('investorType') === 'Institution' ? (
                                    <FormItem className='relative flex flex-col gap-1 w-screen ipfield !mt-0'>
                                        <FormControl>
                                            <input className='flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none' placeholder="Company email" {...field} />
                                        </FormControl>
                                        <FormMessage className='absolute text-red-600 -bottom-6' />
                                    </FormItem>
                                ) : <></>}
                            />
                            {/* <FormField
                                control={form.control}
                                disabled={isPending}
                                name="companyWebsite"
                                render={({ field }) => form.getValues('investorType') === 'Institution' ? (
                                    <FormItem className='relative flex flex-col gap-1 w-screen ipfield !mt-0'>
                                        <FormControl>
                                            <input className='flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none' placeholder="Company website" {...field} />
                                        </FormControl>
                                        <FormMessage className='absolute text-red-600 -bottom-6' />
                                    </FormItem>
                                ) : <></>}
                            /> */}
                            {/* <FormField
                                control={form.control}
                                disabled={isPending}
                                name="minimumRevenueRequirement"
                                render={({ field }) => form.getValues('investorType') === 'Institution' ? (
                                    <FormItem className='relative flex flex-col gap-1 w-screen ipfield !mt-0'>
                                        <FormControl>
                                            <select defaultValue={field.value} className='flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none' {...field}>
                                                <option disabled value="">Minimum revenue requirement</option>
                                                <option value="N/A">N/A</option>
                                                <option value="<$1M">{"<$1M"}</option>
                                                <option value="$1-10M">$1-10M</option>
                                                <option value="$10-50M">$10-50M</option>
                                                <option value="$50-100M">$50-100M</option>
                                                <option value="$100M+">$100M+</option>
                                            </select>
                                        </FormControl>
                                        <FormMessage className='absolute text-red-600 -bottom-6' />
                                    </FormItem>
                                ) : <></>}
                            /> */}
                            <FormField
                                control={form.control}
                                disabled={isPending}
                                name="institutionType"
                                render={({ field }) => form.getValues('investorType') === 'Institution' ? (
                                    <FormItem className='relative flex flex-col gap-1 w-screen ipfield !mt-0'>
                                        <FormControl>
                                            <select className='flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none' {...field}>
                                                <option disabled value="">What is the type of your institution?</option>
                                                {['Other', 'Corporation', 'Family Office', 'Fund', 'Registered Investment Advisor (RIA)', ""].filter(item => item !== '').map((item, index) => (
                                                    <option key={index} value={item}>{item}</option>
                                                ))}
                                            </select>
                                        </FormControl>
                                        <FormMessage className='absolute text-red-600 -bottom-6' />
                                    </FormItem>
                                ) : <></>}
                            />
                            {/* <FormField
                                control={form.control}
                                disabled={isPending}
                                name="maxFacilitySize"
                                render={({ field }) => form.getValues('investorType') === 'Institution' ? (
                                    <FormItem className='relative flex flex-col gap-1 w-screen ipfield !mt-0'>
                                        <FormControl>
                                            <select className='flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none' {...field}>
                                                <option disabled value="">Maximum facility size</option>
                                                <option value="N/A">N/A</option>
                                                <option value="<$1M">{"<$1M"}</option>
                                                <option value="$1-10M">$1-10M</option>
                                                <option value="$10-50M">$10-50M</option>
                                                <option value="$50-250M">$50-250M</option>
                                                <option value="$250M+">$250M+</option>
                                            </select>
                                        </FormControl>
                                        <FormMessage className='absolute text-red-600 -bottom-6' />
                                    </FormItem>
                                ) : <></>}
                            /> */}
                                    <FormField
                                control={form.control}
                                disabled={isPending}
                                name="institutionType"
                                render={({ field }) => form.getValues('investorType') === 'Institution' ? (
                                    <FormItem className='relative flex flex-col gap-1 w-screen ipfield !mt-0'>
                                        <FormControl>
                                            <select className='flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none' {...field}>
                                                <option disabled value="">Legal entity type</option>
                                                {['Sole Proprietor / Single Member LLC', 'Corporation', 'Partnership', 'LLC (non-single member)', 'Trust/Estate','Other', ""].filter(item => item !== '').map((item, index) => (
                                                    <option key={index} value={item}>{item}</option>
                                                ))}
                                            </select>
                                        </FormControl>
                                        <FormMessage className='absolute text-red-600 -bottom-6' />
                                    </FormItem>
                                ) : <></>}
                            />  

                            {/* <FormField
                                control={form.control}
                                disabled={isPending}
                                name="productsOffered"
                                render={({ field }) => form.getValues('investorType') === 'Institution' ? (
                                    <FormItem className='relative flex flex-col gap-1 w-screen ipfield !mt-0'>
                                        <FormControl>
                                            <Accordion type="single" collapsible className="w-full">
                                                <AccordionItem value="item-1" className="border-none">
                                                    <AccordionTrigger className="py-3.5 border border-white text-sm bg-white px-6 rounded-[8px] outline-none">Products offered</AccordionTrigger>
                                                    <AccordionContent className='text-main-gray flex flex-col gap-4 items-start justify-center py-4'>
                                                        {['Venture Debt', 'Asset-Based Lending', 'Warehouse Lending', 'Invoice and Contract Factoring', 'Revenue-Based Financing', 'Equipment Leasing', 'M&A', 'Recapitalizations and Refinancing', 'Buyouts', 'Bridge Loans', 'Other'].map((product, index) => (
                                                            <div className='flex gap-2 items-center justify-start w-full'>
                                                                <Checkbox 
                                                                    key={index} 
                                                                    className='rounded-[4px] border-white' 
                                                                    checked={form.getValues('productsOffered')?.includes(product as 'Venture Debt' | 'Asset-Based Lending' | 'Warehouse Lending' | 'Invoice and Contract Factoring' | 'Revenue-Based Financing' | 'Equipment Leasing' | 'M&A' | 'Recapitalizations and Refinancing' | 'Buyouts' | 'Bridge Loans' | 'Other')} 
                                                                    onCheckedChange={(value) => {
                                                                        if(value) form.getValues('productsOffered')?.includes(product as 'Venture Debt' | 'Asset-Based Lending' | 'Warehouse Lending' | 'Invoice and Contract Factoring' | 'Revenue-Based Financing' | 'Equipment Leasing' | 'M&A' | 'Recapitalizations and Refinancing' | 'Buyouts' | 'Bridge Loans' | 'Other') ? form.setValue('productsOffered', form.getValues('productsOffered')?.filter((item) => item !== product)) : form.setValue('productsOffered', [...form.getValues('productsOffered') ?? [], product as 'Venture Debt' | 'Asset-Based Lending' | 'Warehouse Lending' | 'Invoice and Contract Factoring' | 'Revenue-Based Financing' | 'Equipment Leasing' | 'M&A' | 'Recapitalizations and Refinancing' | 'Buyouts' | 'Bridge Loans' | 'Other'])
                                                                        else form.setValue('productsOffered', form.getValues('productsOffered')?.filter((item) => item !== product))
                                                                    }}
                                                                    id={product}
                                                                />
                                                                <label
                                                                    htmlFor={product}
                                                                    className="text-sm font-medium leading-none text-white/90 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                                >
                                                                    {product}
                                                                </label>
                                                            </div>
                                                        ))}
                                                    </AccordionContent>
                                                </AccordionItem>
                                            </Accordion>
                                        </FormControl>
                                        <FormMessage className='absolute text-red-600 -bottom-6' />
                                    </FormItem>
                                ) : <></>}
                            /> */}
                            <FormField
                                control={form.control}
                                disabled={isPending}
                                name="geographiesServed"
                                render={({ field }) => form.getValues('investorType') === 'Institution' ? (
                                    <FormItem className='relative flex flex-col gap-1 w-screen ipfield !mt-0'>
                                        <FormControl>
                                            <Accordion type="single" collapsible className="w-full">
                                            <AccordionItem value="item-1" className="border-none">
                                            <AccordionTrigger className="py-3.5 border border-white text-sm bg-white px-6 rounded-[8px] outline-none">Country</AccordionTrigger>
                                                    <AccordionContent className='text-main-gray flex flex-col gap-4 items-start justify-center py-4'>
                                                        {['United States', 'Canada', 'Mexico', 'United Kingdom', 'Other'].map((product, index) => (
                                                            <div className='flex gap-2 items-center justify-start w-full'>
                                                                <Checkbox 
                                                                    key={index} 
                                                                    className='rounded-[4px]' 
                                                                    checked={form.getValues('geographiesServed')?.includes(product as 'United States' | 'Canada' | 'Mexico' | 'United Kingdom' | 'Other')} 
                                                                    onCheckedChange={(value) => {
                                                                        if(value) if(!form.getValues('geographiesServed')?.includes(product as 'United States' | 'Canada' | 'Mexico' | 'United Kingdom' | 'Other')) form.setValue('geographiesServed', [...form.getValues('geographiesServed') ?? [], product as 'United States' | 'Canada' | 'Mexico' | 'United Kingdom' | 'Other'])
                                                                        else form.setValue('geographiesServed', form.getValues('geographiesServed')?.filter((item) => item !== product))
                                                                    }}
                                                                    id={product}
                                                                />
                                                                <label
                                                                    htmlFor={product}
                                                                    className="text-sm font-medium leading-none text-white/90 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                                >
                                                                    {product}
                                                                </label>
                                                            </div>
                                                        ))}
                                                    </AccordionContent>
                                                </AccordionItem>
                                            </Accordion>
                                        </FormControl>
                                        <FormMessage className='absolute text-red-600 -bottom-6' />
                                    </FormItem>
                                ) : <></>}
                            />
                             <FormField
                    control={form.control}
                    disabled={isPending}
                    name="state"
                    render={({ field }) => (
                        <FormItem className='relative flex flex-col gap-1  !mt-0 max-w-[450px]'>
                            <FormControl>
                                <select defaultValue='' className='flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none'  {...field}>
                                    <option disabled value=''>State</option>
                                    <option value="AL">AL</option>
                                    <option value="AK">AK</option>
                                    <option value="AZ">AZ</option>
                                    <option value="AR">AR</option>
                                    <option value="CA">CA</option>
                                    <option value="CO">CO</option>
                                    <option value="CT">CT</option>
                                    <option value="DE">DE</option>
                                    <option value="FL">FL</option>
                                    <option value="GA">GA</option>
                                    <option value="HI">HI</option>
                                    <option value="ID">ID</option>
                                    <option value="IL">IL</option>
                                    <option value="IN">IN</option>
                                    <option value="IA">IA</option>
                                    <option value="KS">KS</option>
                                    <option value="KY">KY</option>
                                    <option value="LA">LA</option>
                                    <option value="ME">ME</option>
                                    <option value="MD">MD</option>
                                    <option value="MA">MA</option>
                                    <option value="MI">MI</option>
                                    <option value="MN">MN</option>
                                    <option value="MS">MS</option>
                                    <option value="MO">MO</option>
                                    <option value="MT">MT</option>
                                    <option value="NE">NE</option>
                                    <option value="NV">NV</option>
                                    <option value="NH">NH</option>
                                    <option value="NJ">NJ</option>
                                    <option value="NM">NM</option>
                                    <option value="NY">NY</option>
                                    <option value="NC">NC</option>
                                    <option value="ND">ND</option>
                                    <option value="OH">OH</option>
                                    <option value="OK">OK</option>
                                    <option value="OR">OR</option>
                                    <option value="PA">PA</option>
                                    <option value="RI">RI</option>
                                    <option value="SC">SC</option>
                                    <option value="SD">SD</option>
                                    <option value="TN">TN</option>
                                    <option value="TX">TX</option>
                                    <option value="UT">UT</option>
                                    <option value="VT">VT</option>
                                    <option value="VA">VA</option>
                                    <option value="WA">WA</option>
                                    <option value="WV">WV</option>
                                    <option value="WI">WI</option>
                                    <option value="WY">WY</option>
                                </select>
                            </FormControl>
                            <FormMessage className=' text-red-600 ' />
                        </FormItem>
                    )}
                />
                              <FormField
                                control={form.control}
                                disabled={isPending}
                                name="aum"
                                render={({ field }) => form.getValues('investorType') === 'Institution' ? (
                                    <FormItem className='relative flex flex-col gap-1 w-screen ipfield !mt-0'>
                                        <FormControl>
                                            <input className='flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none' placeholder="AUM" {...field} />
                                        </FormControl>
                                        <FormMessage className='absolute text-red-600 -bottom-6' />
                                    </FormItem>
                                ) : <></>}
                            />
                            <FormField
                                control={form.control}
                                disabled={isPending}
                                name="futureInvestmentAmount"
                                render={({ field }) => (
                                    <FormItem className='relative flex flex-col gap-1 w-screen ipfield !mt-0'>
                                        <FormControl>
                                            <select
                                                defaultValue={field.value}
                                                className='flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none'
                                                {...field}
                                            >
                                                <option disabled value="">Amount that can be invested over the next 12 months</option>
                                                {['Less than $250K', '$250K - $1M', 'S1M - $5M', '$5M+', 'Not sure'].map((item, index) => (
                                                    <option key={index} value={item}>{item}</option>
                                                ))}
                                            </select>
                                        </FormControl>
                                        <FormMessage className='absolute text-red-600 -bottom-6' />
                                    </FormItem>
                                )}
                            />
                            <div className='flex items-center justify-center gap-2 w-full !mt-0'>
                                <button onClick={handleSaveInvestorDetails} disabled={isPending} className='w-full !mt-8 bg-[#FF7A00] text-white font-bold rounded-[8px] mx-auto py-3.5 text-sm px-4 max-w-[216px] disabled:opacity-70' type="button">{isPending ? <Loader2 stroke="#fff" className='animate-spin mx-auto' /> : form.getValues('investorType') === 'Institution' ? 'Save' : 'Continue'}</button>
                                {form.getValues('investorType') === 'Institution' && <button disabled={isPending || !form.getValues('futureInvestmentAmount') || (form.getValues('investorType') === 'Institution' ? !form.getValues('institutionType') : false)} className='w-full !mt-8 bg-[#FF7A00] text-white font-bold rounded-[8px] mx-auto py-3.5 text-sm px-4 max-w-[216px] disabled:opacity-70' type="submit">{isPending ? <Loader2 stroke="#fff" className='animate-spin mx-auto' /> : 'Continue'}</button>}
                            </div>
                        </>
                    )}
                </form>
                {/* {saveSuccess && (
                    <div className='border-2 border-[#00AE6E] gap-4 rounded-[8px] bg-[#ECFDF5] flex items-center justify-center px-12 py-6'>
                        <Check size={24} className='text-[#00AE6E]' />
                        <p className='text-black font-semibold'>Startup details saved successfully</p>
                    </div>
                )} */}
                {error && (
                    <div className='border-2 border-[#F86C6C] gap-4 rounded-[8px] bg-[#FEF2F2] flex items-center justify-center px-12 py-6'>
                        <X size={24} className='text-[#F86C6C]' />
                        <p className='text-black font-semibold'>{error}</p>
                    </div>
                )}
            </Form>
        </>
    )
}