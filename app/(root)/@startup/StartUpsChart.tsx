"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import dynamic from "next/dynamic";

type Props = {
  totalAmountInvested: number;
};

const DynamicPieChart = dynamic(() => import("./piechart"), {
  ssr: false,
  loading: () => (
    <div className="w-[280px] h-[200px] bg-gray-100 animate-pulse rounded-full" />
  ),
});

export default function StartUpsChart({ totalAmountInvested }: Props) {
  const fundsUsed = 0;
  const total = totalAmountInvested;
  const availableBalance = totalAmountInvested;

  const formatCurrency = (value: number) =>
    `$${Intl.NumberFormat("us").format(value)}`;

  return (
    <Card className="border-none rounded-[8px] text-white bg-[#212121]">
      <CardHeader className="pb-0 pt-[37px]">
        <CardTitle className="text-base text-left font-normal font-Montserrat">
          Total Funds Available
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex content-between items-center gap-8">
          <DynamicPieChart />

          <div className="flex flex-col gap-3 pt-4">
            <div className="flex justify-between items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF7A00]" />
                <span className="text-[13px] font-Montserrat">Funds Used</span>
              </div>
              <span className="text-[13px] font-Montserrat">$1,500,000</span>
            </div>
            <div className="flex justify-between items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#5631CC]" />
                <span className="text-[13px] font-Montserrat">
                  Available Balance
                </span>
              </div>
              <span className="text-[13px] font-Montserrat">$5,000,000</span>
            </div>
            <div className="mt-2 pt-2 border-t border-gray-700">
              <div className="flex justify-between items-center gap-2">
                <span className="text-[13px] font-bold font-Montserrat">
                  Total Funds Available
                </span>
                <span className="text-[13px] font-bold font-Montserrat">
                  $6,500,000
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
