import React from 'react'
import html from '../Assets/html.png'
import css from '../Assets/css.png'
import javascript from '../Assets/javascript.png'
import typescript from '../Assets/typescript.png'
import react from '../Assets/react.png'
import next from '../Assets/nextjs.png'
import redux from '../Assets/Redux.png'
import node from '../Assets/node.png'
import github from '../Assets/github.png'
import tailwind from '../Assets/tailwind.png'
import SCSS from '../Assets/SCSS.svg'
import materialUi from '../Assets/materialUi.svg'
import mongo from '../Assets/mongo.png'
import express from '../Assets/express-js.png'
import bootstrap from '../Assets/bootstrap.png'

const Technologies = () => {

    const techs = [
        {
            id: 1,
            text: "HTML",
            src: html,
            style: "from-orange-200 to-orange-700 ",
        },
        {
            id: 2,
            text: "CSS",
            src: css,
            style: "from-blue-200 to-blue-700 ",
        },
        {
            id: 3,
            text: "JavaScript",
            src: javascript,
            style: "from-yellow-200 to-yellow-700 ",
        },
        {
            id: 4,
            text: "TypeScript",
            src: typescript,
            style: "from-cyan-200 to-[#2d79c7] ",
        },
        {
            id: 5,
            text: "ReactJS",
            src: react,
            style: "from-sky-200 to-sky-700 ",
        },
        {
            id: 6,
            text: "NextJS",
            src: next,
            style: "from-white to-gray-800 ",
        },
        {
            id: 7,
            text: "Redux",
            src: redux,
            style: "from-purple-300 to-purple-800 ",
        },
        {
            id: 8,
            text: "Tailwind",
            src: tailwind,
            style: "from-cyan-200 to-cyan-700 ",
        },
        {
            id: 9,
            text: "SCSS",
            src: SCSS,
            style: "from-pink-200 to-pink-700 ",
        },
        {
            id: 10,
            text: "Material-UI",
            src: materialUi,
            style: "from-cyan-300 to-blue-700 ",
        },
        {
            id: 11,
            text: "NodeJS",
            src: node,
            style: "from-lime-200 to-lime-700 ",
        },
        {
            id: 12,
            text: "MongoDB",
            src: mongo,
            style: "from-emerald-200 to-emerald-700 ",
        },
        {
            id: 13,
            text: "ExpressJS",
            src: express,
            style: "from-gray-200 to-gray-700 ",
        },
        {
            id: 14,
            text: "GitHub",
            src: github,
            style: "from-violet-200 to-violet-700 ",
        },
        {
            id: 15,
            text: "Bootstrap",
            src: bootstrap,
            style: "from-purple-200 to-purple-700 ",
        },
    ]

    return (
        <div name='technologies' className='bg-gradient-to-b from-gray-800 to-black h-full md:h-full w-full md:py-[200px]'>

            <div className="max-w-screen-lg flex flex-col justify-center p-4 mx-auto w-full h-full">

                <div>
                    <p className='text-white text-4xl font-bold border-b-4 border-sky-500 inline'>Technologies</p>
                    <p className='text-gray-400 py-6'>These are some of the technologies that I've worked with.</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full text-center p-8 sm:px-0">

                    {techs.map(({ id, text, src, style }) => (

                        <div key={id} className="group relative">

                            <div className={`absolute -inset-0.5 bg-gradient-to-tr ${style} rounded-lg blur-md opacity-60 group-hover:opacity-100  group-hover:scale-105 group-hover:-inset-1 duration-300`}></div>

                            <div className="relative text-white rounded-lg py-2 bg-gradient-to-b from-gray-900 to-gray-950 group-hover:scale-105 duration-300">
                                <img src={src} alt="" className='w-20 aspect-square object-contain mx-auto m-4' />
                                <p className='mt-4'>{text}</p>
                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    )
}

export default Technologies;