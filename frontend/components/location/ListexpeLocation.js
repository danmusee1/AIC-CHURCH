import React from 'react'
import Image from 'next/image'
import { FaMicrophone } from "react-icons/fa";
import { FaSpeakerDeck } from "react-icons/fa";

export default function ListexpeLocation() {
  return (
    <div className="lg:pl-10 pb-40 bg-indigo-50">
          <div className="lg:flex  lg:space-x-40 pl-2 lg:pl-10  pb-40 lg:pt-20">
            <div className="pl-5 lg:w-1/2  justify-center block p-6    ">
            <FaMicrophone className=" text-4xl text-blue-500 cursor-pointer hover:text-yellow-600" />
                <h1 className="pb-2 pt-5 text-sky-800 text-2xl lg:text-4xl font-bold mb-2">    
                
                   What to expect at a typical Sunday worship service</h1>

                <h1 className="text-gray-600 text-xl lg:text-xl pb-5 lg:pb-10"> 
                It can be unnerving going to a new church 
                service, so we want to do everything we can 
                to make your experience great. Here are some 
                of the things you can expect at our services.</h1>
               <div className="lg:flex lg:space-x-10 ">
               <div className="pb-5 text-xl text-gray-600 space-y-5 ">
                    <li>Worship service with a sermon, music and more</li>
                    <li>Childrens ministry classes</li>
                    <li>Spiritual Resource Ministry 
                         inclusive classes for kids with special needs</li>
                </div>
                <div className="text-xl text-gray-600 space-y-5">
                    <li>Ushers to guide and welcome you as you arrive</li>
                    <li>Get connected to join small group events</li>
                    <li>Get connected to join small group events</li>
                </div>
               </div>
                
            </div>
            <div className=" container lg:w-1/2 ">
              
              <div className="imge1 ">
            <Image className="img1 rounded-lg "  src="https://352zl3r81ot2rnkzo1r0n6uj-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/deep-spirituality-podcast.jpg" alt="image" height="750px" width="550px"/>
          </div>
          <div className="imge2">
            <Image className="img2 rounded-lg  "  src="https://352zl3r81ot2rnkzo1r0n6uj-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/deep-spirituality-podcast.jpg" alt="image" height="370px" width="270px"/>
          </div>
            
            
            </div>
          
        
        </div>
        
    </div>
  )
}
