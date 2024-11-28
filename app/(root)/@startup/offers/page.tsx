import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import Contracts from "./contracts";
import DataRequests from "./datarequests";
import DataRequestsLoading from "./datarequestsloading";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function OffersPage({ searchParams }: Props) {
  const tab =
    typeof searchParams.tab === "string" ? searchParams.tab : undefined;

  return (
    <section className="bg-[#1A1A1A]">
      <div className="flex flex-1 flex-col gap-6 h-screen pt-12 dashboardcont">
        <div className="flex w-full">
          <Link
            href="/offers?tab=data-requests"
            className={cn(
              "text-sm flex-1 text-center border-b-4 pb-2",
              tab === undefined ||
                tab === "data-requests" ||
                tab !== "contracts"
                ? "text-[#FF7A00] font-semibold border-[#FF7A00]"
                : "font-light text-white border-[#FFFFFF80]"
            )}
          >
            Data Requests
          </Link>
          <Link
            href="/offers?tab=offer"
            className={cn(
              "text-sm flex-1 text-center border-b-4 pb-2",
              tab === "contracts"
                ? "text-[#FF7A00] font-semibold border-[#FF7A00]"
                : "font-light text-white border-[#FFFFFF80]"
            )}
          >
            Offer
          </Link>
        </div>
        {tab === "offer" ? (
          <Suspense fallback={<DataRequestsLoading />}>
            <Contracts />
          </Suspense>
        ) : (
          <Suspense fallback={<DataRequestsLoading />}>
            <DataRequests />
          </Suspense>
        )}
      </div>
    </section>
  );
}
