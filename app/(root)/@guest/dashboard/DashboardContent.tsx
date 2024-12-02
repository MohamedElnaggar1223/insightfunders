"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell } from "recharts";
import { Search } from "lucide-react";
import { SearchInput } from "@/components/lenders/SearchInput";
import DashboardCard from "./DashboardCard";
import ThreeDPieChart from "../borrowers-page/ThreeDPieChart";

export default function DashboardContent() {
  const pieData = [
    { name: "Remaining Return Expected", value: 80 },
    { name: "Realized Return", value: 20 },
  ];

  const COLORS = ["#6366f1", "#f97316"];

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

  return (
    <div className="min-h-[calc(100vh-68px)] bg-black p-8 mt-[68px]">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="grid grid-cols-3 gap-6">
          {/* Left column with stats */}
          <div className="space-y-6">
            <DashboardCard
              title="Total Investment"
              value="$20,000,000"
              className="text-center content-center"
            />
            <DashboardCard
              title="Total Expected Return"
              value="$4,000,000"
              className="text-center content-center"
            />
            <DashboardCard
              title="Companies Invested"
              value="6"
              className="text-center content-center"
            />
          </div>

          {/* Right column with ROI card spanning 2 columns */}
          <div className="col-span-2 h-full">
            <Card className="bg-neutral-900 border-0 h-full rounded-xl">
              <CardContent className="p-6 h-full">
                <h3 className="text-white text-lg font-Montserrat">
                  Total return on Investment
                </h3>
                <div className="grid grid-cols-2 gap-8 h-full">
                  <div className="flex items-center justify-center">
                    <ThreeDPieChart />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-orange-500" />
                        <span className="text-neutral-300 font-Montserrat">
                          Realized Return
                        </span>
                      </div>
                      <span className="text-white font-Montserrat">
                        $800,000
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-indigo-500" />
                        <span className="text-neutral-300 font-Montserrat">
                          Remaining Return Expected
                        </span>
                      </div>
                      <span className="text-white font-Montserrat">
                        $3,200,000
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t border-neutral-800">
                      <span className="text-neutral-300 font-Montserrat">
                        Total ROI
                      </span>
                      <span className="text-white font-Montserrat">
                        $4,000,000
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Search and Table */}
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500 font-Montserrat" />
          <SearchInput
            placeholder="Search startups"
            className="pl-10 bg-gray-900 border-gray-800 text-white font-Montserrat"
          />
        </div>

        <div className="overflow-x-auto bg-white rounded-lg">
          <table className="w-full">
            <thead>
              <tr className="text-gray-600 text-sm">
                <th className="text-left p-4 font-medium font-Montserrat">
                  Company Name
                </th>
                <th className="text-left p-4 font-medium font-Montserrat">
                  Amount Invested
                </th>
                <th className="text-left p-4 font-medium font-Montserrat">
                  APY
                </th>
                <th className="text-left p-4 font-medium font-Montserrat">
                  Term
                </th>
                <th className="text-left p-4 font-medium font-Montserrat">
                  Maturity Date
                </th>
                <th className="text-left p-4 font-medium font-Montserrat">
                  Due Payment Date
                </th>
              </tr>
            </thead>
            <tbody>
              {investmentData.map((company, index) => (
                <tr key={index}>
                  <td className={`p-4 bg-[#EAEAEA] font-Montserrat`}>
                    <div>
                      <div className="font-medium font-Montserrat">
                        {company.name}
                      </div>
                      <div className="text-sm text-gray-500 font-Montserrat">
                        {company.category}
                      </div>
                    </div>
                  </td>
                  <td className={`p-4 bg-white font-Montserrat`}>
                    ${company.amount.toLocaleString()}
                  </td>
                  <td className={`p-4 bg-[#EAEAEA] font-Montserrat`}>
                    {company.apy}
                  </td>
                  <td className={`p-4 bg-white font-Montserrat`}>
                    {company.term}
                  </td>
                  <td className={`p-4 bg-[#EAEAEA] font-Montserrat`}>
                    {company.maturityDate}
                  </td>
                  <td className={`p-4 bg-white font-Montserrat`}>
                    {company.dueDate}
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
