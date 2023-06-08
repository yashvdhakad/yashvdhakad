import React from 'react'
import DP from '../../assets/dp.png'
import BG from '../../assets/bg-1.svg'

const Hero = (props) => {
    return (
        <section className="relative flex justify-between items-center lg:space-x-40">
            <div className='space-y-12'>
                <img className='absolute left-0 top-0 transition hover:rotate-45 hover:scale-105' width="350" src={BG} alt="" />
                <h1 className="lg:text-9xl font-bold font-['Allura'] text-zinc-700">{props.intro.h1}</h1>
                <p className="text-3xl font-bold font-['Allura'] text-zinc-700">{props.intro.p}</p>
            </div>
            <img className='border rounded-lg shadow shadow-zinc-400' src={DP} alt="YD" />
        </section>
    )
}

export default Hero      