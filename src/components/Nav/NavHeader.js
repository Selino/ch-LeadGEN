import React from "react"
import { ReactSVG } from "react-svg"
import { Navbar, NavDropdown, Dropdown } from "react-bootstrap"
// import { ReactComponent as Logo } from "/graphics/logoHexagons.svg"
// import { ReactComponent as LogoChText } from "/graphics/logoChText.svg"
// import { ReactComponent as LogoAppName } from "/graphics/logoLeadgen.svg"
// import { ReactComponent as NavLocation } from "/graphics/icoLocation.svg"
// import { ReactComponent as NavHamburger } from "/graphics/icoHamburger.svg"
// import { ReactComponent as VerticalRule } from "/graphics/verticalRule.svg"
import CompanyDropdown from "./CompanyDropdown"
import FacilityDropdown from "./FacilityDropdown"

/**
NavHeader is a responsive and clean navigation bar guiding the user by visual cues. It contains navigation via the customizable drop-down menus. The NavHeader can be designed to include color schemes, company name, and user name in addition to the dropdown menus.
**/

export default function NavHeader(props) {
  return (
    <Navbar
      fixed={props.Position}
      className='p-2 mx-auto bg-brand text-white flex justify-between'
    >
      <Navbar.Brand>
        <div>
          <ReactSVG
            src='/graphics/logoHexagons.svg'
            className='inline-block mr-2 fill-current'
          />
          <ReactSVG
            src='/graphics/logoChText.svg'
            className='hidden tablet:inline-block'
          />
          <ReactSVG src='/graphics/logoLeadgen' className='inline-block' />
        </div>
      </Navbar.Brand>

      <Navbar.Collapse className='justify-content-end'>
        <CompanyDropdown className='svg-light' />

        <NavDropdown
          alignRight
          title={
            <ReactSVG src='/graphics/icoLocation.svg' className='svg-light' />
          }
          id='nav-facility-dropdown'
        >
          <Dropdown.Header>Include Facilities</Dropdown.Header>
          <FacilityDropdown />
        </NavDropdown>

        <NavDropdown
          alignRight
          title={
            <ReactSVG src='/graphics/icoHamburger.svg' className='svg-light' />
          }
          id='nav-user-dropdown'
          className='test'
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
