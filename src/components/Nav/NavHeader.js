import React from "react"
import Logo from "../../graphics/logoHexagons.svg"
import LogoChText from "../../graphics/logoChText.svg"

export default function NavHeader(props) {
  return (
    <nav className='p-3 mx-auto bg-brand text-white'>
      <img
        src={Logo}
        alt='Clariture Health Logo'
        className='inline-block mr-2'
      />
      <img
        src={LogoChText}
        alt='Clariture Health'
        className='inline-block mr-2'
      />
    </nav>
  )
}
