import React, { useState, forwardRef } from "react"
import { Dropdown } from "react-bootstrap"
import { ReactSVG } from "react-svg"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export default function KMOTControls() {
  const today = new Date()
  const prevDay = new Date()
  const [dateRange, setDateRange] = useState([
    prevDay.setDate(today.getDate() - 30),
    new Date(),
  ])
  const [startDate, endDate] = dateRange

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className='example-custom-input p-2' onClick={onClick} ref={ref}>
      {value}
      <ReactSVG
        src='graphics/utiCarretDown.svg'
        className='svg-primary inline-block align-middle ml-1'
      />
    </button>
  ))

  return (
    <div className='flex'>
      <Dropdown>
        <Dropdown.Toggle variant='' id='dropdown-basic'>
          All Channels
          <ReactSVG
            src='graphics/utiCarretDown.svg'
            className='svg-primary inline-block align-middle'
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
            className='svg-primary inline-block align-middle'
          />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href='#/action-1'>Clicks & Impressions</Dropdown.Item>
          <Dropdown.Item href='#/action-2'>CPC & Spend</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <DatePicker
        className='p-2 w-auto ml-4 cursor-pointer'
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update)
        }}
        customInput={<ExampleCustomInput />}
      />
    </div>
  )
}
