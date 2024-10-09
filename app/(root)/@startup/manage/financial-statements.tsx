import { getFinancialStatements } from "@/lib/actions/startup"
import UploadFinancialStatements from "./upload-financial-statements"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import FinancialStatementsActionBtns from "./financial-statements-action-btns"

export default async function FinancialStatements()
{
    const FinancialStatements = await getFinancialStatements()

    return (
        <section className='flex w-full flex-col gap-4 mt-12'>
            <div className='flex items-center justify-between gap-4'>
                <p className='font-bold font-Montserrat text-white text-xl'>Cap Table</p>
                <UploadFinancialStatements />
            </div>
            <Table className='bg-white'>
                <TableHeader>
                    <TableRow className=''>
                        <TableHead className="p-6 border-2 text-center border-[#EAEAEA] font-Montserrat w-[100px]">SN</TableHead>
                        <TableHead className='p-6 border-2 text-center border-[#EAEAEA] font-Montserrat'>Document Name</TableHead>
                        <TableHead className='p-6 border-2 text-center border-[#EAEAEA] font-Montserrat'>First Update</TableHead>
                        <TableHead className='p-6 border-2 text-center border-[#EAEAEA] font-Montserrat'>Last modified</TableHead>
                        <TableHead className='p-6 border-2 text-center border-[#EAEAEA] font-Montserrat'>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {FinancialStatements?.map((FinancialStatements, index) => (
                    <TableRow key={FinancialStatements.id}>
                        <TableCell className="p-6 border-2 text-center border-[#EAEAEA] font-Montserrat w-[100px]">{index}</TableCell>
                        <TableCell className="p-6 border-2 text-center border-[#EAEAEA] font-Montserrat">{FinancialStatements.name}</TableCell>
                        <TableCell className="p-6 border-2 text-center border-[#EAEAEA] font-Montserrat">{FinancialStatements.created_at}</TableCell>
                        <TableCell className="p-6 border-2 text-center border-[#EAEAEA] font-Montserrat">{FinancialStatements.updated_at}</TableCell>
                        <TableCell className="flex items-center justify-center gap-3 p-6 text-center border-[#EAEAEA] font-Montserrat">
                            <FinancialStatementsActionBtns document_link={FinancialStatements.document_link!} financialStatementsId={FinancialStatements.id!} />
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </section>
    )
}