import { useState } from 'react'
import './App.css';
import Navbar from './Component/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
    </>
  )
}

export default App
