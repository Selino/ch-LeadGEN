import React from "react"
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Line,
  Tooltip,
  CartesianGrid,
  Legend,
  Label,
} from "recharts"
import { format, parseISO, subDays } from "date-fns"
import colors from "tokens/colors"
import borderWidths from "tokens/borderWidths"
import fontSizes from "tokens/fontSizes"
import KMOTControls from "components/Dashboard/KMOTControls"

export default function KMOT() {
  const maxClicks = 320
  const minClicks = 60
  const maxImps = 5000
  const minImps = 4000
  const data = []
  for (let num = 30; num >= 0; num--) {
    data.push({
      date: subDays(new Date(), num).toISOString().substr(0, 10),
      clicks: Math.floor(
        Math.random() * (maxClicks - minClicks + 1) + minClicks
      ),
      impressions: Math.floor(
        Math.random() * (maxImps - minImps + 1) + minImps
      ),
    })
  }

  return (
    <div className='metric-card-container'>
      <div className='metric-card-header'>Key Metrics Over Time</div>
      <div className='metric-card-body'>
        <div className='chart-controls p-4'>
          <KMOTControls />
        </div>
        <ResponsiveContainer className='m-auto' width='100%' height={400}>
          <LineChart data={data}>
            <Line
              yAxisId='left'
              name='Clicks'
              dataKey='clicks'
              stroke={colors.success}
              strokeWidth={borderWidths.lineChart}
              activeDot={{ r: 8 }}
            />
            <Line
              yAxisId='right'
              name='Impressions'
              dataKey='impressions'
              stroke={colors.warning}
              strokeWidth={borderWidths.lineChart}
              activeDot={{ r: 8 }}
            />
            <XAxis
              dataKey='date'
              axisLine={false}
              tickFormatter={(str) => {
                const date = parseISO(str)
                if (date.getDate() % 7 === 0) {
                  return format(date, "MMM, d")
                }
                return ""
              }}
            />
            <YAxis
              yAxisId='left'
              dataKey='clicks'
              axisLine={false}
              tickLine={false}
              tickCount={6}
              color={colors.success}
              style={{
                fill: colors.success,
                fontSize: fontSizes.microcopy,
              }}
            ></YAxis>
            <YAxis
              yAxisId='right'
              orientation='right'
              dataKey='impressions'
              axisLine={false}
              tickLine={false}
              tickCount={8}
              style={{ fill: colors.warning, fontSize: fontSizes.microcopy }}
            ></YAxis>
            <Tooltip />
            <CartesianGrid
              opacity={0.5}
              vertical={false}
              color={colors.black}
            />
            <Legend verticalAlign='bottom' align='center' />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
