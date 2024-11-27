"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Pie, PieChart } from "recharts";

type Props = {
  totalAmountInvested: number;
};

export default function StartUpsChart({ totalAmountInvested }: Props) {
  // Calculate actual values and percentages
  // const fundsUsed = 1500000; // Example value, replace with actual funds used
  // const availableBalance = totalAmountInvested - fundsUsed;
  // const total = totalAmountInvested;

  const fundsUsed = 0;
  const total = totalAmountInvested;
  const availableBalance = totalAmountInvested;

  const data = [
    {
      name: "Available Balance",
      value: availableBalance,
      percentage: total > 0 ? Math.round((availableBalance / total) * 100) : 0,
      fill: "#5631CC",
    },
    {
      name: "Funds Used",
      value: fundsUsed,
      percentage: total > 0 ? Math.round((fundsUsed / total) * 100) : 0,
      fill: "#FF7A00",
    },
  ];

  const defaultData = [
    {
      name: "No Data Available",
      value: 1,
      percentage: 100,
      fill: "#5631CC",
    },
  ];

  const isAllZero = total === 0;

  const chartConfig = {
    availableBalance: {
      label: "Available Balance",
      color: "#5631CC",
    },
    fundsUsed: {
      label: "Funds Used",
      color: "#FF7A00",
    },
  } satisfies ChartConfig;

  const valueFormatter = (value: any, name: any) => {
    if (name === "No Data Available") {
      return "No Data Available $0";
    }
    return `$ ${Intl.NumberFormat("us").format(value).toString()}`;
  };

  const formatCurrency = (value: number) =>
    `$${Intl.NumberFormat("us").format(value)}`;

  return (
    <Card className="border-none rounded-[8px] text-white">
      <CardHeader className="pb-0">
        <CardTitle className="text-base text-left font-normal font-Montserrat">
          Total Funds Available
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex items-center gap-8">
          <ChartContainer config={chartConfig} className="w-[200px] h-[200px]">
            <PieChart width={200} height={200}>
              <ChartTooltip
                content={<ChartTooltipContent formatter={valueFormatter} />}
              />
              <Pie
                data={isAllZero ? defaultData : data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={0}
                outerRadius={80}
                strokeWidth={2}
                stroke="hsl(var(--background))"
                label={({ payload }) => `${payload.percentage}%`}
                labelLine={false}
              />
            </PieChart>
          </ChartContainer>

          <div className="flex flex-col gap-3 pt-4">
            <div className="flex justify-between items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF7A00]" />
                <span className="text-[13px] font-Montserrat">Funds Used</span>
              </div>
              <span className="text-[13px] font-Montserrat">
                {formatCurrency(fundsUsed)}
              </span>
            </div>
            <div className="flex justify-between items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#5631CC]" />
                <span className="text-[13px] font-Montserrat">
                  Available Balance
                </span>
              </div>
              <span className="text-[13px] font-Montserrat">
                {formatCurrency(availableBalance)}
              </span>
            </div>
            <div className="mt-2 pt-2 border-t border-gray-700">
              <div className="flex justify-between items-center gap-2">
                <span className="text-[13px] font-bold font-Montserrat">
                  Total Funds Available
                </span>
                <span className="text-[13px] font-bold font-Montserrat">
                  {formatCurrency(total)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

{
  /* <div className="bg-white  h-full flex flex-col items-center justify-center text-left p-8 gap-12 rounded-[8px] shadow-lg">
      <p className="text-black font-normal  mr-auto">Total Funds Available</p>
      <div className="flex w-full gap-12">
        <DonutChart
          data={isAllZero ? defaultData : data}
          category="value"
          index="name"
          valueFormatter={valueFormatter}
          colors={colors}
          className="w-40 textWhite"
          showLabel={false}
        />
        <Legend
          categories={["Available Balance", "Funds Used"]}
          colors={["orange", "#212121"]}
          className="max-w-xs text-white"
        />
      </div>
    </div> */
}
