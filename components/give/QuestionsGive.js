import React from 'react'
import { FaPlusCircle } from "react-icons/fa";
import { useState } from 'react';
export default function QuestionsGive() {
    const [show,setShow]=useState(true);
    const [show1,setShow1]=useState(true);
    const [show2,setShow2]=useState(true);
    const [show3,setShow3]=useState(true);
    const [show4,setShow4]=useState(true);
    const [show5,setShow5]=useState(true);
   
  
   
  return (
    
       
      
    <div className='pt-10' >
        <div className="grid  place-content-center">
            <div className="pl-10  pr-10 grid  place-content-center pb-10 lg:pb-20">
                <h1 className='text-cyan-700 text-center  text-2xl lg:text-4xl font-bold mb-2'>Frequently asked questions</h1>
            </div>
            <div className="line pl-5 pr-5  flex justify-between   ">
                <div className="">
                <h1 className='pt-5 pb-5 text-cyan-700 hover:text-sky-400  text-xl lg:text-xl mb-2 '>
                    I made a credit card donation. Why dont I see it on my credit card statement?</h1>
                    {!show &&
     
       <h1 className="text-lg text-gray-500 grid  place-content-center">Often it is because not all the asterisk * information
         fields were filled out or the Captcha “Im not a robot” box was 
         not checked. If your credit card transaction was successfully processed, 
         you will receive a donation receipt. If all of these steps were followed
          and you are still not seeing it on your statement,
         please contact giving@AIC.cc and we will help you.</h1> 
       
       }
                    
                    </div>
                    
                   
                    <div className='pt-5'>
      <FaPlusCircle onClick={()=> setShow(!show)} className="text-4xl cursor-pointer text-blue-400 hover:text-red-600" >
        {show === true ? "hide Div" : "show Div"}
      </FaPlusCircle>
      
    </div>
   
   
    
                    
            </div>
           
            
            <div className="line pl-5 pr-5  flex justify-between   ">
                <div className="">
                <h1 className='pt-5 pb-5 text-cyan-700 hover:text-sky-400  text-xl lg:text-xl mb-2 '>
                How do I make sure that my contribution will be for my sector?</h1>
                {!show1 &&
     
     <h1 className="text-lg text-gray-500 grid  place-content-center">Often it is because not all the asterisk * information
       fields were filled out or the Captcha “Im not a robot” box was 
       not checked. If your credit card transaction was successfully processed, 
       you will receive a donation receipt. If all of these steps were followed
        and you are still not seeing it on your statement,
       please contact giving@AIC.cc and we will help you.</h1> 
     
     }
                    </div>
                    <div className='pt-5'>
      <FaPlusCircle onClick={()=> setShow1(!show1)} className="text-4xl cursor-pointer text-blue-400 hover:text-red-600" >
        {show1 === true ? "hide Div" : "show Div"}
      </FaPlusCircle>
      
    </div>
            </div>
            <div className="line pl-5 pr-5  flex justify-between   ">
                <div className="">
                <h1 className='pt-5 pb-5 text-cyan-700 hover:text-sky-400  text-xl lg:text-xl mb-2 '>
                Can I send my contribution into the church and how will I know that AIC received it?</h1>
                {!show2 &&
     
     <h1 className="text-lg text-gray-500 grid  place-content-center">Often it is because not all the asterisk * information
       fields were filled out or the Captcha “Im not a robot” box was 
       not checked. If your credit card transaction was successfully processed, 
       you will receive a donation receipt. If all of these steps were followed
        and you are still not seeing it on your statement,
       please contact giving@AIC.cc and we will help you.</h1> 
     
     }
                    </div>
                    <div className='pt-5'>
      <FaPlusCircle onClick={()=> setShow2(!show2)} className="text-4xl cursor-pointer text-blue-400 hover:text-red-600" >
        {show2 === true ? "hide Div" : "show Div"}
      </FaPlusCircle>
      
    </div>
            </div>
            <div className="line pl-5 pr-5  flex justify-between   ">
                <div className="">
                <h1 className='pt-5 pb-5 text-cyan-700 hover:text-sky-400  text-xl lg:text-xl mb-2 '>
                What is online bill pay and how do I set that up?</h1>
                {!show3 &&
     
     <h1 className="text-lg text-gray-500 grid  place-content-center">Often it is because not all the asterisk * information
       fields were filled out or the Captcha “Im not a robot” box was 
       not checked. If your credit card transaction was successfully processed, 
       you will receive a donation receipt. If all of these steps were followed
        and you are still not seeing it on your statement,
       please contact giving@AIC.cc and we will help you.</h1> 
     
     }
                    </div>
                    <div className='pt-5'>
      <FaPlusCircle onClick={()=> setShow3(!show3)} className="text-4xl cursor-pointer text-blue-400 hover:text-red-600" >
        {show3 === true ? "hide Div" : "show Div"}
      </FaPlusCircle>
      
    </div>
            </div>
            <div className="line pl-5 pr-5  flex justify-between   ">
                <div className="">
                <h1 className='pt-5 pb-5 text-cyan-700 hover:text-sky-400  text-xl lg:text-xl mb-2 '>
                What is the difference between the PayPal Giving Fund and credit card donation<br></br> and which is better?</h1>
                {!show4 &&
     
     <h1 className="text-lg text-gray-500 grid  place-content-center">Often it is because not all the asterisk * information
       fields were filled out or the Captcha “Im not a robot” box was 
       not checked. If your credit card transaction was successfully processed, 
       you will receive a donation receipt. If all of these steps were followed
        and you are still not seeing it on your statement,
       please contact giving@AIC.cc and we will help you.</h1> 
     
     }
                    </div>
                    <div className='pt-5'>
      <FaPlusCircle onClick={()=> setShow4(!show4)} className="text-4xl cursor-pointer text-blue-400 hover:text-red-600" >
        {show4 === true ? "hide Div" : "show Div"}
      </FaPlusCircle>
      
    </div>
            </div>
            <div className="line pl-5 pr-5  flex justify-between   ">
                <div className="">
                <h1 className='pt-5 pb-5 text-cyan-700 hover:text-sky-400  text-xl lg:text-xl mb-2 '>
                How do I know that my digital giving was received by the AIC?</h1>
                {!show5 &&
     
     <h1 className="text-lg text-gray-500 grid  place-content-center">Often it is because not all the asterisk * information
       fields were filled out or the Captcha “Im not a robot” box was 
       not checked. If your credit card transaction was successfully processed, 
       you will receive a donation receipt. If all of these steps were followed
        and you are still not seeing it on your statement,
       please contact giving@AIC.cc and we will help you.</h1> 
     
     }
                    </div>
                    <div className='pt-5'>
      <FaPlusCircle onClick={()=> setShow5(!show5)} className="text-4xl cursor-pointer text-blue-400 hover:text-red-600" >
        {show5 === true ? "hide Div" : "show Div"}
      </FaPlusCircle>
      
    </div>
            </div>


        </div>
    </div>
  )
}
