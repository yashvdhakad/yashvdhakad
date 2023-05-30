import React from 'react'
import DP from '../../assets/dp.png'

const Heading = (props) => {
    return (
        <>
            <div className="w-1/2 my-10 p-4 flex flex-row justify-between items-center space-x-4 text-zinc-300 bg-white/5 backdrop-blur-sm rounded cursor-default sticky top-4">
                <img className='rounded' width="120" src={DP} alt="" />
                <div className="flex flex-col space-y-2">
                    <h1 className='text-4xl font-bold'>{props.heading.h1}</h1>
                    <p className='w-11/12 text-base font-semibold text-zinc-500 leading-tight'>{props.heading.p}</p>
                </div>
            </div>
        </>
    )
}

export default Heading      