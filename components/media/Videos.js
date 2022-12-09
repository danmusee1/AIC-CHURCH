import React, {useEffect,useState} from 'react'
import Image from 'next/image'
//usestate used to track states
//useeffect used to render API AFTER FETCHING OR LOADING

export const Videos = () => {
    const[videos, setVideos]= useState([]); //having initialvalue as null array

    const fetchData=() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
           .then(response => response.json()) //returns url data as json format
           .then(data => {
                setVideos(data); //after having the data in json format i am ready to use and track the state also
            })

    }
    useEffect(() => {
        fetchData(); //used to render data after loading
    },[]);
    return(
        <div className="flex-col my-10">
            <h1 className='text-gray-800'>past videos</h1>
            {
                videos.length > 0 && (
                    <div className="flex justify-center items-center">
                        <div className='grid md:grid-cols-4 grid-cols-1 gap-5'>
                            {
                                videos.map((video) =>(
                                    <div className='md:mx-0 mx-5 w-72 h-60 rounded-lg'>
                                        <Image key={video.id} src={video.thumbnailUrl} width='70' height='70'/>
                                        <h3 key={video.id}>{video.title}</h3>
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






