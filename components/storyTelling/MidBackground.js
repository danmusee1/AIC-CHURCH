import React from 'react'
import { FaBook } from "react-icons/fa";
import { FaPrint } from "react-icons/fa";
import { FaVideoSlash } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { FaJava } from "react-icons/fa";


export default function MidBackground() {
    return (
        <div>
        <div className="  ">
        <div id='storytellingmid_background'className=' scroll shapedividers_com-4494 '>
          <div className='lg:pl-20  lg:pt-40'>
         
            <h1 className='pt-10 font-bold text-lg text-gray-900'>
                
          The Parable Series
            </h1>
            <h1 className='lg:w-1/2 font-bold text-4xl'>
                
            Step into the stories of Jesus and connect with God in new ways
            </h1>
          </div>

          <div className='lg:space-x-20 space-y-10  lg:pl-20 lg:pr-20 pt-20 lg:flex'>

          <div className='pt-10 flex space-x-5'>
          <FaBook className=" text-8xl text-gray-300 cursor-pointer hover:text-yellow-600" />
          <div>
          <h1 className=' font-bold text-lg'>
            Devotionals

            </h1>
            <h1 className='text-base font-semibold text-gray-400'>
            Bible studies on each parable, with unique insights about
             how these stories teach us to make God personal and real.
                </h1>
          </div>
            </div>


             <div className='flex space-x-5'>
          <FaPrint className=" text-8xl text-gray-300 cursor-pointer hover:text-yellow-600" />
          <div>
          <h1 className='font-bold text-lg'>
          Printouts

            </h1>
            <h1 className='text-base  text-gray-400'>
            A simplified version of the devotional to read over with
             a friend or in a small Bible study group.
                </h1>
          </div>
            </div>

            <div className='flex space-x-5'>
          <FaVideoSlash className=" text-8xl text-gray-300 cursor-pointer hover:text-yellow-600" />
          <div>
          <h1 className='font-bold text-lg'>
          Videos

            </h1>
            <h1 className='text-base  text-gray-400'>
            The parables explained in a visual, engaging format along with 
            stories and examples we can apply to our daily lives.
                </h1>
          </div>
            </div>
          </div>
           <div className=' lg:space-x-20 space-y-10  lg:pl-20 lg:pr-20  lg:pt-20 lg:flex'>

          <div className='pt-10 flex space-x-5'>
          <FaChalkboardTeacher className=" text-8xl text-gray-300 cursor-pointer hover:text-yellow-600" />
          <div>
          <h1 className='font-bold text-lg'>
          Lets Talk

            </h1>
            <h1 className='text-base font-semibold text-gray-400'>
            Videos designed to facilitate conversation with a small 
            group of friends about a specific parable.
                </h1>
          </div>
            </div>


             <div className='flex space-x-5'>
          <FaHeadphones className=" text-8xl text-gray-300 cursor-pointer hover:text-yellow-600" />
          <div>
          <h1 className='font-bold text-lg'>
          Podcast

            </h1>
            <h1 className='text-base  text-gray-400'>
            Real conversations digging deeper into the personally 
            transformative power of Jesus' parables.
                </h1>
          </div>
            </div>

            <div className='flex space-x-5'>
          <FaJava className=" text-8xl text-gray-300 cursor-pointer hover:text-yellow-600" />
          <div>
          <h1 className='font-bold text-lg'>
          Mini Quiet Times

            </h1>
            <h1 className='text-base  text-gray-400'>
            Sit back, relax, and listen to a mini quiet time about each parable,
             complete with narrative
             storytelling to make the experience even more real.
                </h1>
          </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      
    )
    }
