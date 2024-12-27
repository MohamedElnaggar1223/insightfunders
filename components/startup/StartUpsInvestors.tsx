import { getInvestor } from "@/lib/actions/startup";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import InvestorNameDialog from "./InvestorNameDialog";

import "@/app/globals.css";
import SearchInvestorsBar from "./SearchInvestorsBar";
// Import Montserrat font

type Props = {
  contracts: {
    payment_interval: "week" | "month" | "quarter" | "year" | null;
    id: number;
    investor_id: number;
    accepted: boolean;
    startup_id: number;
    amount_invested: string;
    interest_rate: string | null;
    total_return_paid: string | null;
    maturity_date: string | null;
    investment_amount_paid: boolean | null;
    createdAt: string | null;
  }[];
  searchParams: {
    page?: string;
  };
};

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

export default async function StartUpsInvestors({
  contracts,
  searchParams,
}: Props) {
  console.log(contracts);
  console.log(searchParams);
  const contractsWithInvestors = await Promise.all(
    contracts.map(async (contract) => {
      const investor = await getInvestor(contract.investor_id);
      return { ...contract, investor };
    })
  );

  const formatCurrency = (value: number) =>
    `$${Intl.NumberFormat("us").format(value)}`;

  console.log({ contractsWithInvestors, contracts });

  const page = searchParams?.page ? parseInt(searchParams.page) : 1;

  const startIndex = (page - 1) * 5 + 1;
  const endIndex =
    contractsWithInvestors.length >= page * 5
      ? page * 5
      : contractsWithInvestors.length;

  const nextAvailable = endIndex < contractsWithInvestors.length;
  const prevAvailable = page > 1;

  return (
    <div>
      <table className="w-full">
        <thead>
          <tr className="bg-[#FAFAFA] text-sm">
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
              Due Date
            </th>
          </tr>
        </thead>
        <tbody>
          {contractsWithInvestors.length > 0 ? (
            contractsWithInvestors
              .slice(startIndex - 1, endIndex)
              .map((lender, index) => (
                <tr key={index}>
                  <td className="border-0 p-0">
                    <InvestorNameDialog
                      investor={lender.investor!}
                      name={`${lender.investor?.user.first_name} ${lender.investor?.user.last_name}`}
                    />
                  </td>
                  <td
                    className={`p-[22px] bg-[#FEFFFE] font-Montserrat text-[12px]`}
                  >
                    {formatCurrency(Number(lender.amount_invested))}
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
      </table>
      <div className="h-10 bg-[#FAFAFA] flex items-center px-4 justify-between ">
        <p className="text-xs font-medium font-Montserrat">
          Showing {startIndex} - {endIndex}
        </p>
        <div className="flex gap-2">
          <Link
            prefetch={true}
            href={prevAvailable ? `/?page=${page - 1}` : "#"}
          >
            <ChevronLeft
              stroke={prevAvailable ? "#000" : "#00000050"}
              size={16}
            />
          </Link>
          <Link
            prefetch={true}
            href={nextAvailable ? `/?page=${page + 1}` : "#"}
          >
            <ChevronRight
              stroke={nextAvailable ? "#000" : "#00000050"}
              size={16}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
