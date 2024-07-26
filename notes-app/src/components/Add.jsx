import React from 'react'
import '../index.css';
// import { PiPlusLight } from "react-icons/pi";


function Add() {

  function addnote(e) {
    console.log(e.target);
  }

  return (
    <div className='inline-block items-center pt-[.1rem] m-8 cursor-pointer  z-20 rounded-[2.5rem] w-[15rem] h-[15rem] max-w-[15rem] max-h-[15rem]'>
      <form action="#" className='flex justify-center items-center flex-col'>
        <input type="text" name="title" id="title" className='w-full rounded-t-[2rem] p-3 pl-6 pr-6 outline-none text-lg' placeholder='Add Title'  />

        <textarea name="details" id="details" cols="" rows="6" className='w-full rounded-b-[2rem] outline-none pl-6 pr-6 pt-3 mt-2 resize-none text-lg' placeholder='Add Details' ></textarea>
      </form>
    </div>
  )
}

export default Add