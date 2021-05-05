import React from "react"
import NavHeader from "./NavHeader"

export default {
  title: "Components/Navigation/Nav Header",
  component: NavHeader,
  argTypes: {
    Position: {
      description: "Set as fixed to the top of the screen.",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: { summary: "null", detail: "Accepts string." },
      },
      control: {
        type: "select",
        options: [null, "top"],
      },
    },
  },
  args: { Position: "null" },
  parameters: {},
}

export const Default = (args) => {
  return <NavHeader {...args} />
}
