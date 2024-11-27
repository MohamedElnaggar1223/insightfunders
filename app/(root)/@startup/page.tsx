import { Suspense } from "react";
import DashboardLoading from "./dashboardloading";
import Dashboard from "./dashboard";

export default async function InvestorPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  return (
    <section className="flex flex-1 flex-col gap-6 bg-[#1A1A1A]  pt-2 dashboarmaincontiner">
      <Suspense fallback={<DashboardLoading />}>
        <Dashboard searchParams={searchParams} />
      </Suspense>
    </section>
  );
}
