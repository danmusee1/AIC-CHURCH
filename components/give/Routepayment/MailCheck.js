import React from 'react'
import Image from 'next/image'
import { FaLocationArrow} from "react-icons/fa";
export default function MailCheck() {
  return (
    <div className="pt-20 pb-20 lg:pl-20 pl-5 pr-5">
        <div className='lg:flex'>
        <div className='lg:w-2/3 lg:pr-20'>
        <h1 className='text-cyan-700  text-2xl lg:text-3xl font-bold mb-2'>
        Mail a check
           </h1>
        <h1 className='lg:w-2/3 text-gray-500 text-lg pb-5'> 
        If youd prefer to make a donation via check or use online bill pay,
         we are happy to oblige! Simply mail a check to the following address:</h1>
        <div className=''>
            <div className='flex'>
            <FaLocationArrow  className="pb-5 text-5xl cursor-pointer text-blue-400 hover:text-red-600"/>
            <h1 className=' text-gray-900 font-bold text-lg pb-5'> 
        AIC UMOJA Church
        </h1>
            </div>
        <div className='pl-10'>
        <h1 className=' text-gray-500 text-lg pb-5'> 
        2479 E. Bayshore Rd Ste 185
        </h1>
        <h1 className=' text-gray-500 text-lg pb-5'> 
        Palo Alto CA 94303
        </h1>
        </div>
        
        </div>
        
        <div className=''>
          <h1 className=' text-gray-500 text-sm font-bold pb-5'>
          Questions? Contact us
          </h1>

        </div>
          
          </div>
          <div className=' lg:pr-20 lg:p-4 md:p-8 bg-white shadow-lg img-hover-zoom--point-zoom:hover img img-hover-zoom--point-zoom img'>
          <Image className="" src="https://352zl3r81ot2rnkzo1r0n6uj-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/donate-02.jpg" alt="image" height="500" width="700"/>
          </div>
        </div>
    </div>
  )
}
