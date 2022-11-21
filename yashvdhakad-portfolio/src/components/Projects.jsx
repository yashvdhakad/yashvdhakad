import React from 'react'

export const Projects = () => {
    const projectsArr = [
        { name: "Project 1", source: "./src/assets/project1.png", url: "#" }
    ]

    return (
        <div className="grid grid-cols-2 grid-flow-row gap-6">
            {
                projectsArr.map((project) => {
                    return <a href={project.url} className="w-full transition-all hover:scale-105">
                        <img className='rounded-lg opacity-50 hover:opacity-100' src={project.source} alt={project.name} />
                    </a>
                })
            }
            {/* <a href="" className="w-full transition-all hover:scale-105">
                <img className='rounded-lg opacity-50 hover:opacity-100' src="./src/assets/project1.png" alt="" />
            </a>
            <a href="" className="w-full transition-all hover:scale-105">
                <img className='rounded-lg opacity-50 hover:opacity-100' src="./src/assets/project1.png" alt="" />
            </a>
            <a href="" className="w-full transition-all hover:scale-105">
                <img className='rounded-lg opacity-50 hover:opacity-100' src="./src/assets/project1.png" alt="" />
            </a>
            <a href="" className="w-full transition-all hover:scale-105">
                <img className='rounded-lg opacity-50 hover:opacity-100' src="./src/assets/project1.png" alt="" />
            </a>
            <a href="" className="w-full transition-all hover:scale-105">
                <img className='rounded-lg opacity-50 hover:opacity-100' src="./src/assets/project1.png" alt="" />
            </a>
            <a href="" className="w-full transition-all hover:scale-105">
                <img className='rounded-lg opacity-50 hover:opacity-100' src="./src/assets/project1.png" alt="" />
            </a> */}
        </div>
    )
}
