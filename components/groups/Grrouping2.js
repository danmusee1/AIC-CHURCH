import React from 'react'
import Image from 'next/image'

export default function Grrouping2() {
  return (
    <div className="  pb-20  lg:pl-20 space-y-20">
    <div className="lg:flex lg:mr-40 lg:space-x-20  lg:z-10">
   
        <div className="absolute   pt-20 col-span-12 md:col-span-auto md:col-start-7 md:col-end-13 md:row-start-1 md:row-end-1 -mt-8 md:mt-0 relative z-10 px-4 md:px-0  ">
        <div className="lg:p-4 md:p-8 bg-white shadow-lg img-hover-zoom--point-zoom:hover img img-hover-zoom--point-zoom img">
        <Image className=" absolute inset-0 w-full h-full object-cover" src="https://352zl3r81ot2rnkzo1r0n6uj-wpengine.netdna-ssl.com/wp-content/uploads/2022/05/Parable-Series-Featured-Images-1536x864.jpeg" alt="" height="500px" width="600px"/>
    </div>
    </div>
        
       
    
   
 <div className=" bg-gray-400 lg:w-3/4 pt-20 justify-center block lg:p-6 rounded-lg shadow-lg bg-gray-400 lg:max-w-3xl ">
 <div className="flex pl-2 lg:pl-20 pb-20 lg:pt-20">
    <div className="pl-10 space-y-5  justify-center block p-6 rounded-lg shadow-lg bg-gray-400 max-w-sm">
            <h1 className="text-gray-900 text-4xl font-bold mb-2">    Jesus and the Power of Storytelling</h1>
            <h1 className="text-gray-700 text-1xl mb-4">A new series about the parables of Jesus and how they make God personal to us. Check out the combined library of content from both Deep Spirituality and the Bay Area Christian Church.</h1>
            <button>View ministries</button>
        </div>
        </div>
        </div>
    </div>
   
    
   
    
    
</div>
)
}
