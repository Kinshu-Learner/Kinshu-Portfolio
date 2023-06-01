import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {

  // To toggle hamburger and cross, and various things that change accordingly
  const [nav, SetNav] = useState(false);

  // To display about, work, resume and contact
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
    <nav className='flex text-white h-20 items-center justify-between bg-black bg-opacity-90 top-0 sticky z-10'>

      <a href='/' className='hover:text-cyan-200 cursor-pointer text-5xl font-signature font-bold ms-6'>Kinshu</a>

      {/* Menu in greater than medium screens */}
      <ul className='hidden text-gray-400 md:flex items-center mx-6'>

        {links.map(({ id, link }) => (
          <li key={id} className='hover:text-cyan-200 duration-200 hover:scale-105 cursor-pointer mx-4 capitalize'>{link}</li>
        ))}

      </ul>

      {/* To toggle bw the hamburger and cross icons */}
      <div onClick={() => SetNav(!nav)} className='md:hidden pr-6 z-10 cursor-pointer text-gray-500' >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* To only display this menu when "nav" is true on smaller screens */}
      {nav && <ul className='flex flex-col justify-center items-center md:hidden text-gray-400 absolute h-screen w-full top-0 left-0 bg-gradient-to-b from-black via-sky-900 to-sky-800 z-[-1] text-3xl'>
        {links.map(({ id, link }) => (
          <li key={id} className='hover:text-cyan-200 duration-200 hover:scale-105 cursor-pointer mx-4 capitalize py-4'>{link}</li>
        ))}
      </ul>}

    </nav>
  )
}

export default Navbar
