import React from 'react'

function About() {
    return (
        <div name='about' className='w-full bg-gradient-to-b from-gray-800 to-black h-screen'>
            <div className="flex flex-col justify-center max-w-screen-lg  p-4 w-full h-full mx-auto">
                <div className="pb-8">
                    <h2 className='text-white text-4xl font-bold inline border-b-4 border-sky-500'>About Me</h2>
                </div>
                <p className='text-gray-400 text-xl leading-8'>Hello! I'm Kinshu Raj Gupta, a passionate web developer with expertise in the MERN stack. I just love to learn, especially anything related to technology excites me the most.
                <br />
                I am a student at Maharaja Agrasen Institue of Technology (MAIT) Delhi, pursuing B Tech in Electronics and Communication Engineering.
                <br />
                Although I work on MERN stack, working on frontend technologies like React, with frameworks like Tailwind is my favorite thing to do. I like learning and exploring new libraries like parallax, spring etc, and implementing them into my projects. This way, I always have something new and fresh to work upon.
                <br />
                Apart from the technical skills, I just love everything about music. I love to listen to soft songs, to sing, play the guitar, beatbox, and basically anything and everything related to good music is my go to thing to do alongside coding and building stuff.
                </p>
            </div>
        </div>
    )
}

export default About
