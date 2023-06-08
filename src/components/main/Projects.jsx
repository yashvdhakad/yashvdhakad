import React from 'react'

const Projects = (props) => {
    return (
        <div className="grid grid-cols-4 grid-flow-row gap-6">
            {
                props.projectsArr.map((project) => {
                    return <a key={project} href={project.url} className="w-full transition-all hover:scale-105">
                        <img className='rounded-lg opacity-50 hover:opacity-100' src={project.source} alt={project.name} />
                    </a>
                })
            }
        </div>
    )
}

export default Projects