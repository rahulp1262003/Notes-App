import React from 'react'
// import { motion } from "framer-motion"

function Note({formData}) {
  return (
    <div
    className='w-[15rem] h-[15.6rem] bg-white rounded-[2.5rem] m-8 cursor-pointer overflow-hidden'>
        <div className="w-[100%] h-[100%] flex justify-between flex-col">
            <div className="h-[3.2rem] bg-blue-400 flex justify-center items-center">
                <h3 className='text-black text-[1.4rem]'>{formData.title}</h3>
            </div>
            <div className='flex justify-center items-center'>{formData.details}</div>
        </div>
    </div>
  )
}

export default Note