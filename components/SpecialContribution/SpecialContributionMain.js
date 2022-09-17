import React from 'react'
import Footer from '../reusable/Footer'
import Navbar from '../reusable/Navbar'
import QuestionsGive from '../give/QuestionsGive'
import BackgroundSpecialContribution from './BackgroundSpecialContribution'
import IntroSpecialContribution from './IntroSpecialContribution'
import SpecialContirbutionBible from './SpecialContirbutionBible'
import MidBackground from './MidBackground'
import GiveSpecial from './GiveSpecial'

export default function SpecialContributionMain() {
  return (
    <div>
        <Navbar/>
        <BackgroundSpecialContribution/>
        <IntroSpecialContribution/>
        <SpecialContirbutionBible/>
        <MidBackground/>
        <GiveSpecial/>
        <QuestionsGive/>
        <Footer/>
    </div>
  )
}

