'use client'
import { createClient } from "@/utils/supabase/client"
import { Download } from "lucide-react"

type Props = {
    termSheet: string | null
}

export default function TermSheetButton({ termSheet }: Props)
{
    if(!termSheet) return null

    const supabase = createClient()

    const fileName = termSheet.split('/').pop()

    const downloadTermSheet = async () => {
        const { data } = await supabase.storage
            .from('termSheets')
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

    return (
        <button onClick={downloadTermSheet} className='flex items-center justify-center gap-1 rounded-[4px] bg-black text-[10px] w-32 font-extralight text-white text-sm h-8'>
            <Download size={16} />{" "}Term Sheet
        </button>
    )
}