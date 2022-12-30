import React from 'react'

const ProjectList = (props) => {
    return (
        <>
            <div className='w-1/2 flex flex-col space-y-4'>
                {
                    props.projectsArr.map((project) => {
                        return <a href={project.url}>
                            <div className='text-zinc-300 font-semibold bg-zinc-900 rounded p-4 cursor-pointer hover:shadow-lg transition-all hover:scale-105'>
                                <div>
                                    {project.name}
                                </div>
                                <div className='text-xs font-medium'>
                                    {project.tech} | {project.time}
                                </div>
                            </div>
                        </a>;
                    })
                }
            </div>
        </>
    )
}

export default ProjectList