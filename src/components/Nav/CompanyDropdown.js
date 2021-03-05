import React from "react"
import { ReactComponent as SmArrowDown } from "../../graphics/icoSmArrowDown.svg"

export default function CompanyDropdown(props) {
  return (
    <div className='flex flex-nowrap my-0 mr-4 border-collapse'>
      <div className='flex-nowrap mr-2 my-0'>
        <div className='text-base text-right flex-nowrap leading-none'>
          User Name
        </div>
        <div className='text-xs text-right flex-nowrap leading-normal opacity-70 uppercase'>
          Company Name
        </div>
      </div>
      <SmArrowDown className='svg-light my-auto' />
    </div>
  )
}
