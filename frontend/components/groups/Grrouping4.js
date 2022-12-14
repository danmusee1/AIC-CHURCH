import React from 'react'
import Image from 'next/image'

export default function Grrouping4() {
  return (
    <div className="  pb-20  lg:pl-20 space-y-20">
    <div className="lg:flex lg:mr-40 lg:space-x-20  lg:z-10">
   
        <div className="absolute   pt-20 col-span-12 md:col-span-auto md:col-start-7 md:col-end-13 md:row-start-1 md:row-end-1 -mt-8 md:mt-0 relative z-10 px-4 md:px-0  ">
        <div className="lg:p-4 md:p-8 bg-white shadow-lg img-hover-zoom--point-zoom:hover img img-hover-zoom--point-zoom img">
        <Image className=" absolute inset-0 w-full h-full object-cover" src="https://352zl3r81ot2rnkzo1r0n6uj-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/ministries-professionals-01.jpg" alt="" height="500px" width="600px"/>
    </div>
    </div>
        
       
    
   
 <div className=" bg-gray-400 lg:w-3/4 pt-20 justify-center block lg:p-6 rounded-lg shadow-lg bg-gray-400 lg:max-w-3xl ">
 <div className="flex pl-2 lg:pl-20 pb-20 lg:pt-20">
    <div className="pl-10 space-y-5  justify-center block p-6 rounded-lg shadow-lg bg-gray-400 max-w-sm">
            <h1 className="text-gray-900 text-4xl font-bold mb-2">    Teen (The Y) ministry: God gives every high schooler a purpose.</h1>
            <h1 className="text-gray-700 text-1xl mb-4">Middle schoolers and high schoolers seeking to answer the “why?” questions of life. We are passionate about friendships and doing good in our communities.</h1>
            <button>Learn More
</button>
        </div>
        </div>
        </div>
    </div>
   
    
   
    
    
</div>
)
}
