import Image from 'next/image'
import React from 'react'
import Intro from './Intro'
import Groups from './Groups'
import Groups2 from './Groups2'
import InfoPage from './InfoPage'
import Podcast from './Podcast'
import FriendsCards from './FriendsCards'
import Newcommer from './Newcommer'
import Pastorals from '../pastoral team/Pastorals'
import Flayer from '../pastoral team/Flayer'


export default function FrontHome() {
  return (
    <div>
   
    <div className="space-y-20 ">
      
      <Intro/>
      <div id='give_background1' className='h-screen snap-y snap-mandatory snap-center'>
      <Flayer/>
     <Pastorals/>
      </div>
      
      <Groups/>
      <Groups2/>
    <InfoPage/>
    
    <Podcast/>
    <FriendsCards/>
    <Newcommer/>
    
    </div>
    
    
  </div>
)
}

