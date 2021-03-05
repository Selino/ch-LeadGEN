import "./App.css"
import NavHeader from "./components/Nav/NavHeader"
import ExecutiveSummary from "./components/ExecutiveSummary/ExecutiveSummary"
import colors from "./tokens/colors"

function App() {
  return (
    <div className='App'>
      <NavHeader />
      <main className='p-4'>
        <ExecutiveSummary />
      </main>
    </div>
  )
}

export default App
