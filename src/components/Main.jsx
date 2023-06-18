import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Hero from "./main/Hero";
import Nav from "./main/Nav";
import ProjectList from "./main/ProjectList";
import About from "./main//About";
import Blog from "./main/Blog";
import Contact from "./main/Contact";
import TechStack from './main/TechStack';

const Main = () => {
  const intro = {
    h1: "I'm Yash Dhakad.",
    p: "with in depth experience in UI Design & Marketing based in Agra, India."
  }

  const projectsArr = [
    {
      name: "1. News Monk: Read worthy news at your finger tips!",
      description: "News Monk is a personalized news aggregator that organizes and highlights what's happening in the world so you can quickly catch up and discover more about the stories that matter to you. News Monk is a personalized news aggregator that organizes and highlights what's happening in the world so you can quickly catch up.",
      tech: "HTML, CSS, JS-MERN",
      source: "../../assets/project1.png",
      url: "/",
      time: "Oct 2022",
    },{
      name: "2. eNotes App: Note whatever & whenever!",
      tech: "HTML, CSS, JS-MERN",
      source: "../../assets/project1.png",
      url: "/",
      time: "Oct 2022",
    },{
      name: "3. CLI Quiz Game: Bachpan Ka Yaar",
      tech: "HTML, CSS, JS-MERN",
      source: "../../assets/project1.png",
      url: "/",
      time: "Oct 2022",
    }
  ]

  const navArr = [
    { name: "</>", url: "/" },
    // { name: "Tech Stack", url: "/techstack" },
    { name: "All Projects", url: "/projects" },
    // { name: "About", url: "/about" },
    // { name: "Blog", url: "/blogs" },
    { name: "Contact", url: "/contact" }
]

  return (
    <main className="max-w-screen-xl h-screen mx-auto lg:px-20 flex flex-col items-center space-y-10 overflow-y-scroll overflow-x-hidden">
      <Router>
        <Routes>
          <Route exact path="/" element={<Hero key="home" intro={intro} />} />
          <Route exact path="/techstack" element={<TechStack key="techstack" />} />
          {/* <Route exact path="/about" element={<About key="about" />} /> */}
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