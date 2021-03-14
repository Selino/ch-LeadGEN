import "./App.css"
import NavHeader from "./components/Nav/NavHeader"
import ExecutiveSummary from "./components/ExecutiveSummary/ExecutiveSummary"
import MetricCard from "./components/MetricCard/MetricCard"

function App() {
  return (
    <div className='App'>
      <NavHeader />
      <main className='p-5'>
        <div className='grid gap-7 mb-5 grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4'>
          <MetricCard number='$5.2' label='Spend to Date' unit='k' />
          <MetricCard number='82' label='Conversions' unit='' />
          <MetricCard number='$205' label='CPC' />
          <MetricCard number='92' label='Live' />
        </div>
        <ExecutiveSummary />
      </main>
    </div>
  )
}

export default App
