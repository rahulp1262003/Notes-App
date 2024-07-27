import React, { useState } from 'react'
import '../index.css';
// import { PiPlusLight } from "react-icons/pi";

const initialFormData = {
  title: '',
  details: ''
};

function Add() {

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(initialFormData)
    console.log(formData);

  }

  return (
    <div className='relative inline-block items-center pt-[.1rem] m-8 cursor-pointer  z-20 rounded-[2.5rem] w-[15rem] h-[16 rem] max-w-[15rem] max-h-[16rem] overflow-hidden'>
      <form action="#" onSubmit={handleSubmit} className='flex justify-center items-center flex-col'>
        <input type="text" name="title" id="title" className='w-full rounded-t-[2rem] p-3 pl-6 pr-6 outline-none text-lg' placeholder='Add Title' value={formData.name} onChange={handleChange} />

        <textarea name="details" id="details" cols="" rows="6" className='w-full rounded-b-[2rem] outline-none pl-6 pr-6 pt-3 mt-2 resize-none text-lg ' placeholder='Add Details' value={formData.details} onChange={handleChange} ></textarea>

        <button type="submit" className='w-[5rem] absolute bottom-0 right-0 bg-blue-400 p-3 rounded-tl-3xl'>Add</button>
      </form>
    </div>
  )
}

export default Add