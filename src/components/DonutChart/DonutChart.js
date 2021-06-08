import React from "react"
import { Doughnut } from "react-chartjs-2"
import colors from "tokens/colors"

/**
 Doughnut charts can help turn your data into an easily digestible piece of data visualization your readers or audience are sure to appreciate.
**/

export default function DonutChart(props) {
  const { smallNumber = 15, totalNumber = 100 } = props

  return (
    <Doughnut
      data={{
        datasets: [
          {
            label: "# of Votes",
            data: [smallNumber, totalNumber - smallNumber],
            backgroundColor: [colors.primaryInactive, colors.graysGray4],
            borderWidth: 0,
          },
        ],
      }}
      width={128}
      height={128}
      options={{ maintainAspectRatio: false }}
    />
  )
}
