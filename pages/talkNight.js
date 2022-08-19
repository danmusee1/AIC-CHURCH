import React from 'react'
import TalknightPage from '../components/talknight/TalknightPage'


import Footer from '../components/reusable/Footer'
import WeeksEpisode from '../components/talknight/WeeksEpisode'
import Library from '../components/talknight/Library'
import Steps from '../components/talknight/Steps'
import Navbar from '../components/reusable/Navbar'


export default function talkNight() {
  return (
    <div className=''>
        <Navbar />
        <TalknightPage/>
        <WeeksEpisode/>
        <Library/>
        <Steps/>
        <Footer/>
        
     

   

    </div>
  )
}
