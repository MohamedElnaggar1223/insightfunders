"use client";
import { DonutChart, Legend } from "@tremor/react";

const valueFormatter = (number: number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;

type Props = {
  totalAmountInvested: number;
};

export default function StartUpsChart({ totalAmountInvested }: Props) {
  const data = [
    {
      name: "Available Balance",
      value: totalAmountInvested,
    },
    {
      name: "Funds Used",
      value: 0,
    },
  ];
  const defaultData = [{ name: "No Data Available", value: 1 }];
  const isAllZero = data.every((item) => item.value === 0);

  // Apply the condition to set the colors
  const colors = isAllZero ? ["#cccccc"] : ["orange", "#212121"];
  return (
    <div className="bg-white  h-full flex flex-col items-center justify-center text-left p-8 gap-12 rounded-[8px] shadow-lg">
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
    </div>
  );
}
