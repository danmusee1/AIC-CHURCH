import React from 'react'
import Footer from '../reusable/Footer'
import Navbar1 from '../reusable/Navbar1'
import BackgroundGive from './BackgroundGive'
import BackgroundGivedown from './BackgroundGivedown'
import GivePayments from './GivePayments'
import IntroGive from './IntroGive'

import QuestionsGive from './QuestionsGive'




export default function GivesMain() {
  return (
    <div>
        <Navbar1/>
       <BackgroundGive/>
       <IntroGive/>
       <GivePayments/>
       
       
       <QuestionsGive/>
       <BackgroundGivedown/>
       
       <Footer/>
    </div>
  )
}
