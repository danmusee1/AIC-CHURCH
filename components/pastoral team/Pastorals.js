import React, {useEffect,useState} from 'react'
//usestate used to track states
//useeffect used to render API AFTER FETCHING OR LOADING

export const Pastorals = () => {
    const[profiles, setProfiles]= useState([]); //having initialvalue as null array

    const fetchData=() => {
        fetch('https://jsonplaceholder.typicode.com/users')
           .then(response => response.json()) //returns url data as json format
           .then(data => {
                setProfiles(data); //after having the data in json format i am ready to use and track the state also
            })

    }
    useEffect(() => {
        fetchData(); //used to render data after loading
    },[]);
    return(
        <div className="flex-col my-10">
            <h1 className='text-gray-800'>the pastoral team</h1>
            {
                profiles.length > 0 && (
                    <div className="flex justify-center items-center">
                        <div className='grid md:grid-cols-4 grid-cols-1 gap-5'>
                            {
                                profiles.map((profile) =>(
                                    <div key={profile.id} className='md:mx-0 mx-5 w-72 h-60 rounded-lg'>
                                        <h3 key={profile.id}>{profile.name}</h3>
                                        <h3 key={profile.id}>{profile.email}</h3>
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






