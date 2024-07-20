import { Suspense } from "react";
import DashboardLoading from "./dashboardloading";
import Dashboard from "./dashboard";

export default async function InvestorPage() 
{
    return (
        <section className='flex flex-1 flex-col gap-6 h-screen pt-12'>
            <Suspense fallback={<DashboardLoading />}>
                <Dashboard />
            </Suspense>
        </section>
    )
}