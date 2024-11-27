import { getLegalDocuments } from "@/lib/actions/startup";
import UploadLegalDocuments from "./upload-legal-documents";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import LegalDocumentsActionBtns from "./legal-documents-action-btns";
import ViewBtn from "./view-btn";
import { formatDate } from "@/lib/utils";

export default async function LegalDocuments() {
  const LegalDocuments = await getLegalDocuments();

  return (
    <section className="flex w-full flex-col gap-4 mt-12">
      <div className="flex items-center justify-between gap-4">
        <p className="font-bold dashboardtablehead   text-white text-xl">
          Legal Documents
        </p>
        <UploadLegalDocuments />
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
            <TableHead className="px-1 border-2 text-center border-[#EAEAEA]  chartcontenttext ">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {LegalDocuments?.map((LegalDocuments, index) => (
            <TableRow key={LegalDocuments.id}>
              <TableCell className="px-1 border-2 text-center border-[#EAEAEA]    w-[100px]">
                <ViewBtn
                  document_link={LegalDocuments.document_link!}
                  type="legalDocuments"
                />
              </TableCell>
              <TableCell className="px-1 border-2 text-center border-[#EAEAEA]  chartcontenttext ">
                {LegalDocuments.name}
              </TableCell>
              <TableCell className="px-1 border-2 text-center border-[#EAEAEA]  chartcontenttext ">
                {formatDate(new Date(LegalDocuments?.created_at!))}
              </TableCell>
              <TableCell className="px-1 border-2 text-center border-[#EAEAEA]  chartcontenttext ">
                {formatDate(new Date(LegalDocuments?.updated_at!))}
              </TableCell>
              <TableCell className="flex items-center justify-center gap-3 p-6 text-center border-[#EAEAEA]   ">
                <LegalDocumentsActionBtns
                  document_link={LegalDocuments.document_link!}
                  legalDocumentsId={LegalDocuments.id!}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
