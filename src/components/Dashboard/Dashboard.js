import React, { useState, forwardRef } from "react"
import "App.css"
import NavHeader from "components/Nav/NavHeader"
import PageTitle from "components/Nav/PageTitle"
import KeyMetricsGraph from "components/Dashboard/KeyMetricsOverTime"
import ConversionsByType from "components/Dashboard/ConversionsByType"
import StaredDates from "components/StaredDates/StaredDates"
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
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
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
      <NavHeader className='relative' Position='top' />
      <div className='px-4 py-2 sm:flex justify-between flex-nowrap top-16 bg-chromebg w-full fixed z-10'>
        <PageTitle title='Dashboard' />
        <div className='flex flex-nowrap pt-2'>
          <DatePicker
            className='cursor-pointer'
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update)
            }}
            customInput={<CustomInput />}
          />
          <StaredDates />
        </div>
      </div>
      <main className='p-4 flex flex-col gap-8 mt-28'>
        <KeyMetricsGraph data={data} />
        <ConversionsByType data={data} />
      </main>
    </div>
  )
}
