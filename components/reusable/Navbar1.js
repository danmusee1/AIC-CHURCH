import Link from 'next/link';
import React, { useState, useEffect } from "react"
import Image from 'next/image'

export default function Navbar1()  {
  
  const [active, setActive] = useState(false);
  const [navbar, setNavbar] = useState(false)

  const handleClick = () => {
    setActive(!active);
  };
  const changeBackground=()=>{
    console.log(window.scrollY)
    if(window.scrollY >=1){
  setNavbar(true)
    }
    else{
      setNavbar(false)
    }
  }
  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  }, []);

  return (
    <div>
      
      <nav  className={`${
            navbar ? "active" : "fixed z-40 w-full  inset-x-0 top-0 h-26 flex items-center flex-wrap"
          } space-y-10 inset-x-0 top-0 h-26 flex items-center flex-wrap fixed z-40 w-full `}>
        <Link href='/'>
          <a className=' inset-x-0 top-0 h-16 inline-flex items-center p-2 mr-4 '>
          
            <Image src="/pics/AIC CHURCH.png" alt="church" height="50px" width="200px"/>
              
           
          </a>
        </Link>
        <button
          className=' inline-flex p-3 hover:bg-red-500 rounded lg:hidden text-red-700 ml-auto hover:text-red-900 outline-none'
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
             active ? 'rounded bg-gradient-to-r from-indigo-900 ' : 'hidden'
          }  w-full  lg:inline-flex lg:flex-grow lg:w-auto   `}
        >
          <div className=' lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/imNew'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-700  items-center justify-center link link-underline link-underline-black  '>
              IM NEW
              </a>
            </Link>
            <Link href='/'>
              <a className='link link-underline link-underline-black lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center  '>
              LOCATIONS
              </a>
            </Link>
            <Link href='/live'>
              <a className='link link-underline link-underline-black lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center  '>
              LIVE
              </a>
            </Link>
            <Link href='/talkNight'>
              <a className='link link-underline link-underline-black lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center  '>
              LETS TALK NIGHTS
              </a>
            </Link>
            <Link href='/'>
              <a className='link link-underline link-underline-black lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center  '>
              RESOURCES
              </a>
            </Link>
            <Link href='/'>
              <a className='link link-underline link-underline-black lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center  '>
              GIVE
              </a>
            </Link>
            <Link href='/'>
              <a className='link link-underline link-underline-black lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center '>
              EVENTS
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
   
      
   
  );
};