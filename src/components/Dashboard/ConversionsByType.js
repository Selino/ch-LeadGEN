import React from "react"
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Label,
} from "recharts"
import colors from "tokens/colors"

export default function ConversionsByType() {
  const data = [
    {
      name: "Incomplete",
      value: 329,
    },
    {
      name: "Complete",
      value: 178,
    },
  ]

  return (
    <div className='metric-card-container'>
      <div className='metric-card-header'>Conversions By Type</div>
      <div className='metric-card-body flex flex-row gap-2 justify-center'>
        <div className='left-side p-2 pr-3 border-r border-borderborder'>
          <div className='flex gap-4'>
            <PieChart width={100} height={100}>
              <Pie
                data={data}
                dataKey='value'
                cx='50%'
                cy='50%'
                startAngle={90}
                endAngle={450}
                innerRadius={30}
                outerRadius={50}
              >
                <Cell key={`cell-a`} fill={colors.chromeBorder} />
                <Cell key={`cell-b`} fill={colors.success} />
              </Pie>
            </PieChart>
            <div>
              <div className='text-3xl font-bold'>
                {data[0].value + data[1].value}
              </div>
              <div className='text-base'>PHONE CALLS</div>
              <div className=' bg-gray4 text-white text-xs uppercase p-2 rounded-sm'>
                Multiple Sources
              </div>
            </div>
          </div>
          <div className='text-gray4 text-sm pt-2'>
            Last counted Today at 3:15AM
          </div>
        </div>
        <div className='right-side p-2'>kaka</div>
      </div>
    </div>
  )
}
