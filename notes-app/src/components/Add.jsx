import React from 'react'
import '../index.css';
import { PiPlusLight } from "react-icons/pi";


function Add() {

 function addnote(e) {
    console.log(e.target);
 }

  return (
    <div className='inline-block items-center bg-blue-100 rounded-2xl p-4 m-8 cursor-pointer absolute z-20' onClick={addnote}>
      <PiPlusLight size='2rem' />
    </div>
  )
}

export default Add