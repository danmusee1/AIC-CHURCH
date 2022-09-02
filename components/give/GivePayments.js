import React from 'react'
import { FaPaypal } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { useState } from 'react';
import PaypalGive from './Routepayment/PaypalGive';
import CreditCard from './Routepayment/CreditCard'
import MailCheck from './Routepayment/MailCheck';
import Mpesa from './Routepayment/Mpesa';
export default function GivePayments() {
  const [showp,setShowp]=useState(true);
  const [showc,setShowc]=useState(true);
  const [showm,setShowm]=useState(true);
  const [showmpesa,setShowmpesa]=useState(true);
  const [showline,setShowline]=useState(true);
  const [showline1,setShowline1]=useState(true);
  const [showline2,setShowline2]=useState(true);
  const [showline3,setShowline3]=useState(true);
  
  
  return (
    <div className="lg:pl-20 pl-5 pr-5 lg:pr-20 ">
        <div className="lg:flex place-content-evenly  line   ">
            <div className="flex  place-content-evenly  line">

            
            <div className="lg:pr-40  ">
            <FaPaypal onClick={()=> setShowline3(!showline3) || setShowp(!showp)} 
            className="pb-5 text-7xl cursor-pointer text-blue-400 hover:text-red-600" >
            {showp === true ? "hide Div" : "show Div"}
            </FaPaypal>
            <h1 className="font-semibold text-lg   ">Paypal</h1>
            {
            showline3 &&
            <div className="pt-4 linepaypal "></div>
            }
          </div>

          
          
             <div className="ml-5 ">
             <FaCreditCard onClick={()=>setShowline(!showline) || setShowc(!showc) }
              className="pb-5 text-7xl cursor-pointer text-blue-400 hover:text-red-600" >
            {showc === true ? "hide Div" : "show Div"} 
            {showline=== true ? "hide Div" : "show Div"}
            </FaCreditCard>
             <h1 className="font-semibold text-lg">Credit card</h1>
             {
             !showline &&
     <div className="pt-4 linepaypal "></div>
     }
            </div>



            </div>
            <div className="flex place-content-evenly  line">


            <div className="lg:pr-40">
            <FaMailBulk onClick={()=>setShowline1(!showline1) || setShowm(!showm)}
             className="pb-5 text-7xl cursor-pointer text-blue-400 hover:text-red-600" >
            {showm === true ? "hide Div" : "show Div"}
            {showline1=== true ? "hide Div" : "show Div"}
            </FaMailBulk>
            <h1 className="font-semibold text-lg">Mail a check</h1>
            {
            !showline1 &&
     <div className="pt-4 linepaypal "></div>
     }
          </div>


             <div className="">
             <FaMoneyBill onClick={()=>setShowline2(!showline2) || setShowmpesa(!showmpesa)}
              className="pb-5 text-7xl cursor-pointer text-blue-400 hover:text-red-600" >
            {showmpesa === true ? "hide Div" : "show Div"}
            {showline2=== true ? "hide Div" : "show Div"}
            </FaMoneyBill>
             <h1 className="font-semibold text-lg">Mpesa</h1>
             {
             !showline2 &&
     <div className="pt-4 linepaypal "></div>
     }
            </div>


            </div>
            

        </div>
        
      
       {
       
       
       
       showp &&
     
     <PaypalGive/> 
     ||
     !showc &&
     
     <CreditCard/> 
     ||

     !showm &&
     
     <MailCheck/> 
     ||

     !showmpesa &&
     
     <Mpesa/> 
     }
       
      
     
     

    </div>
  )
}
