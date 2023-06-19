import './App.css'
import React from 'react'
import Main from './components/Main'
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState("moon-fill")

  const clickHandler = () => {
    return (
      mode === 'sun-fill' ? setMode('moon-fill') : setMode('sun-fill')
    )
  }

  return (
    <div className={`relative ${mode === 'sun-fill' ? "bg-[#c8c8c8]" : "bg-zinc-900"}`}>
        <Main mode={mode} clickHandler={clickHandler} />
    </div>
  )
}

export default App