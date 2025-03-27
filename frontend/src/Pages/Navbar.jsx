import React from 'react'
import logo from "../assets/logo.png"
const Navbar = () => {
  return (
    <div>
      <div className='w-full bg-[#6C25FF] text-white  flex items-center  '>
        <div> <img src={ logo}  className='w-10 m-3 mt-2 ' alt="logo" /></div>
        <div className='text-2xl font-bold'>PopX</div>

      </div>
    </div>
  )
}

export default Navbar
