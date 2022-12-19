import React from 'react'
import TeamMemBackground from '../components/pastoral team/TeamMemBackground'
import { TeamMembers } from '../components/pastoral team/TeamMembers'
import Footer from '../components/reusable/Footer'
import Navbar1 from '../components/reusable/Navbar1'
import Form from '../components/live/Form'

export default function teamMain() {
  return (
    <div>
        <Navbar1/>
        <TeamMemBackground/>
        <TeamMembers/>
        <Form/>
        <Footer/>
    </div>
  )
}
