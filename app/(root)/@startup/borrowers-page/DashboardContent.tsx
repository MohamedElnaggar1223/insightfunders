"use client";

import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { Card } from "@/components/ui/card";
import DashboardCard from "./DashboardCard";
import ThreeDPieChart from "./ThreeDPieChart";

interface LenderData {
  name: string;
  totalFunds: number;
  availableBalance: number;
  initiationDate: string;
  loanDuration: string;
  dueDate: string;
}

export default function FundsDashboard() {
  const pieData = [
    { name: "Available Balance", value: 77 },
    { name: "Funds Used", value: 23 },
  ];

  const COLORS = ["#6366f1", "#f97316"];

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
      className="w-full mx-auto space-y-6 mt-8
    max-w-[800px]                     
    lg:max-w-[850px]                 
    xl:max-w-[923px]                  
    2xl:max-w-[1200px]               
    3xl:max-w-[1700px]              
    4xl:max-w-[1800px]"
    >
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Top Section */}
        <div className="grid grid-cols-3 gap-6">
          {/* Left Stats */}
          <div className="space-y-6">
            <DashboardCard
              title="Total Funds"
              value="$6,500,000"
              className="h-[calc(50%-12px)] text-center content-center" // subtracting half of space-y-6
            />
            <DashboardCard
              title="Available Balance"
              value="$5,000,000"
              className="h-[calc(50%-12px)] text-center content-center"
            />
          </div>

          {/* Pie Chart Section */}
          <div className="col-span-2">
            <Card className="bg-neutral-900 border-0 h-full">
              <div className="p-6">
                <h3 className="text-white text-lg mb-4 font-Montserrat">
                  Total Funds Available
                </h3>
                <div className="grid grid-cols-2 gap-8">
                  <div className="flex items-center justify-center">
                    <ThreeDPieChart />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-orange-500" />
                        <span className="text-neutral-300 font-Montserrat">
                          Funds Used
                        </span>
                      </div>
                      <span className="text-white" font-Montserrat>
                        $1,500,000
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-indigo-500" />
                        <span className="text-neutral-300 font-Montserrat">
                          Available Balance
                        </span>
                      </div>
                      <span className="text-white font-Montserrat">
                        $5,000,000
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t border-neutral-800">
                      <span className="text-neutral-300 font-Montserrat">
                        Total Funds Available
                      </span>
                      <span className="text-white font-Montserrat">
                        $6,500,000
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto bg-white rounded-lg">
          <table className="w-full">
            <thead>
              <tr className="text-gray-600 text-sm">
                <th className="text-left p-4 font-medium font-Montserrat">
                  Lender Name
                </th>
                <th className="text-left p-4 font-medium font-Montserrat">
                  Total Funds
                </th>
                <th className="text-left p-4 font-medium font-Montserrat">
                  Available Balance
                </th>
                <th className="text-left p-4 font-medium font-Montserrat">
                  Initiation Date
                </th>
                <th className="text-left p-4 font-medium font-Montserrat">
                  Loan Duration
                </th>
                <th className="text-left p-4 font-medium font-Montserrat">
                  Due Date
                </th>
              </tr>
            </thead>
            <tbody>
              {lendersData.map((lender, index) => (
                <tr key={index}>
                  <td className={`p-4 bg-[#EAEAEA] font-Montserrat`}>
                    {lender.name}
                  </td>
                  <td className={`p-4 bg-white font-Montserrat`}>
                    ${lender.totalFunds.toLocaleString()}
                  </td>
                  <td className={`p-4 bg-[#EAEAEA] font-Montserrat`}>
                    ${lender.availableBalance.toLocaleString()}
                  </td>
                  <td className={`p-4 bg-white font-Montserrat`}>
                    {lender.initiationDate}
                  </td>
                  <td className={`p-4 bg-[#EAEAEA] font-Montserrat`}>
                    {lender.loanDuration}
                  </td>
                  <td className={`p-4 bg-white font-Montserrat`}>
                    {lender.dueDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
