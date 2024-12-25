import StartupSideBar from "@/components/partners/StartupSideBar";
import { getUser } from "@/lib/actions/auth";
import React from "react";
import HeaderStartUp from "./header";

export default async function PartnerLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const user = await getUser();
  return (
    <section className="min-w-screen min-h-screen flex items-center justify-center text-center bg-[#1A1A1A]">
      <StartupSideBar />
      <section className="flex flex-1 flex-col h-screen overflow-x-auto">
        <HeaderStartUp />

        {children}
      </section>
    </section>
  );
}
