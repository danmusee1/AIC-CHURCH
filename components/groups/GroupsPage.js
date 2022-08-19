import React from 'react'
import Grouping1 from './Grouping1'
import Grrouping2 from './Grrouping2'
import Grouping3 from './Grouping3'
import Grrouping4 from './Grrouping4'
import Grouping5 from './Grouping5'
import Grrouping6 from './Grrouping6'
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
        <Grouping3/>
        <Grrouping4/>
        <Grouping5/>
        <Grrouping6/>
        <Form/>
        <Footer/>
    </div>
  )
}
