import React from 'react'
import { FaPaypal } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import {motion} from "framer-motion"

export default function Contribution() {
  return (
    <div className='lg:pt-40 pt-10'>
      <div className=''>
        <div className="lg:pt-10 pl-5 lg:pl-20 pr-5 lg:pr-20 ">
            <div    className="">
                <h1 className="text-blue-900 text-1xl lg:text-1xl font-bold mb-2">
                    GIVING</h1>
            </div>
            <div className="pb-10">
                <h1 className='text-gray-900 text-3xl lg:text-4xl font-bold mb-10'>
                Want to make a contribution?<br></br> Give easily 
                using any of the<br></br> following tools.
                </h1>
            </div>
        </div>
        <div className="lg:flex lg:space-x-10  space-y-10 pl-5 pr-10 lg:pl-20 lg:pr-20 pt-10 pb-10">
            
            <div className='lg:pt-10 '>
            <motion.div
       
       initial={{
         x:-100,
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
  }} >
                <FaPaypal className="pb-5 text-8xl cursor-pointer text-blue-400 hover:text-red-600" />
                </motion.div>
                <div className="text-gray-900 text-1xl lg:text-1xl font-bold mb-5">
                    <h1>
                        Download the PayPal app or visit their site.
                        </h1>
                </div>
                <div className='text-gray-500 pb-5'>
                While in the app, navigate to Support a charity and search for AIC UMOJA.
                </div>
                <div className="flex">
                    <h1 className="font-bold">
                    Visit PayPal
                    </h1>
                    <FaPaypal className="pl-5 text-4xl cursor-pointer text-blue-400 hover:text-red-600" />
                </div>
                </div>


                <div className=' '>
                <motion.div
       
       initial={{
         x:-100,
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
  }} >
                <FaCreditCard className="pb-5 text-8xl cursor-pointer text-blue-400 hover:text-red-600" />
                </motion.div>
                <div className="text-gray-900 text-1xl lg:text-1xl font-bold mb-5">
                    <h1>
                    Donate on our website via credit card
                        </h1>
                </div>
                <div className='text-gray-500 pb-5'>
                Visit our online giving page to make a contribution via credit card.
                </div>
                <div className="flex">
                    <h1 className="font-bold">
                    Visit Giving page
                    </h1>
                    <FaCreditCard className="pl-5 text-4xl cursor-pointer text-blue-400 hover:text-red-600" />
                </div>
                </div>


                <div className=' '>
                <motion.div
       
       initial={{
         x:-100,
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
  }} >
                <FaShoppingCart className="pb-5 text-8xl cursor-pointer text-blue-400 hover:text-red-600" />
                </motion.div>
                <div className="text-gray-900 text-1xl lg:text-1xl font-bold mb-5">
                    <h1>
                    Schedule automatic contributions with bill pay.
                        </h1>
                </div>
                <div className='text-gray-500 pb-5'>
                Use your favorite personal finance app
                 or your bank to schedule transactions
                </div>
                <div className="flex">
                    <h1 className="font-bold">
                    Visit Mpesa
                    </h1>
                    <FaShoppingCart className="pl-5 text-4xl cursor-pointer text-blue-400 hover:text-red-600" />
                </div>
                </div>


                <div className=' '>
                <motion.div
       
       initial={{
         x:-100,
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
  }} >
                <FaMailBulk className="pb-5 text-8xl cursor-pointer text-blue-400 hover:text-red-600" />
                </motion.div>
                <div className="text-gray-900 text-1xl lg:text-1xl font-bold mb-5">
                    <h1>
                    Want to keep it old school? Mail a check.
                        </h1>
                </div>
                <div className='text-gray-500 pb-5'>
                You can send checks .
                 Umoja Rd Ste ,
                  umoja inaccore 
                </div>
                <div className="flex">
                    <h1 className="font-bold">
                    Visit Gmail
                    </h1>
                    <FaMailBulk className="pl-5 text-4xl cursor-pointer text-blue-400 hover:text-red-600" />
                </div>
                </div>

        </div>
        <div className="pl-5 lg:pl-20 pb-20 pt-10 space-x-2 flex">
                    <h1 className="font-bold text-blue-700">Questions?</h1>
                    <h1 className="link link-underline link-underline-black font-bold text-blue-700"> View FAQs</h1>
                </div>
        </div>
    </div>
  )
}
