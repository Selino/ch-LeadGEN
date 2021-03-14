import React from "react"
import MetricCard from "./MetricCard"

export default {
  title: "MetricCard",
  component: MetricCard,
  argTypes: {
    number: { control: "text" },
  },
  args: {
    number: "$000",
  },
  parameters: {},
}

export const Default = (args) => (
  <div className='h-full w-1/3'>
    <MetricCard {...args} />
  </div>
)
