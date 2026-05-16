import React from 'react'

export default function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols gap-8'>
          <div className='sm:text-right pb-8 pl-4'> 
            <p className='text-4xl font-bold inline border-b-4 border-pink-600' >About
            </p>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>
                Welcome to my digital realm. I'm Khursand, and I'm thrilled you're here exploring my journey.
              </p>
            </div>
            <div>
              <p>
                I'm driven by an unwavering passion for creating exceptional software solutions that make a meaningful impact on people's lives. From conceptualization to deployment, I approach every project with meticulous attention to detail, ensuring that each line of code serves a purpose. My expertise spans the entire development spectrum — crafting intuitive user interfaces, architecting scalable backends, and optimizing performance for seamless user experiences.
                <br/><br/>
                What sets me apart is that I'm more than just a developer — I'm a complete software craftsman. I don't just write code; I rigorously test it too. With extensive experience in Jest and test-driven development, I ensure every feature is bulletproof before it reaches production.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className='max-w-[1000px] w-full px-4 mt-10'>
            <div className='border border-gray-700/60 rounded-lg p-6 bg-[#112240] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <span className='text-white font-bold text-sm'>BS</span>
                </div>
                <div>
                  <p className='text-white font-semibold text-lg'>Bachelor of Science in Computer Science</p>
                  <p className='text-pink-400 font-medium'>FAST-NUCES, Lahore</p>
                  <p className='text-gray-400 text-sm mt-1'>National University of Computer and Emerging Sciences</p>
                </div>
              </div>
              <div className='text-right sm:text-right'>
                <span className='inline-block bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full'>Computer Science</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

