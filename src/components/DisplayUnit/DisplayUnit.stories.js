import React from "react"
import DisplayUnit from "./DisplayUnit"

export default {
  title: "Display Unit",
  component: DisplayUnit,
  description: "poop",
  subcomponents: {},
  argTypes: {
    unit: {
      type: { name: "string", required: false },
      defaultValue: "USD",
      description: "A string to sent to .",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "USD" },
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
    unit: "thousand",
  },
  parameters: {},
}

export const Default = (args) => {
  return <DisplayUnit {...args} />
}
