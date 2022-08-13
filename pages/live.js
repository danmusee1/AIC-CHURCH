
import React from 'react'
import Archive from '../components/live/Archive'
import Contribution from '../components/live/Contribution'
import Form from '../components/live/Form'
import LivePage from '../components/live/LivePage'

import Navbar1 from '../components/reusable/Navbar1'
import Footer from '../components/reusable/Footer'

export default function live() {
  return (
    <div className="">
      
      <Navbar1 />
      <LivePage/>
      <Contribution/>
      <Archive/>
      <Form/>
      <Footer/>
     
    </div>
  )
}
