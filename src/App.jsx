import './App.css'
import React from 'react'
import Main from './components/Main'
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState("sun-fill")

  const clickHandler = () => {
    return (
      mode === 'sun-fill' ? setMode('moon-fill') : setMode('sun-fill')
    )
  }

  return (
    <div className={`relative bg-[#c8c8c8] ${mode === 'sun-fill' ? "bg-[#c8c8c8]" : "bg-[#3d3d3d]"}`}>
        <Main mode={mode} clickHandler={clickHandler} />
    </div>
  )
}

export default App