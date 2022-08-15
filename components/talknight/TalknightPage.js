import React from 'react'
import Image from 'next/image'

export default function TalknightPage() {
  return (
  





    <div className='transition-all duration-1000'>
        <div className="rounded-b-full pb-20 lg:pb-80 bg-gray-900  lg:flex flex-row-reverse pt-20  lg:pt-40 ">
     <div className="pr-5 pb-5 pl-5">
        <Image src="https://media.gettyimages.com/photos/detail-of-the-youtube-logo-outside-the-youtube-space-studios-in-on-picture-id1149449091" alt="image" height="1251%" width="2050%"/>
      </div>
      <div className="lg:pt-10 pl-5 lg:pl-20 pr-5 lg:pr-20 grid justify-center block">
        <div className=''>
        <h1 className="text-gray-400 text-3xl lg:text-6xl font-bold mb-10">
        Lets Talk Nights
        </h1>

        </div>
        <div className=''>
        <h1 className="text-gray-500 text-2xl mb-10">
        A video series designed to give you an opportunity to meet with a 
        small group of friends during the week and connect through spiritual conversations.
        </h1>
        </div>
        <div className='flex'>
        <h1 className="text-gray-600 text-1xl font-bold">
        This week: 
        </h1>
        <h1 className='link link-underline link-underline-black text-gray-600 text-md '>
        What Matters Most | Lets Talk Night for Students
        </h1>
        </div>

        <div className="pt-10">
   
        <button className="ease-out duration-300 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 text-gray-900 text-1xl font-bold mb-2">Browse Library</button>
        </div>
      </div>
      
     </div>
    </div>
  )
}
