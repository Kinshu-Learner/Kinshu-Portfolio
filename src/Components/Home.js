import React from 'react'
import mainpic from "../Assets/Main pic probably.png"

function Home() {
  return (
    <div className='bg-gradient-to-b  from-black via-black to-gray-800 h-screen'>

      <div className="max-w-screen-lg mx-auto flex flex-col h-full items-center justify-center px-4 md:flex-row">

        <div className='flex  flex-col justify-center h-full'>

          <h2 className=' text-white text-4xl md:text-7xl text-bold py-4'>I'm a Full Stack Developer</h2>
          <p className='pb-4 text-gray-300'>
            Hey! I am a student at MAIT Delhi, pursuing B Tech in Electronics and Communication Engineering.
            5 star @hackerrank in C++
            HTML, CSS, JavaScript
            MERN Stack
            Have previously worked in Python, along with MySQL
            Currently improving my Web Development skills in ReactJS
          </p>

          <div className="">
            <button className='bg-gradient-to-r from-cyan-500 to-blue-500 rounded p-3 text-white hover:scale-105 duration-200 '>
              Contact Me
            </button>
          </div>

        </div>

        <div className="" >
          <img src={mainpic} className="rounded-2xl mx-auto w-2/3 md:w-full" alt="Profile" />
        </div>
      </div>

    </div>
  )
}

export default Home
