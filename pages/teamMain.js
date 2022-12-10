import React from 'react'
import TeamMemBackground from '../components/pastoral team/TeammemBackground'
import { TeamMembers } from '../components/pastoral team/TeamMembers'
import Footer from '../components/reusable/Footer'
import Navbar1 from '../components/reusable/Navbar1'

export default function teamMain() {
  return (
    <div>
        <Navbar1/>
        <TeamMemBackground/>
        <TeamMembers/>
        <Footer/>
    </div>
  )
}
