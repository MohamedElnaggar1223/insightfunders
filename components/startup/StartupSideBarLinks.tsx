"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  pitchDeck: any;
  capTable: any;
  taxReturns: any;
  financialStatements: any;
  legalDocuments: any;
};

export default function StartupSideBarLinks({
  pitchDeck,
  capTable,
  taxReturns,
  financialStatements,
  legalDocuments,
}: Props) {
  const pathname = usePathname();
  const [data, setData] = useState("tejinder");
  const [hasDocuments, setHasDocuments] = useState(true);

  useEffect(() => {
    const storedData = localStorage.getItem("hamburgerState");
    if (storedData) {
      setData(JSON.parse(storedData));
      console.log("data", data);
    }
  }, []);

  useEffect(() => {
    if (
      !pitchDeck ||
      !capTable ||
      !taxReturns ||
      !financialStatements ||
      !legalDocuments
    ) {
      setHasDocuments(true);
    } else {
      setHasDocuments(false);
    }
  }, [pitchDeck, capTable, taxReturns, financialStatements, legalDocuments]);

  return (
    <div
      className={`flex flex-col w-[90%] mt-8 gap-2 sidebardashboardMenuLinks`}
    >
      <Link
        href="/"
        className={cn(
          "py-2 text-sm t w-full",
          !pathname.startsWith("/offers") && !pathname.startsWith("/manage")
            ? "bg-white font-medium text-black"
            : "text-white"
        )}
      >
        Dashboard
      </Link>
      <Link
        href="/manage"
        className={cn(
          "py-2 text-sm  w-full",
          pathname.startsWith("/manage")
            ? "bg-white font-medium text-black"
            : "text-white"
        )}
      >
        <span className=" flex items-center gap-2 justify-center">
          {hasDocuments && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="7"
              viewBox="0 0 6 7"
              fill="none"
            >
              <circle cx="3" cy="3.5" r="3" fill="#FF7A00" />
            </svg>
          )}
          Documents
        </span>
      </Link>
      <Link
        href="/offers"
        className={cn(
          "py-2 text-sm  w-full",
          pathname.startsWith("/offers")
            ? "bg-white font-medium text-black"
            : "text-white"
        )}
      >
        Offers
      </Link>
    </div>
  );
}
