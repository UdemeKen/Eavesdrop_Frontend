import React from 'react'
import Logo from '../assets/EavesLogo.png';
import HeroImage from '../assets/HeroImage.png';
import { Link } from 'react-router-dom';

export default function Homepage() {
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
                    to={"/guest/login"}
                    className='px-3 sm:px-8 py-0 sm:py-1 rounded-md capitalize text-xs sm:text-base text-black hover:text-white hover:bg-blue-700 transition duration-300 ease-in-out'>login</Link>
                </div>
                <div>
                    <Link 
                    to={""}
                    className='bg-blue-700 hover:bg-blue-500 px-3 sm:px-6 py-1 sm:py-1 rounded-md text-white text-xs sm:text-base transition duration-300 ease-in-out'>contact us</Link>
                </div>
            </div>
        </div>
        <hr />
        <div className='flex flex-col sm:flex-row justify-between space-y-4 mx-2'>
            <div className='flex flex-col space-y-8 sm:space-y-20 my-4 sm:my-10 sm:mx-4'>
                <div className='text-center font-bold text-2xl sm:text-7xl text-blue-700'>
                    <h1>Your No. 1 Social Pulse Analyzer</h1>
                </div>
                <div className='flex flex-col justify-center space-y-4 sm:space-y-10'>
                    <p className='font-semibold text-lg'>Our Solution makes it easy to:</p>
                    <ul className='list-disc list-inside sm:text-lg'>
                        <li>Unlock valuable insights from the social chatter.</li>
                        <li>Analyze Real-time sentiment analysis and trend.</li>
                        <li>Monitor Online Trends.</li>
                        <li>Elevate your brand with data-driven decisions.</li>
                    </ul>
                </div>
                <div>
                    <Link to={"/guest/signup"} className='bg-blue-700 hover:bg-blue-500 text-white text-xs sm:text-base px-4 sm:px-8 py-1 sm:py-2 rounded-md transition duration-300 ease-in-out'>Get started</Link>
                </div>
            </div>
            <div className='sm:pt-20'>
                <img 
                    src={HeroImage}
                    alt='HeroImage'
                    className='w-full h-full'
                />
            </div>
        </div>
        <div className='border-t-2 capitalize sm:mt-20'>
            <ul className='flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-20 py-4 sm:py-10 text-blue-700 font-semibold'>
                <li><Link>about us</Link></li>
                <li><Link>our partners</Link></li>
                <li><Link>join our team</Link></li>
                <li><Link>connect with us</Link></li>
            </ul>
        </div>
    </div>
  )
}
