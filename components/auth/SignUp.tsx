'use client'

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
import { signUpSchema } from "@/lib/validations/authSchema"
import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { ArrowLeft, CheckCircle2, Circle, Eye, EyeOff, Loader2 } from "lucide-react"
import { signUp } from "@/lib/actions/auth"
import Link from "next/link"

export default function SignIn()
{
    const [rolePage, setRolePage] = useState(true)
    const [isPending, setIsPending] = useState(false)
    const [passwordVisible, setPasswordVisible] = useState(false)
    
    const form = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            role: 'startup',
        },
    })

    const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
        setIsPending(true)
        await signUp(values)
        setIsPending(false)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-[90vw] flex flex-col pb-8">
                {rolePage ? (
                    <>
                        <p className='font-light text-white text-center'>Select an option from below</p>
                        <FormField
                            control={form.control}
                            disabled={isPending}
                            name="role"
                            render={({ field }) => (
                                <FormItem className="space-y-3">
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex flex-col space-y-1"
                                        >
                                            <FormItem className={cn("flex justify-between items-start p-4 pb-6 gap-4 max-w-[360px] w-screen border-2 rounded-[12px] bg-white", form.getValues().role === 'startup' ? 'border-[#FF7A00]' : 'border-white')}>
                                                <FormLabel className="font-normal">
                                                    <div className='flex gap-4 pl-2 items-center justify-between cursor-pointer'>
                                                        {form.getValues().role !== 'startup' ? (<Circle size={24} fill="#fff" stroke="#00000080" />) : (<CheckCircle2 size={24} fill="#FF7A00" stroke="#fff" />)}
                                                        <div className='flex flex-col gap-1'>
                                                            <p className='text-black font-semibold text-base font-Montserrat'>Borrower</p>
                                                            <p className='text-black text-xs leading-5 font-Montserrat'>I am a borrower, looking for funding.</p>
                                                        </div>
                                                    </div>
                                                </FormLabel>
                                                <FormControl>
                                                    <RadioGroupItem defaultChecked={true} value="startup" className={cn("mt-0imp opacity-0", form.getValues().role === 'startup' ? 'bg-main-purple' : 'bg-white')} />
                                                </FormControl>
                                            </FormItem>
                                            <FormItem className={cn("flex justify-between items-start p-4 pb-6 gap-4 max-w-[360px] w-screen border-2 rounded-[12px] bg-white", form.getValues().role === 'investor' ? 'border-[#FF7A00]' : 'border-white')}> 
                                                <FormLabel className="font-normal">
                                                    <div className='flex gap-4 pl-2 items-center justify-between cursor-pointer'>
                                                        {form.getValues().role !== 'investor' ? (<Circle size={24} fill="#fff" stroke="#00000080" />) : (<CheckCircle2 size={24} fill="#FF7A00" stroke="#fff" />)}
                                                        <div className='flex flex-col gap-1'>
                                                            <p className='text-black font-semibold text-base font-Montserrat'>Lender</p>
                                                            <p className='text-black text-xs leading-5 font-Montserrat'>I am a lender, looking for deals.</p>
                                                        </div>
                                                    </div>
                                                </FormLabel>
                                                <FormControl>
                                                    <RadioGroupItem value="investor" className={cn("mt-0imp opacity-0", form.getValues().role === 'investor' ? 'bg-main-purple' : 'bg-white')} />
                                                </FormControl>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                            />
                            <button onMouseDown={() => setRolePage(false)} className='w-full !mt-8 bg-[#FF7A00] text-white font-bold rounded-[8px] mx-auto py-3.5 text-sm px-4 max-w-[216px] disabled:opacity-70'>Continue</button>
                            <Link href='/sign-in' className='text-white font-normal text-sm font-Montserrat mx-auto'>Back to login</Link>
                    </>
                ) : (
                    <>
                        <FormField
                            control={form.control}
                            disabled={isPending}
                            name="role"
                            render={({ field }) => (
                                <FormItem className="space-y-3 hidden">
                                    <FormLabel>Select an option from below</FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex flex-col space-y-1"
                                        >
                                            <FormItem className={cn("flex justify-between items-start p-4 pb-6 gap-4 max-w-[360px] w-screen border-2 rounded-xl", form.getValues().role === 'startup' ? 'border-main-purple' : 'border-[#EAECF0]')}>
                                                <FormLabel className="font-normal">
                                                    <div className='flex gap-4 items-start justify-between cursor-pointer'>
                                                        <Image
                                                            src='/images/startup.svg'
                                                            alt='Startup'
                                                            width={48}
                                                            height={48} 
                                                        />
                                                        <div className='flex flex-col gap-2'>
                                                            <p className='text-[#344054] font-medium'>Startup</p>
                                                            <p className='text-main-gray leading-5'>I am a startup, looking for investors.</p>
                                                        </div>
                                                    </div>
                                                </FormLabel>
                                                <FormControl>
                                                    <RadioGroupItem defaultChecked={true} value="startup" className={cn("mt-0imp", form.getValues().role === 'startup' ? 'bg-main-purple' : 'bg-white')} />
                                                </FormControl>
                                            </FormItem>
                                            <FormItem className={cn("flex justify-between items-start p-4 pb-6 gap-4 max-w-[360px] w-screen border-2 rounded-xl", form.getValues().role === 'investor' ? 'border-main-purple' : 'border-[#EAECF0]')}>
                                                <FormLabel className="font-normal">
                                                <div className='flex gap-4 items-start justify-between cursor-pointer'>
                                                        <Image
                                                            src='/images/investor.svg'
                                                            alt='Investor'
                                                            width={48}
                                                            height={48} 
                                                        />
                                                        <div className='flex flex-col gap-2'>
                                                            <p className='text-[#344054] font-medium'>Investor</p>
                                                            <p className='text-main-gray leading-5'>I am an investor, looking for startups.</p>
                                                        </div>
                                                    </div>
                                                </FormLabel>
                                                <FormControl>
                                                    <RadioGroupItem value="investor" className={cn("mt-0imp", form.getValues().role === 'investor' ? 'bg-main-purple' : 'bg-white')} />
                                                </FormControl>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                            />
                        <FormField
                            control={form.control}
                            disabled={isPending}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem className='relative flex flex-col gap-1 w-screen max-w-[450px]'>
                                    <FormControl>
                                        <input className='flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none' placeholder="First name" {...field} />
                                    </FormControl>
                                    <FormMessage className='absolute text-red-600 -bottom-6' />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            disabled={isPending}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem className='relative flex flex-col gap-1 w-screen max-w-[450px]'>
                                    <FormControl>
                                        <input className='flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none' placeholder="Last name" {...field} />
                                    </FormControl>
                                    <FormMessage className='absolute text-red-600 -bottom-6' />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            disabled={isPending}
                            name="email"
                            render={({ field }) => (
                                <FormItem className='relative flex flex-col gap-1 w-screen max-w-[450px]'>
                                    <FormControl>
                                        <input className='flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none' placeholder="you@company.com" {...field} />
                                    </FormControl>
                                    <FormMessage className='absolute text-red-600 -bottom-6' />
                                </FormItem>
                            )}
                        />
                        {/* <FormField
                            control={form.control}
                            name="dateOfBirth"
                            render={({ field }) => (
                                <FormItem className="flex flex-col relative">
                                <FormLabel>Date of birth</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "flex-1 border border-[#D0D5DD] rounded-[8px] px-4 py-2 outline-none max-w-[384px] text-base",
                                                !field.value && "text-muted-foreground"
                                            )}
                                            >
                                            {field.value ? (
                                                format(field.value, "PPP")
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0 bg-white" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) =>
                                        date > new Date() || date < new Date("1900-01-01")
                                        }
                                        initialFocus
                                    />
                                    </PopoverContent>
                                </Popover>
                                <FormMessage className='absolute text-red-600 -bottom-6' />
                                </FormItem>
                            )}
                        /> */}
                        <FormField
                            control={form.control}
                            disabled={isPending}
                            name="password"
                            render={({ field }) => (
                                <FormItem className='relative flex flex-col gap-1 w-screen max-w-[450px]'>
                                    <FormControl>
                                        <div className='relative'>
                                            <input type={passwordVisible ? 'text' : "password"} className='flex flex-1 w-full px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none' placeholder="Password" {...field} />
                                            {passwordVisible ? (
                                                <Eye
                                                    className={cn('absolute top-[36%] z-50 cursor-pointer left-[92%]')} 
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        setPasswordVisible(prev => !prev)
                                                    }}
                                                    size={18}
                                                />
                                            ) : (
                                                <EyeOff
                                                    className={cn('absolute top-[36%] z-50 cursor-pointer left-[92%]')} 
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        setPasswordVisible(prev => !prev)
                                                    }} 
                                                    size={18}
                                                />
                                            )}
                                        </div>
                                    </FormControl>
                                    <FormMessage className='absolute text-red-600 -bottom-6' />
                                </FormItem>
                            )}
                        />
                        <button disabled={isPending} className='w-full !mt-8 bg-[#FF7A00] text-white font-bold rounded-[8px] mx-auto py-3.5 text-sm px-4 max-w-[216px] disabled:opacity-70' type="submit">{isPending ? <Loader2 stroke="#fff" className='animate-spin mx-auto' /> : 'Sign up'}</button>
                        <p onClick={() => {if(!isPending) setRolePage(true)}} className='text-white text-sm flex items-center justify-start gap-1 cursor-pointer'><ArrowLeft size={16} /> <span className='font-semibold'>Back</span></p>
                    </>
                )}
            </form>
        </Form>
    )
}