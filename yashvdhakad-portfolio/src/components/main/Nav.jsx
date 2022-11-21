import React from 'react'

export const Nav = (props) => {
    return (
        <div className='fixed bottom-6 w-fit rounded-lg p-2 flex space-x-2 bg-[#333239]'>
            <div className='p-2 rounded-lg bg-zinc-700 flex space-x-3'>
                {
                    props.navArr.map((tab) => {
                        return <div className="border border-[#333239] bg-[#333239] text-white rounded-lg p-4 transition-all hover:scale-110 cursor-pointer hover:bg-[#1c1b22] hover:border-[#1c1b22]">{tab.name}</div>
                    })
                }
                {/* <div className="border border-[#333239] bg-[#333239] text-white rounded-lg p-4 transition-all hover:scale-110 cursor-pointer hover:bg-[#1c1b22] hover:border-[#1c1b22]">Home</div>
        <div className="border border-white/10 text-white/30 rounded-lg p-4 transition-all hover:scale-110 cursor-pointer hover:bg-[#1c1b22] hover:border-[#1c1b22] hover:text-white">About</div>
        <div className="border border-white/10 text-white/30 rounded-lg p-4 transition-all hover:scale-110 cursor-pointer hover:bg-[#1c1b22] hover:border-[#1c1b22] hover:text-white">Design</div>
        <div className="border border-white/10 text-white/30 rounded-lg p-4 transition-all hover:scale-110 cursor-pointer hover:bg-[#1c1b22] hover:border-[#1c1b22] hover:text-white">Development</div>
        <div className="border border-white/10 text-white/30 rounded-lg p-4 transition-all hover:scale-110 cursor-pointer hover:bg-[#1c1b22] hover:border-[#1c1b22] hover:text-white">Copywriting</div>
        <div className="border border-white/10 text-white/30 rounded-lg p-4 transition-all hover:scale-110 cursor-pointer hover:bg-[#1c1b22] hover:border-[#1c1b22] hover:text-white">Blogs</div>
        <div className="border border-white/10 text-white/30 rounded-lg p-4 transition-all hover:scale-110 cursor-pointer hover:bg-[#1c1b22] hover:border-[#1c1b22] hover:text-white">Contact</div> */}
            </div>
        </div>
    )
}
