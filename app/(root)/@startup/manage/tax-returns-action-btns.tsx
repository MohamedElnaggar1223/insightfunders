'use client'

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "@/components/ui/dialog"
import { createClient } from "@/utils/supabase/client"
import { Download, Loader2, Trash2, UploadIcon } from "lucide-react"
import { nanoid } from "nanoid"
import { useRouter } from "next/navigation"
import { ChangeEvent, useRef, useState } from "react"

export default function TaxReturnsActionBtns({ document_link, taxReturnsId }: { document_link: string, taxReturnsId: number }) 
{
    const router = useRouter()

    const supabase = createClient()

    const fileName = document_link.split('/').pop()

    const [isLoading, setIsLoading] = useState(false)
    const [deleteOpen, setDeleteOpen] = useState(false)

    const inputRef = useRef<HTMLInputElement>(null)
    
    const downloadTermSheet = async () => {
        const { data } = await supabase.storage
            .from('taxReturns')
            .download(fileName!)

        if(!data) return

        const blob = new Blob([data], { type: 'application/pdf' });
    
        // Create a URL for the blob
        const url = window.URL.createObjectURL(blob);
        
        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName || 'termsheet.pdf';
        
        // Append to the document, click it, and remove it
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Clean up the blob URL
        window.URL.revokeObjectURL(url);
    }

    const handleUploadNewDocument = async (e: ChangeEvent<HTMLInputElement>) => {
        const uploadedFile = e.target.files?.length ? e.target.files[0] : null

        if(!uploadedFile) return

        const newFileName = `${nanoid(30)}.xlsx`

        const { error: storageError } = await supabase.storage
            .from('taxReturns')
            .upload(newFileName, uploadedFile)

        if(storageError) {
            console.log(storageError)
            return setIsLoading(false)
        }

        const { data: { publicUrl } } = supabase.storage
            .from('taxReturns')
            .getPublicUrl(newFileName)

        await supabase.storage
            .from('taxReturns')
            .remove([fileName!])

        await supabase.from('tax_returns').update({ document_link: publicUrl }).eq('id', taxReturnsId!)

        router.refresh()
    }

    const handleDelete = async () => {
        setDeleteOpen(false)
        setIsLoading(true)

        await supabase.from('tax_returns').delete().eq('id', taxReturnsId!)
        await supabase.storage
            .from('taxReturns')
            .remove([fileName!])

        setIsLoading(false)
        router.refresh()
    }

    return (
        <>
            <Download onClick={downloadTermSheet} className='cursor-pointer' size={24} />
            <>
                <UploadIcon onClick={() => inputRef.current?.click()} className='cursor-pointer' size={24} />
                <input
                    type='file'
                    accept='.xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                    onChange={(e) => handleUploadNewDocument(e)}
                    ref={inputRef}
                    className='hidden'
                />
            </>
            <Trash2 onClick={() => setDeleteOpen(true)} className='cursor-pointer' size={24} />
            <Dialog open={isLoading}>
                <DialogContent className='flex items-center justify-center bg-transparent border-none shadow-none outline-none'>
                    <Loader2 className='animate-spin' size={42} color="#000" />
                </DialogContent>
            </Dialog>
            <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
                <DialogContent className='bg-[#1A1A1A] !rounded-[8px] p-8 border-none'>
                    <DialogHeader className='text-white font-semibold text-xl'>
                        Are you sure you want to delete this document?
                    </DialogHeader>
                    <DialogFooter>
                        <Button onClick={() => setDeleteOpen(false)} className='bg-white hover:bg-white/70 rounded-[8px]'>Cancel</Button>
                        <Button onClick={handleDelete} variant='destructive' className='text-white bg-red-700 hover:bg-red-800 rounded-[8px]'>Delete</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}