import React from "react"
import { ReactComponent as Logo } from "../../graphics/logoHexagons.svg"
import { ReactComponent as LogoChText } from "../../graphics/logoChText.svg"
import { ReactComponent as LogoAppName } from "../../graphics/logoLeadnav.svg"
import { ReactComponent as NavLocation } from "../../graphics/icoLocation.svg"
import { ReactComponent as NavHamburger } from "../../graphics/icoHamburger.svg"
import { ReactComponent as NavChevronDown } from "../../graphics/icoChevronD.svg"
import { ReactComponent as VerticalRule } from "../../graphics/verticalRule.svg"

export default function NavHeader(props) {
  return (
    <nav className='p-3 mx-auto bg-brand text-white flex justify-between'>
      <div>
        <Logo className='inline-block mr-2 fill-current' />
        <LogoChText className='inline-block' />
        <VerticalRule className='inline-block opacity-50 mx-2' />
        <LogoAppName className='inline-block' />
      </div>
      <div className='nav-control flex flex-row'>
        <NavLocation className='svg-light mr-4' />
        <NavHamburger className='svg-light mr-4' />
        <NavChevronDown className='svg-light' />
      </div>
    </nav>
  )
}
