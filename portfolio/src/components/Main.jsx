import React from 'react'
import Nav from "./main/Nav";
import Projects from "./main/Projects";
import Heading from "./main/Heading";

const Main = () => {
  const heading = {
    h1: "Built from scratch",
    p: "Here are the projects made using core tech stack: MERN Stack."
  }

  const projectsArr = [
    { name: "Project 1", source: "./src/assets/project1.png", url: "/" },
    { name: "Project 2", source: "./src/assets/project2.png", url: "/" },
    { name: "Project 3", source: "./src/assets/project3.png", url: "/" },
    { name: "Project 4", source: "./src/assets/project4.png", url: "/" },
    { name: "Project 5", source: "./src/assets/project5.png", url: "/" },
    { name: "Project 6", source: "./src/assets/project6.png", url: "/" },
    { name: "Project 7", source: "./src/assets/project7.png", url: "/" },
    { name: "Project 8", source: "./src/assets/project8.png", url: "/" },
    { name: "Project 9", source: "./src/assets/project9.png", url: "/" },
    { name: "Project 10", source: "./src/assets/project10.png", url: "/" },
    { name: "Project 11", source: "./src/assets/project11.png", url: "/" },
    { name: "Project 1", source: "./src/assets/project1.png", url: "/" },
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