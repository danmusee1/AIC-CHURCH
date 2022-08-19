import Image from 'next/image'
import React from 'react'

export default function Newcommer() {
  return (
    <div>
    <div className="  pb-20 ">
    <div id='background_groups'className=''>
      <div className="pt-40  lg:w-1/3"> 
      <div className="grid pb-5 lg:pb-10  ">
        <h1 className="  text-white-900 text-5xl lg:text-6xl font-bold mb-2">
Find the group thats right for you</h1>
        
        </div>
        <h1 className="pb-5 text-white-700 text-lg ">Our <a className="underline decoration-8 decoration-gray-500/90">ministries</a> provide opportunities to build strong relationships with people who are at a similar life point. </h1>
        <button className=" ease-out duration-300 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 text-gray-900 text-1xl font-bold mb-2">connect with us</button>
      </div>
    </div>
    </div>
  </div>
  
)
}