import React from 'react'

const Blog = (props) => {
    return (
        props.blogsArr.map((blog) => {
            return <div className="p-4 font-['Rollerscript'] text-xl border border-zinc-800 rounded-lg">
                <h1>{blog.name}</h1>
            </div>
        })
    )
}

export default Blog