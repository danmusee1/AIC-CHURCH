import Link from "next/link";



export default function Intro() {
  return (
    <div>
            <div className="  pb-20 ">
    <div id='intropage_background'className='shapedividers_com-546'>
    <div className=" pt-20 pb-20 ">
        
        
        <div className="relative pt-20   px-1 lg:px-10   gap-1 lg:gap-4 flex flex-col space-y-1 lg:space-y-4   ">
        <div>
            <h1 className='text-5xl lg:text-6xl font-bold lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white color: rgb(0 0 0); link link-underline link-underline-black  items-center justify-center   '> 
            Discover God.
            </h1>
        </div>
        <div>
            <h1 className='text-2xl lg:text-2xl lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white color: rgb(0 0 0); link link-underline link-underline-black  items-center justify-center   '>
                Join us Sundays online, or visit our AIC Area<br></br> location.
                </h1>
        </div>
        <div className="  lg:flex  " >
        
            <div className="pb-5"> 
            <Link href="/location">
                <button className="text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 inline-block px-7 py-3 bg-gray-200  font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                  view location</button>
                  </Link>
                </div>
                
                
                  
                <div className='pt-2 lg:pl-20'>
                <Link href="/live">
           <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 inline-block px-6 py-2 border-2 border-red-800 text-gray-50 font-medium text-xs leading-tight uppercase rounded hover:bg-red-700 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" >
            watch Live stream </button>
            </Link>
           </div>
           
           
            
        </div>
        </div>
        
        </div>
    </div>
    </div>
    
    </div>
    
  )
}
