
import React from 'react'
import Archive from '../components/live/Archive'
import Contribution from '../components/live/Contribution'
import LivePage from '../components/live/LivePage'

import Navbar1 from '../components/reusable/Navbar1'

export default function live() {
  return (
    <div>
      
      <Navbar1 />
      <LivePage/>
      <Contribution/>
      <Archive/>
     
    </div>
  )
}
