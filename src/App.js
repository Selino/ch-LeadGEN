import "./App.css"
import NavHeader from "./components/Nav/NavHeader"
import ExecutiveSummary from "./components/ExecutiveSummary/ExecutiveSummary"

function App() {
  return (
    <div className='App'>
      <NavHeader />
      <main className='body p-4'>
        <ExecutiveSummary />
      </main>
    </div>
  )
}

export default App
