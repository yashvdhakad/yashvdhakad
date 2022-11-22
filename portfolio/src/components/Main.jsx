import React from 'react'
import Nav from "./main/Nav";
import Projects from "./main/Projects";
import Heading from "./main/Heading";

const Main = () => {
  const heading = "Top Projects ❤️ by People"

  const projectsArr = [
    { name: "Project 1", source: "./src/assets/project1.png", url: "/" },
    { name: "Project 2", source: "./src/assets/project1.png", url: "/" },
    { name: "Project 3", source: "./src/assets/project1.png", url: "/" },
    { name: "Project 4", source: "./src/assets/project1.png", url: "/" },
  ]

  const navArr = [
    { name: "</>" },
    { name: "Home" },
    { name: "Design" },
    { name: "Development" },
    { name: "Marketing" },
    { name: "Blogs" },
    { name: "Contact" },
  ]

  return (
    <>
      <main className='max-w-screen-xl mx-auto py-10 flex flex-col items-center space-y-10'>
        <Heading heading={heading}/>
        <Projects projectsArr={projectsArr} />
        <Nav navArr={navArr} />
      </main>
    </>
  )
}

export default Main