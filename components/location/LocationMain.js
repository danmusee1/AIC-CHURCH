import React from 'react'
import Footer from '../reusable/Footer'
import Navbar1 from '../reusable/Navbar1'
import BackgroundLocation from './BackgroundLocation'


import BackgroundLocationdown from './BackgroundLocationdown'

export default function LocationMain() {
  return (
    <div>
        <Navbar1/>
       <BackgroundLocation/>
        <BackgroundLocationdown/>
        <Footer/>
        
    </div>
  )
}
