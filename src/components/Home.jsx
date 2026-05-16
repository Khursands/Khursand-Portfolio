import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
export default function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hello there, I'm</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Khursand Sohail Iqbal</h1>
            <h2 className='text-3xl sm:text-5xl font-bold text-[#8892b0] mt-2'>Full Stack Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>Software Engineer at Dubizzle Labs, building platforms that serve millions of users across the Middle East and South Asia. I work across the full stack — from pixel-perfect React interfaces to secure, scalable Node.js backends — and take pride in shipping features that are tested, performant, and built to last.</p>
             <div>
                <Link to="about" smooth={true} duration={500} offset={-40}>
                    <button className='text-white group border-2 px-6 py-3 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                        View Details
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3'></HiArrowNarrowRight>
                        </span>
                    </button>
                </Link>
             </div>
        </div>
    </div>
  )
}
