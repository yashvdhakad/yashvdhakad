import React from 'react'

const ProjectList = (props) => {
  return (
    <>
        <div>
            {
                props.projectsArr.map((project) => {
                    return <h1>{project.name}</h1>;
                })
            }
        </div>
    </>
  )
}

export default ProjectList