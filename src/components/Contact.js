import React, { useState } from 'react'
import Footer from './Footer';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    textMessage: "",
  });
  function changeHandler(e) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value
      }
    })
  };

  const submitHandler = (e) => {
    e.preventDefault();
    alert("Contacted Successfully");
  }
  
  return (
    <div className='mx-auto w-[100vw] h-[120vh] bg-[#252934]'>
      <div className='flex flex-col justify-evenly pt-[150px]'>
        <h2 className='mx-auto text-[40px] text-[#fff] font-[600]'>CONTACT</h2>
        <div className='mx-auto bg-[#fff] w-16 h-1 mt-2'></div>
        <p className='mt-10 text-[#04c2c9] text-xl'>Have a question or want to work together?</p>
        <form onSubmit={submitHandler} className='flex flex-col gap-y-2 mt-[50px] w-[70%] mx-auto  relative'>
          <input 
            required
            value={formData.name}
            onChange={changeHandler}
            placeholder='Name'
            name='name'
            className='w-3/5 mx-auto h-10 outline-none bg-[#1e242c] px-6 text-[#fff] text-[12pt]'
            ></input>
          <input
            required
            value={formData.email}
            onChange={changeHandler}
            placeholder='Email'
            name='email'
            className='w-3/5 mx-auto h-10 outline-none bg-[#1e242c] px-6 text-[#fff] text-[12pt]'
            ></input>
          <textarea
            required
            value={formData.textMessage}
            onChange={changeHandler}
            placeholder='Your Message'
            name='textMessage'
            className='w-3/5 mx-auto outline-none bg-[#1e242c] px-6 text-[#fff] text-[12pt] h-[160px]'
          ></textarea>
          <button className='sticky ml-[445px] px-5 max-w-[130px] text-[#fff] py-2 border-[2px] border-[#fff] hover:border-0 hover:bg-[#04c2c9]'>SUBMIT</button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Contact