"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import PopUp from "./Popup";

interface LenderData {
  name: string;
  totalFunds: number;
  availableBalance: number;
  initiationDate: string;
  loanDuration: string;
  dueDate: string;
}

const Table = () => {
  const [open, setOpen] = useState(false);
  const [activeData, setActiveData] = useState<any>();

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
    <>
      <table className="w-full">
        <thead>
          <tr className=" text-sm">
            <th className="text-[12px] text-center p-[22px] font-medium font-Montserrat text-[#1A1A1A] leading-[14px]">
              Lender Name
            </th>
            <th className="text-[12px] text-center p-[22px] font-medium font-Montserrat text-[#1A1A1A] leading-[14px]">
              Total Funds
            </th>
            <th className="text-[12px] text-center p-[22px] font-medium font-Montserrat text-[#1A1A1A] leading-[14px]">
              Available Balance
            </th>
            <th className="text-[12px] text-center p-[22px] font-medium font-Montserrat text-[#1A1A1A] leading-[14px]">
              Initiation Date
            </th>
            <th className="text-[12px] text-center p-[22px] font-medium font-Montserrat text-[#1A1A1A] leading-[14px]">
              Loan Duration
            </th>
            <th className="text-[12px] text-center p-[22px] font-medium font-Montserrat text-[#1A1A1A] leading-[14px]">
              Due Date
            </th>
          </tr>
        </thead>
        <tbody>
          {lendersData.map((lender, index) => (
            <tr
              key={index}
              onClick={() => {
                setActiveData(lender);
                setOpen(true);
              }}
            >
              <td
                className={`p-[22px] bg-[#EAEAEA] font-Montserrat text-[13px]`}
              >
                {lender.name}
              </td>
              <td
                className={`p-[22px] bg-[#FEFFFE] font-Montserrat text-[12px]`}
              >
                ${lender.totalFunds.toLocaleString()}
              </td>
              <td
                className={`p-[22px] bg-[#EAEAEA] font-Montserrat text-[13px]`}
              >
                ${lender.availableBalance.toLocaleString()}
              </td>
              <td
                className={`p-[22px] bg-[#FEFFFE] font-Montserrat text-[13px]`}
              >
                {lender.initiationDate}
              </td>
              <td
                className={`p-[22px] bg-[#EAEAEA] font-Montserrat text-[13px]`}
              >
                {lender.loanDuration}
              </td>
              <td
                className={`p-[22px] bg-[#FEFFFE] font-Montserrat text-[13px]`}
              >
                {lender.dueDate}
              </td>
            </tr>
          ))}
        </tbody>
        <PopUp open={open} setOpen={setOpen} activeData={activeData} />
      </table>
    </>
  );
};

export default Table;
