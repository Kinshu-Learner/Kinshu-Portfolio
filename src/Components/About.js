import React from 'react'

function About() {
    return (
        <div name='about' className='w-full bg-gradient-to-b from-gray-800 to-black h-screen pt-[600px] mb-20 sm:pt-0'>
            <div className="flex flex-col justify-center max-w-screen-lg  p-4 w-full h-full mx-auto">
                <div className="pb-8">
                    <h2 className='text-white text-4xl font-bold inline border-b-4 border-sky-500'>About Me</h2>
                </div>
                <p className='text-gray-400 text-xl leading-8'>
                    Greetings! I'm Kinshu Raj Gupta, an enthusiastic web developer specializing in the MERN stack. My passion for technology fuels my continuous quest for learning. Currently pursuing a B.Tech in Electronics and Communication Engineering at Maharaja Agrasen Institute of Technology (MAIT) Delhi, I find immense joy in the dynamic world of frontend development.
                    <br />
                    <br />
                    While proficient in the MERN stack, my heart lies in crafting captivating user interfaces using React and leveraging frameworks like Tailwind. I thrive on exploring innovative libraries such as parallax and spring, integrating them seamlessly into my projects. This commitment ensures a perpetual cycle of excitement as I consistently introduce fresh elements to my work.
                    <br />
                    <br />
                    Beyond the realm of technology, my soul resonates with the harmonies of music. Whether it's indulging in the soothing melodies of soft songs, expressing myself through singing, strumming the guitar, or beatboxing, my love for good music harmoniously coexists with my coding endeavors.
                </p>
            </div>
        </div>
    )
}

export default About
