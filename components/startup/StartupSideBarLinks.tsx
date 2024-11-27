"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import localFont from "next/font/local";
import { useEffect, useState } from "react";

export default function StartupSideBarLinks() {
  const pathname = usePathname();
  const [data, setData] = useState("tejinder");

  useEffect(() => {
    const storedData = localStorage.getItem("hamburgerState");
    if (storedData) {
      setData(JSON.parse(storedData));
      console.log("data", data);
    }
  }, []);
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
        Documents
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
