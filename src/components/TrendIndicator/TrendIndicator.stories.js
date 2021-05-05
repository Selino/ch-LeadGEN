import React from "react"
import TrendIndicator from "./TrendIndicator"

export default {
  title: "Components/Metrics/TrendIndicator",
  component: TrendIndicator,
  argTypes: {
    value: {
      defaultValue: 999,
      description: "A number or integer value used as the displayed amount.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "999", detail: "Three digits is best!" },
      },
      control: "number",
    },
    baseValue: {
      description:
        "A number or integer compared against the [value]. This is sent to the MetricTrendIndicator component to determine the up or down arrow display.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "null" },
      },
      control: "number",
    },
  },
  args: {
    value: 999,
    baseValue: 123,
  },
  parameters: {
    componentSubtitle:
      "A single icon to show if the trend is going up, down, or has no change at all.",
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/xGF6TXDWOoigzGthqp9i70/LG-UIKit-v3?node-id=538%3A25",
    },
  },
}

export const Default = (args) => {
  return <TrendIndicator {...args} />
}

const Template = (args) => <TrendIndicator {...args} />

// export const DownwardTrend = Template.bind({})
// DownwardTrend.args = {
//   value: 100,
//   baseValue: 123,
// }
// export const NoChange = Template.bind({})
// NoChange.parameters = {
//   title:
//     "An inline graph that quickly provides visual context for numerical metrics.",
// }
// NoChange.args = {
//   value: 123,
//   baseValue: 123,
// }
