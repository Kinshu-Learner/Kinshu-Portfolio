import React from 'react'
import Newsify from '../Assets/Newsify-temp3.png'
import TextUtils from '../Assets/TextUtils-temp5.png'
import iNotebook from '../Assets/iNotebook-temp5.png'
import ImageAI from '../Assets/ImageAI-temp2.png'
import { FaGithub } from 'react-icons/fa'
import { BsFillRocketTakeoffFill } from 'react-icons/bs'

function Work() {

    const projects = [
        {
            id: 1,
            src: ImageAI,
            name: "ImageAI | DALL-E Clone",
            desc: "An AI image generating website (DALL-E clone) made using the MERN stack, TailwindCSS, Cloudinary and OpenAI's DALL-E API.",
            codelink: "https://github.com/Kinshu-Learner/ImageAI",
            demolink: "https://kinshu-imageai.vercel.app/"
        },
        {
            id: 2,
            src: TextUtils,
            name: "TextUtils",
            desc: "This is a text utility based website that allows user to convert in uppercase, lowercase, count number of words etc. Created using ReactJS, Bootstrap.",
            codelink: "https://github.com/Kinshu-Learner/TextUtils-PC.git",
            demolink: "https://textutils-kinshu-learner.vercel.app/"
        },
        {
            id: 3,
            src: Newsify,
            name:"Newsify",
            desc: "This is a news website that displays latest news in different categories like Entertainment, Technology etc. Created using ReactJS, Bootstrap & NewsAPI.",
            codelink: "https://github.com/Kinshu-Learner/Newsify-PC",
            demolink: ""
        },
        {
            id: 4,
            src: iNotebook,
            name:"iNotebook",
            desc: "This is a notebook on the web with user authorisation, signup and login. User can create, edit, delete notes. Created using MERN stack and Bootstrap.",
            codelink: "https://github.com/Kinshu-Learner/iNotebook-laptop",
            demolink: ""
        }
    ]

    return (
        <div name='work' className='bg-gradient-to-b from-black to-gray-800 md:h-screen w-full pt-64 sm:pt-0 md:py-[400px]'>
            <div className="flex flex-col justify-center max-w-screen-lg p-4 mx-auto w-full h-full">

                <div className="pb-8">
                    <h2 className='text-white text-4xl font-bold inline border-b-4 border-sky-500 mb-8'>Work/Projects</h2>
                    <p className='text-gray-400 py-6'>Check out some of the projetcs that I've made using technologies like React, Tailwind, Bootstrap and the MERN stack.</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

                    {projects.map(({ id, name, src, desc, codelink, demolink }) => (
                        <div key={id} className="group relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-500 opacity-60 group-hover:opacity-100 rounded-lg blur-md group-hover:blur-lg group-hover:-inset-3 duration-200 "></div>
                            <div className="relative flex flex-col justify-between bg-gradient-to-b from-gray-800 to-gray-950 h-[430px] rounded-lg group-hover:scale-105 duration-200">
                                <div>
                                    <img src={src} alt="" className='rounded-xl p-2' />
                                    <div className="text-gray-400 text-lg px-2 pt-2 font-bold">{name}</div>
                                    <div className="text-gray-400 p-2">{desc}</div>
                                </div>
                                <div className="bg-black rounded-md flex h-12">

                                    <div className="rounded-md flex text-gray-400  mx-auto">
                                        <a href={codelink} target='_blank' rel="noreferrer" className='flex items-center px-4 hover:text-purple-600 duration-300'>Code <FaGithub size={20} /></a>
                                        {demolink && <a href={demolink} target='_blank' rel="noreferrer" className={`flex items-center px-4 hover:text-sky-500 duration-300 `}>Live Demo <BsFillRocketTakeoffFill size={20} /></a>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default Work
