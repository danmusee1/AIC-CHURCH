

import {  HomeIcon } from '@heroicons/react/solid'
import { BellIcon,DotsHorizontalIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, HashtagIcon, InboxInIcon, UserCircleIcon} from '@heroicons/react/outline'
import 'tailwindcss/tailwind.css'
import Link from 'next/link';
import { useState } from 'react';
<<<<<<< HEAD
import Image from 'next/image'
=======
iimport Image from 'next/image'
>>>>>>> 4035fa15f33aa5f72792bf2511116d6943064cf1
function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className="relative   ">
       <nav className=' fixed top-0 lg:left-10 lg:right-10    lg:py-0 lg:space-x-20   lg:px-10 flex fixed flex-wrap  background-color: transparent; '>
       <Link href='/'>
          <a className='inline-flex items-center  mr-20 '>
<<<<<<< HEAD
          <div className="hoverEffect text-gray-700 flex  items-center justify-center xl:justify-start mt-auto">
=======
          <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
>>>>>>> 4035fa15f33aa5f72792bf2511116d6943064cf1
            <Image
             // onClick={signOut}
              src="/pics/AIC CHURCH.png"
              alt="church-img"
<<<<<<< HEAD
              height="250px"
              width="250px"
              className="  xl:mr-2"
=======
              height="10px" width="10px"
              className="h-10 w-10 rounded-full xl:mr-2"
>>>>>>> 4035fa15f33aa5f72792bf2511116d6943064cf1
            />
            </div>
           
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
