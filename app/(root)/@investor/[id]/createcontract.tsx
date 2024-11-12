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
import { contractSchema } from "@/lib/validations/investorsSchema"
import { UserType } from "@/lib/types/user"
import { useEffect, useState } from "react"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon, CheckCircleIcon, Loader2, X } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { createContract } from "@/lib/actions/investor"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { createClient } from "@/utils/supabase/client"
import { nanoid } from "nanoid"
import { useRouter } from "next/navigation"

type Props = {
    user: UserType
    startupId: number
}

const numericRegex = /^-?\d*\.?\d+(?:[eE][-+]?\d+)?$/;

export default function CreateContract({ user, startupId }: Props) 
{
    const router = useRouter()

    const [isLoading, setIsLoading] = useState(false)
    const [signedAgreement, setSignedAgreement] = useState(false)
    const [signature, setSignature] = useState('')
    const [signatureError, setSignatureError] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

    const form = useForm<z.infer<typeof contractSchema>>({
        resolver: zodResolver(contractSchema),
        defaultValues: {
            investorId: user?.userInvestor?.id!,
            startupId,
            amountInvested: 0,
            interestRate: 0,
            maturityDate: new Date(new Date().setDate(new Date().getDate() + 7)),
            paymentInterval: '',
            termSheet: new File([], "")
        }
    })

    const onSubmit = async (values: z.infer<typeof contractSchema>) => {
        setIsLoading(true)

        const supabase = createClient()

        const fileName = `${nanoid(30)}.pdf`

        const { error: storageError } = await supabase.storage
            .from('termSheets') 
            .upload(fileName, values.termSheet)

        if(storageError) {
            console.log(storageError)
            return setIsLoading(false)
        }

        const { data: { publicUrl } } = supabase.storage
            .from('termSheets')
            .getPublicUrl(fileName)

        const { error } = await createContract({...values, termSheet: publicUrl})

        if(error) setError(error)
        else setSuccess(true)

        setIsLoading(false)
    }

    const handleSubmitSignature = () => {
        if (!signature || !(user?.userInfo?.first_name === signature || user?.userInfo?.last_name === signature || signature === `${user?.userInfo?.first_name} ${user?.userInfo?.last_name}`)) {
            setSignatureError('Signature does not match user name')
        }
        else {
            setSignatureError('')
            setSignedAgreement(true)
        }
    }

    useEffect(() => {
        if(success) {
            setTimeout(() => {
                router.push('/')
            }, 3000)
        }
    }, [success])

    return (
        <div className='flex flex-col'>
            {!signedAgreement ? (
                <div className='flex flex-col items-center justify-center gap-6'>
                    {/* <p className='text-white font-bold text-base'>Agreement Document</p>
                    <p className='text-white font-bold text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
                    <div className='mt-4 relative flex flex-col ml-auto'>
                        <input type='text' placeholder="Investor's Signature" className='bg-transparent border-b border-white text-white w-[294px] outline-none py-1.5' value={signature} onChange={(e) => setSignature(e.target.value)} />
                        {signatureError && <p className='text-red-500 text-left mr-auto text-[10px]'>{signatureError}</p>}
                        <button onMouseDown={handleSubmitSignature} className='w-fit rounded-[2px] bg-white text-black !text-[10px] mt-4 ml-auto text-xs px-2.5 text-nowrap py-1.5'>I Agree to all terms & Conditions</button>
                    </div>
                </div>
            ) : (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col items-center justify-center gap-8'>
                        <div className="flex items-center justify-center flex-wrap gap-8">
                            <FormField
                                control={form.control}
                                disabled={isLoading || success}
                                name="amountInvested"
                                render={({ field }) => (
                                    <FormItem className='relative flex flex-col gap-1 w-screen max-w-[384px]'>
                                        <FormLabel className='text-left text-white'>Amount Invested</FormLabel>
                                        <FormControl>
                                            <input 
                                                className='flex flex-1 px-12 placeholder:font-light py-5 rounded-[2px] outline-none' 
                                                placeholder="Amount Invested" 
                                                {...field} 
                                                onChange={(e) => {
                                                    const value = e.target.value;
                                                    if (value === '') field.onChange(0)
                                                    else if (numericRegex.test(value)) {
                                                        field.onChange(parseFloat(value));
                                                    }
                                                }}
                                            />
                                        </FormControl>
                                        <FormMessage className='absolute text-red-600 -bottom-6' />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                disabled={isLoading || success}
                                name="interestRate"
                                render={({ field }) => (
                                    <FormItem className='relative flex flex-col gap-1 w-screen max-w-[384px]'>
                                        <FormLabel className='text-left text-white'>Interest Rate</FormLabel>
                                        <FormControl>
                                            <input 
                                                className='flex flex-1 px-12 placeholder:font-light py-5 rounded-[2px] outline-none' 
                                                placeholder="Interest Rate" 
                                                {...field}
                                                onChange={(e) => {
                                                    const value = e.target.value;
                                                    if (value === '') field.onChange(0)
                                                    else if (numericRegex.test(value)) {
                                                        field.onChange(parseFloat(value));
                                                    }
                                                }}
                                            />
                                        </FormControl>
                                        <FormMessage className='absolute text-red-600 -bottom-6' />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                disabled={isLoading || success}
                                name="paymentInterval"
                                render={({ field }) => (
                                    <FormItem className='relative flex flex-col gap-1 w-screen max-w-[384px]'>
                                        <FormLabel className='text-left text-white'>Payment Interval</FormLabel>
                                        <FormControl>
                                            <select className='flex flex-1 px-12 placeholder:font-light py-5 rounded-[2px] outline-none' {...field}>
                                                <option value="">Select Payment Interval</option>
                                                <option value="month">Month</option>
                                                <option value="week">Week</option>
                                                <option value="quarter">Quarter</option>
                                                <option value="year">Year</option>
                                            </select>
                                        </FormControl>
                                        <FormMessage className='absolute text-red-600 -bottom-6' />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                disabled={isLoading || success}
                                name="maturityDate"
                                render={({ field }) => (
                                    <FormItem className='relative flex flex-col gap-1 w-screen max-w-[384px]'>
                                        <FormLabel className='text-left text-white'>Maturity Date</FormLabel>
                                        <FormControl>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                variant={"outline"}
                                                className={cn(
                                                    'flex flex-1 px-12 placeholder:font-light py-5 rounded-[2px] bg-white hover:bg-white outline-none',
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
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    disabled={(date) =>
                                                        {
                                                            const currentDate = new Date()
                                                            currentDate.setDate(currentDate.getDate() + 7)
                                                            return date < currentDate
                                                        }
                                                    }
                                                    initialFocus
                                                    className='bg-white'
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        </FormControl>
                                        <FormMessage className='absolute text-red-600 -bottom-6' />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                disabled={isLoading || success}
                                name="termSheet"
                                render={({ field }) => (
                                    <FormItem className='relative flex flex-col gap-1 w-screen max-w-[384px]'>
                                        <FormLabel className='text-left text-white'>Term Sheet</FormLabel>
                                        <FormControl>
                                            <>
                                                {/* <div className='flex flex-1 px-12 placeholder:font-light py-5 rounded-[2px] bg-white hover:bg-white outline-none cursor-pointer'>Upload Term Sheet</div> */}
                                                <input
                                                    type='file'
                                                    onChange={(e) => field.onChange(e.target.files?.[0] || null)}
                                                    onBlur={field.onBlur}
                                                    name={field.name}
                                                    ref={field.ref}
                                                    disabled={field.disabled}
                                                    className='flex flex-1 px-12 placeholder:font-light py-5 rounded-[2px] bg-white hover:bg-white outline-none cursor-pointer'
                                                />
                                            </>
                                        </FormControl>
                                        <FormMessage className='absolute text-red-600 -bottom-6' />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <button type='submit' className='w-fit rounded-[2px] bg-white text-black mt-4 mx-auto text-sm px-2.5 text-nowrap py-1.5'>Submit Contract</button>
                    </form>
                </Form>
            )}
            <Dialog open={isLoading}>
                <DialogContent className='flex items-center justify-center bg-transparent border-none shadow-none outline-none'>
                    <Loader2 className='animate-spin' size={42} color="#000" />
                </DialogContent>
            </Dialog>
            <Dialog open={success}>
                <DialogContent className='flex items-center justify-center bg-transparent border-none shadow-none outline-none'>
                    <CheckCircleIcon size={42} color="#006239" />
                    <p className='text-white font-semibold'>Contract Submitted</p>
                </DialogContent>
            </Dialog>
            {error && (
                <div className='border-2 border-[#7f2315] gap-2 mt-4 rounded-[8px] min-w-[384px] max-w-[384px] mx-auto bg-[#541c15] flex items-center justify-center px-12 py-6'>
                    <X size={24} className='text-[#7f2315]' />
                    <p className='text-white font-semibold'>{error}</p>
                </div>
            )}
        </div>
    )
}