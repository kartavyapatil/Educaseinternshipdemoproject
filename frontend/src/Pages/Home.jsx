import React from 'react'
import logo from "../assets/loginpageasset.png"
import {useNavigate} from 'react-router-dom'
const Home = () => {
  const navigate=useNavigate()
  const onlogin=()=>{
    navigate('/login');
  }
  const oncreate=()=>{
    navigate('/signup');
  }

  return (
    <div className='m-0 p-0'>
      <div className="flex items-center justify-around not-last: md:flex-row flex-col ">
        <div className='flex justify-center w-auto p-5 md:w-[50vw] bg-gray-100  rounded-lg shadow-lg mt-15'>
            <img src={logo} alt='react logo ' className='md:h-auto md:w-[30vw] h-[30vh]'/>
        </div>
        <div className='w-[80vw]  md:w-[40vw] md:h-[50vh] md:mt-1  mt-15'>
          <div className='text-2xl font-bold text-[#1D2226] md:text-4xl'> Welcome to PopX  </div>
          <div className='text-lg md:text-xl md:mt-5 '>  Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit,</div>
          <div className='md:mt-25'>
            <button className='w-[80vw] md:w-[30vw] bg-[#6C25FF] rounded-[6px] p-3 text-white mt-7 cursor-pointer' onClick={oncreate}>Create Account</button>
            <button className='w-[80vw] md:w-[30vw] bg-[#6C25FF4B] rounded-[6px] p-3 text-[#1D2226] mt-5 cursor-pointer' onClick={onlogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
