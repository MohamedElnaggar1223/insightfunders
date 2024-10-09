import { getLegalDocuments } from "@/lib/actions/startup"
import UploadLegalDocuments from "./upload-legal-documents"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import LegalDocumentsActionBtns from "./legal-documents-action-btns"

export default async function LegalDocuments()
{
    const LegalDocuments = await getLegalDocuments()

    return (
        <section className='flex w-full flex-col gap-4 mt-12'>
            <div className='flex items-center justify-between gap-4'>
                <p className='font-bold font-Montserrat text-white text-xl'>Cap Table</p>
                <UploadLegalDocuments />
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
                    {LegalDocuments?.map((LegalDocuments, index) => (
                    <TableRow key={LegalDocuments.id}>
                        <TableCell className="p-6 border-2 text-center border-[#EAEAEA] font-Montserrat w-[100px]">{index}</TableCell>
                        <TableCell className="p-6 border-2 text-center border-[#EAEAEA] font-Montserrat">{LegalDocuments.name}</TableCell>
                        <TableCell className="p-6 border-2 text-center border-[#EAEAEA] font-Montserrat">{LegalDocuments.created_at}</TableCell>
                        <TableCell className="p-6 border-2 text-center border-[#EAEAEA] font-Montserrat">{LegalDocuments.updated_at}</TableCell>
                        <TableCell className="flex items-center justify-center gap-3 p-6 text-center border-[#EAEAEA] font-Montserrat">
                            <LegalDocumentsActionBtns document_link={LegalDocuments.document_link!} legalDocumentsId={LegalDocuments.id!} />
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </section>
    )
}