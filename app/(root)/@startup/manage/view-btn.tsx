'use client'

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { createClient } from "@/utils/supabase/client"
import { Eye } from "lucide-react"
import { useEffect, useState } from "react"

type Props = {
    type: string
    document_link: string
}

export default function ViewBtn({ document_link, type }: Props)
{
    const supabase = createClient()

    const fileName = document_link.split('/').pop()

    const downloadTermSheet = async () => {
        const { data } = await supabase.storage
            .from(type)
            .download(fileName!)

        if(!data) return

        const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    
        const url = window.URL.createObjectURL(blob);
        
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

    return (
        <div onMouseDown={downloadTermSheet} className='flex items-center cursor-pointer justify-center gap-2'>
            <Eye className='cursor-pointer' size={24} />
            View
        </div>
    )
}