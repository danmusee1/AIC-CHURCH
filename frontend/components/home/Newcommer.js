import Image from 'next/image'
import {motion} from "framer-motion"
import React from 'react'
import Link from 'next/link';
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function Newcommer() {
  return (
    <motion.div
    initial={{
      x:-200,
      opacity:0,
  }}
  transition={{
      duration:2.2,
  }}
  whileInView={{
      opacity:1,
      x:0,
  }}
  viewport={{
      once:true,
  }}
    >
      <div className="pl-5 pr-5 lg:pl-20 lg:pr-20 pb-20 ">
      <div id='newcommer_background'className=''>
        <div className="pt-20 grid justify-items-center"> 
        <div className="grid pb-5 lg:pb-10 justify-items-center ">
          <h1 className="  text-white-900 text-2xl lg:text-4xl font-bold mb-2">Not sure where to begin?</h1>
          <h1 className=" text-white-900 text-4xl font-bold mb-2"> <a className="underline decoration-8 decoration-gray-500/90">Start here.</a> </h1>
          </div>
          <h1 className="text-white-700 text-lg ">Visit our First Steps page to get an overview of all the ways to </h1>
          <h1 className="text-white-700 text-lg mb-4">get involved with the AIC.</h1>
          <Link href='/imNew'>
          <div className="pt-10">
            <button className="flex ease-out duration-300 py-2 px-4 bg-gray-400 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 text-gray-900 text-1xl font-bold mb-2">
            <FaArrowAltCircleRight className=" text-4xl text-blue-500 cursor-pointer hover:text-yellow-600" />
              <h1 className='pl-1 pt-1'>Get started</h1>
            </button>
          </div>
          </Link>
          
        </div>
      </div>
      </div>
    </motion.div>
    
  )
}
