import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  
  let counter = 5
  return (
    <>
     <h1> Hello React</h1>
     <h2> Counter Value: {counter}</h2>

     <button> Add value</button>
     <br/>

     <button>Remove value</button>
    </>
  )
}

export default App
