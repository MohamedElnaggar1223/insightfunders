import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { Card } from "@/components/ui/card";
import DashboardCard from "./DashboardCard";
import ThreeDPieChart from "./ThreeDPieChart";
import StartUpsInvestors from "@/components/startup/StartUpsInvestors";
import { getUser } from "@/lib/actions/auth";
import { getContracts } from "@/lib/actions/startup";
import StartUpsChart from "@/components/startup/StartUpsChart";
import { SearchInput } from "@/components/lenders/SearchInput";
import { Search } from "lucide-react";
import { CustomSearch } from "@/components/lenders/CustomSearch";
import CustomStartupChart from "@/components/startup/CustomStartupChart";
import PopUp from "./Table";
import Table from "./Table";

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

  const totalInvestors = startupContracts.acceptedContracts?.filter(
    (contract) => contract.investment_amount_paid
  ).length;

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
            value={`$6,500,000`}
            className="h-[calc(50%-12px)] text-center content-center"
          />
          <DashboardCard
            title="Available Balance"
            value={`$5,000,000`}
            className="h-[calc(50%-12px)] text-center content-center"
          />
        </div>

        {/* Pie Chart Section */}
        <div className="w-full">
          <CustomStartupChart totalAmountInvested={totalAmountInvested!} />
        </div>
      </div>

      {/* Table Section */}

      <div className="overflow-x-auto bg-[#FAFAFA] rounded-lg">
        <Table />
      </div>
    </div>
  );
}
