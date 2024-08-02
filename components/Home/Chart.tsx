'use client'
import { Label, Pie, PieChart } from "recharts"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
  } from "@/components/ui/chart"

export default function Chart()
{

    const chartData = [
        { type: 'Return', value: 49722.5, fill: '#616161' },
        { type: 'Expected Return', value: 149167.5, fill: '#fff' }
    ]

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
        <div className="bg-[#212121] whiteText flex flex-1">
            <div className='flex-1'>
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square h-[180px] max-h-[180px] lg:max-h-[367px] lg:h-[367px] whiteText"
                >
                    <PieChart className="whiteText">
                        {/* <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        /> */}
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
                                            y={viewBox.cy! - 12.5}
                                            className="whiteText text-lg font-bold"
                                        >
                                            Total
                                        </tspan>
                                        <tspan 
                                            x={viewBox.cx}
                                            y={viewBox.cy! + 12.5}
                                            className="text-sm"
                                        >
                                            {'\n'}$198,890
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
        </div>
    )
}