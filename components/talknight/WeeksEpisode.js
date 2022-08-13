import React from 'react'
import { FaBook } from "react-icons/fa";

export default function WeeksEpisode() {
  return (
    <div className='lg:flex'>
        <div className="lg:pt-10 pl-5 lg:pl-20 pr-5 lg:w-1/2 ">
            <div    className="">
                <h1 className="text-gray-500 text-1xl lg:text-1xl font-bold mb-2">
                JULY 19, 2022
                </h1>
            </div>
            <div className="pb-5">
                <h1 className='text-gray-900 text-3xl lg:text-4xl font-bold '>
                This weeks episode: What Matters Most | Lets Talk 
                Night for Students
                </h1>
            </div>
            <div className="pb-10">
                <h1 className='text-gray-600 text-lg  mb-10'>
                When we get caught up in our own lives, its easy to lose sight of 
                what really matters. We might just try to get through the day, or think that
                 we need to prove ourselves to God or others. But what matters most to God is not survival or even perfect performance,
                 but a heart that loves. And this isnt just a problem we deal with  people even back in Jesus day had the same issues with 
                 this that we often have. Join us for todays
                  Lets Talk Night where we discuss the Parable of the Good Samaritan, where Jesus helps both us and
                 the people of his day understand what truly matters.
                </h1>
                <div className="">
   
        <button className="ease-out duration-300 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 text-gray-900 text-1xl font-bold mb-2">
            Watch Episode
            </button>
        </div>
            </div>
            
        </div>
        <div className="lg:w-1/2 pl-5 lg:pl-40 lg:pt-20 w-240 pr-5 lg:pr-20 ">
            <div    className="flex mb-5">
            <div className=''>
        <FaBook className=" text-3xl cursor-pointer text-black " />
        </div>
                <h1 className="text-gray-500 text-1xl lg:text-1xl font-bold mb-2">
                Dive Deeper
                </h1>
            </div>
            <div className="pb-5">
                <h1 className='text-gray-900 text-1xl lg:text-1xl  '>
                Here are some resources to help you dive deeper 
                into what the scriptures say on this topic.
                </h1>
            </div>
            <div className="pt-5 pb-10">
                
                <li className='text-gray-600 text-1xl lg:text-1xl  mb-2'>
                Read Luke 10 to read more in depth about why Jesus talked about the importance of loving.
                </li>
                <li className='text-gray-600 text-1xl lg:text-1xl  mb-10'>
                Read The Parable of the Good Samaritan: Heart, Not Habit to learn more about how we can learn from the Good Samaritan what matters most to God.
                </li>

                
               
              
            </div>
            
        </div>

    </div>
  )
}
