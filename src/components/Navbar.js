import React from 'react'
import { NavLink } from "react-router-dom";
// import { toast } from 'react-hot-toast';


const Navbar = () => {
  return (
    <div className='absolute top-0 bg-[#1b242f]  w-[100vw] mx-auto'>
        <nav className='w-9/12 flex justify-center items-center py-3'>
            <ul className='flex text-slate-100 justify-evenly w-9/12 mx-auto text-lg font-light'>
                <li className='hover:text-[#e31b6d] duration-300'><NavLink to='/'>HOME</NavLink></li>

                <li className='hover:text-[#e31b6d] duration-300'><NavLink to='/about'>ABOUT</NavLink></li>

                <li className='hover:text-[#e31b6d] duration-300'><NavLink to='/project'>PROJECTS</NavLink></li>

                <li className='hover:text-[#e31b6d] duration-300'><NavLink to='/contact'>CONTACT</NavLink></li>
            </ul>
        </nav>
        <div className='w-full h-[1px] bg-[#04c2c9] pb-0 mb-0'></div>
    </div>
  )
}

export default Navbar;