import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import  Facebookicon from '../assets/facebookicon.png';
import  Googleicon from '../assets/googleicon.png';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { LockClosedIcon } from '@heroicons/react/24/solid';

export default function Login() {

  return (
    <div className='my-10'>
        <div className='flex justify-center mx-4 my-10'>
          <div className='border-2 border-black rounded-xl w-full sm:w-2/5 h-full sm:mx-0'>
            <form>
              <div className='flex flex-col justify-center mx-8 my-10 space-y-8'>
                <div className="flex space-x-4 border-b-2 border-b-black w-full">
                  <EnvelopeIcon className='w-6 h-6 text-blue-700'/>
                  <input 
                  id='email'
                  type='email'
                  name='email'
                  placeholder='Email'
                  className='bg-transparent focus:outline-none w-full'/>
                </div>
                <div className='flex space-x-4 border-b-2 border-b-black w-full'>
                  <LockClosedIcon className='w-6 h-6 text-blue-700'/>
                  <input 
                  id='password'
                  type='password'
                  name='password'
                  placeholder='Password'
                  className='bg-transparent focus:outline-none w-full'/>
                </div>
                <div className='flex justify-between text-center text-sm sm:text-base'>
                  <div>Remember me on this device</div>
                  <Link 
                  to={'#'}
                    className='text-blue-800 capitalize'>Forgot password
                  </Link>
                </div>
                <div className='text-white'>
                  <button 
                    type='submit'
                    className='uppercase bg-blue-700 hover:bg-blue-500 w-full text-center rounded-md py-2 text-sm'>log in</button>
                </div>
                <div className='flex justify-center uppercase'>
                  <h2 className='font-semibold'>or</h2>
                </div>
                <div className='flex flex-col justify-center space-y-4'>
                  <div className='flex justify-center items-center space-x-2 border-2 border-blue-800 rounded-md w-full text-center py-1 px-2 font-semibold text-gray-600 text-xs sm:text-base'><span><i><img src={Googleicon} alt='googleicon' className='w-6 h-6'/></i></span><p>Log in with Google</p></div>
                  <div className='flex justify-center items-center space-x-2 border-2 border-blue-800 rounded-md w-full text-center py-1 px-2 font-semibold text-gray-600 text-xs sm:text-base'><span><i><img src={Facebookicon} alt='googleicon' className='w-6 h-6'/></i></span><p>Log in with Facebook</p></div>
                </div>
                <div className='text-xs font-semibold text-center'>
                  <p>You don’t have an account yet? <span className='text-blue-800'><Link to={"/guest/signup"}>Create one!</Link></span></p>
                </div>
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}
