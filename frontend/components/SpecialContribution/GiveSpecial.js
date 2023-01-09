import React from 'react'
import { FaPaypal } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";

export default function GiveSpecial() {
  return (
    <div className='shapedividers_com-5131'>
    <div className='pb-20 shapedividers_com-213 '>
         <div className="lg:pt-20 lg:pb-20 pb-10  pl-5 grid justify-items-center">
            <div className="pt-20">
                <h1 className="font-serif  text-cyan-700 text-center text-2xl lg:text-4xl font-semibold mb-2">
                More than one way to  <a className="underline underline-offset-8 decoration-8 decoration-emerald-500">give.</a>
                </h1>
            </div>
            <div className="lg:w-2/3 ">
                <h1 className="text-center text-gray-500 text-lg pb-5 ">
                Choose a way to give to Special Contribution
                </h1>

            </div>
        </div>

        <div className="pb-20 lg:pl-60 pl-5 pr-5  lg:pr-60 lg:flex space-y-20 lg:space-x-8">


        <div className="pl-5  pr-5 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110 lg:w-2/3 border-4  shadow-2xl rounded-lg  pl-5  lg:pt-10  pr-5  ">
            <div    className="pt-10  space-x-5 flex mb-5">
            <div className=''>
        <FaPaypal className=" text-4xl cursor-pointer text-blue-400 " />
        </div>
                <h1 className="text-gray-700 text-2xl lg:text-1xl font-bold mb-2">
                PayPal
                </h1>
            </div>
            <div className=" pb-5">
                <h1 className='text-gray-600 text-1xl lg:text-xl  '>
                
Donate via our PayPal Giving Fund page,
 or use the PayPal app. Simply select 
 “Support a charity” and search for AIC UMOJA CHURCH.
                </h1>
                <h1 className='pb-10 pt-5 text-sm font-bold '>MAKE A DONATION</h1>
            </div>
                   </div>


                   <div className=" border-4 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110 lg:w-2/3 shadow-2xl rounded-lg  pl-5  lg:pt-10  pr-5  ">
            <div    className="pt-10 space-x-5 flex mb-5">
            <div className=''>
        <FaCreditCard className=" text-4xl cursor-pointer text-orange-400 " />
        </div>
                <h1 className="text-gray-700 text-2xl lg:text-1xl font-bold mb-2">
                Credit card
                </h1>
            </div>
            <div className=" pb-5">
                <h1 className='text-gray-600 text-1xl lg:text-xl  '>
                
Make a donation with a credit card payment. You will receive an email 
confirming your payment was successful which can be used for tax purposes.


                </h1>
                <h1 className='pb-10 pt-5 text-sm font-bold '>MAKE A DONATION</h1>
            </div>
                   </div>

   
        </div>

        <div className="lg:pt-10 lg:pl-60 pl-5 pr-5 lg:pr-60 lg:flex space-y-20 lg:space-x-8">


<div className="border-4  transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110 lg:w-2/3 shadow-2xl rounded-lg  pl-5  lg:pt-10  pr-5  ">
    <div    className="pt-10 space-x-5 flex mb-5">
    <div className=''>
<FaMailBulk className=" text-4xl cursor-pointer text-yellow-400 " />
</div>
        <h1 className="text-gray-500 text-2xl lg:text-1xl font-bold mb-2">
        Check or Bill Pay
        </h1>
    </div>
    <div className=" pb-5">
        <h1 className='text-gray-600 text-1xl lg:text-xl  '>

        
If youd prefer to give via check or use online bill pay,
 simply mail a check to AIC at aic. off moi drive Rd. .


        </h1>
        <h1 className='pb-10 pt-5 text-sm font-bold '>MAKE A DONATION</h1>
    </div>
           </div>

           <div className="border-4 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110 lg:w-2/3 shadow-2xl rounded-lg  pl-5  lg:pt-10  pr-5  ">
    <div    className="pt-10 space-x-5 flex mb-5">
    <div className=''>
<FaChartLine className=" text-4xl cursor-pointer text-green-400 " />
</div>
        <h1 className="text-gray-500 text-2xl lg:text-1xl font-bold mb-2">
        Stock donation
        </h1>
    </div>
    <div className=" pb-5">
        <h1 className='text-gray-600 text-1xl lg:text-xl  '>
        

        
If you are interested in making a stock donation or have
 any questions, please contact stockdonations@aic.cc
        </h1>
        <h1 className='pb-10 pt-5 text-sm font-bold '>MAKE A DONATION</h1>
    </div>
           </div>


</div>


</div>


    </div>
  )
}
