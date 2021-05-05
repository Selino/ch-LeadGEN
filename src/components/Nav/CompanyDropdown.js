import React from "react"
import { Navbar, NavDropdown, Dropdown } from "react-bootstrap"
import { ReactComponent as SmArrowDown } from "../../graphics/icoCarretDown.svg"

export default function CompanyDropdown(props) {
  return (
    <NavDropdown
      title={
        <div className='text-white flex flex-nowrap my-0 border-collapse'>
          <div className='flex-nowrap mr-2 my-0'>
            <div className='text-base text-right flex-nowrap leading-none'>
              John Doe
            </div>
            <div className='text-xs text-right flex-nowrap leading-normal opacity-70 uppercase'>
              Company A
            </div>
          </div>
          <SmArrowDown
            className='svg-light my-auto'
            style={{ width: "10px" }}
          />
        </div>
      }
      id='nav-company-dropdown'
    >
      <Dropdown.Header>Switch Company</Dropdown.Header>
      <NavDropdown.Item eventKey='4.1'>Company A</NavDropdown.Item>
      <NavDropdown.Item eventKey='4.2'>Company B</NavDropdown.Item>
      <NavDropdown.Item eventKey='4.3'>Company C</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item eventKey='4.4'>Admin</NavDropdown.Item>
    </NavDropdown>
  )
}
