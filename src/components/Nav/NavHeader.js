import React from "react"
import { Navbar, NavDropdown, Button } from "react-bootstrap"
import { ReactComponent as Logo } from "../../graphics/logoHexagons.svg"
import { ReactComponent as LogoChText } from "../../graphics/logoChText.svg"
import { ReactComponent as LogoAppName } from "../../graphics/logoLeadnav.svg"
import { ReactComponent as NavLocation } from "../../graphics/icoLocation.svg"
import { ReactComponent as NavHamburger } from "../../graphics/icoHamburger.svg"
import { ReactComponent as VerticalRule } from "../../graphics/verticalRule.svg"
import CompanyDropdown from "./CompanyDropdown"

export default function NavHeader(props) {
  return (
    <Navbar
      fixed='top'
      className='p-2 mx-auto bg-brand text-white flex justify-between'
    >
      <Navbar.Brand>
        <div>
          <Logo className='inline-block mr-2 fill-current' />
          <LogoChText className='hidden tablet:inline' />
          <VerticalRule className='hidden tablet:inline opacity-50 mx-2' />
          <LogoAppName className='inline-block' />
        </div>
      </Navbar.Brand>

      <Navbar.Collapse className='justify-content-end'>
        <NavDropdown
          title={<CompanyDropdown className='svg-light' />}
          id='nav-company-dropdown'
        >
          <NavDropdown.Item eventKey='4.1'>Action</NavDropdown.Item>
          <NavDropdown.Item eventKey='4.2'>Another action</NavDropdown.Item>
          <NavDropdown.Item eventKey='4.3'>
            Something else here
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey='4.4'>Separated link</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown
          alignRight
          title={<NavLocation className='svg-light' />}
          id='nav-facility-dropdown'
        >
          <NavDropdown.Item eventKey='4.1'>
            Mountain View Regional Medical Center
          </NavDropdown.Item>
          <NavDropdown.Item eventKey='4.2'>Another action</NavDropdown.Item>
          <NavDropdown.Item eventKey='4.3'>
            Something else here
          </NavDropdown.Item>
        </NavDropdown>

        <NavDropdown
          alignRight
          title={<NavHamburger className='svg-light' />}
          id='nav-user-dropdown'
        >
          <NavDropdown.Item eventKey='4.1'>Campaign Overview</NavDropdown.Item>
          <NavDropdown.Item eventKey='4.2'>Executive Summary</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey='4.4'>Log Out</NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  )
}
