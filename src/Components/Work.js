import React from 'react'
import Newsify from '../Assets/Newsify-temp.png'
import { FaGithub } from 'react-icons/fa'
import { BsFillRocketTakeoffFill } from 'react-icons/bs'

function Work() {
    return (
        <div name='work' className='bg-gradient-to-b from-black to-gray-800 md:h-screen w-full'>
            <div className="flex flex-col justify-center max-w-screen-lg p-4 mx-auto w-full h-full">

                <div className="pb-8">
                    <h2 className='text-white text-4xl font-bold inline border-b-4 border-sky-500 mb-8'>Work/Projects</h2>
                    <p className='text-gray-400 py-4'>Check out some of the projetcs that I've made using technologies like React, Tailwind, Bootstrap and the MERN stack.</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    <div className="flex flex-col justify-between h-80 shadow-md shadow-sky-500 rounded-lg hover:scale-105 duration-200">
                        <div>
                            <img src={Newsify} alt="" className='rounded-md' />
                            <div className="text-gray-400 mx-2 my-2">This is a news website that displays latest news in different categories like Entertainment, Technology etc. Created using ReactJS, Bootstrap and NewsAPI.</div>
                        </div>
                        <div className="bg-black rounded-md flex h-12">

                            <div className="rounded-md flex text-gray-400  mx-auto">
                                <button className='flex justify-center items-center px-4 hover:text-purple-600 duration-300'>Code <FaGithub size={20} /></button>
                                <button className='flex justify-center items-center px-4 hover:text-sky-500 duration-300'>Live Demo <BsFillRocketTakeoffFill size={20} /></button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Work
