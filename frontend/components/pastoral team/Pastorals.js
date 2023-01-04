import React, {useEffect,useState} from 'react'
import { useQuery, gql } from '@apollo/client';
import Link from 'next/link';
import Image from 'next/image'
//usestate used to track states
//useeffect used to render API AFTER FETCHING OR LOADING

const QUERY = gql`
  query  {
    pastorals {
      first_name
      last_name
      position
      mission
      pastoral_phonenumber
      pastoral_email
    }
  }
`;
export default function Pastorals() {
    const { data, loading, error } = useQuery(QUERY);
  
    if (loading) {
      return <h2>Loading...</h2>;
    }
  
    if (error) {
      console.error(error);
      return null;
    }



    const pastorals = data.pastorals.slice(0, 4);

    return(
        <div className="flex-col my-10">
             
           
            {
                pastorals.length > 0 && (
                    <div className="flex justify-center items-center">
                        
                        <div className='grid md:grid-cols-4 grid-cols-1 gap-5'>
                            {
                                pastorals.filter((item, index) => index < 4).map((pastoral) =>(
                                    <div key={pastoral.pastoral_id} className='inset-0 transform origin-left hover:-rotate-45 transition duration-300 md:mx-0 mx-5 w-72 h-80 rounded-lg w-64 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg mb-10'>
                                        <div className="flex items-center justify-between">
            <h3 className="text-gray-400 text-sm" key={pastoral.pastoral_id}>{pastoral.position}</h3>
            <span className="text-emerald-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </span>
        </div>
                                <div className="mt-6 w-fit mx-auto ">
                                        <Image className="rounded-full w-28 " key={pastoral.pastoral_id} src="https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe" alt="" width='70' height='70'/>
                                        </div>
                                        <div clasName=" flex flex-row">
                                        <h3 className="text-white font-bold text-2xl tracking-wide" key={pastoral.pastoral_id}>{pastoral.first_name} {pastoral.last_name}</h3>
                                       
                                        </div>
                                        <div className="pt-5">
                                            <h3 className='text-orange-500 font-bold ' key={pastoral.pastoral_id}>{pastoral.mission}</h3>
                                            </div>
                                        <div className="pt-4 ">
                                        <h3 className='text-orange-400 font-bold' key={pastoral.pastoral_id}>Phone: {pastoral.pastoral_phonenumber}</h3>
                                        <h3 className='text-orange-400 font-bold ' key={pastoral.pastoral_id}>Email:{pastoral.pastoral_email}</h3>
                                        </div>
                                        
                                        
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