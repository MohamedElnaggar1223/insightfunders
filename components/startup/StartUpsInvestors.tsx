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

  const page = searchParams?.page ? parseInt(searchParams.page) : 1;

  const startIndex = (page - 1) * 5 + 1;
  const endIndex =
    contractsWithInvestors.length >= page * 5
      ? page * 5
      : contractsWithInvestors.length;

  const nextAvailable = endIndex < contractsWithInvestors.length;
  const prevAvailable = page > 1;

  return (
    <div className={`flex flex-col gap-4 `}>
      {/* <SearchInvestorsBar /> */}
      <div className="flex flex-1 bg-white w-full flex-col overflow-auto">
        <div className="flex w-full items-center justify-between px-4 py-[22.5px] bg-[#FAFAFA]">
          <p className="text-xs font-medium flex-1 font-Montserrat">
            Lender Name
          </p>
          <p className="text-xs font-medium flex-1 font-Montserrat">
            Total Funds
          </p>
          <p className="text-xs font-medium flex-1 font-Montserrat">
            Initiation Date
          </p>
          <p className="text-xs font-medium flex-1 font-Montserrat">
            Loan Duration
          </p>
          <p className="text-xs font-medium flex-1 font-Montserrat">
            Maturity Date
          </p>
        </div>
        {contractsWithInvestors.length > 0 ? (
          contractsWithInvestors
            .slice(startIndex - 1, endIndex)
            .map((contract, index) => (
              <div
                className={cn(
                  "flex w-full items-center justify-between",
                  index % 2 !== 0 && "bg-[#A1A1A133]"
                )}
              >
                <InvestorNameDialog
                  investor={contract.investor!}
                  name={`${contract.investor?.user.first_name} ${contract.investor?.user.last_name}`}
                />
                <div className="flex-1 flex items-center justify-center bg-[#B4B4B4CC] h-full py-6 gap-2">
                  <span>${contract.amount_invested}</span>
                </div>
                <div className="flex-1 flex items-center justify-center py-6">
                  {formatDate(new Date(contract.createdAt!))}
                </div>
                <div className="flex-1 flex items-center justify-center py-6">
                  {getMonthsDifference(
                    new Date(contract.createdAt!),
                    new Date(contract.maturity_date!)
                  )}{" "}
                  months
                </div>
                <div className="flex-1 flex items-center justify-center bg-[#B4B4B4CC] h-full py-6">
                  {contract.maturity_date}
                </div>
              </div>
            ))
        ) : (
          <p className="min-h-[200px] flex items-center justify-center font-Montserrat">
            No data yet!
          </p>
        )}
        <div className="h-10 flex items-center px-4 justify-between ">
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
    </div>
  );
}
