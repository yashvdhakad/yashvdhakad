import React from 'react'

const Heading = (props) => {
    return (
        <>
            <div className="flex flex-col space-y-2">
                <h1 className='text-2xl font-semibold'>{props.heading}</h1>
            </div>
        </>
    )
}

export default Heading      