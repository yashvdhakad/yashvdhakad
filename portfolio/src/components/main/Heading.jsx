import React from 'react'

const Heading = (props) => {
    return (
        <>
            <div className="w-1/2 my-10 flex flex-col space-y-2 text-zinc-800">
                <h1 className='text-5xl font-bold'>{props.heading.h1}</h1>
                <p className='text-lg font-semibold'>{props.heading.p}</p>
            </div>
        </>
    )
}

export default Heading      