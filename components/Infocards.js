import React from 'react'
import Image from 'next/image'
export default function Infocards(props) {
  return (
    
    <div className=" p-5 lg:p-20 grid grid-cols-1 lg:space-x-20   sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
    
    <div className="dark:text-slate-100 bg-slate-200 dark:bg-slate-900 rounded overflow-hidden  shadow-lg">
      <div className="h-64 w-76 relative">
      <Image className="w-full " src={props.item.img} alt="Mountain" height="50%" layout="fill"/>
      </div>
      
      <div className="px-6 py-4">
        
        <p className="text-gray-700 text-base">
         {props.item.content}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
      <button className="text-black animate-bounce transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 inline-block px-7 py-3 bg-red-200  font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Learn more</button>
      
      </div>
    </div>
    <div className="mr-3  lg:p-20  place-content-end">
    <a href="#" className="flex flex-col absolute bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div className="h-34 w-56 relative">
      <Image className=" object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://th.bing.com/th/id/OIP.5w2o_bC67C6MrPexcQ0q8AAAAA?pid=ImageDet&rs=1"  alt="" layout="fill"/>
      </div>
    
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{props.item.title}</h5>
       
    </div>
</a>

    </div>
    
   
    
  </div>

  )
}
