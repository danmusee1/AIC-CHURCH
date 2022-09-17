import React from 'react'
import { FaYoutube } from "react-icons/fa";

export default function FormImNew() {
  return (
    
    <div className=" rounded-t-lg  lg:pb-10 bg-blue-300 ">
    <div className="rounded-tr-full  lg:pb-20 bg-blue-100 ">
    <div className='rounded-tl-full pl-5 pr-5 lg:pl-20 pt-20 pb-20 lg:pb-80 bg-teal-100 grid justify-items-center pb-10'>
      <div className=" pb-10  ">
      <h1 className=" text-gray-900 text-3xl lg:text-7xl font-bold mb-10">
        <a className="underline decoration-14 decoration-sky-400">Connect</a> with us
        </h1>
        
      </div>
    
    <div className="    lg:w-3/4 pt-20  lg:p-6 rounded-lg shadow-lg bg-white lg:max-w-3xl pt-10 rounded-lg">
      <div className='pl-3 pr-3 grid justify-items-center'>
        
        
        
      </div>
        <form className="pl-3 pr-3 w-full  bg-white rounded-lg">
            <div>
  <div className="items-center flex flex-wrap -mx-3 mb-6">
    <div className="pt-2 w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
         Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="First"/>
      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div className="w-full  md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
       
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Last Name"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
       Email
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="Enter Email"/>
      
    </div>
  </div>
  <div className="flex  flex-wrap -mx-3 mb-2">
   
    <div className="w-full mb-10  md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
      Phone
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-phone-number" type="number" placeholder="07........"/>
    </div>
    <div className="w-full mb-10  md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
      Interest*
      </label>
      
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>What are you interested in?</option>
          <option>Attending a service</option>
          <option>joining a ministry or small group</option>
          <option>Attending an event</option>
          <option>volunteering</option>
          <option>Other</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
  </div>
  
  
  <div className="">
  <p className=" block uppercase tracking-wide text-gray-600 text-xs font-bold mb-5"><label htmlFor="w3review">Your message</label></p>
  <textarea className="w-full" id="w3review" name="w3review" rows="4" cols="50" placeholder="Let us know how we can help!"></textarea>
  <br></br>
  </div>
  <div className="pb-10 grid justify-items-center pt-5">
    <button className="w-full h-20 ease-out duration-300 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 text-gray-900 text-1xl font-bold mb-2">
      SUBMIT
    </button>
  </div>
  </div>
</form>
</div>
</div>
    </div>
    </div>
  )
}
