import React from "react"
import PageTitle from "./PageTitle"

export default {
  title: "Components/Navigation/PageTitle",
  component: PageTitle,
  argTypes: {
    title: {
      description:
        "A string stripped of any special characters and displayed with styling as text.",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: { summary: "Page Title" },
      },
      control: { type: "text" },
    },
  },
  args: {
    title: "Page Title",
  },
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/xGF6TXDWOoigzGthqp9i70/LG-UIKit-v3?node-id=412%3A55",
    },
  },
}

export const Default = (args) => {
  return (
    <div>
      <PageTitle {...args} />
    </div>
  )
}
