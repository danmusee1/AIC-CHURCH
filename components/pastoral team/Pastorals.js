import React, {useEffect,useState} from 'react'
import Link from 'next/link';
import Image from 'next/image'
//usestate used to track states
//useeffect used to render API AFTER FETCHING OR LOADING

export const Pastorals = () => {
    const[pastorals, setPastorals]= useState([]); //having initialvalue as null array

    const fetchData=() => {
        fetch('https://jsonplaceholder.typicode.com/users')
           .then(response => response.json()) //returns url data as json format
           .then(data => {
                setPastorals(data); //after having the data in json format i am ready to use and track the state also
            })

    }
    useEffect(() => {
        fetchData(); //used to render data after loading
    },[]);
    return(
        <div className="flex-col my-10">
             
           
            {
                pastorals.length > 0 && (
                    <div className="flex justify-center items-center">
                        <div className='grid md:grid-cols-4 grid-cols-1 gap-5'>
                            {
                                pastorals.map((pastoral) =>(
                                    <div key={pastoral.id} className='md:mx-0 mx-5 w-72 h-60 rounded-lg w-64 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg mb-10'>
                                        <div className="flex items-center justify-between">
            <span className="text-gray-400 text-sm">position</span>
            <span className="text-emerald-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </span>
        </div>
                                <div className="mt-6 w-fit mx-auto ">
                                        <Image className="rounded-full w-28 " key={pastoral.id} src="https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe" alt="" width='70' height='70'/>
                                        </div>
                                        <h3 className="text-white font-bold text-2xl tracking-wide" key={pastoral.id}>{pastoral.name}</h3>
                                        <h3 className='text-white' key={pastoral.id}>{pastoral.email}</h3>
                                        <h3 className='text-white ' key={pastoral.id}>{pastoral.phone}</h3>
                                        
                                        </div>
                                ))
                            }
                        </div>
                    </div>
                    
                )
            }
             <Link href="teamMain">
             <div className='pt-16 lg:ml-60 ml-5 '>
            <button className=" active:shadow-lg transition duration-150 ease-in-out transition ease-in-out delay-150 px-24 py-6 text-white rounded-xl transition-all duration-500 bg-gradient-to-tl to-white via-black from-red-500 bg-size-200 bg-pos-0 hover:bg-pos-100">view enire team</button>
            </div>
            </Link>
        </div>
           
    )
 
}






