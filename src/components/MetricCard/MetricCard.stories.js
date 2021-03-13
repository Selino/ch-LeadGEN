import React from "react"
import MetricCard from "./MetricCard"

export default {
  title: "MetricCard",
  component: MetricCard,
  argTypes: {
    smallNumber: { control: "number" },
  },
  args: {
    smallNumber: 15,
  },
  parameters: {},
}

export const Default = (args) => <MetricCard {...args} />
