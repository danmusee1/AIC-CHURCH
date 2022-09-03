import React from 'react'
import Image from 'next/image'

import { FaLocationArrow } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaTablet } from "react-icons/fa";
import Link from 'next/link';

export default function FriendsCards() {
  return (
    <div className="pt-20 pb-20 justify-center block bg-blue-100   ">
        <div className='space-y-20'>
        <div className="lg:ml-20 pl-10 pr-10 lg:pl-80 space-y-5  lg:justify-center block ">
            <h1 className="text-gray-900 text-2xl lg:text-4xl font-bold mb-2"> 
            Discover friends, family, and  <a className="underline   decoration-sky-500/70">purpose</a> </h1>
            <h1 className="lg:pl-20 text-gray-700 lg:text-2xl mb-4">check out different ways to get involved with AIC</h1>
        </div>
        
        <div className=" lg:flex  pl-5 pr-5  lg:ml-20 space-y-5 ml-5 mr-5 lg:space-x-5 lg:justify-center block">
        <Link href='/location'>
            <div className="relative mt-5 img-hover-zoom--brightness img img-hover-zoom--brightness:hover img">
            
             
              <Image className="rounded-lg  "  src="https://352zl3r81ot2rnkzo1r0n6uj-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/deep-spirituality-podcast.jpg"  title="mammals" alt="" layout="intrinsic" width="350" height="420px"/>
             
              <div className='grid justify-items-center'>
                <h1 className=' absolute pt-20 pl-5 pr-5 inset-0 z-10  flex justify-center items-center text-3xl text-white font-bold'>
                  Find the service nearest to you.
                  </h1>
              <div className='absolute pt-20 pl-5 pr-5 inset-0 z-10   text-3xl text-white font-bold'>
              <FaLocationArrow className="text-4xl cursor-pointer hover:text-yellow-600" />
              </div>
              <div className=" pt-60 opacity-0 bg-gradient-to-t from-indigo-500 hover:opacity-100 duration-300 absolute pl-5 pr-5 inset-0 z-10 flex justify-center items-center text-1xl text-white font-bold ">
              
                Join us at our UMOJA AIC church.
                </div>
              </div>
              
              
            
            </div>

            </Link>
           




            <Link href='/groups'>
            <div className="relative mt-5 img-hover-zoom--brightness img img-hover-zoom--brightness:hover img">
     
              <Image className="rounded-lg  "  src="https://352zl3r81ot2rnkzo1r0n6uj-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/deep-spirituality-podcast.jpg"  title="mammals" alt="" layout="intrinsic" width="350" height="420px"/>
              <div className='grid justify-items-center'>
                <h1 className='absolute pt-20 pl-5 pr-5 inset-0 z-10 flex justify-center items-center text-3xl text-white font-bold'>
                  Connect with a small group.
                  </h1>
              <div className='absolute pt-20 pl-5 pr-5 inset-0 z-10   text-3xl text-white font-bold'>
              <FaUserFriends className="text-4xl cursor-pointer hover:text-yellow-600" />
              </div>
              <div className=" pt-60 opacity-0 bg-gradient-to-t from-indigo-500 hover:opacity-100 duration-300 absolute pl-5 pr-5 inset-0 z-10 flex justify-center items-center text-1xl text-white font-bold ">
              
                Find the ministry that matches your point of life view.
                </div>
              </div>
              
              
            
            </div>

</Link>


              <Link href="/volunteer">
            <div className="relative mt-5 img-hover-zoom--brightness img img-hover-zoom--brightness:hover img">
     
     <Image className="rounded-lg  "  src="https://352zl3r81ot2rnkzo1r0n6uj-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/deep-spirituality-podcast.jpg"  title="mammals" alt="" layout="intrinsic" width="350" height="420px"/>
     <div className='grid justify-items-center'>
       <h1 className='absolute pt-20 pl-5 pr-5 inset-0 z-10 flex justify-center items-center text-3xl text-white font-bold'>
        Want to do good? Volunteer today.
        </h1>
     <div className='absolute pt-20 pl-5 pr-5 inset-0 z-10   text-3xl text-white font-bold'>
     <FaHeart className="text-4xl cursor-pointer hover:text-yellow-600" />
     </div>
     <div className=" pt-60 opacity-0 bg-gradient-to-t from-indigo-500 hover:opacity-100 duration-300 absolute pl-5 pr-5 inset-0 z-10 flex justify-center items-center text-1xl text-white font-bold ">
     
       Find a community service effort to participate in.
       </div>
     </div>      
   </div>
   </Link>


  <Link href="/media">
   <div className="relative mt-5 img-hover-zoom--brightness img img-hover-zoom--brightness:hover img">
      <Image className="rounded-lg  "  src="https://352zl3r81ot2rnkzo1r0n6uj-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/deep-spirituality-podcast.jpg"  title="mammals" alt="" layout="intrinsic" width="350" height="420px"/>
     <div className='grid justify-items-center'>
       <h1 className='absolute pt-20 pl-5 pr-5 inset-0 z-10 flex justify-center items-center text-3xl text-white font-bold'>
        Grow spiritually with online tools.
        </h1>
     <div className='absolute pt-20 pl-5 pr-5 inset-0 z-10   text-3xl text-white font-bold'>
     <FaTablet className="text-4xl cursor-pointer hover:text-yellow-600" />
     </div>
     <div className=" pt-60 opacity-0 bg-gradient-to-t from-indigo-500 hover:opacity-100 duration-300 absolute pl-5 pr-5 inset-0 z-10 flex justify-center items-center text-1xl text-white font-bold ">
     
       Connnect to help you apply the bible to you life.
       </div>
     </div>    
   </div>
   </Link>



         </div>
        </div>
    </div>
  )
}
