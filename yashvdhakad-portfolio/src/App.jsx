import { useState } from 'react'
import './App.css'
import { Aside } from "./components/Aside";
import { Main } from "./components/Main";

function App() {
  return (
    <div className="App text-[#dfbd63] pr-20">
      <Aside />
      <Main />
      <h1>Hey!</h1>
    </div>
  )
}

export default App