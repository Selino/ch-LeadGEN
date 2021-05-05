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
        defaultValue: { summary: "null", detail: "null | top" },
      },
      control: {
        type: "select",
        options: [null, "top"],
      },
    },
  },
  args: { Position: "" },
  parameters: {
    componentSubtitle: "",
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/xGF6TXDWOoigzGthqp9i70/LG-UIKit-v3?node-id=403%3A20",
    },
  },
}

export const Default = (args) => {
  return <NavHeader {...args} />
}
