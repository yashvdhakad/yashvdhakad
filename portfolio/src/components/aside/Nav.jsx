import React from 'react'

const Nav = (props) => {
    return (
        <nav className="w-full flex flex-col items-start text-center space-y-4 font-medium p-6 rounded-lg hover:shadow-xl hover:shadow-purple-800 transition">
            {
                props.navArr.map((i) => {
                    return <a className='w-full py-3 border border-transparent hover:border-purple-300 rounded-md hover:shadow-xl hover:shadow-purple-800 transition' href={i.url}>{i.name}</a>
                })
            }
        </nav>
    )
}

export default Nav