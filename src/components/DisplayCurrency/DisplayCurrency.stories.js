import React from "react"
import DisplayCurrency from "./DisplayCurrency"

export default {
  title: "Components/Metrics/Display Currency",
  component: DisplayCurrency,
  description: "",
  subcomponents: {},
  argTypes: {
    code: {
      type: { name: "string", required: false },
      description: "The key used to set the currency symbol displayed.",
      table: {
        type: { summary: "string" },
        defaultValue: {
          summary: "USD",
          detail: "Accepts: 'null' | 'USD' | 'EUR' | 'GBP' | 'JPY' | 'CHF'",
        },
      },
      control: {
        type: "select",
        options: [null, "USD", "EUR", "GBP", "JPY", "CHF"],
      },
    },
  },
  args: {
    code: "USD",
  },
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/xGF6TXDWOoigzGthqp9i70/LG-UIKit-v3?node-id=495%3A3464",
    },
  },
}

export const Default = (args) => {
  return <DisplayCurrency {...args} />
}
