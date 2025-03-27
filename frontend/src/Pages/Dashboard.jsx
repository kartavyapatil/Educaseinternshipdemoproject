import React, { use } from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
const Dashboard = () => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userslice);
console.log(userData);
useEffect(()=>{
  if(userData.email===""){
    navigate("/login")
    return
  }
},[])

  return (
    <div>
      <div className='flex justify-center mt-3 text-xl md:text-4xl font-bold'>Account Setting</div>
      <div className='bg-gray-400 h-[2px] mt-3'/>
      <div>
        <div className='flex  mt-5 items-center gap-3 p-3 m-3'>
            <div className='relative w-24 h-24 rounded-full object-cover border-2 border-gray-300 mt-5 '>
              <img src="https://www.w3schools.com/howto/img_avatar.png" alt="profile" className='w-24 h-24 rounded-full object-cover'/>
            <span className='absolute bottom-0 right-0 bg-[#6C25FF] rounded-full p-1'>
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960"  width="25px"  fill="#FFFFFF" >
                <path d="M440-440ZM120-120q-33 0-56.5-23.5T40-200v-480q0-33 23.5-56.5T120-760h126l74-80h240v80H355l-73 80H120v480h640v-360h80v360q0 33-23.5 56.5T760-120H120Zm640-560v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM440-260q75 0 127.5-52.5T620-440q0-75-52.5-127.5T440-620q-75 0-127.5 52.5T260-440q0 75 52.5 127.5T440-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Z" />
            </svg>
            </span>

            </div>
            <div>
                <div className='text-xl'>
                    {userData.fullName}
                </div>
                <div className='text-xl'>
                    {userData.email}
                </div>
            </div>
        </div>
      </div>
      <div className='m-2 p-2'>
      Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </div>
    </div>
  )
}

export default Dashboard
