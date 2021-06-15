import React from "react"
import { ReactSVG } from "react-svg"
import { Dropdown } from "react-bootstrap"

export default function StaredDates() {
  return (
    <>
      <Dropdown className='align-middle'>
        <Dropdown.Toggle className='p-0 pl-3' variant='' id='dropdown-basic'>
          <ReactSVG src='/graphics/utiCalendarStar.svg' />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Header>Quick Dates</Dropdown.Header>
          <Dropdown.Item href='#/action-1'>30 Days</Dropdown.Item>
          <Dropdown.Item href='#/action-2'>60 Days</Dropdown.Item>
          <Dropdown.Item href='#/action-3'>90 Days</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href='#/action-4'>Custom</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}
