'use client'
import { TrendingUp } from "lucide-react"
import { useMemo } from "react";
import { Label, Pie, PieChart } from "recharts"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
  } from "@/components/ui/chart"

type Props = {
    contracts: {
        id: number;
        payment_interval: "week" | "month" | "quarter" | "year" | null;
        investor_id: number;
        accepted: boolean;
        startup_id: number;
        amount_invested: string;
        interest_rate: string | null;
        total_return_paid: string | null;
        maturity_date: string | null;
    }[]
    totalROI: number;
}

export default function InvestorsChart({ contracts, totalROI }: Props)
{
    const officialReturn = useMemo(() => {
        return contracts.reduce((acc, contract) => acc + (parseFloat(contract.total_return_paid ?? '0')), 0) + 1
    }, [contracts])

    const expectedReturn = useMemo(() => {
        return totalROI - officialReturn + 5
    }, [officialReturn, totalROI])

    const chartData = useMemo(() => {
        return [
            { type: 'Return', value: officialReturn, fill: '#616161' },
            { type: 'Expected Return', value: expectedReturn, fill: '#fff' }
        ]
    }, [officialReturn, totalROI])

    const chartConfig = {
        value: {
            label: 'Amount'
        },
        Return: {
            label: 'Return',
            color: '#616161'
        },
        ExpectedReturn: {
            label: 'Expected Return',
            color: '#fff',
        }
    } satisfies ChartConfig

    return (
        <div className="bg-[#212121] whiteText flex">
            <div className='flex-1'>
                <ChartContainer
                    config={chartConfig}
                    className="ml-auto aspect-square max-h-[250px] whiteText"
                >
                    <PieChart className="whiteText">
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="value"
                            nameKey="type"
                            innerRadius={60}
                            className="whiteText"
                            strokeWidth={5}
                        >
                            <Label
                                content={({ viewBox }) => {
                                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                    return (
                                    <text
                                        x={viewBox.cx}
                                        y={viewBox.cy}
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                        fill="#fff"
                                    >
                                        <tspan
                                            x={viewBox.cx}
                                            y={viewBox.cy}
                                            className="whiteText text-lg font-bold"
                                        >
                                            Total ROI
                                        </tspan>
                                    </text>
                                    )
                                }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </div>
            <div className='flex-[0.65] flex flex-col items-start justify-center gap-4 pl-12'>
                <div className="flex items-center justify-between gap-2 min-w-[200px]">
                    <div className='w-4 h-4 bg-[#616161] rounded-full' />
                    <p className='text-xs font-Montserrat font-light text-left flex-1'>Return</p>
                    <p className='text-xs font-Montserrat font-light text-left flex-[0.5]'>${officialReturn}</p>
                </div>
                <div className="flex items-center justify-between gap-2 min-w-[200px]">
                    <div className='w-4 h-4 bg-[#C4C4C4] rounded-full' />
                    <p className='text-xs font-Montserrat font-light text-left flex-1'>Expected Return</p>
                    <p className='text-xs font-Montserrat font-light text-left flex-[0.5]'>${expectedReturn}</p>
                </div>
                <div className="flex items-center justify-between gap-2 py-2.5 border-t border-[#C4C4C4] min-w-[200px]">
                    <div className='w-4 h-4 bg-transparent rounded-full' />
                    <p className='text-xs font-Montserrat font-light text-left flex-1'>Total</p>
                    <p className='text-xs font-Montserrat font-light text-left flex-[0.5]'>${totalROI}</p>
                </div>
            </div>
        </div>
    )
}