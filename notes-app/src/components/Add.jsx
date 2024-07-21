import React from 'react'
import '../index.css';
import { PiPlusLight } from "react-icons/pi";


function Add() {
  return (
      <div className='absolute flex items-center bg-white rounded-2xl p-4 top-8 left-8 cursor-pointer '>
        <div className="flex justify-between items-center ">
          <PiPlusLight size='2rem' />
        </div>
      </div>
  )
}

export default Add