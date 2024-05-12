import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Socialsmob = () => {
    let links = [
        {
            id: 1,
            link: "https://www.linkedin.com/in/kinshu-raj-gupta",
            child: (
                <>
                    <FaLinkedin size={50} />
                </>
            ),
        },
        {
            id: 2,
            link: "https://github.com/Kinshu-Learner",
            child: (
                <>
                    <FaGithub size={50} />
                </>
            )
        },
        {
            id: 3,
            link: "mailto:kinshurajgupta1@gmail.com",
            child: (
                <>
                    <HiOutlineMail size={50} />
                </>
            )
        },
        {
            id: 4,
            link: "/Kinshu_CV.pdf",
            child: (
                <>
                    <BsFillPersonLinesFill size={50} />
                </>
            ),
            download: true
        }
    ]
    return (
        <div className='h-20 bg-gray-800 w-full custom-xl:hidden'>
            <div className="flex w-full ">

                <div className='flex w-full justify-evenly mx-auto'>

                    {links.map(({ id, link, child, download }) => (
                        <a key={id} className="text-white hover:text-purple-500 duration-200" href={link} target='_blank' rel="noreferrer" download={download}>
                            {child}
                        </a>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Socialsmob
