import Image from 'next/image'
import React from 'react'

export default function BackgroundVolunteer() {
  return (
    <div>
    <div className="  pb-20 ">
    <div id='volunteer_background'className=''>
      <div className="pt-60  lg:pl-20 grid justify-items-center"> 
      <div className="grid justify-items-center grid pb-5 lg:pb-10  ">
        <h1 className="  text-white-900 text-5xl lg:text-6xl font-bold mb-2">
        Doing good </h1>
        <div className='lg:flex grid justify-items-center'>
        <h1 className="  text-white-900 text-5xl lg:text-6xl font-bold mb-2">
         in the </h1>
         <h1 className="lg:pl-2  text-white-900 text-5xl lg:text-6xl font-bold mb-2">
          community</h1>
        </div>
        
        
        </div>
        <h1 className="lg:w-1/3 text-center pb-5 text-white-700 text-lg font-bold ">Get involved in making the Bay Area a better place by participating in our volunteer programs.</h1>
        <button className=" ease-out duration-300 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 text-gray-900 text-1xl font-bold mb-2">connect with us</button>
      </div>
    </div>
    </div>
  </div>
  
)
}
