import React from "react"
import { ReactComponent as Logo } from "../../graphics/logoHexagons.svg"
import { ReactComponent as LogoChText } from "../../graphics/logoChText.svg"
import { ReactComponent as LogoAppName } from "../../graphics/logoLeadnav.svg"
import { ReactComponent as NavLocation } from "../../graphics/icoLocation.svg"
import { ReactComponent as NavHamburger } from "../../graphics/icoHamburger.svg"
import { ReactComponent as NavChevronDown } from "../../graphics/icoChevronD.svg"
import { ReactComponent as VerticalRule } from "../../graphics/verticalRule.svg"
import CompanyDropdown from "./CompanyDropdown"

export default function NavHeader(props) {
  return (
    <nav className='p-3 mx-auto bg-brand text-white flex justify-between'>
      <div className='my-auto'>
        <Logo className='inline-block mr-2 fill-current' />
        <LogoChText className='inline-block' />
        <VerticalRule className='inline-block opacity-50 mx-2' />
        <LogoAppName className='inline-block' />
      </div>
      <div className='nav-control flex flex-row'>
        <CompanyDropdown className='mr-4' />
        <NavLocation className='svg-light mr-4 my-auto' />
        <NavHamburger className='svg-light mr-4 my-auto' />
        <NavChevronDown className='svg-light my-auto' />
      </div>
    </nav>
  )
}
