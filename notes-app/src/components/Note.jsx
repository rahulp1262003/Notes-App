import React from 'react'
// import { motion } from "framer-motion"

function Note({ formData }) {
  let fd = formData.title;
  let len = formData.title.length;
  return (
    <div className='w-[15rem] h-[15.6rem] bg-white rounded-[2.5rem] m-8 cursor-pointer overflow-hidden flex justify-between items-center flex-col'>
      <div className="w-full h-[24%] bg-blue-400 flex justify-center items-center p-3">
        <h3 className='text-black text-[1.4rem] inline-block'>{
          len >= 10 ? (fd.slice(0,15) + '...') : fd
        }</h3>
      </div>
      <div className='w-full h-[75%] inline-block justify-start items-start p-4'>
        {formData.details}
      </div>
    </div>
  )
}

export default Note