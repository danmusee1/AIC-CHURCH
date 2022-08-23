import React from 'react'
import Image from 'next/image'
import { FaPeopleCarry } from "react-icons/fa";

export default function Card2() {
  return (
    <div>
          <div className="lg:flex lg:space-x-40 pl-2 lg:pl-10  pb-20 lg:pt-20">
          <div className="container lg:w-1/2  ">
              
              <div className="img1 ">
            <Image className="img1 rounded-lg "  src="https://352zl3r81ot2rnkzo1r0n6uj-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/deep-spirituality-podcast.jpg" height="350px" width="350px"/>
          </div>
          <div className="img2">
            <Image className="img2 rounded-lg  "  src="https://352zl3r81ot2rnkzo1r0n6uj-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/deep-spirituality-podcast.jpg" height="350px" width="350px"/>
          </div>
            
            
            </div>
            <div className="  lg:pr-20 justify-center block p-6 rounded-lg shadow-lg  ">
            <FaPeopleCarry className=" text-6xl text-blue-500 cursor-pointer hover:text-yellow-600" />
                <h1 className="pb-2 pt-10 text-sky-900 text-2xl lg:text-4xl font-bold mb-2">    

                Find a small group that matches your life point.
</h1>
                <h1 className="text-gray-600 text-lg lg:text-xl pb-5">A theme we embrace at the AIC UMOJA Church is 
                What makes church special is not just the event, but also the relationships we build that help us stay faithful to God.</h1>

                <h1 className="text-gray-600 text-lg lg:text-xl pb-5 lg:pb-10">Whether youre a single professional, a college student or a parent of a special needs child, we have a ministry that we’d love for you to be a part of. Check out our ministries page to find a small group that you can get connected with..</h1>

                <button className="text-blue-600 text-lg font-bold">Browse ministries
</button>
            </div>
            
          
        
        </div>
        
    </div>
  )
}
