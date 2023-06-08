import { useState } from 'react'
import React from 'react'
import Nav from './aside/Nav'
import Contact from './aside/Contact'
import IntroCard from './aside/IntroCard'
import OtherComp from './aside/OtherComp'
import Footer from './aside/Footer'

const Aside = () => {
    const name = "Yash Dhakad"
    const bio = "Full Stack Developer & UI/UX Designer. Ready to be your unfair advantage."

    const navArr = [
        { name: "About", url: "#" },
        { name: "Development Projects", url: "#" },
        { name: "UI/UX Projects", url: "#" },
        { name: "Copywriting Projects", url: "#" },
        { name: "Blog", url: "#" },
        { name: "Contact", url: "#" }
    ]

    const companiesArr = [
        { name: "Avisa Innovations", url: "#" },
        { name: "Shri Mahakal Chains", url: "#" }
    ]

    const socialMediaArray = [
        { name: "github", source: "./src/assets/github.png", url: "#", width: 24 },
        { name: "linkedin", source: "./src/assets/linkedin.png", url: "#", width: 24 },
        { name: "twitter", source: "./src/assets/twitter.png", url: "#", width: 24 },
        { name: "instagram", source: "./src/assets/instagram.png", url: "#", width: 24 }
    ]

    return (
        <aside className='xl:w-1/4 h-full p-6 fixed flex flex-col justify-between items-start space-y-10 text-purple-300 bg-[#060522] overflow-scroll'>
            <IntroCard name={name} bio={bio} />
            <Nav navArr={navArr} />
            <Contact socialMediaArray={socialMediaArray} />
            <OtherComp companiesArr={companiesArr} />
            <Footer />
        </aside>
    )
}

export default Aside