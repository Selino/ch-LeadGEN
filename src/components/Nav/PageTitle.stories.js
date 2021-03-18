import React from "react"
import PageTitle from "./PageTitle"

export default {
  title: "PageTitle",
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
  parameters: {},
}

export const Default = (args) => {
  return <PageTitle {...args} />
}
