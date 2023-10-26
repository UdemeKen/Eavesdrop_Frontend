import React from 'react'
import Logo from '../assets/EavesLogo.png';
import { Link, Outlet } from 'react-router-dom';

export default function GuestLayout() {
  return (
    <div>
      <div className='flex flex-row justify-between items-center capitalize m-2 sm:mx-4'>
          <Link to={"/homepage"}>
              <img 
                  src={Logo} 
                  alt='Logo'
                  className='w-20 sm:w-32 h-10 sm:h-16'
              />
          </Link>
          <div className='flex flex-row sm justify-between space-x-2'>
            <div>
                <Link 
                to={"/login"}
                className='border-2 border-blue-700 px-3 sm:px-8 py-0 sm:py-1 rounded-md capitalize text-xs sm:text-base text-black hover:text-white hover:bg-blue-700 transition duration-300 ease-in-out'>login</Link>
            </div>
            <div>
                <Link 
                to={""}
                className='bg-blue-700 hover:bg-blue-500 px-3 sm:px-6 py-1 rounded-md text-white text-xs sm:text-base transition duration-300 ease-in-out'>sign up</Link>
            </div>
          </div>
      </div>
      <hr />
      <div className='flex flex-row justify-center capitalize text-base sm:text-xl font-semibold text-center mt-20'>
        <h1>Real-time customer perception’s analysis tool</h1>
      </div>
        <Outlet />
    </div>
  )
}
