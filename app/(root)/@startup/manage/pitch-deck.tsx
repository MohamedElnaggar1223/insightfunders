import { getPitchDeck } from "@/lib/actions/startup";
import UploadPitchDeck from "./upload-pitch-deck";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PitchDeckActionBtns from "./pitch-deck-action-btns";
import { formatDate } from "@/lib/utils";
import ViewBtn from "./view-btn";

export default async function PitchDeck() {
  const PitchDeck = await getPitchDeck();

  return (
    <section className="flex w-full flex-col gap-4 mt-12">
      <div className="flex items-center justify-between gap-4">
        <p className="font-bold dashboardtablehead   text-white text-xl">
          Pitch Deck
        </p>
        <UploadPitchDeck />
      </div>
      <Table className="bg-white">
        <TableHeader>
          <TableRow className="">
            <TableHead className="px-1 border-2 text-center border-[#EAEAEA] chartcontenttext   w-[20px]">
              {" "}
            </TableHead>
            <TableHead className="px-1 border-2 text-center border-[#EAEAEA]  chartcontenttext ">
              Document Name
            </TableHead>
            <TableHead className="px-1 border-2 text-center border-[#EAEAEA]  chartcontenttext ">
              First Update
            </TableHead>
            <TableHead className="px-1 border-2 text-center border-[#EAEAEA] chartcontenttext  ">
              Last modified
            </TableHead>
            <TableHead className="px-1 border-2 text-center border-[#EAEAEA]  chartcontenttext ">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {PitchDeck?.map((PitchDeck, index) => (
            <TableRow key={PitchDeck.id}>
              <TableCell className="px-1 border-2 text-center border-[#EAEAEA]  chartcontenttext  w-[100px]">
                <ViewBtn
                  document_link={PitchDeck.document_link!}
                  type="pitchDecks"
                />
              </TableCell>
              <TableCell className="px-1 border-2 text-center border-[#EAEAEA]  chartcontenttext ">
                {PitchDeck.name}
              </TableCell>
              <TableCell className="px-1 border-2 text-center border-[#EAEAEA]   chartcontenttext">
                {formatDate(new Date(PitchDeck?.created_at!))}
              </TableCell>
              <TableCell className="px-1 border-2 text-center border-[#EAEAEA]  chartcontenttext ">
                {formatDate(new Date(PitchDeck?.updated_at!))}
              </TableCell>
              <TableCell className="flex items-center justify-center gap-3 p-6 text-center border-[#EAEAEA]   ">
                <PitchDeckActionBtns
                  document_link={PitchDeck.document_link!}
                  pitchDeckId={PitchDeck.id!}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
