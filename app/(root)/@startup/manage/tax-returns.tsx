import { getTaxReturns } from "@/lib/actions/startup";
import UploadTaxReturns from "./upload-tax-returns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TaxReturnsActionBtns from "./tax-returns-action-btns";
import ViewBtn from "./view-btn";
import { formatDate } from "@/lib/utils";

export default async function TaxReturns() {
  const TaxReturns = await getTaxReturns();

  return (
    <section className="flex w-full flex-col gap-4 mt-12">
      <div className="flex items-center justify-between gap-4">
        <p className="font-bold  dashboardtablehead  text-white text-xl">
          Tax Returns
        </p>
        <UploadTaxReturns />
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
            <TableHead className="px-1 border-2 text-center border-[#EAEAEA]  chartcontenttext ">
              Last modified
            </TableHead>
            <TableHead className="px-1 border-2 text-center border-[#EAEAEA]  chartcontenttext ">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {TaxReturns?.map((TaxReturns) => (
            <TableRow key={TaxReturns.id}>
              <TableCell className="px-1 border-2 text-center border-[#EAEAEA]    w-[100px]">
                <ViewBtn
                  document_link={TaxReturns?.document_link!}
                  type="taxReturns"
                />
              </TableCell>
              <TableCell className="px-1 border-2 text-center border-[#EAEAEA]   ">
                {TaxReturns.name}
              </TableCell>
              <TableCell className="px-1 border-2 text-center border-[#EAEAEA]   ">
                {formatDate(new Date(TaxReturns?.created_at!))}
              </TableCell>
              <TableCell className="px-1 border-2 text-center border-[#EAEAEA]   ">
                {formatDate(new Date(TaxReturns?.updated_at!))}
              </TableCell>
              <TableCell className="flex items-center justify-center gap-3 p-6 text-center border-[#EAEAEA]   ">
                <TaxReturnsActionBtns
                  document_link={TaxReturns.document_link!}
                  taxReturnsId={TaxReturns.id!}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
