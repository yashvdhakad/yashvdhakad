import React from 'react'

const IntroCard = (props) => {
    return (
        <div className="p-6 flex flex-col justify-between items-center text-center space-y-4 border border-sky-600 rounded-lg">
            <img className="w-16 rounded-full" src="./src/assets/dp.png" alt={props.name} />
            <h1 className='text-xl font-bold'>{props.name} <span className='text-xs font-semibold text-sky-300'>| 22 | 🇮🇳</span>
            </h1>
            <p className='text-sm font-semibold text-[#dfbd63]/80'>{props.bio}</p>
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
    )
}

export default IntroCard