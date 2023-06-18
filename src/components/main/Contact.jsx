import React from 'react'
import Logos from './contact/Logos'

const Contact = () => {
  return (
    <div className='w-full h-screen space-y-10 text-center flex flex-col justify-center items-center'>
      <h1 className='text-8xl text-zinc-800 font-["TokyoDreams"] bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-purple-800'>So, What are you waiting for?</h1>
      <p className='text-2xl text-zinc-600 font-["Rollerscript"]'>Connect with me on social media to get live updates about projects:</p>
      <Logos />
    </div>
  )
}

export default Contact