import React from 'react'
import DP from '../../assets/dp.png'

const Hero = (props) => {
    return (
        <section className='h-screen flex justify-between items-start lg:space-x-40 bg-[../../assets/bg.svg] z-10'>
            <div>
                <h1 className="lg:text-9xl font-bold text-zinc-700">Yash Dhakad</h1>
                <div className="font-bold text-zinc-600">Full Stack Developer & UI/UX Designer. Ready to be your unfair advantage. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellat dolor quis autem quam provident. Minima, quas.</div>
            </div>
            <img className='border rounded-lg shadow shadow-zinc-400' src={DP} alt="" />

            {/* <div className="w-1/2 my-10 p-4 flex flex-row justify-between items-center space-x-4 text-zinc-800 backdrop-blur-sm rounded cursor-default sticky top-4">
                <img className='rounded' width="120" src={DP} alt="" />
                <div className="flex flex-col space-y-2">
                    <h1 className='text-4xl font-bold'>{props.heading.h1} <span className='text-sm'> 22. Agra, India.</span></h1>
                    <p className='w-11/12 text-base font-semibold text-zinc-500 leading-tight'>{props.heading.p}</p>
                </div>
            </div> */}
        </section>
    )
}

export default Hero      