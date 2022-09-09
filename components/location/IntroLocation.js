import React from 'react'
import Image from 'next/image';
import { FaLocationArrow } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";

export default function IntroLocation() {
  return (
    <div className='pr-5 pl-5 lg:pl-20 lg:pr-10'>
        <div className="lg:flex lg:space-x-10">
        <div className="lg:w-1/2  ">
            <h1 className="pb-5 text-4xl font-bold text-slate-900">
            Find a location near you!

            </h1>
            <h1 className="pb-5 text-gray-600 text-lg">
            Wed love to have you join us at the service 
            nearest you! Childrens ministry classes are provided. 
            Classes for children with special needs will also
             be provided 
            through our Spiritual Resource Ministry.
                
            </h1>
            <div>
   
   <button className=" ease-out duration-300  px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 text-gray-900 text-1xl font-bold mb-2">
    <div className="flex pt-1 ">
    Contact Us
    <FaChalkboardTeacher className="pb-5 text-5xl cursor-pointer text-blue-400 hover:text-red-600" />
    </div>
   
    </button>
   </div>
            </div>
            <div className='lg:flex justify-end lg:pl-20 lg:pr-20 '>
            <div className=" ">
            <FaLocationArrow className="pb-5 text-6xl cursor-pointer text-blue-400 hover:text-red-600" />
            <h1 className="pt-10 pb-5 text-3xl font-bold text-slate-800">
            Nairobi Umoja

            </h1>
            <h1 className=" text-slate-800 font-semibold text-lg">
            Sundays @ 11 am
                
            </h1>
            <h1 className=" text-gray-600 text-base">
            AIC Grounds
                
            </h1>
            <h1 className="pb-7 text-gray-600  text-base">
            Moi Drive Rd, Umoja
                
            </h1>
            <h1 className=" text-gray-800 font-semibold text-lg">
            Tue-Thur @ 7:30 pm
                
            </h1>
            <h1 className="pb-5 text-gray-600 text-base">
            Our new “Lets Talk Nights” will be held 
            in small groups. Contact us for details.
                
            </h1>
            <Image className="" src="https://352zl3r81ot2rnkzo1r0n6uj-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/Green-and-Yellow-Geometric-Fitness-Collection-YouTube-Thumbnail-copy-5.png" alt="video " height="170px" width="320px" />
           
            </div>

            <div className="lg:pl-5 ">
            <FaLocationArrow className="pb-5 text-6xl cursor-pointer text-blue-400 hover:text-red-600" />
            <h1 className="pt-10 pb-5 text-3xl font-bold text-slate-800">
            Nairobi Umoja

            </h1>
            <h1 className=" text-gray-800 font-semibold text-lg">
            Sundays @ 11 am
                
            </h1>
            <h1 className=" text-gray-600 text-base">
            AIC Grounds
                
            </h1>
            <h1 className="pb-7 text-gray-600  text-base">
            Moi Drive Rd, Umoja
                
            </h1>
            <h1 className=" text-gray-800 font-semibold text-lg">
            Tue-Thur @ 7:30 pm
                
            </h1>
            <h1 className="pb-5 text-gray-600 text-base">
            Our new “Lets Talk Nights” will be held 
            in small groups. Contact us for details.
                
            </h1>
            <Image className="" src="https://352zl3r81ot2rnkzo1r0n6uj-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/Green-and-Yellow-Geometric-Fitness-Collection-YouTube-Thumbnail-copy-5.png" alt="video " height="170px" width="320px" />
           
            </div>

            </div>
           
            
        </div>
    </div>
  )
}
