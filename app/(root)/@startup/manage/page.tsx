import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import CapTable from "./cap-table";
import PitchDeck from "./pitch-deck";
import TaxReturns from "./tax-returns";
import FinancialStatements from "./financial-statements";
import LegalDocuments from "./legal-documents";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function OffersPage({ searchParams }: Props) {
  const tab =
    typeof searchParams.tab === "string" ? searchParams.tab : undefined;

  return (
    <section className="flex flex-1 flex-col gap-6  h-screen  py-16 dashboardcont">
      <div className="text-[red] text-[14px] text-left">
        Upload the necessary documents to unlock available offers *
      </div>
      <div className="flex w-full">
        <Link
          href="/manage?tab=cap-table"
          className={cn(
            "text-sm font-semibold chartcontenttext   flex-1 text-center border-b-2 pb-2",
            tab === undefined || tab === "cap-table"
              ? "text-[#FF7A00] font-semibold border-[#FF7A00]"
              : "text-black border-[#FFFFFF80]"
          )}
        >
          Cap Table
        </Link>
        <Link
          href="/manage?tab=pitch-deck"
          className={cn(
            "text-sm font-semibold  chartcontenttext  flex-1 text-center border-b-2 pb-2",
            tab === "pitch-deck"
              ? "text-[#FF7A00] font-semibold border-[#FF7A00]"
              : "text-black border-[#FFFFFF80]"
          )}
        >
          Pitch Deck
        </Link>
        <Link
          href="/manage?tab=tax-returns"
          className={cn(
            "text-sm font-semibold  chartcontenttext  flex-1 text-center border-b-2 pb-2",
            tab === "tax-returns"
              ? "text-[#FF7A00] font-semibold border-[#FF7A00]"
              : "text-black border-[#FFFFFF80]"
          )}
        >
          Tax Returns
        </Link>
        <Link
          href="/manage?tab=financial-statements"
          className={cn(
            "text-sm font-semibold chartcontenttext   flex-1 text-center border-b-2 pb-2",
            tab === "financial-statements"
              ? "text-[#FF7A00] font-semibold border-[#FF7A00]"
              : "text-black border-[#FFFFFF80]"
          )}
        >
          Financial Statements
        </Link>
        <Link
          href="/manage?tab=legal-documents"
          className={cn(
            "text-sm font-semibold  chartcontenttext  flex-1 text-center border-b-2 pb-2",
            tab === "legal-documents"
              ? "text-[#FF7A00] font-semibold border-[#FF7A00]"
              : "text-black border-[#FFFFFF80]"
          )}
        >
          Legal Documents
        </Link>
        <Link
          href="/manage?tab=others"
          className={cn(
            "text-sm font-semibold  chartcontenttext  flex-1 text-center border-b-2 pb-2",
            tab === "others"
              ? "text-[#FF7A00] font-semibold border-[#FF7A00]"
              : "text-black border-[#FFFFFF80]"
          )}
        >
          Others
        </Link>
      </div>
      {tab === "pitch-deck" ? (
        <Suspense
          fallback={<Loader2 className="animate-spin  text-black" size={24} />}
        >
          <PitchDeck />
        </Suspense>
      ) : tab === "tax-returns" ? (
        <Suspense
          fallback={<Loader2 className="animate-spin text-black" size={24} />}
        >
          <TaxReturns />
        </Suspense>
      ) : tab === "financial-statements" ? (
        <Suspense
          fallback={<Loader2 className="animate-spin text-black" size={24} />}
        >
          <FinancialStatements />
        </Suspense>
      ) : tab === "legal-documents" ? (
        <Suspense
          fallback={<Loader2 className="animate-spin text-black" size={24} />}
        >
          <LegalDocuments />
        </Suspense>
      ) : (
        <Suspense
          fallback={<Loader2 className="animate-spin text-black" size={24} />}
        >
          <CapTable />
        </Suspense>
      )}
    </section>
  );
}
