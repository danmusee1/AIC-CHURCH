import React from 'react'
import Footer from '../reusable/Footer'
import Navbar from '../reusable/Navbar'
import BackgroundStory from './BackgroundStory'
import IntroStory from './IntroStory'
import MidBackground from './MidBackground'

export default function StoryTellingMain() {
  return (
    <div>
        <Navbar/>
        <BackgroundStory/>
        <IntroStory/>
        <MidBackground/>
        <Footer/>
    </div>
  )
}

