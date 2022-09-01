import React from 'react'
import { FaPlusCircle } from "react-icons/fa";
import { useState } from 'react';
export default function QuestionsGive() {
   
  
   
  return (
    
       
      
    <div >
        <div className="grid  place-content-center">
            <div className="pl-10  pr-10 grid  place-content-center pb-10 lg:pb-20">
                <h1 className='text-cyan-700 text-center  text-2xl lg:text-4xl font-bold mb-2'>Frequently asked questions</h1>
            </div>
            <div className="line pl-5 pr-5  flex justify-between   ">
                <div className="">
                <h1 className='pt-5 pb-5 text-cyan-700 hover:text-sky-400  text-xl lg:text-xl mb-2 '>
                    I made a credit card donation. Why dont I see it on my credit card statement?</h1>
                    
                    </div>
                    <div className='pt-5'>
      <FaPlusCircle className="text-4xl cursor-pointer text-blue-400 hover:text-red-600" />
     
    </div>
   
    
                    
            </div>
           
            
            <div className="line pl-5 pr-5  flex justify-between   ">
                <div className="">
                <h1 className='pt-5 pb-5 text-cyan-700 hover:text-sky-400  text-xl lg:text-xl mb-2 '>
                How do I make sure that my contribution will be for my sector?</h1>
                    
                    </div>
                    <div className='pt-5'>
                    <FaPlusCircle className="  text-4xl cursor-pointer text-blue-400 hover:text-red-600" />
                    </div>
            </div>
            <div className="line pl-5 pr-5  flex justify-between   ">
                <div className="">
                <h1 className='pt-5 pb-5 text-cyan-700 hover:text-sky-400  text-xl lg:text-xl mb-2 '>
                Can I send my contribution into the church and how will I know that AIC received it?</h1>
                    
                    </div>
                    <div className='pt-5'>
                    <FaPlusCircle className="  text-4xl cursor-pointer text-blue-400 hover:text-red-600" />
                    </div>
            </div>
            <div className="line pl-5 pr-5  flex justify-between   ">
                <div className="">
                <h1 className='pt-5 pb-5 text-cyan-700 hover:text-sky-400  text-xl lg:text-xl mb-2 '>
                What is online bill pay and how do I set that up?</h1>
                    
                    </div>
                    <div className='pt-5'>
                    <FaPlusCircle className="  text-4xl cursor-pointer text-blue-400 hover:text-red-600" />
                    </div>
            </div>
            <div className="line pl-5 pr-5  flex justify-between   ">
                <div className="">
                <h1 className='pt-5 pb-5 text-cyan-700 hover:text-sky-400  text-xl lg:text-xl mb-2 '>
                What is the difference between the PayPal Giving Fund and credit card donation<br></br> and which is better?</h1>
                    
                    </div>
                    <div className='pt-5'>
                    <FaPlusCircle className="  text-4xl cursor-pointer text-blue-400 hover:text-red-600" />
                    </div>
            </div>
            <div className="line pl-5 pr-5  flex justify-between   ">
                <div className="">
                <h1 className='pt-5 pb-5 text-cyan-700 hover:text-sky-400  text-xl lg:text-xl mb-2 '>
                How do I know that my digital giving was received by the AIC?</h1>
                    
                    </div>
                    <div className='pt-5'>
                    <FaPlusCircle className="  text-4xl cursor-pointer text-blue-400 hover:text-red-600" />
                    </div>
            </div>


        </div>
    </div>
  )
}
