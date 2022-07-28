

import {  HomeIcon } from '@heroicons/react/solid'
import { BellIcon,DotsHorizontalIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, HashtagIcon, InboxInIcon, UserCircleIcon} from '@heroicons/react/outline'
import 'tailwindcss/tailwind.css'
function Navbar() {
  return (
    <div className='hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24'>
        {/*Twitterlogo*/}
       
    {/*menu*/}
    
     {/*button*/}
        <button className='bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline '>Tweet</button>
         {/*min9i-prifile*/}
       <div  className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto" >
        <img className='h-10 w-10 rounded-full xl:mr-2'
       
         src='https://imgs.search.brave.com/sQF-4cufXFk2wnJpcrER7MdgLKPTHL-oTdLW9AAqHHM/rs:fit:600:600:1/g:ce/aHR0cHM6Ly8xLmJw/LmJsb2dzcG90LmNv/bS8tQWxzcTlCbnY2/N2svVkE0T25aazEz/Q0kvQUFBQUFBQUFE/dWcvV2FDb25VUlVn/OE0vczE2MDAvUm91/bmQlMkJQcm9maWxl/JTJCUGljLnBuZw'
         alt="user-img"
        />
        <div className="leading-5 hidden xl:inline ">
            <h4 className="font-bold">Dan Musee</h4>
            <p className='text-gray-500'>@rayzrmd</p>
        </div>
        <DotsHorizontalIcon  className='h-5 xl:ml-8 hidden xl:inline'/>
         </div>
         </div>
  
)}

export default Navbar;