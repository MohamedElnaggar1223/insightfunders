import { Suspense } from "react";
import DashboardLoading from "./dashboardloading";
import Dashboard from "./dashboard";

export default async function InvestorPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  return (
    <section className="flex flex-1 flex-col gap-6 h-screen min-h-fit pb-[70px] pt-[60px]">
      <Suspense fallback={<DashboardLoading />}>
        <Dashboard searchParams={searchParams} />
      </Suspense>
    </section>
  );
}
