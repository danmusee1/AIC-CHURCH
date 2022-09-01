import React from 'react'
import Footer from '../reusable/Footer'
import Navbar1 from '../reusable/Navbar1'
import BackgroundGive from './BackgroundGive'
import BackgroundGivedown from './BackgroundGivedown'
import GivePayments from './GivePayments'
import IntroGive from './IntroGive'
import PaypalGive from './Routepayment/PaypalGive'
import QuestionsGive from './QuestionsGive'
import CreditCard from './Routepayment/CreditCard'



export default function GivesMain() {
  return (
    <div>
        <Navbar1/>
       <BackgroundGive/>
       <IntroGive/>
       <GivePayments/>
       <PaypalGive/>
       <CreditCard/>
       <QuestionsGive/>
       <BackgroundGivedown/>
       
       <Footer/>
    </div>
  )
}
