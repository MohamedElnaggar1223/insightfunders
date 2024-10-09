import { getUser } from "@/lib/actions/auth"
import { getPendingContractsWithInvestors } from "@/lib/actions/startup"
import { format } from "date-fns"
import TermSheetButton from "./termsheetbutton"
import Link from "next/link"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { CircleCheck, CircleX, Eye } from "lucide-react"
import StartUpContractActionBtns from "./startup-contract-action-btns"
import { createClient } from "@/utils/supabase/server"

export default async function Contracts() 
{
    const user = await getUser()
    const pendingContracts = await getPendingContractsWithInvestors(user?.userStartUp?.id!)

    return (
        <section className='flex flex-1 items-start justify-between gap-6 h-screen py-12 px-12 flex-wrap'>
            <Table className='bg-white'>
                <TableHeader>
                    <TableRow className=''>
                        <TableHead className="p-6 border-2 text-center border-[#EAEAEA] font-Montserrat">Lender's name</TableHead>
                        <TableHead className='p-6 border-2 text-center border-[#EAEAEA] font-Montserrat'>Status</TableHead>
                        <TableHead className='p-6 border-2 text-center border-[#EAEAEA] font-Montserrat'>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {pendingContracts?.map((contract) => (
                        <TableRow key={contract.id}>
                            <TableCell className="p-6 border-2 text-center border-[#EAEAEA] font-Montserrat">
                                {contract?.investor?.user?.first_name} {contract?.investor?.user?.last_name}
                            </TableCell>
                            <TableCell className="p-6 border-2 text-white font-light text-center border-[#EAEAEA] font-Montserrat">
                                {!contract?.accepted ? (
                                    <Badge variant="secondary" className='bg-[#B7A200] hover:bg-[#B7A200]'>Pending</Badge>
                                ) : (
                                    <Badge variant="default" className='bg-green-500 hover:bg-green-500'>Accepted</Badge>
                                )}
                            </TableCell>
                            <TableCell className="p-6 text-center border-[#EAEAEA] font-Montserrat flex items-center justify-center gap-3">
                                <StartUpContractActionBtns contractId={contract.id} />
                                <Link href={`/contracts/${contract.id}`} className="flex items-center justify-center gap-2">
                                    <Eye />
                                    View
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </section>
    )
}