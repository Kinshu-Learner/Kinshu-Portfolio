import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='bg-gradient-to-b from-black to-gray-800 h-screen w-full'>

            <div className="flex flex-col justify-center max-w-screen-lg w-full h-full p-4 mx-auto">

                <div className='pb-8'>
                    <p className='text-white text-4xl font-bold border-b-4 border-sky-500 inline'>Contact</p>
                    <p className='text-gray-400 text-xl py-6'>Let's get in touch.</p>
                </div>

                <div className="flex flex-col ">

                    <form action="https://getform.io/f/55e7d5f4-5d2c-4e37-ad05-1b404740a008" method='POST' className='flex flex-col md:w-1/2'>

                        <label htmlFor="name" className='text-gray-300 text-xl font-bold px-1 mb-1'>Name</label>
                        <div className=" relative">
                            <div className="absolute bg-gradient-to-tr from-purple-700 to-sky-500 blur-sm inset-0"></div>
                            <input type="text" name="name" placeholder='Enter your name' className='group relative bg-black p-2 rounded-md text-white focus:outline-none w-full' />
                        </div>

                        <label htmlFor="email" className='text-gray-300 text-xl font-bold px-1 mt-4 mb-1'>Email</label>
                        <div className=" relative">
                            <div className="absolute bg-gradient-to-tr from-purple-700 to-sky-500 blur-sm inset-0"></div>
                            <input type="text" name="email" placeholder='Enter your email' className='relative bg-black p-2 rounded-md text-white focus:outline-none w-full' />
                        </div>

                        <label htmlFor="message" className='text-gray-300 text-xl font-bold px-1 mt-4 mb-1'>Message</label>
                        <div className=" relative">
                            <div className="absolute bg-gradient-to-tr from-purple-700 to-sky-500 blur-sm inset-0"></div>
                            <textarea name="message" rows="10" placeholder='What do you want to say?' className='relative bg-black p-2 rounded-md text-white focus:outline-none w-full' />
                        </div>

                        <button className='bg-gradient-to-tr from-purple-500 to-sky-500 py-4 px-6 w-36 text-white mt-4 rounded-md hover:scale-105 duration-300'>Let's Talk</button>
                    </form>

                </div>
            </div>


        </div>
    )
}

export default Contact
