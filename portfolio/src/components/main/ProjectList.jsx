import React from 'react'

const ProjectList = (props) => {
    return (
        <div className='flex flex-col space-y-4'>
            {
                props.projectsArr.map((project) => {
                    return <div className='text-zinc-800 font-semibold bg-white/5 backdrop-blur-sm rounded p-4 hover:shadow-lg transition-all hover:scale-105 hover:bg-zinc-300 flex justify-between items-center cursor-default border border-zinc-700'>
                        <div className='w-1/2'>
                            <div className='font-bold'>
                                {project.name}
                            </div>
                            <div className='text-xs font-medium'>
                                {project.tech} | {project.time}
                            </div>
                        </div>
                        <div className='space-x-4'>
                            <a className='border border-zinc-700 py-2 px-4 text-sm font-semibold bg-white/5 backdrop-blur-sm text-zinc-800 rounded cursor-pointer hover:border-zinc-800' href={project.demo}>Live Project</a>
                            <a className='border border-zinc-700 py-2 px-4 text-sm font-semibold rounded cursor-pointer hover:border-zinc-800' href={project.source}>Source Code</a>
                        </div>
                    </div>;
                }).reverse()
            }
        </div>
    )
}

export default ProjectList