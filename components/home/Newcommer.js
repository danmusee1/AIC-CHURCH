import Image from 'next/image'
import React from 'react'

export default function Newcommer() {
  return (
    <div>
      <div className="pl-5 pr-5 lg:pl-20 lg:pr-20 pb-20 ">
      <div id='show_bg_2'className=''>
        <div className="pt-20 grid justify-items-center"> 
        <div className="grid pb-5 lg:pb-10 justify-items-center ">
          <h1 className="  text-white-900 text-2xl lg:text-4xl font-bold mb-2">Not sure where to begin?</h1>
          <h1 className=" text-white-900 text-4xl font-bold mb-2"> <a className="underline decoration-8 decoration-gray-500/90">Start here.</a> </h1>
          </div>
          <h1 className="text-white-700 text-lg ">Visit our First Steps page to get an overview of all the ways to </h1>
          <h1 className="text-white-700 text-lg mb-4">get involved with the AIC.</h1>
        </div>
      </div>
      </div>
    </div>
    
  )
}
