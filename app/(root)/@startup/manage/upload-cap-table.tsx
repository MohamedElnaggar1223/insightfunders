'use client'

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "@/components/ui/dialog"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { capTableSchema } from "@/lib/validations/startupsSchema"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Loader2, X } from "lucide-react"
import { createClient } from "@/utils/supabase/client"
import { nanoid } from "nanoid"
import { useRouter } from "next/navigation"
import { createCapTable } from "@/lib/actions/startup"

export default function UploadCapTable()
{
    const router = useRouter()

    const [open, setOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const form = useForm<z.infer<typeof capTableSchema>>({
        resolver: zodResolver(capTableSchema),
        defaultValues: {
            name: '',
            document: new File([], "")
        },
    })

    const onSubmit = async (values: z.infer<typeof capTableSchema>) => {
        setIsLoading(true)

        const supabase = createClient()

        const fileName = `${nanoid(30)}.xlsx`

        const { error: storageError } = await supabase.storage
            .from('capTables')
            .upload(fileName, values.document)

        if(storageError) {
            console.log(storageError)
            return setIsLoading(false)
        }

        const { data: { publicUrl } } = supabase.storage
            .from('capTables')
            .getPublicUrl(fileName)

        const result = await createCapTable({ name: values.name, document_link: publicUrl})

        if(result?.error) setError(error)
        else 
        {
            setOpen(false)
            setIsLoading(false)
            router.refresh()
        }
    }

    return (
        <>
            <button onMouseDown={() => setOpen(true)} className='w-40 h-10 bg-[#FF7A00] text-white text-sm font-semibold rounded-[4px] flex items-center justify-center'>
                Upload document
            </button>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className='bg-[#1A1A1A] rounded-xl border-none space-y-4'>
                    <DialogHeader className='font-semibold text-xl text-white'>
                        Upload a Cap Table document
                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col items-center justify-center gap-8'>
                            <div className="flex items-center justify-center flex-wrap gap-8">
                                <FormField
                                    control={form.control}
                                    disabled={isLoading}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem className='relative flex flex-col gap-1 w-screen max-w-[384px]'>
                                            <FormLabel className='text-left text-white'>Document Name</FormLabel>
                                            <FormControl>
                                                <input 
                                                    className='flex flex-1 px-12 placeholder:font-light py-5 rounded-[2px] outline-none' 
                                                    placeholder="Document Name" 
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
                                name="document"
                                render={({ field }) => (
                                    <FormItem className='relative flex flex-col gap-1 w-screen max-w-[384px]'>
                                        <FormLabel className='text-left text-white'>Document</FormLabel>
                                        <FormControl>
                                            <>
                                                {/* <div className='flex flex-1 px-12 placeholder:font-light py-5 rounded-[2px] bg-white hover:bg-white outline-none cursor-pointer'>Upload Term Sheet</div> */}
                                                <input
                                                    type='file'
                                                    // accept='.xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
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
                            {error && (
                                <div className='border-2 border-[#7f2315] gap-2 mt-4 rounded-[8px] min-w-[384px] max-w-[384px] mx-auto bg-[#541c15] flex items-center justify-center px-12 py-6'>
                                    <X size={24} className='text-[#7f2315]' />
                                    <p className='text-white font-semibold'>{error}</p>
                                </div>
                            )}
                            <DialogFooter>
                                <Button disabled={isLoading} onClick={() => {form.reset(); setOpen(false)}} type="button" variant='outline' className='bg-white rounded-[4px]'>
                                    Cancel
                                </Button>
                                <Button disabled={isLoading} type="submit" className='bg-[#FF7A00] text-white rounded-[4px] flex items-center justify-center gap-2'>
                                    {isLoading && <Loader2 className='animate-spin' size={16} />}
                                    Upload
                                </Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </>
    )
}