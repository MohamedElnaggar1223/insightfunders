'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "@/components/ui/dialog"
import { UserType } from "@/lib/types/user"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, CheckCircleIcon, Loader2, X } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { updateFinancialRound } from "@/lib/actions/startup"
import { useRouter } from "next/navigation"

const financialRoundSchema = z.object({
    investor: z.string().min(2, {
        message: 'Investor name must be at least 2 characters long'
    }),
    round: z.enum(['Pre-seed', 'Seed', 'Series A', 'Series B', 'Series C', 'Series D', 'Series E', 'Series F', 'Public', '']),
    date: z.date(),
    amount: z.number().min(1, {
        message: 'Amount must be greater than 1'
    }),
    equity: z.number().min(0, {
        message: 'Equity must be greater than 0'
    }),
})

export default function FinancialRoundActionEdit({ financialRound }: { financialRound: { investor: string, round: "Pre-seed" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Public" | null, date: string | null, amount: string | null, equity: string | null, startup_id: number | null, id: number } })
{
    const router = useRouter()

    const [open, setOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const form = useForm<z.infer<typeof financialRoundSchema>>({
        resolver: zodResolver(financialRoundSchema),
        defaultValues: {
            investor: financialRound.investor ?? '',
            round: financialRound.round ?? '',
            date: new Date(financialRound.date!) ?? new Date(),
            amount: parseFloat(financialRound.amount ?? '0') ?? 0,
            equity: parseFloat(financialRound.equity ?? '0') ?? 0,
        },
    })

    const onSubmit = async (values: z.infer<typeof financialRoundSchema>) => {
        setIsLoading(true)

        if(values.round === "") {
            form.setError("round", {
                message: 'Please select a round'
            })
            return
        }

        const response = await updateFinancialRound(financialRound.id!, values.investor, values.round, values.date, values.amount, values.equity)

        if(response?.error) {
            setError(response.error)
        }
        else {
            setOpen(false)
            router.refresh()
        }

        setIsLoading(false)
    }

    return (
        <>
            <div onClick={() => setOpen(true)} className='flex items-center justify-center gap-3 text-center border-[#EAEAEA] cursor-pointer font-Montserrat'>
                <p className='text-black font-semibold text-center'>Edit</p>
            </div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className='bg-[#1A1A1A] rounded-xl border-none space-y-4'>
                    <DialogHeader className='font-semibold text-xl text-white'>
                        Edit a financial round entry
                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col items-center justify-center gap-8'>
                            <div className="flex items-center justify-center flex-wrap gap-8">
                                <FormField
                                    control={form.control}
                                    disabled={isLoading}
                                    name="investor"
                                    render={({ field }) => (
                                        <FormItem className='relative flex flex-col gap-1 w-screen max-w-[384px]'>
                                            <FormLabel className='text-left text-white'>Investor Name</FormLabel>
                                            <FormControl>
                                                <input 
                                                    className='flex flex-1 px-12 placeholder:font-light py-5 rounded-[2px] outline-none' 
                                                    placeholder="Investor Name" 
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
                                    name="round"
                                    render={({ field }) => (
                                        <FormItem className='relative flex flex-col gap-1 w-screen max-w-[384px]'>
                                            <FormLabel className='text-left text-white'>Round</FormLabel>
                                            <FormControl>
                                                <select 
                                                    className='flex flex-1 px-12 placeholder:font-light py-5 rounded-[2px] outline-none' 
                                                    {...field} 
                                                >
                                                    <option value="">Select an option</option>
                                                    <option value="Pre-seed">Pre-seed</option>
                                                    <option value="Seed">Seed</option>
                                                    <option value="Series A">Series A</option>
                                                    <option value="Series B">Series B</option>
                                                    <option value="Series C">Series C</option>
                                                    <option value="Series D">Series D</option>
                                                    <option value="Series E">Series E</option>
                                                    <option value="Series F">Series F</option>
                                                    <option value="Public">Public</option>
                                                </select>
                                            </FormControl>
                                            <FormMessage className='absolute text-red-600 -bottom-6' />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    disabled={isLoading}
                                    name="date"
                                    render={({ field }) => (
                                        <FormItem className='relative flex flex-col gap-1 w-screen max-w-[384px]'>
                                            <FormLabel className='text-left text-white'>Date</FormLabel>
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
                                                            currentDate.setDate(currentDate.getDate())
                                                            return date > currentDate
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
                                    disabled={isLoading}
                                    name="amount"
                                    render={({ field }) => (
                                        <FormItem className='relative flex flex-col gap-1 w-screen max-w-[384px]'>
                                            <FormLabel className='text-left text-white'>Amount</FormLabel>
                                            <FormControl>
                                            <input  
                                                className='flex flex-1 px-12 placeholder:font-light py-5 rounded-[2px] outline-none' 
                                                placeholder="Amount" 
                                                {...field} 
                                                onChange={(e) => {
                                                    const value = e.target.value;
                                                    const numericRegex = /^-?\d*\.?\d+(?:[eE][-+]?\d+)?$/;
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
                                    disabled={isLoading}
                                    name="equity"
                                    render={({ field }) => (
                                        <FormItem className='relative flex flex-col gap-1 w-screen max-w-[384px]'>
                                            <FormLabel className='text-left text-white'>Equity</FormLabel>
                                            <FormControl>
                                            <input  
                                                className='flex flex-1 px-12 placeholder:font-light py-5 rounded-[2px] outline-none' 
                                                placeholder="Equity" 
                                                {...field} 
                                                onChange={(e) => {
                                                    const value = e.target.value;
                                                    const numericRegex = /^-?\d*\.?\d+(?:[eE][-+]?\d+)?$/;
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
                            </div>
                            {error && (
                                <div className='border-2 border-[#7f2315] gap-2 mt-4 rounded-[8px] min-w-[384px] max-w-[384px] mx-auto bg-[#541c15] flex items-center justify-center px-12 py-6'>
                                    <X size={24} className='text-[#7f2315]' />
                                    <p className='text-white font-semibold'>{error}</p>
                                </div>
                            )}
                            <DialogFooter>
                                <Button type='button' onClick={() => setOpen(false)} className='bg-white rounded-[8px] w-24'>Cancel</Button>
                                <Button type='submit' className='text-white bg-black rounded-[8px] w-24'>
                                    {isLoading ? <Loader2 stroke="#fff" className='animate-spin mx-auto' /> : 'Add'}
                                </Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </>
    )
}