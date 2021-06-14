import React from "react"
import { ReactSVG } from "react-svg"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Label,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts"
import colors from "tokens/colors"

export const MetricByChannel = () => {
  return <div>Test</div>
}

export const MetricConversions = ({
  data,
  type,
  sources,
  icon,
  lastCounted,
  color,
}) => {
  return (
    <div className='p-2'>
      <div className='flex gap-4 items-end'>
        <div className=''>
          <div className='flex gap-4'>
            <div className='relative'>
              {icon && (
                <ReactSVG
                  src={`/graphics/${icon}.svg`}
                  // src='/graphics/utiPhone.svg'
                  className='absolute z-10 top-9 left-9 svg-secondary'
                  beforeInjection={(svg) => {
                    svg.classList.add("w-8")
                    svg.setAttribute("style", "width: inherit")
                    svg.setAttribute("style", "height: inherit")
                  }}
                  wrapper='span'
                />
              )}

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
                  <Cell key={`cell-b`} fill={color} />
                </Pie>
              </PieChart>
            </div>
            <div>
              <div className='text-4xl font-bold'>
                {data[0].value + data[1].value}
              </div>
              <div className='text-base '>{type}</div>

              {sources && (
                <div className=' bg-gray4 text-white text-xs uppercase p-1 mt-1 rounded-sm'>
                  {sources}
                </div>
              )}
            </div>
          </div>
          <span className='text-gray4 text-sm'>Last counted {lastCounted}</span>
        </div>
        <div className='w-60 h-32'>
          <ResponsiveContainer width='100%' height='80%'>
            <BarChart
              layout='vertical'
              data={[
                { name: "Facebook", total: 300 },
                { name: "Search", total: 200 },
                { name: "Display", total: 200 },
              ]}
            >
              <XAxis hide={true} type='number' />
              <YAxis
                dataKey='name'
                height={50}
                width={70}
                type='category'
                tickLine={false}
              />
              <Bar dataKey='total' fill={colors.buttonPrimaryInactive} />
            </BarChart>
          </ResponsiveContainer>
          <span className='text-gray4 text-sm'>{type} by Channel</span>
        </div>
      </div>
    </div>
  )
}

export default function ConversionsByType() {
  const data1 = [
    {
      name: "Incomplete",
      value: 329,
    },
    {
      name: "Complete",
      value: 178,
    },
  ]

  const data2 = [
    {
      name: "Incomplete",
      value: 15,
    },
    {
      name: "Complete",
      value: 45,
    },
  ]

  return (
    <div className='metric-card-container'>
      <div className='metric-card-header'>Conversions By Type</div>
      <div className='metric-card-body flex flex-row gap-4 justify-evenly'>
        <MetricConversions
          color={colors.buttonPrimaryInactive}
          icon='utiPhone'
          data={data1}
          type='Phone Calls'
          sources='Multiple Sources'
          lastCounted='Today at 3:15PM'
        />
        <div className='border-r border-borderborder'></div>
        <MetricConversions
          color={colors.success}
          icon='utiCalendarAlt'
          data={data2}
          type='Appointments'
          lastCounted='Today at 3:16PM'
        />
      </div>
    </div>
  )
}
