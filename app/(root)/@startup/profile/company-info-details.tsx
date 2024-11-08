'use client'

import { UserType } from "@/lib/types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Loader2 } from "lucide-react";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import OwnerEditBtn from "./owner-edit-btn";

const editCompanyInfoSchema = z.object({
    companyName: z.string().min(2, {
        message: 'Company name must be at least 2 characters long'
    }),
    businessStructure: z.enum(["Sole Proprietorship", "Partnership", "Corporation", "S Corporation", "Limited Liability Company"]),
    EIN: z.string().min(8, {
        message: 'EIN must be at least 8 characters long'
    }),
    companyEmail: z.string().email({
        message: 'Please enter a valid email address'
    }),
    address: z.string().min(6, {
        message: 'Address must be at least 6 characters long'
    }),
    industrySector: z.enum(["Technology", "Healthcare", "Financial Services", "Consumer Goods", "Industrial Goods", "Energy", "Real Estate", "Retail", "Media and Entertainment", "Transportation", "Telecommunications", "Agriculture", "Education", "Hospitality and Leisure", "Utilities", "Other"]),
})

type Props = { 
    user: UserType, 
    startUpOwners: {
        id: number;
        name: string | null;
        startup_id: number;
        share: string | null;
    }[] 
}

export default function CompanyInfoDetails({ user, startUpOwners }: Props)
{
    const searchParams = useSearchParams()
    const router = useRouter()

    const edit = searchParams.get('edit')

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [emailChanged, setEmailChanged] = useState(false)

    const form = useForm<z.infer<typeof editCompanyInfoSchema>>({
        resolver: zodResolver(editCompanyInfoSchema),
        defaultValues: {
            companyName: user?.userStartUp?.company_name ?? '',
            businessStructure: user?.userStartUp?.business_structure ?? undefined,
            EIN: user?.userStartUp?.EIN ?? '',
            companyEmail: user?.userStartUp?.email ?? '',
            address: user?.userStartUp?.address ?? '',
            industrySector: user?.userStartUp?.industry_sector ?? undefined,
        },
    })

    const onSubmit = async (values: z.infer<typeof editCompanyInfoSchema>) => {
        setIsLoading(true)

        const supabase = createClient()

        const { error } = 
        await supabase.from('startups').update({
            company_name: values.companyName,
            business_structure: values.businessStructure,
            EIN: values.EIN,
            email: values.companyEmail,
            address: values.address,
            industry_sector: values.industrySector,
        }).eq('id', user?.userStartUp?.id!)
        

        if(error) setError(error.message)
        else {
            setError('')
            router.push('/profile?tab=company-info')
            router.refresh()
        }

        setIsLoading(false)
    }

    return edit ? (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col items-center justify-center gap-8'>
                <div className="flex items-center justify-center flex-wrap gap-8">
                    <FormField
                        control={form.control}
                        disabled={isLoading}
                        name="companyName"
                        render={({ field }) => (
                            <FormItem className='relative flex flex-col gap-1 w-screen max-w-[384px]'>
                                <FormLabel className='text-left text-black'>Company Name</FormLabel>
                                <FormControl>
                                    <input 
                                        className='flex flex-1 px-12 placeholder:font-light py-5 rounded-[2px] outline-none' 
                                        placeholder="First Name" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage className='absolute text-red-600 -bottom-6' />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        disabled={isLoading}
                        name="businessStructure"
                        render={({ field }) => (
                            <FormItem className='relative flex flex-col gap-1 w-screen max-w-[384px]'>
                                <FormLabel className='text-left text-black'>Business Structure</FormLabel>
                                <FormControl>
                                    <select 
                                        className='flex flex-1 px-12 placeholder:font-light py-5 rounded-[2px] outline-none' 
                                        {...field} 
                                    >
                                        <option value="">Select an option</option>
                                        {['Sole Proprietorship', 'Partnership', 'Corporation', 'S Corporation', 'Limited Liability Company'].map((businessStructure) => (
                                            <option value={businessStructure} key={businessStructure}>{businessStructure}</option>
                                        ))}
                                    </select>
                                </FormControl>
                                <FormMessage className='absolute text-red-600 -bottom-6' />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        disabled={isLoading}
                        name="EIN"
                        render={({ field }) => (
                            <FormItem className='relative flex flex-col gap-1 w-screen max-w-[384px]'>
                                <FormLabel className='text-left text-black'>EIN</FormLabel>
                                <FormControl>
                                    <input 
                                        className='flex flex-1 px-12 placeholder:font-light py-5 rounded-[2px] outline-none' 
                                        placeholder="EIN" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage className='absolute text-red-600 -bottom-6' />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        disabled={isLoading}
                        name="address"
                        render={({ field }) => (
                            <FormItem className='relative flex flex-col gap-1 w-screen max-w-[384px]'>
                                <FormLabel className='text-left text-black'>Address</FormLabel>
                                <FormControl>
                                    <input 
                                        className='flex flex-1 px-12 placeholder:font-light py-5 rounded-[2px] outline-none' 
                                        placeholder="Address" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage className='absolute text-red-600 -bottom-6' />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        disabled={isLoading}
                        name="companyEmail"
                        render={({ field }) => (
                            <FormItem className='relative flex flex-col gap-1 w-screen max-w-[384px]'>
                                <FormLabel className='text-left text-black'>Company Email</FormLabel>
                                <FormControl>
                                    <input 
                                        className='flex flex-1 px-12 placeholder:font-light py-5 rounded-[2px] outline-none' 
                                        placeholder="Company Email" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage className='absolute text-red-600 -bottom-6' />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        disabled={isLoading}
                        name="industrySector"
                        render={({ field }) => (
                            <FormItem className='relative flex flex-col gap-1 w-screen max-w-[384px]'>  
                                <FormLabel className='text-left text-black'>Industry Sector</FormLabel>
                                <FormControl>
                                    <select 
                                        className='flex flex-1 px-12 placeholder:font-light py-5 rounded-[2px] outline-none' 
                                        {...field} 
                                    >
                                        <option value="">Select an option</option>
                                        {['Technology', 'Healthcare', 'Financial Services', 'Consumer Goods', 'Industrial Goods', 'Energy', 'Real Estate', 'Retail', 'Media and Entertainment', 'Transportation', 'Telecommunications', 'Agriculture', 'Education', 'Hospitality and Leisure', 'Utilities', 'Other'].map((industrySector) => (
                                            <option value={industrySector} key={industrySector}>{industrySector}</option>
                                        ))}
                                    </select>
                                </FormControl>
                                <FormMessage className='absolute text-red-600 -bottom-6' />
                            </FormItem>
                        )}
                    />
                </div>
                <button type='submit' className='rounded-[2px] bg-white text-black mt-4 mx-auto text-sm px-2.5 text-nowrap py-1.5 w-16'>
                    {isLoading ? <Loader2 stroke="#000" className='animate-spin mx-auto' /> : 'Submit'}
                </button>
                {error && (
                    <div className='border-2 border-[#7f2315] gap-2 mt-4 rounded-[8px] min-w-[384px] max-w-[384px] mx-auto bg-[#541c15] flex items-center justify-center px-12 py-6'>
                        <p className='text-white font-semibold text-center'>{error}</p>
                    </div>
                )}
                {emailChanged && (
                    <div className='border-2 border-[#157f2f] gap-2 mt-4 rounded-[8px] min-w-[384px] max-w-[384px] mx-auto bg-[#1a5415] flex items-center justify-center px-12 py-6'>
                        <p className='text-black font-semibold text-center'>Please check your new email's inbox for a verification email.</p>
                    </div>
                )}
            </form>
        </Form>
    ) : (
        <div className='flex flex-col gap-8'>
            <div className='flex flex-col  gap-8'>

            <div className="flex ">
                <div className='flex flex-col flex-1 gap-2 items-start justify-center w-full'>  
                    <p className='font-normal font-Montserrat text-black text-xs'>Company Name</p>
                    <p className='text-black font-bold text-base font-Montserrat'>{user?.userStartUp?.company_name}</p>
                </div>
                <div className='flex flex-col flex-1 gap-2 items-start justify-center w-full'>
                    <p className='font-normal font-Montserrat text-black text-xs'>Business Structure</p>
                    <p className='text-black font-bold text-base font-Montserrat'>{user?.userStartUp?.business_structure}</p>
                </div>
                </div>

                <div className="flex ">
                <div className='flex flex-col flex-1 gap-2 items-start justify-center w-full'>
                    <p className='font-normal font-Montserrat text-black text-xs'>EIN</p>
                    <p className='text-black font-bold text-base font-Montserrat'>{user?.userStartUp?.EIN}</p>
                </div>
                <div className='flex flex-col flex-1 gap-2 items-start justify-center w-full'>
                    <p className='font-normal font-Montserrat text-black text-xs'>Company Address</p>
                    <p className='text-black font-bold text-base font-Montserrat'>{user?.userStartUp?.address}</p>
                </div>
                </div>

                <div className="flex ">
                <div className='flex flex-col flex-1 gap-2 items-start justify-center w-full'>
                    <p className='font-normal font-Montserrat text-black text-xs'>Company Email</p>
                    <p className='text-black font-bold text-base font-Montserrat'>{user?.userStartUp?.email}</p>
                </div>
                <div className='flex flex-col flex-1 gap-2 items-start justify-center w-full'>
                    <p className='font-normal font-Montserrat text-black text-xs'>Industry and Sector</p>
                    <p className='text-black font-bold text-base font-Montserrat'>{user?.userStartUp?.industry_sector}</p>
                </div>
                </div>



            </div>
            <Tabs defaultValue={startUpOwners[0].id.toString()!} className='flex flex-col gap-8'>
                <TabsList className='mr-auto'>
                    {startUpOwners.map((owner) => (
                        <TabsTrigger className='!text-white text-sm data-[state=active]:!text-[#FF7A00] data-[state=active]:!bg-[#FF7A0014] w-[225px] h-10 border-b font-Montserrat font-semibold border-white data-[state=active]:border-[#FF7A00]' key={owner.id} value={owner.id.toString()!}>{owner.name}</TabsTrigger>
                    ))}
                </TabsList>
                {startUpOwners.map((owner) => (
                    <TabsContent key={owner.id} value={owner.id.toString()!} className='flex w-full gap-8'>
                        <div className='flex flex-col flex-1 gap-2 items-start justify-center min-w-[450px]'>
                            <p className='font-normal font-Montserrat text-black text-xs'>Name</p>
                            <p className='text-black font-bold text-base font-Montserrat'>{owner.name}</p>
                        </div>
                        <div className='flex flex-col flex-1 gap-2 items-start justify-center min-w-[450px]'>
                            <p className='font-normal font-Montserrat text-black text-xs'>Share</p>
                            <p className='text-black font-bold text-base font-Montserrat'>{owner.share}%</p>
                        </div>
                        <OwnerEditBtn owner={owner!} />
                    </TabsContent>
                ))}
            </Tabs> 
        </div>
    )
}