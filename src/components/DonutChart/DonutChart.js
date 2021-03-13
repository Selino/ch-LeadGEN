import React from "react"
import { Doughnut } from "react-chartjs-2"
import colors, { primaryInactive } from "../../tokens/colors"

export default function DonutChart(props) {
  let smallNumber = props.smallNumber ? props.smallNumber : 15
  let totalNumber = props.totalNumber ? props.totalNumber : 100

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
