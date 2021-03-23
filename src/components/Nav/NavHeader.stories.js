import React from "react"
import NavHeader from "./NavHeader"

export default {
  title: "NavHeader",
  component: NavHeader,
  argTypes: {
    title: {
      description:
        "A string stripped of any special characters and displayed with styling as text.",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: { summary: "Nav Header" },
      },
      control: { type: "text" },
    },
  },
  args: {
    title: "Nav Header",
  },
  parameters: {},
}

export const Default = (args) => {
  return <NavHeader {...args} />
}
