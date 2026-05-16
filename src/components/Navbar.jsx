import React,{useState} from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin, FaFacebook, FaInstagram} from 'react-icons/fa'
import k_icon from '../assets/k_icon.jpg'
import {Link} from 'react-scroll'
const Navbar = () => {
  const [nav,setNav] =useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src= {k_icon} alt = 'Logo' style= {{width:'50px'}}/>
        </div>
      <ul className='hidden md:flex'>
        <li><Link to="home" spy={true} offset={5} smooth={true} duration={500} >
          Home
        </Link></li>
        <li><Link to="about" spy={true} offset={-40} smooth={true} duration={500} >
          About
        </Link></li>
        <li><Link to="skills" spy={true} offset={-120} smooth={true} duration={500} >
          Skills
        </Link></li>
        <li><Link to="experience" spy={true} offset={-100} smooth={true} duration={500} >
          Experience
        </Link></li>
        <li><Link to="projects" spy={true} offset={-80} smooth={true} duration={500} >
          Projects
        </Link></li>
        <li><Link to="contact" spy={true} offset={-100} smooth={true} duration={500} >
          Contact
        </Link></li>
      </ul>
    <div onClick={handleClick} className='md:hidden z-10'> 
        {!nav ? <FaBars/>: <FaTimes/>} 
    </div>
    <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center item-center'}>
        <li className='py-6 text-4xl'>
          <li><Link onClick={handleClick} to="home" spy={true} offset={5} smooth={true} duration={500} >
          Home
        </Link></li>
        </li>
        <li className='py-6 text-4xl'>
          <li><Link onClick={handleClick} to="about" spy={true} offset={-40} smooth={true} duration={500} >
          About
        </Link></li>
        </li>
        <li className='py-6 text-4xl'>
          <li><Link onClick={handleClick} to="skills" spy={true} offset={-120} smooth={true} duration={500} >
          Skills
        </Link></li>
        </li>
        <li className='py-6 text-4xl'>
          <li><Link onClick={handleClick} to="experience" spy={true} offset={-100} smooth={true} duration={500} >
          Experience
        </Link></li>
        </li>
        <li className='py-6 text-4xl'>
          <li><Link onClick={handleClick} to="projects" spy={true} offset={-80} smooth={true} duration={500} >
          Projects
        </Link></li>
        </li>
        <li className='py-6 text-4xl'>
          <li><Link onClick={handleClick} to="contact" spy={true} offset={-100} smooth={true} duration={500} >
          Contact
        </Link></li>
        </li>
    </ul>
    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
    <ul>
      <li onClick={handleClick} className='w-[160px] h-[60px] flex justfy-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
        <a  className='flex justify-between items-center w-full text-gray-300'href="https://www.linkedin.com/in/khursand-sohail-76a80a23a">
          LinkedIn<FaLinkedin size={30}/>
        </a>
      </li>
      <li className='w-[160px] h-[60px] flex justfy-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
        <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/Khursands">
          Github<FaGithub size={30}/>
        </a>
      </li>
      <li className='w-[160px] h-[60px] flex justfy-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#223a93]'>
        <a className='flex justify-between items-center w-full text-gray-300' href="https://www.facebook.com/khursand.sohail.18">
          Facebook<FaFacebook size={30}/>
        </a>
      </li>
      <li className='w-[160px] h-[60px] flex justfy-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500'>
        <a className='flex justify-between items-center w-full text-gray-300' href="https://www.instagram.com/khursandsohail/">
          Instagram<FaInstagram size={30}/>
        </a>
      </li>
    </ul>
    </div>
    </div>
  )
}
export default Navbar