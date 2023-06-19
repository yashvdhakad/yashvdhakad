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
import Blogs from "./main/Blogs";
import Contact from "./main/Contact";
import TechStack from './main/TechStack';

const Main = (props) => {
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
    }, {
      name: "2. eNotes App: Note whatever & whenever!",
      tech: "HTML, CSS, JS-MERN",
      source: "../../assets/project1.png",
      url: "/",
      time: "Oct 2022",
    }, {
      name: "3. CLI Quiz Game: Bachpan Ka Yaar",
      tech: "HTML, CSS, JS-MERN",
      source: "../../assets/project1.png",
      url: "/",
      time: "Oct 2022",
    }
  ]

  const navArr = [
    { name: "</>", url: "/" },
    { name: "Tech Stack", url: "/techstack" },
    { name: "All Projects", url: "/projects" },
    // { name: "About", url: "/about" },
    { name: "Blog", url: "/blogs" },
    { name: "Contact", url: "/contact" }
  ]

  const blogsArr = [
    {
      name: "SEO tips for beginners | Initial factors to consider",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum debitis officia est neque, doloremque tempora sed rerum, recusandae nihil nam atque, quisquam voluptatum amet?",
      url: "main/blogs/blog/seo-tips-for-begginers"
    },
  ]

  return (
    <main className="max-w-screen-xl h-screen mx-auto lg:px-20 flex flex-col items-center space-y-10 overflow-y-scroll overflow-x-hidden">
      <Router>
        <i onClick={props.clickHandler} className={`bi bi-${props.mode} fixed lg:top-20 lg:right-20 top-6 right-6 text-2xl ${props.mode === "sun-fill" ? "text-zinc-800" : "text-zinc-400"} cursor-pointer z-50`}></i>
        <Routes>
          <Route exact path="/" element={<Hero mode={props.mode} key="home" intro={intro} />} />
          <Route exact path="/techstack" element={<TechStack key="techstack" />} />
          {/* <Route exact path="/about" element={<About key="about" />} /> */}
          <Route exact path="/projects" element={<ProjectList mode={props.mode} projectsArr={projectsArr} />} />
          <Route exact path="/blogs" element={<Blogs mode={props.mode} key="blog" blogsArr={blogsArr} />} />
          <Route exact path="/contact" element={<Contact key="contact" />} />
        </Routes>
        <Nav navArr={navArr} />
      </Router>
    </main>
  )
}

export default Main