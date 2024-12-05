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

interface LenderData {
  name: string;
  totalFunds: number;
  availableBalance: number;
  initiationDate: string;
  loanDuration: string;
  dueDate: string;
}

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

  const investmentData = [
    {
      name: "Slope AI",
      category: "Tech",
      amount: 5000000,
      apy: "19%",
      term: "12 months",
      maturityDate: "05/12/2025",
      dueDate: "05/12/2024",
    },
    {
      name: "Acme Corp",
      category: "Fintech",
      amount: 3000000,
      apy: "17%",
      term: "48 months",
      maturityDate: "03/18/2028",
      dueDate: "03/18/2024",
    },
    {
      name: "Epsilon Dynamics",
      category: "Software",
      amount: 10000000,
      apy: "18%",
      term: "36 months",
      maturityDate: "10/08/2027",
      dueDate: "10/08/2024",
    },
    {
      name: "Arch",
      category: "AI",
      amount: 1000000,
      apy: "20%",
      term: "48 months",
      maturityDate: "09/15/2028",
      dueDate: "09/15/2024",
    },
    {
      name: "Pharmator",
      category: "Pharmaceutical",
      amount: 1000000,
      apy: "18%",
      term: "24months",
      maturityDate: "01/18/2026",
      dueDate: "01/18/2024",
    },
  ];

  const totalInvestors = startupContracts.acceptedContracts?.filter(
    (contract) => contract.investment_amount_paid
  ).length;

  const lendersData: LenderData[] = [
    {
      name: "Aspen Partners",
      totalFunds: 6500000,
      availableBalance: 5000000,
      initiationDate: "04/12/2024",
      loanDuration: "36 months",
      dueDate: "09/12/2024",
    },
    {
      name: "BlackRock Capital",
      totalFunds: 8200000,
      availableBalance: 6100000,
      initiationDate: "03/15/2024",
      loanDuration: "48 months",
      dueDate: "08/15/2024",
    },
    {
      name: "Vanguard Ventures",
      totalFunds: 5500000,
      availableBalance: 3800000,
      initiationDate: "04/01/2024",
      loanDuration: "24 months",
      dueDate: "09/01/2024",
    },
    {
      name: "Fidelity Investments",
      totalFunds: 7500000,
      availableBalance: 4200000,
      initiationDate: "03/28/2024",
      loanDuration: "36 months",
      dueDate: "08/28/2024",
    },
    {
      name: "State Street Global",
      totalFunds: 9000000,
      availableBalance: 6800000,
      initiationDate: "04/05/2024",
      loanDuration: "60 months",
      dueDate: "09/05/2024",
    },
    {
      name: "Goldman Sachs Fund",
      totalFunds: 12000000,
      availableBalance: 8500000,
      initiationDate: "03/20/2024",
      loanDuration: "48 months",
      dueDate: "08/20/2024",
    },
  ];

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
            title="Total Investment"
            value={`$20,000,000`}
            className="h-[calc(50%-12px)] text-center content-center"
          />
          <DashboardCard
            title="Total Excepted Return"
            value={`$4,000,000`}
            className="h-[calc(50%-12px)] text-center content-center"
          />
          <DashboardCard
            title="Companies Invested"
            value={`6`}
            className="h-[calc(50%-12px)] text-center content-center"
          />
        </div>

        {/* Pie Chart Section */}
        <div className="w-full">
          <StartUpsChart totalAmountInvested={totalAmountInvested!} />
        </div>
      </div>

      {/* Table Section */}
      <div className="relative">
        {/* <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500 font-Montserrat" /> */}
        {/* <SearchInput
          placeholder="Search startups"
          className="pl-10 bg-white border-gray-800 text-white font-Montserrat"
        /> */}
        <CustomSearch
          placeholder="Search startups"
          className="pl-10 bg-white border-gray-800 text-white font-Montserrat"
        />
      </div>

      <div className="overflow-x-auto bg-[#FAFAFA] rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="text-[#1A1A1A] text-sm leading-[15px] text-[12px]">
              <th className=" text-[12px] text-center p-6 font-medium font-Montserrat">
                Company Name
              </th>
              <th className="text-[12px] text-center p-6 font-medium font-Montserrat">
                Amount Invested
              </th>
              <th className="text-[12px] text-center p-6 px-12 font-medium font-Montserrat">
                APY
              </th>
              <th className="text-[12px] text-center p-6 font-medium font-Montserrat">
                Term
              </th>
              <th className="text-[12px] text-center p-6 font-medium font-Montserrat">
                Maturity Date
              </th>
              <th className="text-[12px] text-center p-6 font-medium font-Montserrat">
                Due Payment Date
              </th>
            </tr>
          </thead>
          <tbody>
            {investmentData.map((company, index) => (
              <tr key={index}>
                <td className={`p-4 bg-[#EAEAEA] font-Montserrat`}>
                  <div>
                    <div className="font-medium font-Montserrat text-[13px] leading-[15px]">
                      {company.name}
                    </div>
                    <div className="text-sm text-gray-500 font-Montserrat text-[13px]">
                      {company.category}
                    </div>
                  </div>
                </td>
                <td
                  className={`p-4 bg-white font-Montserrat text-[13px] leading-[15px] text-[#1A1A1A]`}
                >
                  ${company.amount.toLocaleString()}
                </td>
                <td
                  className={`p-4 bg-[#EAEAEA] font-Montserrat text-[13px] leading-[15px] text-[#1A1A1A]`}
                >
                  {company.apy}
                </td>
                <td
                  className={`p-4 bg-white font-Montserrat text-[13px] leading-[15px] text-[#1A1A1A]`}
                >
                  {company.term}
                </td>
                <td
                  className={`p-4 bg-[#EAEAEA] font-Montserrat leading-[15px] text-[#1A1A1A] text-[13px]`}
                >
                  {company.maturityDate}
                </td>
                <td
                  className={`p-4 bg-white font-Montserrat leading-[15px] text-[#1A1A1A] text-[13px]`}
                >
                  {company.dueDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
