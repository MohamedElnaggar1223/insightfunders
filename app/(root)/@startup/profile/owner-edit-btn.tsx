'use client'

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "@/components/ui/dialog"
import { zodResolver } from "@hookform/resolvers/zod"
import { Edit, Loader2, X } from "lucide-react"
import { useState } from "react"
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
import { useRouter } from "next/navigation"
import { updateOwner } from "@/lib/actions/startup"

const editOwnerSchema = z.object({
    name: z.string().min(2, {
        message: 'Owner name must be at least 2 characters long'
    }),
    share: z.number().min(25, {
        message: 'Share must be a bigger than 25%'
    }).max(100, {
        message: 'Share must be less than or equal to 100'
    }),
})

export default function OwnerEditBtn({ owner }: { owner: { name: string | null, share: string | null, id: number, startup_id: number } })
{
    const router = useRouter()

    const [open, setOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const form = useForm<z.infer<typeof editOwnerSchema>>({
        resolver: zodResolver(editOwnerSchema),
        defaultValues: {
            name: owner.name ?? '',
            share: parseFloat(owner.share!) ?? 0,
        },
    })

    const onSubmit = async (values: z.infer<typeof editOwnerSchema>) => {
        setIsLoading(true)

        const response = await updateOwner(owner.id!, values.name, values.share)

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
            <div onClick={() => setOpen(true)} className='w-24 h-10 cursor-pointer bg-[#FF7A00] gap-2 text-white text-sm font-semibold rounded-[8px] flex items-center justify-center'>
                <Edit size={16} />
                Edit
            </div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className='bg-[#1A1A1A] rounded-xl border-none space-y-4'>
                    <DialogHeader className='font-semibold text-xl text-white'>
                        Edit a startup owner entry
                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col items-center justify-center gap-8'>
                            <FormField
                                control={form.control}
                                disabled={isLoading}
                                name="name"
                                render={({ field }) => (
                                    <FormItem className='relative flex flex-col gap-1 w-screen max-w-[384px]'>
                                        <FormLabel className='text-left text-white'>Name</FormLabel>
                                        <FormControl>
                                            <input 
                                                className='flex flex-1 px-12 placeholder:font-light py-5 rounded-[2px] outline-none' 
                                                placeholder="Name" 
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
                                name="share"
                                render={({ field }) => (
                                    <FormItem className='relative flex flex-col gap-1 w-screen max-w-[384px]'>
                                        <FormLabel className='text-left text-white'>Share</FormLabel>
                                        <FormControl>
                                            <input  
                                                className='flex flex-1 px-12 placeholder:font-light py-5 rounded-[2px] outline-none' 
                                                placeholder="Share" 
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
                            {error && (
                                <div className='border-2 border-[#7f2315] gap-2 mt-4 rounded-[8px] min-w-[384px] max-w-[384px] mx-auto bg-[#541c15] flex items-center justify-center px-12 py-6'>
                                    <X size={24} className='text-[#7f2315]' />
                                    <p className='text-white font-semibold'>{error}</p>
                                </div>
                            )}
                            <DialogFooter>
                                <Button type='button' onClick={() => setOpen(false)} className='bg-white rounded-[8px] w-24'>Cancel</Button>
                                <Button type='submit' className='text-white bg-black rounded-[8px] w-24'>
                                    {isLoading ? <Loader2 stroke="#fff" className='animate-spin mx-auto' /> : 'Edit'}
                                </Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </>
    )
}