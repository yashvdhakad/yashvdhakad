import React from 'react'

export const Contact = () => {
    return (
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
    )
}
