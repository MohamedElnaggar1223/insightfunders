import React from "react";
import DashboardCard from "./DashboardCard";
import StartUpsInvestors from "@/components/startup/StartUpsInvestors";
import { getUser } from "@/lib/actions/auth";
import { getContracts } from "@/lib/actions/startup";

import CustomStartupChart from "@/components/startup/CustomStartupChart";

export default async function DashboardContent({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const user = await getUser();
  const startupContracts = await getContracts(user?.userStartUp?.id!);

  const totalAmountInvested = startupContracts.acceptedContracts?.reduce(
    (acc, contract) =>
      acc +
      (contract.investment_amount_paid
        ? parseFloat(contract.amount_invested)
        : 0),
    0
  );

  const totalReturnPaid = startupContracts.acceptedContracts?.reduce(
    (acc, contract) =>
      acc +
      (contract.investment_amount_paid && contract.total_return_paid
        ? parseFloat(contract.total_return_paid)
        : 0),
    0
  );

  const availableBalance = startupContracts.acceptedContracts?.reduce(
    (acc, contract) =>
      acc +
      (contract.investment_amount_paid && contract.total_return_paid
        ? parseFloat(contract.amount_invested) -
          parseFloat(contract.total_return_paid)
        : 0),
    0
  );

  const formatCurrency = (value: number) =>
    `$${Intl.NumberFormat("us").format(value)}`;

  return (
    <div
      className="w-full mx-auto space-y-6 my-8
      max-w-[800px]                     
      lg:max-w-[850px]                 
      xl:max-w-[923px]                  
      2xl:max-w-[1200px]               
      3xl:max-w-[1700px]              
      4xl:max-w-[1800px]"
    >
      {/* Top Section */}
      <div className="flex gap-[21px]">
        {/* Left Stats */}
        <div className="flex flex-col justify-between space-y-[20px] min-w-[332px]">
          <DashboardCard
            title="Total Funds"
            value={`${
              totalAmountInvested && formatCurrency(totalAmountInvested)
            }`}
            className="h-[calc(50%-12px)] text-center content-center"
          />
          <DashboardCard
            title="Available Balance"
            value={`${availableBalance && formatCurrency(availableBalance)}`}
            className="h-[calc(50%-12px)] text-center content-center"
          />
        </div>

        <div className="w-full">
          <CustomStartupChart
            totalAmountInvested={totalAmountInvested!}
            availableBalance={availableBalance!}
            totalReturnPaid={totalReturnPaid || 0}
          />
        </div>
      </div>

      <div>
        <StartUpsInvestors
          searchParams={searchParams}
          contracts={startupContracts.acceptedContracts!}
        />
      </div>
    </div>
  );
}
