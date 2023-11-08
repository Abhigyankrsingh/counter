import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  const [counter, setCounter]= useState(15)
  //let counter = 15;
  let addValue = () => {
    console.log("clicked", counter);
    counter = counter +1;
    setCounter(counter)
  }
  return (
    <>
     <h1> Hello React</h1>
     <h2> Counter Value: {counter}</h2>

     <button
     onClick={addValue}
     > Add value {counter}</button>
     <br/>

     <button>Remove value {counter}</button>
     <p> footer:{counter}</p>
    </>
  )
}

export default App
