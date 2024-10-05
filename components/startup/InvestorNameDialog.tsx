'use client'

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog"

type Props = { 
    name: string
    investor: {
        id: number;
        investor_type: "Individual" | "Institution" | null;
        institution_type: "Corporation" | "Other" | "Family Office" | "Fund" | "Registered Investment Advisor (RIA)" | null;
        user: {
            first_name: string;
            last_name: string | null;
        };
    }
}

export default function InvestorNameDialog({ name, investor }: Props)
{
    const [open, setOpen] = useState(false)

    return (
        <>
            <div onMouseDown={() => setOpen(true)} className='flex-1 cursor-pointer flex flex-col items-center justify-center gap-1'>
                <p className='text-sm underline'>{name}</p>
            </div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className='flex flex-col p-0 gap-4 items-center justify-center bg-white min-w-[568px] font-Montserrat !rounded-[8px] py-1'>
                    <DialogHeader className='border-b border-[#00000080] px-6 flex items-start text-lg font-bold justify-center py-2 w-full'>
                        View Investor
                    </DialogHeader>
                    <div className='flex flex-col w-full gap-4 px-6 py-4'>
                        <div className="flex flex-col gap-2">
                            <p className='text-base'>Name</p>
                            <p className='text-base font-bold'>{name}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className='text-base'>Investor Type</p>
                            <p className='text-base font-bold'>{investor.investor_type === 'Individual' ? 'Individual' : (investor.institution_type ?? 'Individual')}</p>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}