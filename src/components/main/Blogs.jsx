import React from 'react'
import Blog from './blogs/Blog'

const Blogs = (props) => {
  return (
    <section className={`h-screen lg:px-0 px-6 py-20 ${props.mode === "moon-fill" ? "text-zinc-400" : "text-zinc-800"} font-["TokyoDreams"] space-y-10`}>
      <h1 className='text-7xl'>Blogs</h1>
      <div className="space-y-10">
        <Blog blogsArr={props.blogsArr} />
        <Blog blogsArr={props.blogsArr} />
        <Blog blogsArr={props.blogsArr} />
        <Blog blogsArr={props.blogsArr} />
        <Blog blogsArr={props.blogsArr} />
      </div>
    </section>
  )
}

export default Blogs