import React from 'react'
import Nav from "./main/Nav";
import Projects from "./main/Projects";
import ProjectList from "./main/ProjectList";
import Heading from "./main/Heading";

const Main = () => {
  const heading = {
    h1: "Hey, I'm Yash Dhakad.",
    p: "A Full-Stack Developer with in depth knowledge of Design & Marketing based in Agra, India."
  }

  // const projectsArr = [
  //   { name: "Project 1", source: "./src/assets/project1.png", url: "/" },
  //   { name: "Project 2", source: "./src/assets/project2.png", url: "/" },
  //   { name: "Project 3", source: "./src/assets/project3.png", url: "/" },
  //   { name: "Project 4", source: "./src/assets/project4.png", url: "/" },
  //   { name: "Project 5", source: "./src/assets/project5.png", url: "/" },
  //   { name: "Project 6", source: "./src/assets/project6.png", url: "/" },
  //   { name: "Project 7", source: "./src/assets/project7.png", url: "/" },
  //   { name: "Project 8", source: "./src/assets/project8.png", url: "/" },
  //   { name: "Project 9", source: "./src/assets/project9.png", url: "/" },
  //   { name: "Project 10", source: "./src/assets/project10.png", url: "/" },
  //   { name: "Project 11", source: "./src/assets/project11.png", url: "/" },
  //   { name: "Project 1", source: "./src/assets/project1.png", url: "/" },
  // ]

  const projectsArr = [
    {
      name: "Jobs Mantra Group's Website",
      tech: "HTML, CSS, JS-MERN",
      source: "./src/assets/project1.png",
      url: "/",
      time: "Oct 2022"
    },
    {
      name: "Jobs Mantra Group's Website",
      tech: "HTML, CSS, JS-MERN",
      source: "./src/assets/project1.png",
      url: "/",
      time: "Oct 2022"
    },
    {
      name: "Jobs Mantra Group's Website",
      tech: "HTML, CSS, JS-MERN",
      source: "./src/assets/project1.png",
      url: "/",
      time: "Oct 2022"
    },
    {
      name: "Jobs Mantra Group's Website",
      tech: "HTML, CSS, JS-MERN",
      source: "./src/assets/project1.png",
      url: "/",
      time: "Oct 2022"
    },
    {
      name: "Jobs Mantra Group's Website",
      tech: "HTML, CSS, JS-MERN",
      source: "./src/assets/project1.png",
      url: "/",
      time: "Oct 2022"
    },
    {
      name: "Jobs Mantra Group's Website",
      tech: "HTML, CSS, JS-MERN",
      source: "./src/assets/project1.png",
      url: "/",
      time: "Oct 2022"
    },
    {
      name: "Jobs Mantra Group's Website",
      tech: "HTML, CSS, JS-MERN",
      source: "./src/assets/project1.png",
      url: "/",
      time: "Oct 2022"
    },
    {
      name: "Jobs Mantra Group's Website",
      tech: "HTML, CSS, JS-MERN",
      source: "./src/assets/project1.png",
      url: "/",
      time: "Oct 2022"
    },
  ]

  const navArr = [
    // { name: "</>" },
    { name: "Home" },
    { name: "Design" },
    { name: "Development" },
    { name: "Marketing" },
    { name: "Blogs" },
    { name: "Contact" },
  ]

  return (
    <>
      <div className="bg-[url('./assets/bg1.jpg')] bg-cover bg-top bg-fixed">
        <main className='max-w-screen-xl mx-auto py-10 flex flex-col items-center space-y-10'>
          <Heading heading={heading} />
          <ProjectList projectsArr={projectsArr} />
          {/* <Projects projectsArr={projectsArr} /> */}
          {/* <Nav navArr={navArr} /> */}
        </main>
      </div>
    </>
  )
}

export default Main