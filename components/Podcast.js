import React from 'react'
import Image from 'next/image'
export default function Podcast() {

  return (
    <div className="bg-gray-200  max-h-[600px]    ">
    <div className=" lg:flex max-w-[60%] lg:max-w-[50%] ml-10 lg:ml-20 gap-4 pt-19 pb-10   space-y-10  ">
       <div className='pt-8  '>
<h1 className=' text-1xl text-blue-400/75 font-bold'>WEEKLY PODCAST</h1>
<h1 className=' text-2xl   lg:text-4xl text-blue-400 font-bold'>Deep spirituality</h1>
<h1 className=' font-bold pt-2'>subscribe:</h1>

       </div>
       <div className=" ">
       <Image className="rounded-t-lg " src="https://352zl3r81ot2rnkzo1r0n6uj-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/deep-spirituality-podcast.jpg" alt=""  width="250px" height="250px"/>
       </div>
       <div className="lg:ml-20 lg:pt-20 ">
        <h1 className=' text-1xl text-blue-400  '>LATEST EPISODES</h1>
        <a href="#!">
      <h1 className='underline decoration-2  underline-offset-8 font-bold'>Visit Website</h1>
    </a>
       </div>
    </div>
    </div>
  )
}
