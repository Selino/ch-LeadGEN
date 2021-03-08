import "./App.css"
import NavHeader from "./components/Nav/NavHeader"
// import ExecutiveSummary from "./components/ExecutiveSummary/ExecutiveSummary"
import TableTest from "./components/TableTest/TableTest"

function App() {
  return (
    <div className='App'>
      <NavHeader />
      <main className='p-4'>
        <TableTest />
      </main>
    </div>
  )
}

export default App
