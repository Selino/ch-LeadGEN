import React from "react"
import { Doughnut } from "react-chartjs-2"
import colors from "../../tokens/colors"

export default function DonutChart(props) {
  const { smallNumber = 15, totalNumber = 100 } = props

  /**
- Use an avatar for attributing actions or content to specific users.
- The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.
**/

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
