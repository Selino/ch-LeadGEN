import React from "react"
import { Navbar, NavDropdown, Dropdown } from "react-bootstrap"
import { ReactComponent as Logo } from "../../graphics/logoHexagons.svg"
import { ReactComponent as LogoChText } from "../../graphics/logoChText.svg"
import { ReactComponent as LogoAppName } from "../../graphics/logoLeadgen.svg"
import { ReactComponent as NavLocation } from "../../graphics/icoLocation.svg"
import { ReactComponent as NavHamburger } from "../../graphics/icoHamburger.svg"
import { ReactComponent as VerticalRule } from "../../graphics/verticalRule.svg"
import CompanyDropdown from "./CompanyDropdown"
import FacilityDropdown from "./FacilityDropdown"

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
          <Dropdown.Header>Switch Company</Dropdown.Header>
          <NavDropdown.Item eventKey='4.1'>Company A</NavDropdown.Item>
          <NavDropdown.Item eventKey='4.2'>Company B</NavDropdown.Item>
          <NavDropdown.Item eventKey='4.3'>Company C</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey='4.4'>Admin</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown
          alignRight
          title={<NavLocation className='svg-light' />}
          id='nav-facility-dropdown'
        >
          <Dropdown.Header>Include Facilities</Dropdown.Header>
          <FacilityDropdown />
        </NavDropdown>

        <NavDropdown
          alignRight
          title={<NavHamburger className='svg-light' />}
          id='nav-user-dropdown'
          class='test'
        >
          <Dropdown.Header>Change Views</Dropdown.Header>
          <NavDropdown.Item eventKey='4.1'>Campaign Overview</NavDropdown.Item>
          <NavDropdown.Item eventKey='4.2'>Executive Summary</NavDropdown.Item>
          <NavDropdown.Divider />
          <Dropdown.Header>Switch App</Dropdown.Header>
          <NavDropdown.Item eventKey='4.4'>LeadROI</NavDropdown.Item>
          <NavDropdown.Item eventKey='4.4'>LeadNav</NavDropdown.Item>
          <NavDropdown.Divider />

          <NavDropdown.Item eventKey='4.4'>Log Out</NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  )
}
