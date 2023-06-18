import React from 'react'
import Blog from './blog/Blog'

const Blogs = (props) => {
  return (
    <section className='h-screen text-zinc-800 font-["TokyoDreams"] space-y-10'>
      <h1 className='text-7xl'>Blogs</h1>
      <div className="container">
        <Blog blogArr={props.blogArr} />
      </div>
    </section>
  )
}

export default Blogs