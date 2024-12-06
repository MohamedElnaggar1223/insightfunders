"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function InvestorSideBarLinks() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-full">
      <Link
        href="/"
        className={cn(
          "py-4 text-sm font-Montserrat w-full",
          !pathname.startsWith("/explore") && !pathname.startsWith("/requests")
            ? "bg-white font-medium text-black"
            : "text-white"
        )}
      >
        Dashboard
      </Link>
      <Link
        href="/explore"
        className={cn(
          "py-4 text-sm font-Montserrat w-full",
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
          "py-4 text-sm font-Montserrat w-full",
          pathname.startsWith("/requests")
            ? "bg-white font-medium text-black"
            : "text-white"
        )}
      >
        Requests
      </Link>
      <Link
        href="/offers"
        className={cn(
          "py-4 text-sm font-Montserrat w-full",
          pathname.startsWith("/requests")
            ? "bg-white font-medium text-black"
            : "text-white"
        )}
      >
        Referral
      </Link>
    </div>
  );
}
