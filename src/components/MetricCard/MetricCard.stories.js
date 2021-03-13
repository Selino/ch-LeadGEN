import React from "react"
import MetricCard from "./MetricCard"

export default {
  title: "MetricCard",
  component: MetricCard,
  argTypes: {
    number: { control: "text" },
  },
  args: {
    number: "0000",
  },
  parameters: {},
}

export const Default = (args) => (
  <div className='h-full w-1/4'>
    <MetricCard {...args} />
  </div>
)
