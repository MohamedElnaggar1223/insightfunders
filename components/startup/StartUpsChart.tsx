'use client'
import { DonutChart, Legend } from '@tremor/react';

const valueFormatter = (number: number) => 
  `$ ${Intl.NumberFormat('us').format(number).toString()}`

type Props = {
    totalAmountInvested: number
}

export default function StartUpsChart({ totalAmountInvested }: Props) {
    const data = [
        {
            name: 'Available Balance',
            value: totalAmountInvested
        },
        {
            name: 'Funds Used',
            value: 0
        }
    ]

    return (
        <div className='bg-[#212121] min-w-[568px] h-full flex flex-col items-center justify-center text-left px-8 gap-12 rounded-[8px]'>
            <p className='text-white font-normal font-Montserrat mr-auto'>Total Funds Available</p>
            <div className='flex w-full gap-12'>
                <DonutChart
                    data={data}
                    category="value"
                    index="name"
                    valueFormatter={valueFormatter}
                    colors={["orange", "white"]}
                    className="w-40 textWhite"
                    showLabel={false}
                />
                <Legend
                    categories={['Available Balance', 'Funds Used']}
                    colors={["orange", "white"]}
                    className="max-w-xs text-white"
                />
            </div>
        </div>
    )
}