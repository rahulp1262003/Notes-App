import React, { useState } from 'react'
import '../index.css';
import Buttons from './Buttons';

import { PiPlusLight } from "react-icons/pi";



function Add({ onFormSubmit }) {
  const initialFormData = {
    title: '',
    details: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.trim() === '' || formData.details.trim() === '') {
      alert('Fields cannot be empty');
      return;
    }
    onFormSubmit(formData);
    setFormData(initialFormData);
  }

  return (
    <div className='relative inline-block items-center m-3 cursor-pointer  z-20 rounded-[2.5rem] w-[16rem] h-[19rem] max-w-[16rem] max-h-[19rem] '>

      <form action="#" onSubmit={handleSubmit} className='flex justify-between items-center flex-col h-full'>

        <input type="text" name="title" id="title" className='w-full h-[22%] rounded-t-[2rem] p-3 pl-6 pr-6 outline-none text-lg' placeholder='Add Title' value={formData.title} onChange={handleChange} />

        <textarea name="details" id="details" cols="" rows="7" className='w-full h-[77%] rounded-b-[2rem] outline-none pl-6 pr-6 pt-3 mt-2 resize-none text-lg ' placeholder='Add Details' value={formData.details} onChange={handleChange} ></textarea>


        <button type="submit" className=' m-2 absolute bottom-1 right-1 bg-blue-400 p-3 rounded-full'><PiPlusLight size='25px'/></button>
      </form>
    </div>
  )
}

export default Add