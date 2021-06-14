import React, { useState, forwardRef } from "react"
import "App.css"
import NavHeader from "components/Nav/NavHeader"
import PageTitle from "components/Nav/PageTitle"
import KeyMetricsGraph from "components/Dashboard/KeyMetricsOverTime"
import StaredDates from "components/Dashboard/StaredDates"
import { subDays } from "date-fns"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { ReactSVG } from "react-svg"

export default function Dashboard() {
  // data fixture
  const maxClicks = 320
  const minClicks = 60
  const maxImps = 5000
  const minImps = 4000

  const data = []
  for (let num = 30; num >= 0; num--) {
    data.push({
      date: subDays(new Date(), num).toISOString().substr(0, 10),
      clicks: Math.floor(
        Math.random() * (maxClicks - minClicks + 1) + minClicks
      ),
      impressions: Math.floor(
        Math.random() * (maxImps - minImps + 1) + minImps
      ),
    })
  }

  // date picker
  const today = new Date()
  const prevDay = new Date()
  const [dateRange, setDateRange] = useState([
    prevDay.setDate(today.getDate() - 30),
    new Date(),
  ])

  const [startDate, endDate] = dateRange
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className='' onClick={onClick} ref={ref}>
      {value}
      <ReactSVG
        src='/graphics/utiCarretDown.svg'
        className='svg-primary inline-block align-middle ml-1'
      />
    </button>
  ))

  return (
    <div className='App'>
      <NavHeader Position='top' />
      <div className='mt-20 px-4 flex justify-between flex-nowrap'>
        <PageTitle title='Dashboard' />

        <div className='flex flex-nowrap'>
          <DatePicker
            className='cursor-pointer'
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update)
            }}
            customInput={<ExampleCustomInput />}
          />
          <StaredDates />
        </div>
      </div>
      <main className='p-4'>
        <KeyMetricsGraph data={data} />
      </main>
    </div>
  )
}
