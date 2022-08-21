import React from 'react'
import Image from 'next/image'

export default function Card1() {
  return (
    <div>
          <div className="lg:flex pl-2 lg:pl-10 w-2/3 pb-20 lg:pt-20">
            <div className="pl-5  justify-center block p-6 rounded-lg shadow-lg  ">
                <h1 className="text-gray-900 text-4xl font-bold mb-2">    
Get involved in one of our doing good projects.</h1>
                <h1 className="text-gray-700 text-xl pb-5">A theme we embrace at the Bay Area Christian Church is 
                “God and Good.” We believe its important that as Christians we are constantly working to 
                do good in the lives of the people in our community, 
                regardless of religious affiliation.</h1>

                <h1 className="text-gray-700 text-xl pb-10">Were proud of our members whove embraced
                 this call, and are inspired by the different “doing good” efforts theyve championed. 
                 Check out our volunteer
                 page to learn about how you can get involved.</h1>

                <button>Learn more</button>
            </div>
            
            <div className=" lg:pl-40">
    <Image className="relative" src="https://352zl3r81ot2rnkzo1r0n6uj-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/deep-spirituality-podcast.jpg" alt="imageback" height="300px" width="300px" />
    <Image className="absolute" src="https://352zl3r81ot2rnkzo1r0n6uj-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/deep-spirituality-podcast.jpg" alt="image" height="300px" width="300px" />
</div>
        
        </div>
        
    </div>
  )
}
