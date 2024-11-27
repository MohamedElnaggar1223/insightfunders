import { getFinancialStatements } from "@/lib/actions/startup";
import UploadFinancialStatements from "./upload-financial-statements";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import FinancialStatementsActionBtns from "./financial-statements-action-btns";
import { formatDate } from "@/lib/utils";
import ViewBtn from "./view-btn";

export default async function FinancialStatements() {
  const FinancialStatements = await getFinancialStatements();

  return (
    <section className="flex w-full flex-col gap-4 mt-12">
      <div className="flex items-center justify-between gap-4">
        <p className="font-bold  dashboardtablehead  text-white text-xl">
          Financial Statements
        </p>
        <UploadFinancialStatements />
      </div>
      <Table className="bg-white">
        <TableHeader>
          <TableRow className="">
            <TableHead className="px-1 border-2 text-center border-[#EAEAEA]  chartcontenttext  w-[20px]">
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
            <TableHead className="px-1 border-2 text-center border-[#EAEAEA]   chartcontenttext">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {FinancialStatements?.map((FinancialStatements) => (
            <TableRow key={FinancialStatements.id}>
              <TableCell className="px-1 border-2 text-center border-[#EAEAEA]    w-[100px]">
                <ViewBtn
                  document_link={FinancialStatements.document_link!}
                  type="financialStatements"
                />
              </TableCell>
              <TableCell className="px-1 border-2 text-center border-[#EAEAEA]  chartcontenttext ">
                {FinancialStatements.name}
              </TableCell>
              <TableCell className="px-1 border-2 text-center border-[#EAEAEA]  chartcontenttext ">
                {formatDate(new Date(FinancialStatements?.created_at!))}
              </TableCell>
              <TableCell className="px-1 border-2 text-center border-[#EAEAEA]  chartcontenttext ">
                {formatDate(new Date(FinancialStatements?.updated_at!))}
              </TableCell>
              <TableCell className="flex items-center justify-center gap-3 p-6 text-center border-[#EAEAEA]   ">
                <FinancialStatementsActionBtns
                  document_link={FinancialStatements.document_link!}
                  financialStatementsId={FinancialStatements.id!}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
