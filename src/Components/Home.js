import { React } from 'react'
import mainpic from "../Assets/Main pic probably.png"
import { Link } from 'react-scroll'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

function Home() {

  const [text] = useTypewriter({
    words: ['Frontend Developer.', 'Full Stack Developer.', 'Coder.'],
    loop: {},
    typeSpeed: 70,
    deleteSpeed: 50
  })
  
  return (
    <div name='home' className='bg-gradient-to-b from-black via-black to-gray-800 h-screen '>

      <div className="max-w-screen-lg mx-auto flex flex-col h-full items-center justify-center px-4 md:flex-row">

        <div className='flex flex-col justify-center h-full x-sm:mt-40 md:mt-0'>

          <h2 className='h-28 md:h-44 text-white text-4xl md:text-7xl py-4'>I'm a  <span  className='text-transparent bg-clip-text bg-gradient-to-tr from-purple-500 to-sky-500'>
            {text}
            </span> 
            <span><Cursor/></span>
            </h2>
          <p className='pb-4 text-gray-400'>
            I love to build stuff using technologies like React, Tailwind, NodeJS, Express, Mongo etc. I also like learning and quickly adapting to new technologies, so I'm always learning something new. I'm also a coder, and have also worked on Python with MySQL in the past.
          </p>

          <div className="">
            <Link to='contact' smooth duration={500} >
              <button className='bg-gradient-to-tr from-purple-500 to-sky-500 rounded p-3 text-white hover:scale-105 duration-200 cursor-pointer'>
                Contact Me
              </button>
            </Link>
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
