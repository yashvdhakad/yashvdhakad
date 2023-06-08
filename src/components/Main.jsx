import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Hero from "./main/Hero";
import Nav from "./main/Nav";
import ProjectList from "./main/ProjectList";
import About from "./main/About";
import Blog from "./main/Blog";
import Contact from "./main/Contact";
import TechStack from './main/TechStack';

const Main = () => {
  const intro = {
    h1: "I'm Yash Dhakad.",
    p: "Full-Stack Developer with in depth experience in UI Design & Marketing based in Agra, India."
  }

  const projectsArr = [
    {
      name: "1. CLI Quiz Game: Bachpan Ka Yaar",
      tech: "HTML, CSS, JS-MERN",
      source: "../../assets/project1.png",
      url: "/",
      time: "Oct 2022",
    },
  ]

  const navArr = [
    { name: "</>", url: "/" },
    { name: "Tech Stack", url: "/techstack" },
    { name: "All Projects", url: "/projects" },
    { name: "About", url: "/about" },
    { name: "Blog", url: "/blogs" },
    { name: "Contact", url: "/contact" }
]

  return (
    <main className='max-w-screen-xl h-screen mx-auto py-20 flex flex-col items-center space-y-10'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Hero key="home" intro={intro} />} />
          <Route exact path="/techstack" element={<TechStack key="techstack" />} />
          <Route exact path="/about" element={<About key="about" />} />
          <Route exact path="/projects" element={<ProjectList projectsArr={projectsArr} />} />
          <Route exact path="/blogs" element={<Blog key="blog" />} />
          <Route exact path="/contact" element={<Contact key="contact" />} />
        </Routes>
        <Nav navArr={navArr} />
      </Router>
    </main>
  )
}

export default Main