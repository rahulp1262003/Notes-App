import React from 'react'
import { motion } from "framer-motion"

function Note() {
  return (
    <motion.div
    drag
    dragConstraints={{
      top: -50,
      left: -50,
      right: 50,
      bottom: 50,
    }}
    className='w-[15rem] h-[15rem] bg-white rounded-[2.5rem] absolute right-8 top-8 cursor-pointer overflow-hidden'>
        <div className="w-[100%] h-[100%] flex justify-between flex-col">
            <div className="h-12 bg-blue-400 flex justify-center items-center">
                <h3 className='text-black text-[1.4rem]'>Note</h3>
            </div>
        </div>
    </motion.div>
  )
}

export default Note