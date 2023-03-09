import React from 'react'

const ProjectList = (props) => {
    return (
        <>
            <div className='w-1/2 flex flex-col space-y-4'>
                {
                    props.projectsArr.map((project) => {
                        return <div className='text-zinc-300 font-semibold bg-zinc-900 rounded p-4 hover:shadow-lg transition-all hover:scale-105 flex justify-between items-center cursor-default'>
                            <div>
                                <div className='font-bold'>
                                    {project.name}
                                </div>
                                <div className='text-xs font-medium'>
                                    {project.tech} | {project.time}
                                </div>
                            </div>
                            <div className='space-x-4'>
                                <a className='py-2 px-4 text-sm font-semibold bg-zinc-300 text-zinc-900 rounded cursor-pointer' href={project.demo}>Live Demo</a>
                                <a className='border py-2 px-4 text-sm font-semibold rounded cursor-pointer' href={project.source}>Source Code</a>
                            </div>
                        </div>;
                    })
                }
            </div>
        </>
    )
}

export default ProjectList