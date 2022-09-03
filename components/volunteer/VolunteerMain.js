import React from 'react'
import BackgroundVolunteer from './BackgroundVolunteer'
import Navbar from '../reusable/Navbar';
import Footer from '../reusable/Footer';
import IntroVolunteer from './IntroVolunteer';
export default function VolunteerMain() {
  return (
    <div>
        <Navbar/>
        <BackgroundVolunteer/>
        <IntroVolunteer/>
        <Footer/>
    </div>
  )
}
