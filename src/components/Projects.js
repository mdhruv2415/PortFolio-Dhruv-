import React from 'react'
import cardsData from './projectdata'
import CardContainer from './CardContainer';
// import ReactCardSlider from 'react-card-slider-component';

const Projects = () => {
  return (
    <div className='mt-[80px] w-100vw bg-[#f5f5f5] flex flex-col h-[90vh]'>
      <div className='flex flex-col mx-auto'>
        <h1 className='mx-auto text-[40px] text-[#444649] font-[650]'>PROJECTS</h1>
        <div className='mx-auto bg-[#444649] w-16 h-1 mt-2'></div>
      </div>
      {/* projects */}
      <div className='container'>
        {/* <ReactCardSlider slides={slides} className='w-[100%] border-0 border-[slate-50]'/> */}
        <CardContainer cards={ cardsData } />
      </div>
    </div>
  )
}

export default Projects