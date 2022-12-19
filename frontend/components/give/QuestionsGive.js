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
       <div className="space-y-10 text-base font-medium text-gray-500 grid  place-content-center ">
        <h1>Often it is because not all the asterisk * information
       fields were filled out or the Captcha “Im not a robot” box was 
       not checked. If your credit card transaction was successfully processed, 
       you will receive a donation receipt. If all of these steps were followed
        and you are still not seeing it on your statement,
       please contact giving@AIC.cc and we will help you.</h1>
       </div>
        
       
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
     <div className="space-y-10 text-base font-medium text-gray-500 grid  place-content-center">
      <h1 >If you are giving by credit card, 
     make sure you answer the question,
      “Do you want your donation to go towards a specific location?”</h1> 
      <h1 >If you are giving by online 
      bill pay or mail-in check, make sure
       you include your sector in the memo section.</h1>
       <h1 >For PayPal Giving Fund, make sure you uncheck 
       the anonymous box. We will be able to determine what sector you are in. If you prefer, you can also contact giving@AIC.cc to let us know. PayPal Giving Fund does
        not offer charities the ability to specify where the donation is going.</h1>
      </div>
     
      
      
     
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
     
     <div className="space-y-10 text-base font-medium text-gray-500 grid  place-content-center">
     <h1 >Yes. You can mail your contribution to the following address:</h1> 
     <div>
     <h1 >AIC UMOJA CHURCH.</h1>
     <h1 >Pewa street, Off Moi drive,</h1>
     <h1 >Umoja 1 Nairobi, Kenya.</h1>
     </div>
     

      <h1 >Make sure you include your sector in the memo section.
         You can then contact aicumoja.nrb@gmail.com to confirm that
         we received your contribution.</h1>
     </div>
     
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
     
     <div className="space-y-10 text-base font-medium text-gray-500 grid  place-content-center">
      <h1 >Most banks have an online bill pay service.
         Go to your banks online bill pay, enter the churchs 
        name (AIC UMOJA Church) and the address:</h1> 
      
       <h1 >Make sure you indicate your sector in the memo section. Generally, online bill pay takes 5-7 days to process.</h1>
      </div> 
     
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
     
     <div className="space-y-10 text-base font-medium text-gray-500 grid  place-content-center">
     <h1 >The PayPal Giving Fund is a service provided by
       PayPal for charities to receive donations. AIC UMOJA Church is YET TO BE a registered 501(c)(3) public 
       charity with the PayPal Giving Fund. The benefits of 
       the PayPal Giving Fund are no transaction fees and a 
       receipt is given when a donation is made. 
      You will need a PayPal account to use this servic</h1> 
     <h1 >You can also give using your credit card on 
      our website at AIC.cc/give. It works like any 
      other typical credit card transaction. Make sure you fill out all the required fields and check the Captcha – “I’m not a robot” box. Once your credit 
      card donation is processed, you will receive a receipt.</h1>
      <h1 >We have no preference between the PayPal Giving 
        Fund and credit card donation. However, if you would
         like to avoid credit card transaction fees, 
        you can use the PayPal Giving Fund.</h1>
     </div> 
     
     }
                    </div>
                    <div className='pt-5'>
      <FaPlusCircle onClick={()=> setShow4(!show4)} className="text-4xl cursor-pointer text-blue-400 hover:text-red-600" >
        {show4 === true ? "hide Div" : "show Div"}
      </FaPlusCircle>
      
    </div>
            </div>
            <div className=" line pl-5 pr-5  flex justify-between   ">
                <div className="">
                <h1 className='pt-5 pb-5 text-cyan-700 hover:text-sky-400  text-xl lg:text-xl mb-2 '>
                How do I know that my digital giving was received by the AIC?</h1>
                {!show5 &&
     
     <div className="space-y-10 text-base font-medium text-gray-500 grid  place-content-center">
     <h1 >Contact giving@AIC.cc and we will confirm that we have received your digital donation</h1> 
     
     </div> 
     
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
