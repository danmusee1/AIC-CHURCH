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
                                    <div key={pastoral.id} className='md:mx-0 mx-5 w-72 h-60 rounded-lg'>
                                        <Image key={pastoral.id} src={pastoral.thumbnailUrl} alt="" width='70' height='70'/>
                                        <h3 key={pastoral.id}>{pastoral.name}</h3>
                                        <h3 key={pastoral.id}>{pastoral.email}</h3>
                                        <h3 key={pastoral.id}>{pastoral.phone}</h3>
                                        </div>
                                ))
                            }
                        </div>
                    </div>
                    
                )
            }
             <Link href="teamMain">
             <div className='ml-60'>
            <button className=" active:shadow-lg transition duration-150 ease-in-out transition ease-in-out delay-150 px-20 py-6 text-white rounded-xl transition-all duration-500 bg-gradient-to-tl to-white via-black from-red-500 bg-size-200 bg-pos-0 hover:bg-pos-100">view enire team</button>
            </div>
            </Link>
        </div>
           
    )
 
}






