import Image from 'next/image'
import React from 'react'

export default function BackgroundLocationdown() {
  return (
    <div>
    <div className="   ">
    <div id='location_downbackground1'className=''>
      <div className="pt-10 pb-10 lg:flex lg:justify-between "> 
      <div className="lg:w-1/2 lg:pl-20 grid pl-5 pb-5 lg:pb-5  ">
        <h1 className="  text-white-900 text-2xl lg:text-5xl lg:text-4xl font-bold mb-2">
        Subscribe for inspiration</h1>
        <h1 className="  text-white-900 text-lg lg:text-lg font-semibold mb-2">
        Sign up for Deep Spiritualitys
         newsletter “Kick-Start Your Quiet Time” 
         and get devotionals in your inbox, 3 days a week.</h1>

        
        </div>
        <div className='lg:flex lg:w-1/2 lg:pl-20  lg:pr-20 lg:pt-10  '>
        <div className=" w-full">
    
      <input className="w-full appearance-none block  bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500" id="grid-password" type="email" placeholder=" Email Address"/>
      
    </div>
    <div className='lg:pl-10 w-full pt-2'>
        <button className=" w-full  ease-out duration-300  h-10 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 text-gray-900 text-1xl font-bold mb-2">
          Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
  
)
}
