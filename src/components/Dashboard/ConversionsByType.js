import React from "react"
import { ReactSVG } from "react-svg"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts"
import colors from "tokens/colors"

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const MetricBarChart = ({ data, type }) => {
  return (
    <div id='2' className='w-full md:w-60 lg:h-36'>
      <ResponsiveContainer width='100%' height='80%'>
        <BarChart
          layout='vertical'
          data={[
            {
              name: "Search",
              total: randomNumber(1000, 3000),
            },
            { name: "Facebook", total: randomNumber(500, 1000) },
            { name: "Display", total: randomNumber(100, 300) },
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
          <Tooltip cursor={false} />
        </BarChart>
      </ResponsiveContainer>
      <div className='text-gray4 text-sm bottom-0'>{type} by Channel</div>
    </div>
  )
}

export const MetricDonut = ({
  data,
  type,
  sources,
  icon,
  lastCounted,
  color,
}) => {
  return (
    <div id='1' className='h-32'>
      <div className='flex gap-4'>
        <div className='relative'>
          {icon && (
            <ReactSVG
              src={`/graphics/${icon}.svg`}
              className='absolute top-9 left-8 svg-secondary'
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
            <Tooltip cursor={false} />
          </PieChart>
        </div>
        <div>
          <div className='text-4xl font-bold'>
            {data[0].value + data[1].value}
          </div>
          <div className='text-base '>{type}</div>
          {sources && (
            <div className=' bg-gray4 text-white text-xs uppercase py-1 px-1.5 mt-1 rounded-sm whitespace-nowrap'>
              {sources}
            </div>
          )}
        </div>
      </div>
      <div className='text-gray4 text-sm bottom-0'>
        Last counted {lastCounted}
      </div>
    </div>
  )
}

export default function ConversionsByType() {
  const data1 = [
    {
      name: "Phone Calls",
      value: randomNumber(200, 300),
    },
    {
      name: "Appointments",
      value: randomNumber(50, 300),
    },
  ]

  const data2 = [
    {
      name: "Assessments",
      value: randomNumber(200, 1200),
    },
    {
      name: "Appointments",
      value: randomNumber(50, 200),
    },
  ]

  return (
    <div className='metric-card-container'>
      <div className='metric-card-header'>Conversions By Type</div>
      <div className='metric-card-body sm:flex sm:flex-row sm:gap-4 justify-evenly'>
        <div className='p-2'>
          <div className='lg:flex lg:gap-4 lg:items-end'>
            <MetricDonut
              type='Phone Calls'
              color={colors.buttonPrimaryInactive}
              icon='utiPhone'
              data={data1}
              sources='Multiple Sources'
              lastCounted='Today at 3:15PM'
            />
            <MetricBarChart type='Phone Calls' />
          </div>
        </div>

        <div className='border-b sm:border-r border-borderborder my-4 md:my-0'></div>
        <div className='p-2'>
          <div className='lg:flex lg:gap-4 lg:items-end'>
            <MetricDonut
              type='Appointments'
              color={colors.success}
              icon='utiCalendarAlt'
              data={data2}
              lastCounted='Today at 3:16PM'
            />
            <MetricBarChart type='Appointments' />
          </div>
        </div>
      </div>
    </div>
  )
}
