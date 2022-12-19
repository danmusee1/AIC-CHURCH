import React from 'react'
import Image from 'next/image'
import { FaHeart } from "react-icons/fa";

export default function IntroSpecialContribution() {
    return (
        <div className='bg-zinc-50'>
              <div className="lg:flex  lg:space-x-40 pl-2 lg:pl-10 lg:pr-20 pb-40 lg:pt-20">
                <div className="pl-5 lg:w-1/2  justify-center block p-6 rounded-lg  ">
                <FaHeart className=" text-4xl text-yellow-500 cursor-pointer hover:text-yellow-600" />
                    <h1 className="pb-2 pt-5 text-gray-800 text-3xl lg:text-4xl font-bold mb-2">    
                    Download the ebook: “The Heart of a Builder”</h1>
                    <h1 className="text-gray-600 text-xl lg:text-lg pb-5">With this years Special Contribution,
                     we hope to share just a few aspects of what it means to have the “Heart of a Builder.” Each section 
                     of this ebook includes a blurb from one of our ministry, digital, or administrative staff, who describes 
                     the impact of Special Contribution in a certain area, 
                    along with a person in the Bible that shares this conviction to build.</h1>

    
                    <button className="text-blue-600 text-lg font-bold">Download</button>
                </div>
                <div className="container lg:w-1/3 ">
                  
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