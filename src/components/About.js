import React from 'react'
import AboutCard from './AboutCard'
import data from './data.js'
import skills from './skills.js'

const About = () => {
  console.log(data)
  return (
    <div className='mt-[53px] w-100vw h-[120vh] flex flex-col justify-center items-center'>
      <div className='mx-auto flex flex-col gap-y-3 pb-10'>
        <h2 className='text-4xl text-gray-700 font-semibold'>ABOUT</h2>
        <div className="mx-auto w-[60px] h-[3px] bg-gray-700"></div>
      </div>
      <div className='flex justify-center'>
        {
          data.map((element) => {
            return (<AboutCard key={element.id} element={element} />);
          })
        }
      </div>
      <div className='w-[70vw] mt-10 flex h-[50%] justify-between mb-10'>
        <div className='flex flex-col w-[40%] gap-4'>
          <div className='hexagon h-[250px] w-[250px] mt-8 mx-auto rounded-3xl'></div>
          <h2 className='text-2xl text-gray-600 font-medium'>Who is this Guy?</h2>
          <p className='text-lg text-gray-700 font-light'>I'm a full stack MERN Developer currently a student at JSS in Noida, UP.  have serious passion for UI effects, animations and creating intuitive, dynamic user experiences. 
<span className='text-[#009ada]'> Let's make something special.</span></p>
        </div>
        <div className='w-[50%] mt-10'>
          {
            skills.map((element) => {
              return(
              <div className='relative h-8 mb-4 w-[100%] text-right bg-[#eee]'>
                <div className='absolute top-0 left-0 px-2 my-auto bg-[#04c2c9] w-[110px] h-8 text-[18px] text-slate-50 text-left font-semibold'>{element.name}</div>
                <div className='bg-[#00a1a7] h-8' style={{width:`${element.value}`}}>{element.value}</div>
              </div>
            )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default About