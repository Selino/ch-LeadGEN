import React from "react"
import { Dropdown } from "react-bootstrap"
import { ReactSVG } from "react-svg"

export default function KMOTControls() {
  return (
    <div className='flex'>
      <Dropdown>
        <Dropdown.Toggle variant='' id='dropdown-basic'>
          All Channels
          <ReactSVG
            src='graphics/utiCarretDown.svg'
            className='svg-primary inline-block align-middle ml-1'
          />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href='#/action-1'>All Channels</Dropdown.Item>
          <Dropdown.Item href='#/action-2'>Facebook</Dropdown.Item>
          <Dropdown.Item href='#/action-3'>Google Ads</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className='ml-4'>
        <Dropdown.Toggle variant='' id='dropdown-basic'>
          Clicks & Impressions
          <ReactSVG
            src='graphics/utiCarretDown.svg'
            className='svg-primary inline-block align-middle ml-1'
          />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href='#/action-1'>Clicks & Impressions</Dropdown.Item>
          <Dropdown.Item href='#/action-2'>CPC & Spend</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
