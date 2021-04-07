import React from "react"
import MetricCard from "./MetricCard"
import DisplayCurrency from "../DisplayCurrency/DisplayCurrency"
import DisplayUnit from "../DisplayUnit/DisplayUnit"
import TrendIndicator from "../TrendIndicator/TrendIndicator"

export default {
  title: "Components/Metrics/MetricCard",
  component: MetricCard,
  subcomponents: { DisplayCurrency, TrendIndicator, DisplayUnit },
  argTypes: {
    currency: {
      description: "A string sent to the DisplayCurrency component.",
      table: {
        type: { summary: "string" },
        defaultValue: {
          summary: "USD",
          detail: "Accepts: 'null' | 'USD' | 'EUR' | 'JPY' | 'CHF'",
        },
      },
      control: { type: "select", options: [null, "USD", "EUR", "JPY", "CHF"] },
    },
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
    label: {
      description:
        "A short description displayed under the metric value. Make as short as possible.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "null" },
      },
      control: "text",
    },
    unit: {
      description: "A string sent to the DisplayUnit component.",
      table: {
        type: { summary: "string" },
        defaultValue: {
          summary: "null",
          detail:
            "Accepts: 'null' | 'hundred' | 'thousand' | 'million' | 'billion' | 'trillion'",
        },
      },
      control: {
        type: "select",
        options: [
          null,
          "hundred",
          "thousand",
          "million",
          "billion",
          "trillion",
        ],
      },
    },
  },
  args: {
    currency: "USD",
    value: 999,
    baseValue: 123,
    label: "Metric Label",
    unit: "thousand",
  },
  parameters: {
    componentSubtitle:
      "Displays a single metric data point to provide insight.",
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/xGF6TXDWOoigzGthqp9i70/LG-UIKit-v3?node-id=398%3A288",
    },
  },
}

const Template = (args) => (
  <div className='wrapper' style={{ width: "50%" }}>
    <MetricCard {...args} />
  </div>
)

export const AllOn = Template.bind({})

export const AllOff = Template.bind({})
AllOff.args = {
  currency: null,
  value: 321,
  baseValue: null,
  label: null,
  unit: null,
}
