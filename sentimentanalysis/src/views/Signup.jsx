import React from 'react'
import { Link } from 'react-router-dom';
import { UserIcon } from '@heroicons/react/24/solid';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { LockClosedIcon } from '@heroicons/react/24/solid';

export default function Signup() {

  return (
    <div className='my-10'>
      <div className='flex justify-center mx-4 my-10'>
        <div className='border-2 border-black rounded-xl w-full sm:w-2/5 h-full sm:mx-0'>
          <form>
            <div className='flex flex-col justify-center mx-8 my-10 space-y-8'>
              <div className="flex space-x-4 border-b-2 border-b-black w-full">
                <UserIcon className='w-6 h-6 text-blue-700'/>
                <input 
                id='firstname'
                type='text'
                name='firstname'
                placeholder='Firstname'
                required
                className='bg-transparent focus:outline-none w-full'/>
              </div>
              <div className="flex space-x-4 border-b-2 border-b-black w-full">
                <UserIcon className='w-6 h-6 text-blue-700'/>
                <input 
                id='lastname'
                type='text'
                name='lastname'
                placeholder='Lastname'
                required
                className='bg-transparent focus:outline-none w-full'/>
              </div>
              <div className="flex space-x-4 border-b-2 border-b-black w-full">
                <EnvelopeIcon className='w-6 h-6 text-blue-700'/>
                <input 
                id='email'
                type='email'
                name='email'
                placeholder='Email'
                required
                className='bg-transparent focus:outline-none w-full'/>
              </div>
              <div className='flex space-x-4 border-b-2 border-b-black w-full'>
                <LockClosedIcon className='w-6 h-6 text-blue-700'/>
                <input 
                id='password'
                type='password'
                name='password'
                placeholder='Password'
                required
                className='bg-transparent focus:outline-none w-full'/>
              </div>
              <div className='text-white'>
                <button 
                  type='submit'
                  className='uppercase bg-blue-800 w-full text-center rounded-md py-2 text-sm'>sign up</button>
              </div>
              <div className='text-xs font-semibold text-center'>
                <p>By signing up I agree to the <span className='text-blue-800'>terms & conditions</span> and <span className='text-blue-800'>privacy policy</span></p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <p className='bg-slate-200 text-center text-sm px-4 py-1 rounded-md sm:w-1/2'>Already a user? <span className='text-blue-700'><Link to={"/guest/login"}>Log in</Link></span></p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
