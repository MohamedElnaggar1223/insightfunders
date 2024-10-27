import { getUser } from "@/lib/actions/auth"
import { getCapTable } from "@/lib/actions/startup"
import UploadCapTable from "./upload-cap-table"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import CapTableActionBtns from "./cap-table-action-btns"
import { formatDate } from "@/lib/utils"
import ViewBtn from "./view-btn"

export default async function CapTable()
{
    const CapTable = await getCapTable()

    return (
        <section className='flex w-full flex-col gap-4 mt-12'>
            <div className='flex items-center justify-between gap-4'>
                <p className='font-bold dashboardtablehead   text-black text-xl'>Cap Table</p>
                <UploadCapTable />
            </div>
            <Table className='bg-white'>
                <TableHeader>
                    <TableRow className=''>
                        <TableHead className="px-1 border-2 text-center border-[#EAEAEA]  chartcontenttext   w-[20px]">{" "}</TableHead>
                        <TableHead className=' px-1 border-2 text-center border-[#EAEAEA]  chartcontenttext  '>Document Name</TableHead>
                        <TableHead className='px-1 border-2 text-center border-[#EAEAEA]  chartcontenttext '>First Update</TableHead>
                        <TableHead className='px-1 border-2 text-center border-[#EAEAEA]  chartcontenttext'>Last modified</TableHead>
                        <TableHead className='px-1 border-2 text-center border-[#EAEAEA]  chartcontenttext '>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {CapTable?.map((CapTable, index) => (
                    <TableRow key={CapTable.id}>
                        <TableCell className="px-1 border-2 text-center border-[#EAEAEA]    w-[100px]">
                            <ViewBtn document_link={CapTable.document_link!} type='capTables' />
                        </TableCell>
                        <TableCell className="px-1 border-2 text-center border-[#EAEAEA]   ">{CapTable.name}</TableCell>
                        <TableCell className="px-1 border-2 text-center border-[#EAEAEA]   ">{formatDate(new Date(CapTable?.created_at!))}</TableCell>
                        <TableCell className="px-1 border-2 text-center border-[#EAEAEA]   ">{formatDate(new Date(CapTable?.updated_at!))}</TableCell>
                        <TableCell className="flex items-center justify-center gap-3 p-6 text-center border-[#EAEAEA]   ">
                            <CapTableActionBtns document_link={CapTable.document_link!} capTableId={CapTable.id!} />
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </section>
    )
}