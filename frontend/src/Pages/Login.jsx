import React from "react";
import Navbar from "./Navbar";
import loginassest from "../assets/loginassest.png"
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useNavigate ,Link} from "react-router";
const Login = () => {
  const userData = useSelector((state) => state.userslice);

  const navigate = useNavigate();


  const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
    const onChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(userData.email===formData.email && userData.password===formData.password){
      navigate('/dashboard');
      
    }else{
      alert("Invalid Email or Password")
    }
    console.log("Login Data Stored in Redux:", formData);
  }
  return (
    <div>
      <Navbar />
      <div className="text-2xl font-bold text-[#1D2226] md:text-4xl mt-10 ml-[20px] md:ml-0 md:flex md:justify-center">
        Signin to your <br className="md:hidden" />
        PopX account
      </div>
      <div className="text-lg md:text-xl md:mt-5 md:ml-0 ml-[20px] mt-2 md:flex md:justify-center">
        Lorem ipsum dolor sit amet, <br className="md:hidden" /> consectetur
        adipisicing elit.
      </div>
       <div className=" flex flex-col md:flex-row md:justify-evenly md:items-center">
            <div className=' md:bg-gray-100 md:rounded-lg  md:shadow-2xl md:border-2 border-gray-200 md:mt-10 md:w-[40vw] md:flex hidden justify-center'>
              <img src={loginassest} alt="loginassest" className='hidden md:flex w-[32vw]'/>
            </div>
        <div className="relative"> 
          <form className="flex flex-col items-center md:w-[40vw] md:justify-center w-[80vw] mx-auto md:rounded-lg  p-5 md:h-[50vh] h-[50vh] md:shadow-2xl md:border-2 border-gray-200" onSubmit={handleSubmit}> 
            <div>
            <label className="absolute   bg-white md:bg-gray-100 text-[#6C25FF] rounded-2xl mt-2 text-[18px] ml-2">email address</label>
            <input  type="email" name="email" id="email"  className="w-[80vw] h-[45px] border-2 border-gray-300 rounded-md mt-5 p-0.5 md:w-[30vw]" placeholder="Enter email address" onChange={onChange} />
            </div>
            <div className="mt-5">
            <label className="absolute  bg-white text-[#6C25FF] rounded-2xl mt-2 text-[18px] ml-2 md:bg-gray-100">Password</label>
            <input  type="text" name="password" id="password"  className=" w-[80vw] h-[45px] border-2 border-gray-300 rounded-md mt-5  p-0.5 md:w-[30vw]" placeholder="Enter Password" onChange={onChange}/>
            </div>
            <button className="w-[80vw] bg-[#6C25FF] rounded-[6px] p-3 text-white mt-5 cursor-pointer md:w-[25vw] md:mt-20">Login</button>
            <Link to={'/signup'} className='font-semibold text-blue-600 cursor-pointer'>Create Account</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
