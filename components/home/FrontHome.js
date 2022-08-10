import React from 'react'
import Intro from './Intro'
import Groups from './Groups'
import Groups2 from './Groups2'
import InfoPage from './InfoPage'
import Podcast from './Podcast'
import FriendsCards from './FriendsCards'
import Newcommer from './Newcommer'

export default function FrontHome() {
  return (
    <div>
   
    <div className="space-y-20 ">
      
      <Intro/>
      
      
      
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

