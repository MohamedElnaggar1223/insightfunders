"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import PopUp from "./Popup";

function formatDate(date: Date) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
}

function getMonthsDifference(date1: Date, date2: Date) {
  // Ensure date1 is the earlier date
  if (date1 > date2) {
    [date1, date2] = [date2, date1];
  }

  const years = date2.getFullYear() - date1.getFullYear();
  const months = date2.getMonth() - date1.getMonth();
  const days = date2.getDate() - date1.getDate();

  // Calculate total months
  let monthsDifference = years * 12 + months;

  // Adjust for incomplete months
  if (days < 0) {
    monthsDifference--;
  }

  return monthsDifference;
}

interface LenderData {
  name: string;
  totalFunds: number;
  availableBalance: number;
  initiationDate: string;
  loanDuration: string;
  dueDate: string;
}

type ActiveData = {
  id: number;
  investor_type: "Individual" | "Institution" | null;
  institution_type:
    | "Corporation"
    | "Other"
    | "Family Office"
    | "Fund"
    | "Registered Investment Advisor (RIA)"
    | null;
  investor: any;
  user: {
    first_name: string;
    last_name: string | null;
  };
  [key: string]: any;
};

interface TableProps {
  contractsWithInvestors: any;
  searchParams: {
    page?: string;
  };
}

const Table = ({ contractsWithInvestors, searchParams }: TableProps) => {
  const [open, setOpen] = useState(false);
  const [activeData, setActiveData] = useState<ActiveData | undefined>(undefined);

  const page = searchParams?.page ? parseInt(searchParams.page) : 1;

  const startIndex = (page - 1) * 5 + 1;
  const endIndex =
    contractsWithInvestors.length >= page * 5
      ? page * 5
      : contractsWithInvestors.length;

  const nextAvailable = endIndex < contractsWithInvestors.length;
  const prevAvailable = page > 1;

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
          <tr className="bg-[#ffffff] text-sm">
            <th className="text-[12px] text-center p-[22px] font-medium font-Montserrat text-[#1A1A1A] leading-[14px]">
              Lender Name
            </th>
            <th className="text-[12px] text-center p-[22px] font-medium font-Montserrat text-[#1A1A1A] leading-[14px]">
              Total Funds
            </th>

            <th className="text-[12px] text-center p-[22px] font-medium font-Montserrat text-[#1A1A1A] leading-[14px]">
              Initiation Date
            </th>
            <th className="text-[12px] text-center p-[22px] font-medium font-Montserrat text-[#1A1A1A] leading-[14px]">
              Loan Duration
            </th>
            <th className="text-[12px] text-center p-[22px] font-medium font-Montserrat text-[#1A1A1A] leading-[14px]">
              Maturity Date
            </th>
          </tr>
        </thead>
        <tbody>
          {contractsWithInvestors.length > 0 ? (
            contractsWithInvestors
              .slice(startIndex - 1, endIndex)
              .map((lender: ActiveData, index: number) => (
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
                    {`${lender.investor?.user.first_name} ${lender.investor?.user.last_name}`}
                  </td>
                  <td
                    className={`p-[22px] bg-[#FEFFFE] font-Montserrat text-[12px]`}
                  >
                    ${lender.amount_invested}
                  </td>
                  <td
                    className={`p-[22px] bg-[#EAEAEA] font-Montserrat text-[13px]`}
                  >
                    {formatDate(new Date(lender.createdAt!))}
                  </td>
                  <td
                    className={`p-[22px] bg-[#FEFFFE] font-Montserrat text-[13px]`}
                  >
                    {getMonthsDifference(
                      new Date(lender.createdAt!),
                      new Date(lender.maturity_date!)
                    )}{" "}
                    months
                  </td>
                  <td
                    className={`p-[22px] bg-[#EAEAEA] font-Montserrat text-[13px]`}
                  >
                    {lender.maturity_date}
                  </td>
                </tr>
              ))
          ) : (
            <p className="min-h-[200px] flex items-center justify-center font-Montserrat">
              No data yet!
            </p>
          )}
        </tbody>
        // @ts-ignore
        <PopUp open={open} setOpen={setOpen} activeData={activeData} />
      </table>
    </>
  );
};

export default Table;
