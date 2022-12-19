import React from 'react'
import FormImNew from './FormImNew'
import Navbar1 from '../reusable/Navbar1'
import BackgroundImnew from './BackgroundImnew'
import Card2 from './Card2'

import Card3 from './Card3'
import Cardin from './Cardin'


export default function ImNewpage() {
  return (
    <div>
        <Navbar1/>
        <BackgroundImnew/>
       <Cardin/>
        <Card2/>
        <Card3/>
        <FormImNew/>
        
    </div>
  )
}
