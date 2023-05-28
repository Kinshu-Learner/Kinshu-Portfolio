import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {

  const [nav, SetNav] = useState(false);

  let links = [
    {
      id: 1,
      link: "about"
    },
    {
      id: 2,
      link: "work"
    },
    {
      id: 3,
      link: "resume"
    },
    {
      id: 4,
      link: "contact"
    }
  ]

  return (
    <nav className='flex text-white h-20 items-center justify-between bg-black'>

      <a href='/' className='hover:text-cyan-200 cursor-pointer text-5xl font-signature font-bold ms-6'>Kinshu</a>

      <i className="fa-solid fa-question-circle"></i>

      <ul className='hidden text-gray-400 md:flex items-center mx-6'>

        {links.map(({ id, link }) => (
          <li key={id} className='hover:text-cyan-200 duration-200 hover:scale-105 cursor-pointer mx-4 capitalize'>{link}</li>
        ))}

      </ul>

      <div onClick={()=>SetNav(!nav)} className='md:hidden pr-6 z-10 cursor-pointer text-gray-500' >
          {nav ? <FaTimes size={30}/> : <FaBars size = {30}/>}
      </div>

    </nav>
  )
}

export default Navbar
