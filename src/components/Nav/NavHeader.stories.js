import React from "react"
import NavHeader from "./NavHeader"

export default {
  title: "Components/Navigation/NavHeader",
  component: NavHeader,
  argTypes: {},
  args: {},
  parameters: {},
}

export const Default = (args) => {
  return <NavHeader {...args} />
}
