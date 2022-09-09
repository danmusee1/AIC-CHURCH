import React from 'react'
import Footer from '../reusable/Footer'
import Navbar1 from '../reusable/Navbar1'
import BackgroundEvents from './BackgroundEvents'
import IntroEvents from './IntroEvents'


export default function EventsMain() {
  return (
    <div>
        <Navbar1/>
       <BackgroundEvents/>
       <IntroEvents/>
       <Footer/>
    </div>
  )
}
