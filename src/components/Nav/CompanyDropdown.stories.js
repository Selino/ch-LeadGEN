import React from "react"
import CompanyDropdown from "./CompanyDropdown"

export default {
  title: "Components/Navigation/Company Dropdown",
  component: CompanyDropdown,
  argTypes: {},
  args: { fixed: "fixed" },
  parameters: {},
}

export const Default = (args) => {
  return (
    <div className='bg-brand p-3'>
      <CompanyDropdown {...args} />
    </div>
  )
}
