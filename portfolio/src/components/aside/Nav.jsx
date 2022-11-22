import React from 'react'

export const Nav = () => {
    return (
        <nav className="w-full flex flex-col items-start text-center space-y-4 font-medium bg-white/10 p-6 rounded-lg">
            {
                navArray1.map((i) => {
                    return <a className='w-full p-2 border border-[#dfbd63]/30 rounded-md hover:bg-[#b41e40] hover:text-[#dfbd63] zssss hover:font-semibold' href={i.url}>{i.name}</a>
                })
            }
        </nav>
    )
}
