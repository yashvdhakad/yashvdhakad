import React from 'react'
import { Link } from 'react-router-dom'

const Blog = (props) => {
    return (
        props.blogsArr.map((blog, index) => {
            return (
            <div key={index} className="p-6 font-['Rollerscript'] text-xl rounded-lg border border-zinc-300 shadow-md shadow-zinc-800/20 flex flex-col justify-between space-y-6">
                <h1 className='text-4xl'>1. {blog.name}</h1>
                <p className=''>{blog.description}</p>
                <Link className='w-fit px-4 py-2 rounded-lg border border-zinc-300 shadow shadow-zinc-800/20 hover:shadow-sm' to={blog.url}>Read More</Link>
            </div>
        )})
    )
}

export default Blog