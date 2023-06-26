import React from 'react'
import ReactLogo from '../../assets/svg/react.svg'
import HTMLLogo from '../../assets/svg/html.svg'
import CSSLogo from '../../assets/svg/css.svg'
import TailwindCSSLogo from '../../assets/svg/tailwind.svg'
import JsLogo from '../../assets/svg/js.svg'
import NodeJsLogo from '../../assets/svg/nodejs.svg'
import MongoDBLogo from '../../assets/svg/mongodb.svg'
import ExpressJsLogo from '../../assets/svg/expressjs.svg'

const TechStack = () => {
    return (
            <section className="h-screen flex flex-row justify-between items-center space-x-10 transition-all translate-x-10">
                <img className='grayscale hover:grayscale-0' src={HTMLLogo} width="80" alt="" />
                <img className='grayscale hover:grayscale-0' src={CSSLogo} width="80" alt="" />
                <img className='grayscale hover:grayscale-0' src={TailwindCSSLogo} width="100" alt="" />
                <img className='grayscale hover:grayscale-0' src={JsLogo} width="80" alt="" />
                <img className='saturate-0 contrast-0 hover:saturate-100 hover:contrast-100' src={ReactLogo} width="80" alt="" />
                <img className='saturate-0 contrast-2 hover:saturate-100 hover:contrast-100' src={NodeJsLogo} width="100" alt="" />
                <img className='saturate-0 contrast-2 hover:saturate-100 hover:contrast-100' src={MongoDBLogo} width="200" alt="" />
                <img className='saturate-0 contrast-2 hover:saturate-100 hover:contrast-100' src={ExpressJsLogo} width="150" alt="" />
            </section>
    )
}

export default TechStack