import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
    return (
        <div className='fixed bottom-10 w-fit rounded-xl p-2 flex space-x-2 bg-[#333239] shadow-xl shadow-zinc-800/40 z-50'>
            <div className='p-2 rounded-lg bg-zinc-700 flex space-x-2'>
                {
                    props.navArr.map((i) => {
                        const handleClick = () => {
                            document.title = i.name;
                            i.name === "</>" ? document.title = "Yash Dhakad" : ""
                        }

                        return <Link key={i.name} className="border border-[#333239] bg-[#333239] text-zinc-100 font-semibold rounded-lg px-4 py-2 transition-all cursor-pointer shadow-sm shadow-[#1c1b22]/80 hover:scale-95 hover:bg-[#1c1b22] hover:border-[#1c1b22] focus:bg-zinc-900" to={i.url} onClick={handleClick}>{i.name}</Link>
                    })
                }
            </div>
        </div>
    )
}

export default Nav