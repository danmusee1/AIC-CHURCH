import React from 'react'
import Footer from '../reusable/Footer'
import Navbar1 from '../reusable/Navbar1'
import BackgroundLocation from './BackgroundLocation'
import Form from "../live/Form"

import BackgroundLocationdown from './BackgroundLocationdown'
import IntroLocation from './IntroLocation'
import ListexpeLocation from './ListexpeLocation'

export default function LocationMain() {
  return (
    <div>
        <Navbar1/>
       <BackgroundLocation/>
       <IntroLocation/>
       <ListexpeLocation/>
       <Form/>
        <BackgroundLocationdown/>
        <Footer/>
        
    </div>
  )
}
