import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-9xl'>Hello</h1>
      <button className="btn">Button</button>
    </>
  )
}

export default App
