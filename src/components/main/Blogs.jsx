import React from 'react'
import Blog from './blogs/Blog'

const Blogs = (props) => {
  return (
    <section className={`h-screen py-20 ${props.mode === "moon-fill" ? "text-zinc-400" : "text-zinc-800"} font-["TokyoDreams"] space-y-10`}>
      <h1 className='text-7xl'>Blogs</h1>
      <div className="">
        <Blog blogsArr={props.blogsArr} />
      </div>
    </section>
  )
}

export default Blogs