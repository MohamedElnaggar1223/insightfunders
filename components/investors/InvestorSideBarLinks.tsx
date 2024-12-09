"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function InvestorSideBarLinks() {
  const pathname = usePathname();
  const [isReferralOpen, setIsReferralOpen] = useState(false);

  const isReferralActive = pathname.startsWith("/referral");

  return (
    <div className="flex flex-col w-full">
      <Link
        href="/"
        className={cn(
          "py-4 text-sm font-Montserrat w-full px-4",
          !pathname.startsWith("/earnings") &&
            !pathname.startsWith("/payment-setup") &&
            !pathname.startsWith("/explore") &&
            !pathname.startsWith("/requests") &&
            !pathname.startsWith("/referral")
            ? "bg-white font-medium text-black"
            : "text-white"
        )}
      >
        Dashboard
      </Link>
      <Link
        href="/explore"
        className={cn(
          "py-4 text-sm font-Montserrat w-full px-4",
          pathname.startsWith("/explore")
            ? "bg-white font-medium text-black"
            : "text-white"
        )}
      >
        Explore
      </Link>
      <Link
        href="/requests"
        className={cn(
          "py-4 text-sm font-Montserrat w-full px-4",
          pathname.startsWith("/requests")
            ? "bg-white font-medium text-black"
            : "text-white"
        )}
      >
        Requests
      </Link>

      {/* Referral Dropdown Section */}
      <div className="w-full">
        <button
          onClick={() => setIsReferralOpen(!isReferralOpen)}
          className={cn(
            "py-4 text-sm font-Montserrat w-full px-4 flex justify-between items-center",
            pathname === "/referral" && !isReferralOpen
              ? "bg-white font-medium text-black"
              : "text-white"
          )}
        >
          <span className="text-center w-full">Referral</span>
          {isReferralOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>

        {isReferralOpen && (
          <div className="bg-gray-800">
            <Link
              href="/referral"
              className={cn(
                "py-3 text-sm font-Montserrat w-full px-8 block",
                pathname === "/referral"
                  ? "bg-white font-medium text-black"
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
        )}
      </div>
    </div>
  );
}
