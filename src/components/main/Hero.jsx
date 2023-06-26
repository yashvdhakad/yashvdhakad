import React from 'react'
import DP from '../../assets/img/dp.jpg'
import BG from '../../assets/svg/bg-1.svg'
import { Link } from 'react-router-dom'

const Hero = (props) => {
    return (
        <section className={`lg:h-screen py-40 px-6 relative flex lg:flex-row flex-col-reverse justify-between items-center lg:space-x-40 ${props.mode === "sun-fill" ? "text-zinc-700" : "text-zinc-400"}`}>
            <div className='flex flex-col justify-center items-center space-y-12 text-center'>
                {/* <img className={`lg:absolute lg:left-0 lg:top-20 rotate-center z-10 ${props.mode === "moon-fill" ? "invert opacity-50" : ""}`} width="350" src={BG} alt="" /> */}
                <h1 className="lg:text-9xl text-8xl font-thin font-['TokyoDreams'] z-20">{props.intro.h1}</h1>
                <p className="text-3xl font-['Rollerscript'] z-20">
                    <Link to='/about' className='underline'>Full-Stack Developer </Link>{props.intro.p}
                </p>
            </div>
            <img className='lg:static absolute top-[200px] w-60 lg:w-full border rounded-full shadow shadow-zinc-400 z-20 lg:rounded-lg' src={DP} alt="YD" />
        </section>
    )
}

export default Hero      