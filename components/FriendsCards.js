import React from 'react'
import Image from 'next/image'

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
            <div className="mt-5 img-hover-zoom--brightness img img-hover-zoom--brightness:hover img">
            <Image className="rounded-lg  " src="https://352zl3r81ot2rnkzo1r0n6uj-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/deep-spirituality-podcast.jpg" alt="" layout="intrinsic" width="350" height="420px"/>
            </div>
            <div className="img-hover-zoom--brightness img img-hover-zoom--brightness:hover img">
            <Image className="rounded-lg " src="https://352zl3r81ot2rnkzo1r0n6uj-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/deep-spirituality-podcast.jpg" alt="" layout="intrinsic" width="350px" height="420px"/>
            </div>
            <div className="img-hover-zoom--brightness img img-hover-zoom--brightness:hover img">
            <Image className="rounded-lg " src="https://352zl3r81ot2rnkzo1r0n6uj-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/deep-spirituality-podcast.jpg" alt="" layout="intrinsic" width="350px" height="420px"/>
            </div>
            <div className="img-hover-zoom--brightness img img-hover-zoom--brightness:hover img">
            <Image className="rounded-lg " src="https://352zl3r81ot2rnkzo1r0n6uj-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/deep-spirituality-podcast.jpg" alt="" layout="intrinsic" width="350px" height="420px"/>
            </div>
         </div>
        </div>
    </div>
  )
}
