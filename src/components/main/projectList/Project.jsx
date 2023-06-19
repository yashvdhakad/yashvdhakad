import React from 'react'

const Project = (props) => {
  return (
    props.projectsArr.map((project, index) => {
      return <div key={index} className={`p-6 border border-zinc-300 rounded-lg ${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""} shadow-md shadow-zinc-800/20 font-["Rollerscript"] text-xl ${props.mode === "sun-fill" ? "text-zinc-700" : "text-zinc-400"} flex flex-col justify-between space-y-6`}>
        <div className="space-y-2">
          <div className="text-base">{project.time} | {project.tech}</div>
          <div className={`${index === 0 ? "text-4xl" : "text-2xl"}`}>{project.name}</div>
          <div className="">{project.description}</div>
        </div>
        <div className="space-x-6 text-base">
          <a className={`px-4 py-2 rounded-lg border border-zinc-300 shadow shadow-zinc-800/20 hover:shadow-sm`} target='blank' href={project.url}>Live Demo</a>
          <a className='px-4 py-2 rounded-lg border border-zinc-300 shadow shadow-zinc-800/20 hover:shadow-sm' target='blank' href={project.source}>Source Code</a>
        </div>
      </div>
    })
  )
}

export default Project