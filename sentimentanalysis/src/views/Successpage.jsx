import React from 'react'
import { Link } from 'react-router-dom';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';

export default function Successpage() {
  return (
    <div>
        <div className='flex flex-col justify-center items-center w-full px-8 mt-20'>
          <div className='flex flex-col items-center justify-center bg-blue-700 sm:w-80 h-60 rounded-t-xl w-full'>
            <CheckBadgeIcon className='w-40 h-40 text-white'/>
            <h1 className='capitalize text-xl text-white'>registration success</h1>
          </div>
          <div className='bg-gray-100 sm:w-80 h-60 rounded-b-xl flex flex-col items-center justify-center mb-20 w-full'>
            <p className='text-center font-semibold text-blue-700 mt-10 px-2 sm:px-0'>Please verify your email by clicking on the link that has been sent to you.</p>
            <div className='flex justify-center my-10'>
              <Link
                to={"/homepage"} 
                className='capitalize text-center text-white font-semibold bg-blue-700 hover:bg-blue-500 rounded-md px-4 py-1 transition duration-300 ease-in-out'
              >
                back to homepage
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}
