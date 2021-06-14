import React from "react"
import "App.css"
import NavHeader from "components/Nav/NavHeader"
import PageTitle from "components/Nav/PageTitle"
import KeyMetricsGraph from "components/Dashboard/KeyMetricsGraph"
import { subDays } from "date-fns"

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

  return (
    <div className='App'>
      <NavHeader Position='top' />
      <div className='mt-20 pl-4'>
        <PageTitle title='Dashboard' />
      </div>
      <main className='p-4'>
        <KeyMetricsGraph data={data} />
      </main>
    </div>
  )
}
