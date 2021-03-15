import "./App.css"
import NavHeader from "./components/Nav/NavHeader"
import ExecutiveSummary from "./components/ExecutiveSummary/ExecutiveSummary"
import MetricCard from "./components/MetricCard/MetricCard"

function App() {
  return (
    <div className='App'>
      <NavHeader />
      <main className='p-5'>
        <div className='grid gap-7 mb-4 grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4'>
          <MetricCard
            currency='USD'
            value='19.8'
            baseValue='19.5'
            label='Spend to Date'
            unit='thousand'
          />
          <MetricCard value='200' baseValue='100' label='Conversions' />{" "}
          <MetricCard currency='USD' value='205' baseValue='205' label='CPC' />{" "}
          <MetricCard value='92' label='Live' />
        </div>
        <ExecutiveSummary />
      </main>
    </div>
  )
}

export default App

// <MetricCard number='82' label='Conversions' unit='' />
// <MetricCard currency='USD' number='205' label='CPC' />
// <MetricCard number='92' label='Live' />
