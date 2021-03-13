import React from "react"
import DonutChart from "./DonutChart"

export default {
  title: "DonutChart",
  component: DonutChart,
  argTypes: {
    smallNumber: { control: "number" },
  },
  args: {
    smallNumber: 15,
  },
  parameters: {},
}

export const Default = (args) => <DonutChart {...args} />
