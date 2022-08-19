import React from 'react'
import Grouping1 from './Grouping1'
import Grrouping2 from './Grrouping2'
import Background from './Background'
import Navbar1 from '../reusable/Navbar1'
import Footer from '../reusable/Footer'
import Form from '../live/Form'

export default function GroupsPage() {
  return (
    <div>
        <Navbar1/>
        <Background/>
        <Grouping1/>
        <Grrouping2/>
        <Form/>
        <Footer/>
    </div>
  )
}
