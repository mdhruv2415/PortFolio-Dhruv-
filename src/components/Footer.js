import React from 'react'
import {BsChevronDoubleUp} from 'react-icons/bs';
import {FaLinkedinIn, FaFacebook, FaGithub} from 'react-icons/fa';
import {GrInstagram} from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='w-[100vw] bg-[#1b242f] mt-[103px] h-[30vh] relative'>
      <button className='absolute top-[-18px] px-2 py-2 bg-[#fb1f79] text-2xl'><NavLink to={'/'}><BsChevronDoubleUp className='font-extrabold'/></NavLink></button>
      <div className='flex mx-auto w-1/4 justify-evenly pt-[100px] text-xl'>
        <button className='bg-[#262f38] text-[#fff] px-4 py-4 rounded-sm hover:bg-[#04c2c9] hover:p-[15px] transition-all duration-300'><FaLinkedinIn /></button>
        <button className='bg-[#262f38] text-[#fff] px-4 py-4 rounded-sm hover:bg-[#04c2c9] hover:p-[15px] transition-all duration-300'><GrInstagram /></button>
        <button className='bg-[#262f38] text-[#fff] px-4 py-4 rounded-sm hover:bg-[#04c2c9] hover:p-[15px] transition-all duration-300'><FaFacebook /></button>
        <button className='bg-[#262f38] text-[#fff] px-4 py-4 rounded-sm hover:bg-[#46e2e7] hover:p-[15px] transition-all duration-300'><FaGithub /></button>
      </div>
      <div className='mt-10 text-[#8f9aa7]'>DHRUV MISHRA <span className='text-[#fb1f79]'>©2023</span></div>
    </div>
  )
}

export default Footer