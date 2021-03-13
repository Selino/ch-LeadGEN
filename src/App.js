import "./App.css"
import NavHeader from "./components/Nav/NavHeader"
import ExecutiveSummary from "./components/ExecutiveSummary/ExecutiveSummary"
import MetricCard from "./components/MetricCard/MetricCard"

function App() {
  return (
    <div className='App'>
      <NavHeader />
      <main className='p-4'>
        <div className='grid gap-7 grid-cols-4 mb-4'>
          <MetricCard number='$5.2' label='Total Spend' unit='k' />
          <MetricCard number='82' label='' unit='' />
          <MetricCard number='$205' label='Total CPC' />
          <MetricCard number='92' label='Total Live' />
        </div>
        <ExecutiveSummary />
      </main>
    </div>
  )
}

export default App
