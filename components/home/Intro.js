import Link from "next/link";



export default function Intro() {
  return (
    <div>
    <div className=" ul bg-black bg-opacity-0 lg:p-10 w-full h-full hover:bg-opacity-50 transition-all duration-1000 bg-cover bg-center bg-[url(https://i.ytimg.com/vi/EP6RwTMJE6s/maxresdefault.jpg)]  dark:bg-slate-900  md:max-h-screen" >
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
        <div className=" py-7 px-2 space-x-2 lg:space-x-3 lg:flex" >
            <div> 
                <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 inline-block px-7 py-3 bg-gray-200  font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">view location</button>
                </div>
                <Link href="/live">
                  
                <div className='pt-2'>
           <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 inline-block px-6 py-2 border-2 border-gray-100 text-gray-50 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" >watch Live stream </button>
           </div>
           </Link>
           
            
        </div>
        </div>
        
        </div>
      
    </div>
    
    
    </div>
    
  )
}
