"use client";

import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
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
  const [isReferralOpen, setIsReferralOpen] = useState(false);
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
      className={`flex flex-col w-full mt-8 gap-2 sidebardashboardMenuLinks`}
    >
      <Link
        href="/"
        className={cn(
          "py-4 text-sm leading-[17px] t w-full",

          !pathname.startsWith("/earnings") &&
            !pathname.startsWith("/payment-setup")
            ? "bg-white font-medium text-[#1A1A1A]"
            : "text-white"
        )}
      >
        Dashboard
      </Link>
      <Link
        href="/earnings"
        className={cn(
          "py-3 text-sm font-Montserrat w-full px-8 block",
          pathname === "/earnings"
            ? "bg-white font-medium text-black"
            : "text-white"
        )}
      >
        Earnings
      </Link>
      <Link
        href="/payment-setup"
        className={cn(
          "py-3 text-sm font-Montserrat w-full px-8 block",
          pathname === "/payment-setup"
            ? "bg-white font-medium text-black"
            : "text-white"
        )}
      >
        Payment Setup
      </Link>
    </div>
  );
}
