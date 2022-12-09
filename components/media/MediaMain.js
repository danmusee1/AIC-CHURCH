import React from 'react'
import Navbar1 from '../reusable/Navbar1'
import BackgroundMedia from './BackgroundMedia'
import BackgroundMediadown from './BackgroundMediadown'
import Footer from '../reusable/Footer'
import { Videos } from './Videos'


export default function ResourcesMain() {
  return (
    <div>
        <Navbar1/>
        <BackgroundMedia/>
        <Videos/>
        <BackgroundMediadown/>
        
        <Footer/>
    </div>
  )
}
