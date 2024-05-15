import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InvoiceTable from './components/InvoiceTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>VS Invoices</h1>
      <InvoiceTable />
    </>
  )
}

export default App
