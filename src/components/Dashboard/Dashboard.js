import React from "react"
import "App.css"
import NavHeader from "components/Nav/NavHeader"
import PageTitle from "components/Nav/PageTitle"
import KMOT from "components/Dashboard/KMOT"

export default function Dashboard() {
  return (
    <div className='App'>
      <NavHeader Position='top' />
      <div className='mt-20 pl-4'>
        <PageTitle title='Dashboard' />
      </div>
      <main className='p-4'>
        <KMOT />
      </main>
    </div>
  )
}
