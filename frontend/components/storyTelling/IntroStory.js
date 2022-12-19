import React from 'react'
import Image from 'next/image'
import { FaHeart } from "react-icons/fa";

export default function IntroStory() {
    return (
        <div className='bg-zinc-50'>
              <div className="lg:flex  lg:space-x-40 pl-2 lg:pl-10 lg:pr-20 pb-40 lg:pt-20">
                <div className="pl-5 lg:w-1/2  justify-center block p-6 rounded-lg  ">
                <FaHeart className=" text-4xl text-yellow-500 cursor-pointer hover:text-yellow-600" />
                    <h1 className="pb-2 pt-5 text-gray-800 text-3xl lg:text-4xl font-bold mb-2">    
                    Jesus told stories that changed the world and changed peoples lives.</h1>
                    <h1 className="text-gray-600 text-xl lg:text-lg pb-5">Jesus parables are simple yet profound 
                    stories that teach us how to connect with God. 
                    In just a few short sentences, these stories make God real and personal.</h1>
    
                    <h1 className="text-gray-600 text-xl lg:text-lg pb-5 lg:pb-10">What follows is a combined
                     library of devotionals, videos, and podcast episodes from both Deep Spirituality
                      and the AIC UMOJA Church that will help
                     you dig deeper into a few of these powerful parables.</h1>
    
                    <button className="text-blue-600 text-lg font-bold">Learn more</button>
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