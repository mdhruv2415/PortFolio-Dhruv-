import React from 'react'
import Icon from '@mdi/react';

const AboutCard = (props) => {
  const data = props.element;

  return (
    <div className='w-[18%] flex flex-col gap-2'>
      <div className='hex mx-auto mb-8'><Icon path={data.icon} size={2} className='text-slate-50 mx-auto' /></div>
      <h2 className='text-2xl font-medium text-slate-500'>{data.title}</h2>
      <p className="about-text text-lg text-slate-600 font-normal">{data.desc}</p>
    </div>
  )
}

export default AboutCard