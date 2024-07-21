import React from 'react'
import './index.css';
import { PiPlusLight } from "react-icons/pi";


function App() {
  return (
    <div className='w-full h-screen bg-black relative'>
      <div className='absolute flex items-center bg-white rounded-2xl p-4 top-8 left-8 cursor-pointer '>
        <div className="flex justify-between items-center "><PiPlusLight size='2rem' /> <span className='pl-4 pr-1 text-xl'> Add Note</span></div>
      </div>
    </div>
  )
}

export default App