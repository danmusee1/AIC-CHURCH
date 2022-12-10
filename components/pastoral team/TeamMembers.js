import React, {useEffect,useState} from 'react'
import Link from 'next/link';
import Image from 'next/image'
//usestate used to track states
//useeffect used to render API AFTER FETCHING OR LOADING

export const TeamMembers = () => {
    const[teamMembers, setTeamMembers]= useState([]); //having initialvalue as null array

    const fetchData=() => {
        fetch('https://jsonplaceholder.typicode.com/users')
           .then(response => response.json()) //returns url data as json format
           .then(data => {
                setTeamMembers(data); //after having the data in json format i am ready to use and track the state also
            })

    }
    useEffect(() => {
        fetchData(); //used to render data after loading
    },[]);
    return(
        <div className="flex-col my-10">
           
            {
                teamMembers.length > 0 && (
                    <div className="flex justify-center items-center">
                        <div className='grid md:grid-cols-4 grid-cols-1 gap-5'>
                            {
                                teamMembers.map((teamMembers) =>(
                                    <div key={teamMembers.id} className='md:mx-0 mx-5 w-72 h-60 rounded-lg'>
                                        <Image key={teamMembers.id} src={teamMembers.thumbnailUrl} alt="" width='70' height='70'/>
                                        <h3 key={teamMembers.id}>{teamMembers.name}</h3>
                                        <h3 key={teamMembers.id}>{teamMembers.email}</h3>
                                        <h3 key={teamMembers.id}>{teamMembers.phone}</h3>
                                        </div>
                                ))
                            }
                        </div>
                    </div>
                    
                )
            }
             
        </div>
           
    )
 
}






