import React from 'react'
import Image from 'next/image'

export default function Groups() {
  return (
    <div className=" pt-20 pb-5 pl-20 space-y-20">
        <div className="flex z-10">
        <div className=" bg-gray-400 w-3/4 pt-20 justify-center block p-6 rounded-lg shadow-lg bg-gray-400 max-w-3xl ">
            <div className="flex pl-20 pb-20 pt-20">
            <div className="pl-10 space-y-5  justify-center block p-6 rounded-lg shadow-lg bg-gray-400 max-w-sm">
                <h1 className="text-gray-900 text-4xl font-bold mb-2">    Build Family with others in your stage of life.</h1>
                <h1 className="text-gray-700 text-1xl mb-4">Church is great, but don’t let the experience end when the service does. Our ministries meet in small groups outside of weekly services for fun activities, community service and group Bible discussions.</h1>
                <button>View ministries</button>
            </div>
            
           
        
        </div>
        
        </div>
        <div className="pt-20 col-span-12 md:col-span-auto md:col-start-7 md:col-end-13 md:row-start-1 md:row-end-1 -mt-8 md:mt-0 relative z-10 px-4 md:px-0  ">
            <div className="p-4 md:p-8 bg-white shadow-lg">
            <Image className=" absolute inset-0 w-full h-full object-cover" src="https://352zl3r81ot2rnkzo1r0n6uj-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/pic-friends.jpg" alt="" height="500px" width="600px"/>
        </div>
        </div>
        </div>
        //start
       
<div className="ml-0 grid grid-cols-12 md:items-center w-full max-w-screen-sm md:max-w-screen-md mx-auto px-4">
    <div class="col-span-12 md:col-span-auto md:col-start-1 md:col-end-9 md:row-start-1 md:row-end-1 bg-red-500">
        <a class="" href="#" title="Image Link">
            <picture className="relative block w-full h-0 pb bg-gray-400 overflow-hidden shadow-lg  pt-40 pb-80" >
                <Image className="  absolute inset-0 w-full h-full object-cover" src="https://352zl3r81ot2rnkzo1r0n6uj-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/pic-friends.jpg" alt="A random image from Unsplash" height="500px" width="600px"/>
            </picture>
        </a>
    </div>
    <div class="col-span-12 md:col-span-auto md:col-start-7 md:col-end-13 md:row-start-1 md:row-end-1 -mt-8 md:mt-0 relative z-10 px-4 md:px-0">
        <div class="p-4 md:p-8 bg-white shadow-lg">
            <p class="mb-2 text-lg leading-none font-medium">
                <a class="" href="#" title="Heading Link">
                    Card Title
                </a>
            </p>
            <p class="mb-2 text-sm text-gray-700">
                Lorem ipsum dolar sit amet
            </p>
            <p class="text-xs text-gray-500">
                Published @ 
                <time datetime="">
                    01/01/2021
                </time>
            </p>
        </div>
    </div>
</div>
        
    </div>
  )
}
