

import {  HomeIcon } from '@heroicons/react/solid'
import { BellIcon,DotsHorizontalIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, HashtagIcon, InboxInIcon, UserCircleIcon} from '@heroicons/react/outline'
import 'tailwindcss/tailwind.css'
import Link from 'next/link';
import { useState } from 'react';
function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className="  ">
       <nav className='  px-1 lg:py-0 lg:space-x-20 md:px-1  lg:px-10 flex items-center fixed flex-wrap  background-color: transparent; '>
       <Link href='/'>
          <a className='inline-flex items-center  mr-20 '>
          <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
            <img
             // onClick={signOut}
              src="https://scontent.fnbo2-1.fna.fbcdn.net/v/t1.6435-9/90653670_102233064759784_7030769173294743552_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mCc8G1byi1YAX8D6oXy&_nc_ht=scontent.fnbo2-1.fna&oh=00_AT_r8rvhZIYgQpQsLHvA1bDcScb1uepyOPN9CAwoNnOaRw&oe=630A8A61"
              alt="church-img"
              className="h-10 w-10 rounded-full xl:mr-2"
            />
            </div>
           
            <span className='text-xl color: rgb(0 0 0); font-bold text-white uppercase tracking-wide'>
              AIC UMOJA
            </span>
          </a>
        </Link>
        <button
          className=' inline-flex p-3 pl-20 hover:bg-blue-400 rounded lg:hidden color: rgb(0 0 0); ml-auto hover:color: rgb(0 0 0); outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full  lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className=' lg:inline-flex lg:flex-row lg:ml-center lg:w-center w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white color: rgb(0 0 0); link link-underline link-underline-black  items-center justify-center   '>
              I’M NEW
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white color: rgb(0 0 0); link link-underline link-underline-black  items-center justify-center   '>
              LOCATIONS
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white color: rgb(0 0 0); link link-underline link-underline-black  items-center justify-center   '>
              LIVE
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white color: rgb(0 0 0); link link-underline link-underline-black  items-center justify-center   '>
              LET’S TALK NIGHTS
                
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white color: rgb(0 0 0); link link-underline link-underline-black  items-center justify-center   '>
              RESOURCES
                
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white color: rgb(0 0 0); link link-underline link-underline-black  items-center justify-center   '>
              GIVE
                
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white color: rgb(0 0 0); link link-underline link-underline-black  items-center justify-center   '>
              EVENTS
                
              </a>
            </Link>
          </div>
        </div>
      </nav>
   
         </div>
  
)}

export default Navbar;