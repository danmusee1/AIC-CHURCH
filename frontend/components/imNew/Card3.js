import React from 'react'
import Image from 'next/image'
import { FaHeart } from "react-icons/fa";

export default function Card3() {
  return (
    <div>
          <div className="lg:flex lg:space-x-40 pl-2 lg:pl-10  pb-40 lg:pt-20">
            <div className="pl-5 lg:w-1/2  justify-center block p-6 rounded-lg shadow-lg  ">
            <FaHeart className=" text-4xl text-blue-500 cursor-pointer hover:text-yellow-600" />
                <h1 className="pb-2 pt-5 text-blue-800 text-2xl lg:text-4xl font-bold mb-2">    
Get involved in one of our doing good projects.</h1>
                <h1 className="text-gray-600 text-lg lg:text-xl pb-5">A theme we embrace at the AIC UMOJA Church is 
                “God and Good.” We believe its important that as Christians we are constantly working to 
                do good in the lives of the people in our community, 
                regardless of religious affiliation.</h1>

                <h1 className="text-gray-600 text-lg lg:text-xl pb-5 lg:pb-10">Were proud of our members whove embraced
                 this call, and are inspired by the different “doing good” efforts theyve championed. 
                 Check out our volunteer
                 page to learn about how you can get involved.</h1>

                <button className="text-blue-600 text-lg font-bold">Learn more</button>
            </div>
            <div className="container lg:w-1/2 ">
              
              <div className="img1 ">
            <Image className="img1 rounded-lg "  src="https://352zl3r81ot2rnkzo1r0n6uj-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/deep-spirituality-podcast.jpg" alt="image" height="350px" width="350px"/>
          </div>
          <div className="img2  ">
            <Image className="img2 rounded-lg  "  src="https://352zl3r81ot2rnkzo1r0n6uj-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/deep-spirituality-podcast.jpg" alt="image" height="350px" width="350px"/>
          </div>
            
            
            </div>
          
        
        </div>
        
    </div>
  )
}
