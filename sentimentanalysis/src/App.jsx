import { useState } from 'react'
import './App.css' 
import Logo from '../images/EAVESDROP logo.png'

export default function App() {
  return (
   
   <body>
    <div class="border-solid border-2 border-#D9D9D9 ... ">
      
      <div className='flex justify-between' >
       <img src='../images/EAVESDROP logo.png' width='15%'/>

      <div className='mt-5 mr-10'>
      
    <div className='border bg-blue-900 rounded-full'>
        <svg fill="none" height="40" stroke-width="1.5" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.271 18.3457C4.271 18.3457 6.50002 15.5 12 15.5C17.5 15.5 19.7291 18.3457 19.7291 18.3457" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      </div>
    </div>

     </div>
    <div className="mt-5 ml-10">
      <button>
       <svg width="60" height="60" viewBox="0 0 95 91" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M79.1668 41.7084H30.9939L53.121 20.5129L47.5002 15.1667L15.8335 45.5L47.5002 75.8334L53.0814 70.4871L30.9939 49.2917H79.1668V41.7084Z" fill="#4F4F4F"/>
       </svg>
     </button>
    </div>
   
    <div>
       <h1 className="mt-10 flex justify-center  bg-center  text-3xl font-bold">
        Enter brand, competitor to monitor  
      </h1>
    </div>
    
  

   <div class=" sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" action="#" method="POST">

      <div>
        <div class="mt-5">
          <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

    </form>

    <div className='flex'>

    <p class=" flex-auto w-64 text-left text-sm text-gray-500 font-Manrope">
      Type comma seperated phrases to monitor
      
    </p>
    </div>
    <button class='" mt-5 box-border h-10 w-full text-center rounded-none bg-sky-500 hover:bg-sky-700 text-white'> Next</button>
     </div>
  
      
  </body>
  )
}
