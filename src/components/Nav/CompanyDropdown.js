import React from "react"
import { ReactComponent as SmArrowDown } from "../../graphics/icoCarretDown.svg"

export default function CompanyDropdown(props) {
  return (
    <div className='text-white flex flex-nowrap my-0 border-collapse'>
      <div className='flex-nowrap mr-2 my-0'>
        <div className='text-base text-right flex-nowrap leading-none'>
          John Doe
        </div>
        <div className='text-xs text-right flex-nowrap leading-normal opacity-70 uppercase'>
          Company A
        </div>
      </div>
      <SmArrowDown className='svg-light my-auto' style={{ width: "10px" }} />
    </div>
  )
}
