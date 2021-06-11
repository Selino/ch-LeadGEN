import React from "react"
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Line,
  Tooltip,
  CartesianGrid,
} from "recharts"
import { format, parseISO, subDays } from "date-fns"
import colors from "tokens/colors"
import borderWidths from "tokens/borderWidths"

export default function KMOT() {
  const maxClicks = 320
  const minClicks = 110
  const data = []
  for (let num = 30; num >= 0; num--) {
    data.push({
      date: subDays(new Date(), num).toISOString().substr(0, 10),
      value: Math.floor(
        Math.random() * (maxClicks - minClicks + 1) + minClicks
      ),
    })
  }
  // Math.floor(Math.random() * 6) + 1

  return (
    <div className='metric-card-container'>
      <div className='metric-card-header'>Key Metrics Over Time</div>
      <div className='metric-card-body'>
        <ResponsiveContainer width='100%' height={400}>
          <LineChart data={data}>
            <Line
              dataKey='value'
              stroke={colors.buttonPrimaryActive}
              strokeWidth={borderWidths.fat}
            />
            <XAxis
              dataKey='date'
              axisLine={false}
              tickLine={false}
              tickFormatter={(str) => {
                const date = parseISO(str)
                if (date.getDate() % 7 === 0) {
                  return format(date, "MMM, d")
                }
                return ""
              }}
            />
            <YAxis
              dataKey='value'
              axisLine={false}
              tickLine={false}
              tickCount={6}
              // tickFormatter={(number) => `$${number.toFixed(2)}`}
            />
            <Tooltip />
            <CartesianGrid
              opacity={0.5}
              vertical={false}
              color={colors.black}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
