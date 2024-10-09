import { getPitchDeck } from "@/lib/actions/startup"
import UploadPitchDeck from "./upload-pitch-deck"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import PitchDeckActionBtns from "./pitch-deck-action-btns"

export default async function PitchDeck()
{
    const PitchDeck = await getPitchDeck()

    return (
        <section className='flex w-full flex-col gap-4 mt-12'>
            <div className='flex items-center justify-between gap-4'>
                <p className='font-bold font-Montserrat text-white text-xl'>Cap Table</p>
                <UploadPitchDeck />
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
                    {PitchDeck?.map((PitchDeck, index) => (
                    <TableRow key={PitchDeck.id}>
                        <TableCell className="p-6 border-2 text-center border-[#EAEAEA] font-Montserrat w-[100px]">{index}</TableCell>
                        <TableCell className="p-6 border-2 text-center border-[#EAEAEA] font-Montserrat">{PitchDeck.name}</TableCell>
                        <TableCell className="p-6 border-2 text-center border-[#EAEAEA] font-Montserrat">{PitchDeck.created_at}</TableCell>
                        <TableCell className="p-6 border-2 text-center border-[#EAEAEA] font-Montserrat">{PitchDeck.updated_at}</TableCell>
                        <TableCell className="flex items-center justify-center gap-3 p-6 text-center border-[#EAEAEA] font-Montserrat">
                            <PitchDeckActionBtns document_link={PitchDeck.document_link!} pitchDeckId={PitchDeck.id!} />
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </section>
    )
}