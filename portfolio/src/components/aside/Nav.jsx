import React from 'react'

const Nav = (props) => {
    return (
        <nav className="w-full flex flex-col items-start text-center space-y-4 font-medium p-6 border border-sky-600 rounded-lg">
            {
                props.navArr.map((i) => {
                    return <a className='w-full p-2 border border-sky-600 rounded-md hover:bg-sky-800' href={i.url}>{i.name}</a>
                })
            }
        </nav>
    )
}

export default Nav