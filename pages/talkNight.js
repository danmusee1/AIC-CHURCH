import React from 'react'
import TalknightPage from '../components/talknight/TalknightPage'

import Navbar1 from '../components/reusable/Navbar1'
import Footer from '../components/reusable/Footer'
import WeeksEpisode from '../components/talknight/WeeksEpisode'
import Library from '../components/talknight/Library'
import Steps from '../components/talknight/Steps'


export default function talkNight() {
  return (
    <div className=''>
        <Navbar1 />
        <TalknightPage/>
        <WeeksEpisode/>
        <Library/>
        <Steps/>
        <Footer/>
        
     

   

    </div>
  )
}
