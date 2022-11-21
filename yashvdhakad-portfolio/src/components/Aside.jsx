import { useState } from 'react'
import React from 'react'

export const Aside = () => {
    const name = "Yash Dhakad"
    const bio = "Aspiring Full Stack Developer & UI/UX Designer. Ready to be your unfair advantage."

    const navArray1 = [
        { name: "About", url: "#" },
        { name: "All Brands Built", url: "#" },
        { name: "UI/UX Design", url: "#" },
        { name: "Copywriting", url: "#" },
        { name: "Software Development", url: "#" },
        { name: "All Blogs", url: "#" },
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

    // const [count, setCount] = useState(0);

    return (
        <>
            <aside className='xl:w-1/4 h-full p-6 fixed flex flex-col justify-between items-start space-y-10 text-[#dfbd63] overflow-scroll'>
                {/* Intro */}
                <div className="flex flex-col justify-between items-center text-center space-y-4">
                    <img className="w-16 rounded-full" src="./src/assets/dp.png" alt={name} />
                    <h1 className='text-xl font-bold'>{name} <span className='text-xs font-semibold text-[#dfbd63]/80'>| 22 | 🇮🇳</span>
                    </h1>
                    <p className='text-sm font-semibold text-[#dfbd63]/80'>{bio}</p>
                    {/* <div className="w-full flex justify-evenly">
                        {
                            socialMediaArray.map((i) => {
                                return <a className='invert-[.6] hover:invert-[.9] transition-all hover:duration-300' href={i.url}>
                                    <img width={i.width} src={i.source} alt="" />
                                </a>
                            })
                        }
                    </div> */}
                </div>

                {/* Nav */}
                <nav className="w-full flex flex-col items-start text-center space-y-4 font-medium bg-white/10 p-6 rounded-lg">
                    {
                        navArray1.map((i) => {
                            return <a className='w-full p-2 border border-[#dfbd63]/30 rounded-md hover:bg-[#b41e40] hover:text-[#dfbd63] zssss hover:font-semibold' href={i.url}>{i.name}</a>
                        })
                    }
                </nav>

                {/* Contact */}
                <div className="flex flex-col items-start text-center space-y-4 bg-white/10 p-6 rounded-lg">
                    <h2 className='font-medium'>Connect with me on social media to get live updates about projects:</h2>
                    <div className="w-full flex justify-evenly">
                        {
                            socialMediaArray.map((i) => {
                                return <a className='invert-[.6] hover:invert-[.9] transition-all hover:duration-300' href={i.url}>
                                    <img width={i.width} src={i.source} alt="" />
                                </a>
                            })
                        }
                    </div>
                </div>

                {/* Other Companies */}
                <nav className="w-full flex flex-col items-center space-y-4 text-sm font-medium">
                    {
                        companiesArr.map((i) => {
                            return <a href={i.url}>{i.name} 🡥</a>
                        })
                    }
                </nav>

                <p className="w-full text-sm font-medium text-center">© {name} 2022 - ꝏ</p>
            </aside>
        </>
    )
}