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
import Link from "next/link"
import { cn } from "@/lib/utils"
import { startUpDetailsSchema } from "@/lib/validations/onBoardingSchema"
import { Check, Loader2, X } from "lucide-react"
import { countryDialingCodes } from "@/constants"
import { saveStartUpDetails } from "@/lib/actions/onboarding"
import { useRouter } from "next/navigation"

type Props = {
    startUpDetails: {
        accepted: boolean
        address: string | null
        business_structure:
        | Database["public"]["Enums"]["business_structure"]
        | null
        company_name: string | null
        EIN: string | null
        email: string | null
        id: number
        industry_sector:
        | Database["public"]["Enums"]["industry_and_sector"]
        | null
        other_industry_and_sector: string | null
        phone_number: string | null
        user_id: string,
        user: {}[] | {
            role: string
            id: string
            first_name: string
            last_name: string
        }
    }
    startUpOwners: {
        id: number;
        name: string | null;
        share: number | null;
        startup_id: number;
    }[]
}

export default function StartUpDetails({ startUpDetails, startUpOwners }: Props)
{
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [saveSuccess, setSaveSuccess] = useState(false)

    const router = useRouter()

    const form = useForm<z.infer<typeof startUpDetailsSchema>>({
        resolver: zodResolver(startUpDetailsSchema),
        defaultValues: {
            companyName: startUpDetails.company_name ?? "",
            businessStructure: startUpDetails.business_structure ?? "Partnership",
            businessOwners: startUpOwners.map(owner => ({
                name: owner.name ?? "",
                share: owner.share ?? 0,
                saved: false
            })),
            EIN: startUpDetails.EIN ?? "",
            companyEmail: startUpDetails.email ?? "",
            phoneNumber: startUpDetails.phone_number?.split(" ")[1] ?? "",
            countryCode: Object.entries(countryDialingCodes).find(([code, value]) => value === startUpDetails.phone_number?.split(" ")[0])?.[0] ?? countryDialingCodes.US,
            address: startUpDetails.address ?? "",
            industrySector: startUpDetails.industry_sector ?? "Technology",
            otherSector: startUpDetails.other_industry_and_sector ?? "",
        },
    })

    form.watch('industrySector')
    form.watch('businessOwners')

    const onSubmit = async (values: z.infer<typeof startUpDetailsSchema>) => {
        setIsPending(true)

        const { error } = await saveStartUpDetails(startUpDetails.id, values)

        if(error) setError(error)
        else setSaveSuccess(true)

        router.push('/startup-details/submit')

        setIsPending(false)
    }

    const handleSaveStartUpDetails = async () => {
        setIsPending(true)
        
        const { error } = await saveStartUpDetails(startUpDetails.id, form.getValues())

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
                            <FormLabel>Company name</FormLabel>
                            <FormControl>
                                <input className='flex flex-1 border border-[#D0D5DD] rounded-[8px] px-4 py-2 outline-none' placeholder="Company name" {...field} />
                            </FormControl>
                            <FormMessage className='absolute text-red-600 -bottom-6' />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    disabled={isPending}
                    name="businessStructure"
                    render={({ field }) => (
                        <FormItem className='relative flex flex-col gap-1 w-screen max-w-[384px]'>
                            <FormLabel>Business structure</FormLabel>
                            <FormControl>
                                <select className='flex flex-1 border border-[#D0D5DD] rounded-[8px] px-4 py-2 outline-none' {...field}>
                                    <option value="Sole Proprietorship">Sole Proprietorship</option>
                                    <option value="Partnership">Partnership</option>
                                    <option value="Corporation">Corporation</option>
                                    <option value="S Corporation">S Corporation</option>
                                    <option value="Limited Liability Company">Limited Liability Company</option>
                                </select>
                            </FormControl>
                            <FormMessage className='absolute text-red-600 -bottom-6' />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    disabled={isPending}
                    name="businessOwners"
                    render={({ field }) => (
                        <FormItem className='relative flex flex-col gap-1 w-screen max-w-[384px]'>
                            <FormLabel>Business structure</FormLabel>
                            <p className='text-main-gray'>Provide details of any individual with an ownership stake of 25% or more in your business.</p>
                            <FormControl>
                                <div className='flex flex-col gap-4'>
                                    <div className='border border-[#D0D5DD] rounded-[8px] flex flex-col px-6 py-6'>
                                        {form.getValues('businessOwners')?.map((owner, index) => owner.saved ? (
                                            <div key={index} className='flex gap-4 items-center justify-center'>
                                                <div className='flex items-center justify-start gap-4 flex-1'>
                                                    <p className=''>{owner.name}</p>
                                                    <p className='text-main-gray'>{owner.share}% Share</p>
                                                </div>
                                                <X 
                                                    size={16} 
                                                    className='cursor-pointer'
                                                    onClick={() => form.setValue('businessOwners', form.getValues('businessOwners')?.filter((_, i) => i !== index))} 
                                                />
                                            </div>
                                        ) : (
                                            <div key={index} className='flex gap-4 items-center justify-center'>
                                                <div className='w-[90%] flex items-center justify-between'>
                                                    <input 
                                                        className='flex border max-w-[220px] border-[#D0D5DD] rounded-[8px] px-4 py-2 outline-none' 
                                                        placeholder="Owner name" 
                                                        value={owner.name} 
                                                        onChange={e => form.setValue(`businessOwners.${index}.name`, e.target.value)} 
                                                    />
                                                    <input 
                                                        className='flex border max-w-[70px] border-[#D0D5DD] rounded-[8px] px-4 py-2 outline-none' 
                                                        placeholder="Share" 
                                                        type="number"
                                                        value={owner.share} 
                                                        onChange={e => form.setValue(`businessOwners.${index}.share`, parseInt(e.target.value))} 
                                                    />
                                                </div>
                                                <Check
                                                    size={16} 
                                                    className='cursor-pointer'
                                                    onClick={() => form.setValue(`businessOwners.${index}.saved`, true)} 
                                                />
                                            </div>
                                        
                                        ))}
                                    </div>
                                    <p onClick={() => form.setValue('businessOwners', [...form.getValues('businessOwners') ?? [], { name: "", share: 25, saved: false }])} className='text-main-purple cursor-pointer'>Add owner</p>
                                </div>
                            </FormControl>
                            {form.getFieldState('businessOwners').error && <p className='absolute text-red-600 -bottom-6'>Please enter valid details</p>}
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    disabled={isPending}
                    name="EIN"
                    render={({ field }) => (
                        <FormItem className='relative flex flex-col gap-1 w-screen max-w-[384px]'>
                            <FormLabel>EIN</FormLabel>
                            <FormControl>
                                <input className='flex flex-1 border border-[#D0D5DD] rounded-[8px] px-4 py-2 outline-none' placeholder="XX-XXXXXX" {...field} />
                            </FormControl>
                            <FormMessage className='absolute text-red-600 -bottom-6' />
                        </FormItem>
                    )}
                />
                <FormItem className="relative">
                    <FormLabel>Phone number</FormLabel>
                    <div className='flex flex-1 overflow-hidden'>
                        <FormField
                            control={form.control}
                            name="countryCode"
                            render={({ field }) => (
                                <FormItem className='flex'>
                                    <FormControl>
                                        <select className='flex border-y border-l border-[#D0D5DD] rounded-tl-[8px] rounded-bl-[8px] px-4 py-2 outline-none' {...field}>
                                            {Object.entries(countryDialingCodes).map(([code, country]) => (
                                                <option key={code} value={code}>{code} {country}</option>
                                            ))}
                                        </select>
                                    </FormControl>
                                    <FormMessage className='absolute text-red-600 -bottom-6' />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phoneNumber"
                            render={({ field }) => (
                                <FormItem className='flex flex-col gap-1 flex-1'>
                                    <FormControl>
                                        <input className='flex border-y border-r border-[#D0D5DD] rounded-tr-[8px] rounded-br-[8px] flex-1 px-4 py-2 outline-none' placeholder="(555) 000 0000" {...field} />
                                    </FormControl>
                                    <FormMessage className='absolute text-red-600 -bottom-6' />
                                </FormItem>
                            )}
                        />
                    </div>
                </FormItem>
                <FormField
                    control={form.control}
                    disabled={isPending}
                    name="companyEmail"
                    render={({ field }) => (
                        <FormItem className='relative flex flex-col gap-1 w-screen max-w-[384px]'>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <input className='flex flex-1 border border-[#D0D5DD] rounded-[8px] px-4 py-2 outline-none' placeholder="you@company.com" {...field} />
                            </FormControl>
                            <FormMessage className='absolute text-red-600 -bottom-6' />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    disabled={isPending}
                    name="address"
                    render={({ field }) => (
                        <FormItem className='relative flex flex-col gap-1 w-screen max-w-[384px]'>
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                                <input className='flex flex-1 border border-[#D0D5DD] rounded-[8px] px-4 py-2 outline-none' placeholder="3517 W. Gray St. Utica, Pennsylvania 57867" {...field} />
                            </FormControl>
                            <FormMessage className='absolute text-red-600 -bottom-6' />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    disabled={isPending}
                    name="industrySector"
                    render={({ field }) => (
                        <FormItem className='relative flex flex-col gap-1 w-screen max-w-[384px]'>
                            <FormLabel>Business structure</FormLabel>
                            <FormControl>
                                <select className='flex flex-1 border border-[#D0D5DD] rounded-[8px] px-4 py-2 outline-none' {...field}>
                                    <option value="Technology">Technology</option>
                                    <option value="Healthcare">Healthcare</option>
                                    <option value="Financial Services">Financial Services</option>
                                    <option value="Consumer Goods">Consumer Goods</option>
                                    <option value="Industrial Goods">Industrial Goods</option>
                                    <option value="Energy">Energy</option>
                                    <option value="Real Estate">Real Estate</option>
                                    <option value="Retail">Retail</option>
                                    <option value="Media and Entertainment">Media and Entertainment</option>
                                    <option value="Transportation">Transportation</option>
                                    <option value="Telecommunications">Telecommunications</option>
                                    <option value="Agriculture">Agriculture</option>
                                    <option value="Education">Education</option>
                                    <option value="Hospitality and Leisure">Hospitality and Leisure</option>
                                    <option value="Utilities">Utilities</option>
                                    <option value="Other">Other</option>
                                </select>
                            </FormControl>
                            <FormMessage className='absolute text-red-600 -bottom-6' />
                        </FormItem>
                    )}
                />
                {form.getValues('industrySector') === 'Other' && (
                    <FormField
                        control={form.control}
                        disabled={isPending}
                        name="otherSector"
                        render={({ field }) => (
                            <FormItem className='relative flex flex-col gap-1 w-screen max-w-[384px]'>
                                <FormLabel>Other sector</FormLabel>
                                <FormControl>
                                    <input className='flex flex-1 border border-[#D0D5DD] rounded-[8px] px-4 py-2 outline-none' placeholder="Other sector" {...field} />
                                </FormControl>
                                <FormMessage className='absolute text-red-600 -bottom-6' />
                            </FormItem>
                        )}
                    />
                )}
                <div className='flex items-center justify-center gap-2 w-full'>
                    <button onClick={handleSaveStartUpDetails} disabled={isPending} className='w-full bg-main-purple text-white font-semibold rounded-[8px] py-2 px-4' type="button">{isPending ? <Loader2 stroke="#fff" className='animate-spin mx-auto' /> : 'Save'}</button>
                    <button disabled={isPending} className='w-full bg-main-purple text-white font-semibold rounded-[8px] py-2 px-4' type="submit">{isPending ? <Loader2 stroke="#fff" className='animate-spin mx-auto' /> : 'Continue'}</button>
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
                    <Check size={24} className='text-[#F86C6C]' />
                    <p className='text-black font-semibold'>{error}</p>
                </div>
            )}
        </Form>
    )
}