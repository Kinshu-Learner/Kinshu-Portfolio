import React from 'react'
import mainpic from "../Assets/Main pic probably.png"

function Home() {
  return (
    <div className='bg-gradient-to-b from-black via-black to-gray-800 h-screen '>

      <div className="max-w-screen-lg mx-auto flex flex-col h-full items-center justify-center px-4 md:flex-row">

        <div className='flex flex-col justify-center h-full x-sm:mt-40 md:mt-0'>

          <h2 className=' text-white text-4xl md:text-7xl text-bold py-4'>I'm a Full Stack Developer</h2>
          <p className='pb-4 text-gray-400'>
            I love to build stuff using technologies like React, NodeJS, Express, Mongo, Tailwind etc. I also like learning and quickly adapting to new technologies, so I'm always learning something new. I'm also a coder, and have also worked on Python with MySQL in the past.
          </p>

          <div className="">
            <button className='bg-gradient-to-r from-cyan-500 to-blue-500 rounded p-3 text-white hover:scale-105 duration-200 '>
              Contact Me
            </button>
          </div>

        </div>

        <div className="" >
          <img src={mainpic} className="rounded-2xl mx-auto w-2/3 md:w-full mb-10" alt="Profile" />
        </div>
      </div>

    </div>
  )
}

export default Home
