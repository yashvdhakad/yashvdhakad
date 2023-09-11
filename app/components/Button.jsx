import React from 'react'

const Button = ({cta, clickHandler}) => {
  return (
    <button onClick={clickHandler} className='py-4 px-6 bg-zinc-900 text-zinc-200 text-base font-semibold rounded-lg cursor-pointer transition-all hover:scale-95 focus:bg-zinc-950'>{cta}</button>
  )
}

export default Button