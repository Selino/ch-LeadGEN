import React from "react"
import CompanyDropdown from "./CompanyDropdown"

export default {
  title: "Components/Navigation/Company Dropdown",
  component: CompanyDropdown,
  argTypes: {},
  args: {},
  parameters: {
    componentSubtitle: "",
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/xGF6TXDWOoigzGthqp9i70/LG-UIKit-v3?node-id=334%3A248",
    },
  },
}

export const Default = (args) => {
  return (
    <div className='bg-brand p-3'>
      <CompanyDropdown {...args} />
    </div>
  )
}
