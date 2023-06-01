import React from 'react'

function About() {
    return (
        <div className='w-full bg-gradient-to-b from-gray-800 to-black h-screen'>
            <div className="flex flex-col justify-center max-w-screen-lg  p-4 w-full h-full mx-auto">
                <div className="pb-8">
                    <h2 className='text-white text-4xl font-bold inline border-b-4 border-sky-500'>About Me</h2>
                </div>
                <p className='text-gray-400 text-xl'>Hello! I'm Kinshu Raj Gupta, a passionate web developer with expertise in the MERN stack. I just love to learn, especially anything related to technology excites me the most.
                <br />
                I am a student at Maharaja Agrasen Institue of Technology (MAIT) Delhi, pursuing B Tech in Electronics and Communication Engineering.</p>
            </div>
        </div>
    )
}

export default About
