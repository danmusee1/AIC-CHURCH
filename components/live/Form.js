import React from 'react'
import { FaYoutube } from "react-icons/fa";

export default function Form() {
  return (
    
    <div className=" rounded-t-lg  lg:pb-10 bg-blue-300 ">
    <div className="rounded-tr-full  lg:pb-20 bg-blue-100 ">
    <div className='rounded-tl-full pl-5 pr-5 lg:pl-20 pt-20 pb-20 lg:pb-80 bg-teal-100 grid justify-items-center pb-10'>
      <div className=" h-10 w-60 flex bg-red-700 rounded-full ">
        <div className="mt-2">
        <h1 className=' ml-3 mr-3  font-bold text-white'> 
        View More on Youtube
        </h1>
        
        </div>
       
        <div className='mt-2'>
        <FaYoutube className=" text-3xl cursor-pointer text-white " />
        </div>
      </div>
    
    <div className="    lg:w-3/4 pt-20  lg:p-6 rounded-lg shadow-lg bg-white lg:max-w-3xl pt-10 rounded-lg">
      <div className='pl-3 pr-3 grid justify-items-center'>
        <h1 className=" text-gray-900 text-3xl lg:text-4xl font-bold mb-10">
        <a className="underline decoration-8 decoration-sky-400">Connect</a> with us
        </h1>
        
        <h1 className='text-gray-500 '>
        If you’ve been enjoying the experience of watching church live and would like to connect virtually 
        </h1>
        <h1 className='text-gray-500 pb-10'>
         with people in a small group setting, let us know and we can help you get tied in.
        </h1>
      </div>
        <form className="pl-3 pr-3 w-full  bg-white rounded-lg">
            <div>
  <div className="items-center flex flex-wrap -mx-3 mb-6">
    <div className=" w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
         Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="First"/>
      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div className="w-full  md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
       
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Last"/>
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
      Where are you located?
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Nairobi</option>
          <option>Umoja</option>
          <option>Green span</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div className="w-full mb-10  md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
How did you find us today?*
      </label>
      
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>A friend invited me</option>
          <option>Youtube</option>
          <option>Google</option>
          <option>Facebook</option>
          <option>Instagram</option>
          <option>Other</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
  </div>
  <div className='mb-10'>
    <h1 className=" block uppercase tracking-wide text-gray-600 text-xs font-bold mb-5">
      I am interested in
</h1>
<div className="lg:flex place-content-between ">
  <div className=" ">
<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label className="text-blue-400 " htmlFor="vehicle1"> Watching services</label><br></br>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
  <label className="text-blue-400 " htmlFor="vehicle2"> Virtual personal Bible studies</label><br></br>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
  <label className="text-blue-400 " htmlFor="vehicle3">  Virtual special events</label><br></br>
  
  </div>
  <div className='lg:mr-10 '>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label className="text-blue-400 "  htmlFor="vehicle1"> Virtual small group events</label><br></br>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
  <label className="text-blue-400 "  htmlFor="vehicle2"> Virtual group Bible studies</label><br></br>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
  <label  className="text-blue-400 " htmlFor="vehicle3">  Other</label><br></br>
  
  </div>
</div>

  </div>
  <div className=''>
    <h1 className=" block uppercase tracking-wide text-gray-600 text-xs font-bold mb-5">
    Which ministry would you like to connect with or learn more about?
</h1>
<div className="lg:flex place-content-between mb-10">
  <div className="">
<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label className="text-blue-400 " htmlFor="vehicle1"> Teens</label><br></br>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
  <label className="text-blue-400 " htmlFor="vehicle2"> Professionals</label><br></br>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
  <label className="text-blue-400 " htmlFor="vehicle3">   Special needs support</label><br></br>
  
  </div>
  <div className="lg:mr-40">
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label className="text-blue-400 " htmlFor="vehicle1"> College</label><br></br>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
  <label className="text-blue-400 " htmlFor="vehicle2"> Families</label><br></br>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
  <label className="text-blue-400 " htmlFor="vehicle3">  Childrens</label><br></br>
  
  </div>
</div>

  </div>
  <div className="">
  <p className=" block uppercase tracking-wide text-gray-600 text-xs font-bold mb-5"><label htmlFor="w3review">Any questions or comments?</label></p>
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
