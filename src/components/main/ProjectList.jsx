import React from 'react'
import Project1 from '../../assets/project1.png'
import Project2 from '../../assets/project2.png'
import Project3 from '../../assets/project3.png'
import Project4 from '../../assets/project4.png'
import Project5 from '../../assets/project5.png'
import Project6 from '../../assets/project6.png'
import Project7 from '../../assets/project7.png'
import Project8 from '../../assets/project8.png'
import Project9 from '../../assets/project9.png'
import Project10 from '../../assets/project10.png'
import ProjectImg from './projectList/ProjectImg'
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

        // <div className='flex flex-col space-y-4'>
        //     {
        //         props.projectsArr.map((project) => {
        //             return <div className='text-zinc-800 font-semibold bg-white/5 backdrop-blur-sm rounded p-4 hover:shadow-lg transition-all hover:scale-105 hover:bg-zinc-300 flex justify-between items-center cursor-default border border-zinc-700'>
        //                 <div className='w-1/2'>
        //                     <div className='font-bold'>
        //                         {project.name}
        //                     </div>
        //                     <div className='text-xs font-medium'>
        //                         {project.tech} | {project.time}
        //                     </div>
        //                 </div>
        //                 <div className='space-x-4'>
        //                     <a className='border border-zinc-700 py-2 px-4 text-sm font-semibold bg-white/5 backdrop-blur-sm text-zinc-800 rounded cursor-pointer hover:border-zinc-800' href={project.demo}>Live Project</a>
        //                     <a className='border border-zinc-700 py-2 px-4 text-sm font-semibold rounded cursor-pointer hover:border-zinc-800' href={project.source}>Source Code</a>
        //                 </div>
        //             </div>;
        //         }).reverse()
        //     }
        // </div>
    )
}

export default ProjectList