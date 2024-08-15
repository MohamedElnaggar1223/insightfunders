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
import { Check, Loader2, X } from "lucide-react"
import { saveInvestorDetails } from "@/lib/actions/onboarding"
import { useRouter } from "next/navigation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "../ui/checkbox"

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
    }
}

export default function InvestorDetails({ investorDetails }: Props)
{
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [saveSuccess, setSaveSuccess] = useState(false)

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
        },
    })

    form.watch('geographiesServed')
    form.watch('productsOffered')

    const onSubmit = async (values: z.infer<typeof investorDetailsSchema>) => {
        setIsPending(true)

        const { error } = await saveInvestorDetails(investorDetails.id, values)

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

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-[90vw] flex flex-col">
                <FormField
                    control={form.control}
                    disabled={isPending}
                    name="companyName"
                    render={({ field }) => (
                        <FormItem className='relative flex flex-col gap-1 w-screen max-w-[384px]'>
                            <FormControl>
                                <input className='flex flex-1 px-12 placeholder:font-light py-5 rounded-[2px] outline-none' placeholder="Company name" {...field} />
                            </FormControl>
                            <FormMessage className='absolute text-red-600 -bottom-6' />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    disabled={isPending}
                    name="companyEmail"
                    render={({ field }) => (
                        <FormItem className='relative flex flex-col gap-1 w-screen max-w-[384px]'>
                            <FormControl>
                                <input className='flex flex-1 px-12 placeholder:font-light py-5 rounded-[2px] outline-none' placeholder="Company email" {...field} />
                            </FormControl>
                            <FormMessage className='absolute text-red-600 -bottom-6' />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    disabled={isPending}
                    name="companyWebsite"
                    render={({ field }) => (
                        <FormItem className='relative flex flex-col gap-1 w-screen max-w-[384px]'>
                            <FormControl>
                                <input className='flex flex-1 px-12 placeholder:font-light py-5 rounded-[2px] outline-none' placeholder="Company website" {...field} />
                            </FormControl>
                            <FormMessage className='absolute text-red-600 -bottom-6' />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    disabled={isPending}
                    name="minimumRevenueRequirement"
                    render={({ field }) => (
                        <FormItem className='relative flex flex-col gap-1 w-screen max-w-[384px]'>
                            <FormControl>
                                <select className='flex flex-1 px-12 placeholder:font-light py-5 rounded-[2px] outline-none' {...field}>
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
                    )}
                />
                <FormField
                    control={form.control}
                    disabled={isPending}
                    name="maxFacilitySize"
                    render={({ field }) => (
                        <FormItem className='relative flex flex-col gap-1 w-screen max-w-[384px]'>
                            <FormControl>
                                <select className='flex flex-1 px-12 placeholder:font-light py-5 rounded-[2px] outline-none' {...field}>
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
                    )}
                />
                <FormField
                    control={form.control}
                    disabled={isPending}
                    name="productsOffered"
                    render={({ field }) => (
                        <FormItem className='relative flex flex-col gap-1 w-screen max-w-[384px]'>
                            <FormControl>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className="py-5 border border-white bg-white px-12">Products offered</AccordionTrigger>
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
                    )}
                />
                <FormField
                    control={form.control}
                    disabled={isPending}
                    name="geographiesServed"
                    render={({ field }) => (
                        <FormItem className='relative flex flex-col gap-1 w-screen max-w-[384px]'>
                            <FormControl>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className="rounded-[2px] bg-white border border-white py-5 px-12">Geographies Served</AccordionTrigger>
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
                    )}
                />
                <div className='flex items-center justify-center gap-2 w-full'>
                    <button onClick={handleSaveInvestorDetails} disabled={isPending} className='w-full bg-[#FF7A00] text-white font-semibold rounded-[2px] py-2 px-4' type="button">{isPending ? <Loader2 stroke="#fff" className='animate-spin mx-auto' /> : 'Save'}</button>
                    <button disabled={isPending} className='w-full bg-[#FF7A00] text-white font-semibold rounded-[2px] py-2 px-4' type="submit">{isPending ? <Loader2 stroke="#fff" className='animate-spin mx-auto' /> : 'Continue'}</button>
                </div>
            </form>
            {saveSuccess && (
                <div className='border-2 border-[#00AE6E] gap-4 rounded-[8px] bg-[#ECFDF5] flex items-center justify-center px-12 py-6'>
                    <Check size={24} className='text-[#00AE6E]' />
                    <p className='text-black font-semibold'>Startup details saved successfully</p>
                </div>
            )}
            {error && (
                <div className='border-2 border-[#F86C6C] gap-4 rounded-[8px] bg-[#FEF2F2] flex items-center justify-center px-12 py-6'>
                    <X size={24} className='text-[#F86C6C]' />
                    <p className='text-black font-semibold'>{error}</p>
                </div>
            )}
        </Form>
    )
}