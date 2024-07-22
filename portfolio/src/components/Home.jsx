import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { ReactTyped,Typed } from "react-typed";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import image from '../assets/profile.jpg'
import Footer from './Footer';

function Home() {
  return (
    <>
    <div  className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-14'>
    <div className='flex flex-col md:flex-row'>
    <div className='md:w-1/2t-12 md:mt-24 space-y-2 '>
    <span className='text-xl'>Welcome In My Feed</span>
    <div className='flex space-x-1 text-2xl md:text-4xl'>
    <h1>Hello,I'm a</h1>
    {/* <span className='text-red-700 font-bold'>Developer</span> */}
    <ReactTyped 
          className='text-red-700 font-bold'
          strings={["Developer","Programmer","coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
    </div>
    
    <br />
    <p className='text-sm md:text-md text-justify'>
I've recently completed with a PG-Diploma in 
Mobile Computing from Sunbeam (CDAC) Pune. 
I am eager to learn new technologies and 
am currently seeking job opportunities 
in software development to apply my 
skills and contribute to innovative projects.</p>
    <br />
    <div className='flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0'>
    <div className='space-y-2'>
        <h1 className='font-bold text-center'>Available on</h1>
        <ul className='flex space-x-5'>
            <li>
               
                <a href='https://www.facebook.com'>
                <FaFacebook className='text-2xl cursor-pointer' />
                </a>
                </li>
                
            <li>
            <a href='https://www.linkedin.com'>
            <FaLinkedin className='text-2xl cursor-pointer' />
            </a>
            </li>
            <li>
            <a href='https://www.telegram.com'>
              <FaTelegram className='text-2xl cursor-pointer' />
              </a>
              </li>
        </ul>
       </div>
    
    <div className=" space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
    </div>
    <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1 '>
    <img src={image} className='rounded-full md:w-[350px] md:h-[350px]' alt=''>
    </img></div>
    </div>
       </div>
       <Footer />
    </> 
)
}

export default Home
