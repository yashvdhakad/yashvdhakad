import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
    return (
        <nav className="w-full flex flex-col items-start text-center space-y-4 text-base font-bold p-6 rounded-lg shadow-xl shadow-purple-900 transition">
            {
                props.navArr.map((i) => {
                    return <Link key={i.name} className='w-full py-3 rounded-md hover:shadow-xl hover:shadow-purple-900 transition cursor-pointer' to={i.url}>{i.name}</Link>
                })
            }
        </nav>
    )
}

export default Nav