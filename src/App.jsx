import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Product } from './components/product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <div className="App">
      <Product />
    </div>
    </div>
  )
}

export default App
