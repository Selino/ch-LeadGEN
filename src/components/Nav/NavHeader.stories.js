import React from "react"
import NavHeader from "./NavHeader"

export default {
  title: "Components/Navigation/NavHeader",
  component: NavHeader,
  argTypes: {},
  args: { fixed: "fixed" },
  parameters: {},
}

export const Default = (args) => {
  return (
    <div>
      <NavHeader {...args} />
    </div>
  )
}
