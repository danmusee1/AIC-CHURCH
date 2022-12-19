import React from 'react'
import Image from 'next/image'
import Link from "next/link"
import {motion} from "framer-motion"
export default function Podcast() {

  return (
    <div className=" bg-gray-200     ">
    <div className=" lg:flex lg:pl-10   pt-5 pb-20  ">
       <div className='ml-10 pt-20 '>
<h1 className=' text-1xl text-blue-400/75 font-bold'>WEEKLY PODCAST</h1>
<div className="">
<h1 className=' text-2xl   lg:text-4xl text-blue-700 font-bold'>Deep </h1>
<h1 className=' text-2xl   lg:text-4xl text-blue-700 font-bold'>spirituality</h1>
</div>
<h1 className=' font-bold pt-2'>subscribe:</h1>

       </div>
       <div className="pl-10 pt-20 relative lg:pl-40  pr-10">
       <Image className="rounded-lg   " src="https://352zl3r81ot2rnkzo1r0n6uj-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/deep-spirituality-podcast.jpg" alt=""   height="200%" width="200%"/>
       </div>
       <div
       
       className="ml-5 pt-10 lg:pt-40 ">
    <motion.div
       
       initial={{
         x:-100,
         opacity:0,
     }}
     transition={{
         duration:1.2,
     }}
     whileInView={{
         opacity:1,
         x:0,
     }}
  viewport={{
      once:true,
  }} >
    <h1 className=' text-1xl text-blue-400  '>LATEST EPISODES</h1>
    </motion.div>
       
    <motion.div
       
       initial={{
         x:-100,
         opacity:0,
     }}
     transition={{
         duration:2.2,
     }}
     whileInView={{
         opacity:1,
         x:0,
     }}
  viewport={{
      once:true,
  }} >
        <Link href="/media">
      <h1 className='cursor-pointer link link-underline link-underline-black underline decoration-2  underline-offset-8 font-bold'>Visit Website</h1>
    </Link>
        </motion.div>
        
       </div>
    </div>
    </div>
  )
}
