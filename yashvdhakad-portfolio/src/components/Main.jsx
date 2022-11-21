import React from 'react'
import Projects from './main/Projects'
import Nav from './main/Nav'

export const Main = () => {
    const navArr = [
        { name: "Home" },
        { name: "About" },
        { name: "Design" },
        { name: "Development" },
        { name: "Marketing" },
        { name: "Blogs" },
        { name: "Contact" },
    ]

    return (
        <>
            <main className='relative ml-[440px] h-full py-10 flex flex-col justify-between items-center space-y-10'>
                {/* Heading */}
                <div className="flex flex-col space-y-2">
                    <h1 className='text-2xl font-semibold'>Wall of ❤️ by People:</h1>
                </div>

                <Projects />
                <Nav navArr={navArr} />
            </main>
        </>
    )
}