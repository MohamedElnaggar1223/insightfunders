'use client'

import { createClient } from "@/utils/supabase/client"
import { useEffect, useState } from "react"

export default function TermSheetPDF({ url }: { url: string | null })
{
    const [pdfUrl, setPdfUrl] = useState<string | undefined>()

    if(!url) return null

    const supabase = createClient()

    const fileName = url.split('/').pop()

    const downloadTermSheet = async () => {
        const { data } = await supabase.storage
            .from('termSheets')
            .download(fileName!)

        if(!data) return

        const blob = new Blob([data], { type: 'application/pdf' });
    
        // Create a URL for the blob
        const url = window.URL.createObjectURL(blob);
        
        // Create a temporary anchor element
        return url
    }

    useEffect(() => {
        const getPdfUrl = async () => {
            const url = await downloadTermSheet()
            setPdfUrl(url)
        }

        getPdfUrl()
    }, [url])

    return (
        <iframe 
            src={pdfUrl!} 
            width="90%"
            height="400px"
            title="PDF Viewer" 
            className='mx-auto'
        />
    )
}