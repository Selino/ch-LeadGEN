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
      description: "The key used to set the currency symbol displayed.",
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
    unit: "thousand",
  },
  parameters: {},
}

export const Default = (args) => {
  return <DisplayUnit {...args} />
}
