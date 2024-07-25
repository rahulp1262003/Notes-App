import React from 'react'
// import { motion } from "framer-motion"

function Note() {
  return (
    <div
    className='w-[15rem] h-[15rem] bg-white rounded-[2.5rem] m-8 cursor-pointer overflow-hidden'>
        <div className="w-[100%] h-[100%] flex justify-between flex-col">
            <div className="h-12 bg-blue-400 flex justify-center items-center">
                <h3 className='text-black text-[1.4rem]'>Note</h3>
            </div>
        </div>
    </div>
  )
}

export default Note