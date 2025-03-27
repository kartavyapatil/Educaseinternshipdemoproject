import React from 'react'
import Navbar from '../Pages/Navbar'
import { useState } from 'react'
import loginassest from "../assets/loginassest.png"
import {useDispatch} from 'react-redux'
import { setUser } from '../slice/user.slice';
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userslice);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    company: "",
    isAgency: "",
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChangeRadio = (event) => {
    setFormData({ ...formData, isAgency: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUser(formData));
    console.log("Signup Data Stored in Redux:", formData);
    navigate('/login');
    console.log(userData);
    // localStorage.setItem("user", JSON.stringify(formData));
  };

  return (
      <div>
        <Navbar />
        <div className="text-2xl font-bold  mt-10 ml-[20px]  md:hidden">
          Create your <br className="md:hidden" />
          PopX account
        </div>
        <div className=" flex flex-col md:flex-row md:justify-evenly md:items-center">
          <div className=' md:bg-gray-100 md:rounded-lg  md:shadow-2xl md:border-2 border-gray-200 md:mt-10 md:w-[40vw] md:flex hidden justify-center'>
            <img src={loginassest} alt="loginassest" className='hidden md:flex w-[32vw]' />
          </div>
          <div className="relative">
            <form className="flex flex-col items-center md:w-[40vw] md:justify-center w-[80vw] mx-auto md:rounded-lg  p-5 md:h-auto h-[75vh]" onSubmit={handleSubmit}>
              <div className='text-[#1D2226] md:text-4xl md:flex hidden md:mb-7'>  Create your PopX account</div>
              <div>
                <label className="absolute   bg-white  text-[#6C25FF] rounded-2xl mt-2 text-[18px] ml-2">Full Name</label>
                <input type="text" name="fullName" id="fullName" className="w-[80vw] h-[45px] border-2 border-gray-300 rounded-md mt-5 p-0.5 md:w-[30vw]" placeholder="Enter Full Name" onChange={handleChange} required />
              </div>
              <div>
                <label className="absolute   bg-white  text-[#6C25FF] rounded-2xl mt-2 text-[18px] ml-2">Phone number</label>
                <input type="number" name="phoneNumber" id="phoneNumber" className="w-[80vw] h-[45px] border-2 border-gray-300 rounded-md mt-5 p-0.5 md:w-[30vw]" placeholder="Enter Phone number" min="1000000000" max="9999999999" onChange={handleChange} required/>
              </div>
              <div>
                <label className="absolute   bg-white  text-[#6C25FF] rounded-2xl mt-2 text-[18px] ml-2">email address</label>
                <input type="email" name="email" id="email" className="w-[80vw] h-[45px] border-2 border-gray-300 rounded-md mt-5 p-0.5 md:w-[30vw]" placeholder="Enter email address" onChange={handleChange} required />
              </div>
              <div>
                <label className="absolute  bg-white text-[#6C25FF] rounded-2xl mt-2 text-[18px] ml-2 ">Password</label>
                <input type="password" name="password" id="password" className=" w-[80vw] h-[45px] border-2 border-gray-300 rounded-md mt-5  p-0.5 md:w-[30vw]" placeholder="Enter Password" onChange={handleChange} required/>
              </div>
              <div>
                <label className="absolute   bg-white  text-[#6C25FF] rounded-2xl mt-2 text-[18px] ml-2">current company</label>
                <input type="text" name="company" id="company" className="w-[80vw] h-[45px] border-2 border-gray-300 rounded-md mt-5 p-0.5 md:w-[30vw]" placeholder="Enter company name" onChange={handleChange} required />
              </div>
              <div className='flex justify-start mt-5 w-[80vw] md:w-[30vw] flex-col '>
                <label className="">Are you an Agency?*</label>
                <div className='flex gap-5 items-center'>
                  <label className="flex items-center">
                    <input type="radio" name="option" value="yes" onChange={handleChangeRadio} checked={formData.isAgency === "yes"} className="mr-2 size-4" required/> yes
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="option" value="no" onChange={handleChangeRadio} checked={formData.isAgency === "no"} className="mr-2 size-4" /> no
                  </label>
                </div>
              </div>
              <button type='submit' className="w-[80vw] bg-[#6C25FF] rounded-[6px] p-3 text-white mt-auto cursor-pointer md:w-[25vw] md:mt-10">Create Account</button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Signup
