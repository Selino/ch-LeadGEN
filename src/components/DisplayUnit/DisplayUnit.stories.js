import React from "react"
import DisplayUnit from "./DisplayUnit"

export default {
  title: "Components/Metrics/Display Unit",
  component: DisplayUnit,
  subcomponents: {},
  argTypes: {
    unit: {
      type: { name: "string", required: false },
      description: "The key used to set the unit symbol displayed.",
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
  parameters: {
    componentSubtitle:
      "Show a single unit based on the metric numerical system.",
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/xGF6TXDWOoigzGthqp9i70/LG-UIKit-v3?node-id=398%3A5",
    },
  },
}

export const Default = (args) => {
  return <DisplayUnit {...args} />
}
