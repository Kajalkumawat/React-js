//react is used to click on one button and update five diffrent pages in react 
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter]= useState(15)
  //let counter=5;

  const addValue=()=>{
   
   // counter=counter+1;
    setCounter(counter+1)
  }

  const removeValue=()=>{
   
    setCounter(counter-1)
  }
  return (
    <>
      <h1>Counter Down Project</h1>
      <h2>Counter Value :5</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br/>
      <button onClick={removeValue}>Remove Value{counter } </button>
      <p>Footer : {counter}</p>
    </>
  )
}

export default App
