import React from 'react'
import DP from '../../assets/dp.png'
import BG from '../../assets/bg-1.svg'
import ReactLogo from '../../assets/react.svg'
import HTMLLogo from '../../assets/html.svg'
import CSSLogo from '../../assets/css.svg'
import TailwindCSSLogo from '../../assets/tailwind.svg'
import JsLogo from '../../assets/js.svg'
import NodeJsLogo from '../../assets/nodejs.svg'
import MongoDBLogo from '../../assets/mongodb.svg'
import ExpressJsLogo from '../../assets/expressjs.svg'

const Hero = (props) => {
    return (
        <section className="relative flex justify-between items-center lg:space-x-40">
            <div className='space-y-10'>
                <img className='absolute left-0 top-0 transition hover:rotate-45 hover:scale-105' width="350" src={BG} alt=""/>
                <h1 className="lg:text-9xl font-bold text-zinc-700 leading-3 z-10">{props.intro.h1}</h1>
                <p className="font-black text-zinc-600 z-10">{props.intro.p}</p>
                <div className="flex flex-wrap justify-between items-center space-x-10 transition-all">
                    <img className='grayscale hover:grayscale-0' src={HTMLLogo} width="80" alt="" />
                    <img className='grayscale hover:grayscale-0' src={CSSLogo} width="80" alt="" />
                    <img className='grayscale hover:grayscale-0' src={TailwindCSSLogo} width="100" alt="" />
                    <img className='grayscale hover:grayscale-0' src={JsLogo} width="80" alt="" />
                    <img className='saturate-0 contrast-0 hover:saturate-100 hover:contrast-100' src={ReactLogo} width="80" alt="" />
                    <img className='saturate-0 contrast-2 hover:saturate-100 hover:contrast-100' src={NodeJsLogo} width="100" alt="" />
                    <img className='saturate-0 contrast-2 hover:saturate-100 hover:contrast-100' src={MongoDBLogo} width="200" alt="" />
                    <img className='saturate-0 contrast-2 hover:saturate-100 hover:contrast-100' src={ExpressJsLogo} width="150" alt="" />
                </div>
            </div>
            <img className='border rounded-lg shadow shadow-zinc-400' src={DP} alt="YD" />
        </section>
    )
}

export default Hero      