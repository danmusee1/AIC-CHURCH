import Head from 'next/head'

import Footer from '../components/reusable/Footer'

import Navbar from '../components/reusable/Navbar'

import FrontHome from '../components/home/FrontHome'
import { Pastorals } from '../components/pastoral team/Pastorals'





export default function Home() {
  
  return (
    <div  >
      <Head>
        <title>AIC UMOJA</title>
        <meta name="description" content="AIC UMOJA a religious place where you belong. Fell more welcome." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
     
      

      <div className="space-y-20 ">
        
        <FrontHome/>
      <Footer/>
      </div>
      
      
    </div>
  )
}
