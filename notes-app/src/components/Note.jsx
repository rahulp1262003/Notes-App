import React from 'react'
// import { motion } from "framer-motion"

function Note({ formData }) {
  let fd = formData.title.trim();
  let len = fd.length;
  let des1 = formData.details.trim();
  let des2 = des1.length;
  return (
    <div className='w-[15rem] h-[15.6rem] bg-white rounded-[2.5rem] m-8 cursor-pointer overflow-hidden flex justify-between items-center flex-col'>
      <div className="w-full h-[24%] bg-blue-400 flex justify-center items-center p-3">
        <h3 className='text-black text-[1.4rem] inline-block'>{
          len >= 10 ? (fd.slice(0, 10) + '...') : fd
        }</h3>
      </div>
      <div className='w-full h-[75%] inline-block justify-start items-start flex-wrap p-4'>
        <p className='text-base md:text-lg lg:text-xl text-start break-words'>{des2 >= 99 ? (des1.slice(0, 95) + '...') : des1}</p>
      </div>
    </div>
  )
}

export default Note