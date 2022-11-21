import React from 'react'
import Projects from './Projects.jsx'

export const Main = () => {
    return (
        <>
            <main className='relative ml-[440px] h-full py-10 flex flex-col justify-between items-center space-y-10'>
                {/* Heading */}
                <div className="flex flex-col space-y-2">
                    <h1 className='text-2xl font-semibold'>Wall of ❤️ by People:</h1>
                </div>

                <Projects />

                {/* Nav */}
                <div className='fixed bottom-6 w-fit rounded-lg p-2 flex space-x-2 bg-[#333239]'>
                    <div className='p-2 rounded-lg bg-zinc-700 flex space-x-3'>
                        <div className="border border-[#333239] bg-[#333239] text-white rounded-lg p-4 transition-all hover:scale-110 cursor-pointer hover:bg-[#1c1b22] hover:border-[#1c1b22]">Home</div>
                        <div className="border border-white/10 text-white/30 rounded-lg p-4 transition-all hover:scale-110 cursor-pointer hover:bg-[#1c1b22] hover:border-[#1c1b22] hover:text-white">About</div>
                        <div className="border border-white/10 text-white/30 rounded-lg p-4 transition-all hover:scale-110 cursor-pointer hover:bg-[#1c1b22] hover:border-[#1c1b22] hover:text-white">Design</div>
                        <div className="border border-white/10 text-white/30 rounded-lg p-4 transition-all hover:scale-110 cursor-pointer hover:bg-[#1c1b22] hover:border-[#1c1b22] hover:text-white">Development</div>
                        <div className="border border-white/10 text-white/30 rounded-lg p-4 transition-all hover:scale-110 cursor-pointer hover:bg-[#1c1b22] hover:border-[#1c1b22] hover:text-white">Copywriting</div>
                        <div className="border border-white/10 text-white/30 rounded-lg p-4 transition-all hover:scale-110 cursor-pointer hover:bg-[#1c1b22] hover:border-[#1c1b22] hover:text-white">Blogs</div>
                        <div className="border border-white/10 text-white/30 rounded-lg p-4 transition-all hover:scale-110 cursor-pointer hover:bg-[#1c1b22] hover:border-[#1c1b22] hover:text-white">Contact</div>
                    </div>
                </div>
            </main>
        </>
    )
}