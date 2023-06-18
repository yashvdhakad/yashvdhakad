import React from 'react'
import { Link } from 'react-router-dom'

const Blog = (props) => {
    return (
        props.blogsArr.map((blog, index) => {
            return (
            <div key={index} className="p-6 font-['Rollerscript'] text-xl rounded-lg space-y-6 border">
                <h1 className='text-4xl'>1. {blog.name}</h1>
                <p className=''>{blog.description}</p>
                <Link className='px-4 py-2 rounded-lg border hover:shadow hover:border-transparent' to={blog.url}>Read More</Link>
            </div>
        )})
    )
}

export default Blog