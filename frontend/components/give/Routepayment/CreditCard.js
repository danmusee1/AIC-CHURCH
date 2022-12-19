import React from 'react'
import Image from 'next/image'
import { FaCreditCard } from "react-icons/fa";


export default function CreditCard() {
  return (
    <div className="pt-20 pb-20 lg:pl-20 pl-5 pr-5">
        <div className='lg:flex'>
        <div className='lg:w-2/3 lg:pr-20'>
        <h1 className='text-cyan-700  text-2xl lg:text-3xl font-bold mb-2'>
        Make a donation via credit card.
           </h1>
        <h1 className='lg:w-2/3 text-gray-500 text-lg pb-5'> 
        Please enter the following information to 
        make a donation online to AIC. You will receive
         a confirmation email once your transaction has been completed.
          This email is required in order for the contribution(s) 
        to be tax-deductible and should be retained for tax purposes.</h1>
        
        <h1 className=' text-gray-500 text-lg pb-5'> All donations given via the PayPal Giving Fund 
        are 100% received by the AIC UMOJA Church. 
        You will not be charged a fee for any transaction.</h1>
        <h1 className=' text-gray-500 text-lg pb-5'> The donation will be used to further the 
        charitable purposes of the AIC. 100% of
         your donation is deductible as a charitable contribution on your federal and state
          income tax returns, subject to general limitations applicable to your personal 
        circumstances. Please consult your tax advisor.</h1>
        <div className=''>
        <button className="flex ease-out duration-300 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 text-gray-900 text-1xl font-bold mb-2">
           <h1 className='text-sm pt-2 text-gray-200 ' >Use credit card</h1>
            <FaCreditCard className="pb-5 pt-2 text-5xl cursor-pointer text-blue-400 hover:text-red-600" />
            </button>
        
        </div>
          
          </div>
          <div className="container lg:w-1/2 ">
              
              <div className="img1 ">
            <Image className="img1 rounded-lg "  src="https://352zl3r81ot2rnkzo1r0n6uj-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/deep-spirituality-podcast.jpg" alt="image" height="250px" width="250px"/>
          </div>
          <div className="img2  ">
            <Image className="img2 rounded-lg  "  src="https://352zl3r81ot2rnkzo1r0n6uj-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/deep-spirituality-podcast.jpg" alt="image" height="250px" width="250px"/>
          </div>
            
            
            </div>
        </div>
    </div>
  )
}
