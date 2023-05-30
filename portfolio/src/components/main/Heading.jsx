import React from 'react'
import DP from '../../assets/dp.png'

const Heading = (props) => {
    return (
        <>
            <div className="w-1/2 my-10 py-2 flex flex-row justify-between items-center text-zinc-800 bg-white rounded cursor-default">
                <img className='rounded' width="100" height="100" src={DP} alt="" />
                <div className="ml-4 flex flex-col space-y-2">
                    <h1 className='text-5xl font-bold'>{props.heading.h1}</h1>
                    <p className='text-base font-bold text-zinc-600'>{props.heading.p}</p>
                </div>
            </div>
        </>
    )
}

export default Heading      