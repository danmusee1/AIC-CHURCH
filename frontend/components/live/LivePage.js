import React from 'react'
import Image from 'next/image'
import YoutubeVideoPlayer from '../YoutubeVideoPlayer'

export default function LivePage() {
  return (
    <div className='transition-all duration-1000'>
       
        <div className="rounded-b-full pb-20 lg:pb-80 bg-teal-100  lg:flex flex-row-reverse pt-20  lg:pt-40 ">
       
     <div className=" pr-5 pb-5 pl-5">
     <Image src="https://media.gettyimages.com/photos/detail-of-the-youtube-logo-outside-the-youtube-space-studios-in-on-picture-id1149449091" alt="image" height="1251%" width="2050%"/>
       
      </div>
      <div className="lg:pt-10 pl-5 lg:pl-20 pr-5 lg:pr-20 grid justify-center block">
        <div className=''>
        <h1 className="text-gray-900 text-3xl lg:text-6xl font-bold mb-10">
          Join us Sundays at 11am for one Quick Thought
        </h1>
        </div>
        <div className=''>
        <h1 className="text-gray-700 text-1xl mb-10">
        Weekly deep dives into the Bible to build our faith and set us 
        up for a great week. Join us Sunday mornings for a virtual, 
        bite-sized online church experience!
        </h1>
        </div>
        <div>
   
        <button className="ease-out duration-300 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 text-gray-900 text-1xl font-bold mb-2">connect with us</button>
        </div>
      </div>
      
     </div>
    
    </div>
  )
}
