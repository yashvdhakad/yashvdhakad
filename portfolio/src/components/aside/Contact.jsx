import React from 'react'

const Contact = (props) => {
    return (
        <div className="flex flex-col items-start text-center space-y-4 p-6 rounded-lg hover:shadow-xl hover:shadow-purple-800 transition">
            <h2 className='font-medium'>Connect with me on social media to get live updates about projects:</h2>
            <div className="w-full flex justify-evenly">
                {
                    props.socialMediaArray.map((i) => {
                        return <a className='invert-[.6] hover:invert-[.9] transition-all hover:duration-300' href={i.url}>
                            <img width={i.width} src={i.source} alt="" />
                        </a>
                    })
                }
            </div>
        </div>
    )
}

export default Contact