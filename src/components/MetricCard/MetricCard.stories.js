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
      defaultValue: "USD",
      description: "A string sent to the DisplayCurrency component.",
      table: {
        type: { summary: "string", detail: "Lorem ipsum dolar" },
        defaultValue: { summary: "null" },
      },
      control: { type: "select", options: [null, "USD", "EUR", "JPY", "CHF"] },
    },
    value: {
      defaultValue: 999,
      description: "A number or integer value used as the displayed amount.",
      table: {
        type: { summary: "number", detail: "Three digits is best!" },
        defaultValue: { summary: "999" },
      },
      control: "number",
    },
    baseValue: {
      description:
        "A number or integer compared against the [value]. This is sent to the MetricTrendIndicator component to determine the up or down arrow display.",
      table: {
        type: { summary: "number", detail: "Lorem ipsum dolar sit amet." },
        defaultValue: { summary: "null" },
      },
      control: "number",
    },
    label: {
      description: "A string that is displayed under the metric value.",
      table: {
        type: { summary: "string", detail: "Lorem ipsum dolar" },
        defaultValue: { summary: "null" },
      },
      control: "text",
    },
    unit: {
      description: "A string to sent to the DisplayUnit component.",
      table: {
        type: { summary: "string", detail: "Lorem ipsum dolar" },
        defaultValue: { summary: "null" },
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
  parameters: {},
}

const Template = (args) => <MetricCard {...args} />

export const AllOn = Template.bind({})

export const AllOff = Template.bind({})
AllOff.args = {
  currency: null,
  value: 321,
  baseValue: null,
  label: null,
  unit: null,
}
