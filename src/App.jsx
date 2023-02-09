import { useState } from 'react'
import './App.css';
import Navbar from './Component/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
      <Navbar/>
    </main>
      
    </>
  )
}

export default App
