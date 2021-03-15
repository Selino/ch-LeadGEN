import React from "react"
import MetricCard from "./MetricCard"
import DisplayCurrency from "../DisplayCurrency/DisplayCurrency"
import DisplayUnit from "../DisplayUnit/DisplayUnit"
import MetricTrendIndicator from "../MetricTrendIndicator/MetricTrendIndicator"

export default {
  title: "MetricCard",
  component: MetricCard,
  subcomponents: { DisplayCurrency, MetricTrendIndicator, DisplayUnit },
  argTypes: {
    currency: {
      type: { name: "string", required: false },
      defaultValue: "USD",
      description: "A string sent to the DisplayCurrency component.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "USD" },
      },
      control: { type: "select", options: [null, "USD", "EUR", "JPY", "CHF"] },
    },
    value: {
      description: "A number or integer value used as the displayed amount.",
      control: "number",
    },
    baseValue: {
      description:
        "A number or integer compared against the [value]. This is sent to the MetricTrendIndicator component to determine the up or down arrow display.",
      control: "number",
    },
    label: {
      description: "A string that is displayed under the metric value.",
      control: "text",
    },
    unit: {
      description: "A string to sent to the DisplayUnit component.",
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
    value: 321,
    baseValue: 123,
    label: "Metric Label",
    unit: "thousand",
  },
  parameters: {},
}

export const Default = (args) => <MetricCard {...args} />
