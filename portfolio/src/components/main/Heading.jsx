import React from 'react'

const Heading = (props) => {
    return (
        <>
            <div className="flex flex-col space-y-2 text-center">
                <h1 className='text-3xl font-semibold'>{props.heading.h1}</h1>
                <p className='text-lg font-semibold text-white/30'>{props.heading.p}</p>
            </div>
        </>
    )
}

export default Heading      