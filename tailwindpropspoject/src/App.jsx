import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Anime from './components/Anime'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Anime username="Boys Anime" btnText="Click me"/>
    </>
  )
}

export default App
