import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

function Socials() {

    let links = [
        {
            id: 1,
            link: "https://www.linkedin.com/in/kinshu-raj-gupta",
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            style: "rounded-tr-md"
        },
        {
            id: 2,
            link: "https://github.com/Kinshu-Learner",
            child: (
                <>
                    Github<FaGithub size={30} />
                </>
            )
        },
        {
            id: 3,
            link: "mailto:kinshurajgupta1@gmail.com",
            child: (
                <>
                    Email<HiOutlineMail size={30} />
                </>
            )
        },
        {
            id: 4,
            link: "/",
            child: (
                <>
                    Resume<BsFillPersonLinesFill size={30} />
                </>
            ),
            style: "rounded-br-md",
            download: true
        }
    ]

    return (
        <div className='hidden custom-xl:flex flex-col top-[35%] left-0 fixed' >

            <ul>
                {links.map(({id, link, child, style, download}) => (
                    <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md hover:bg-gradient-to-r from-indigo-500 to-purple-700 duration-300 ${style}`}>
                        <a className='flex justify-between items-center w-full text-white h-14 capitalize' href={link} target='_blank' rel="noreferrer" download={download}>
                            {child}
                        </a>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Socials
