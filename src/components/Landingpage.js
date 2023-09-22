import React from 'react'
import {FiArrowRight} from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
const Landingpage = () => {
  return (
    <div className="rotate w-[100vw] bg-[url('http://findmatthew.com/img/filler.png')] h-[100vh]">
      <canvas width="1242" height="703" 
        className='w-[828px] h-[469px] overflow-clip aspect-[1242/703]'></canvas>
        <div className='flex flex-col w-1/2 mx-auto -mt-[150px]'>
          <div className='flex flex-col gap-0 font-light'>
            <div className='text-[44px] text-slate-50  mx-auto'>Hello, I'm <span className='text-[#e31b6d] text-5xl font-normal'>Dhruv Mishra</span>.</div>
            <div className='text-[44px] text-slate-50  mx-auto'>I'm a full stack web developer.</div>
          </div>
          <div className='mt-6'>
            <NavLink className=' text-gray-50 text-2xl border-2 py-2 px-5 border-slate-50 hover:bg-[#04c2c9] hover:border-[#04c2c9]
                          transition-all ease-in-out duration-300 workbutton' to='/about'>View my work <FiArrowRight className='inline-block mb-1 hoverEffect transition transform duration-300'/></NavLink></div>
        </div>
    </div>
  )
}

export default Landingpage 