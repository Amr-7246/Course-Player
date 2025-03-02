import React from 'react'
import { IoIosArrowBack } from "react-icons/io";


const Header = () => {
  return (
    <div className='bg-stone-200 p-5 text-stone-800 '>
      <div className = ' cursor-pointer mb-5 flex items-center' >Home <IoIosArrowBack/>  Courses <IoIosArrowBack/> <span className='font-bold text-stone-800'>Course Details</span> </div>
      <h1 className = ' font-black  text-[25px]' >Starting SEO as your Hom Based Business</h1>
    </div>
  )
}

export default Header