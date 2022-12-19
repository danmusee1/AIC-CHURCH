import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function BackgroundGivedown() {
  return (
    <div>
    <div className=" pt-20  ">
    <div id='give_background1'className=''>
      <div className="pt-10 pb-10 lg:flex lg:justify-between "> 
      <div className="lg:pl-20 grid pl-5 pb-5 lg:pb-5  ">
        <h1 className="  text-white-900 text-2xl lg:text-5xl lg:text-4xl font-bold mb-2">
        Want to attend a service?</h1>
        
        </div>
        <div className='lg:pr-20 pl-20 '>
          <Link href="/location">
        <button className=" ease-out duration-300 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 text-gray-900 text-1xl font-bold mb-2">View location</button>
        </Link>
        </div>
      </div>
    </div>
    </div>
  </div>
  
)
}
