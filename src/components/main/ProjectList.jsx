import React from 'react'
import Project from './projectList/Project'

const ProjectList = (props) => {
    return (
        <section className='w-screen h-screen lg:p-20 p-6 container space-y-10'>
            <h1 className='text-7xl text-zinc-800 font-["TokyoDreams"]'>Projects</h1>
            <p className='text-3xl text-zinc-600 font-["Rollerscript"]'>Some of the projects are from work and some are on my own time.</p>
            <div className="grid lg:grid-cols-3 grid-cols-1 lg:grid-rows-2 gap-4" >
                <Project projectsArr={props.projectsArr} />
            </div>
        </section>
    )
}

export default ProjectList