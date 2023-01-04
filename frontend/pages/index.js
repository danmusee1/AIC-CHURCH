import Head from 'next/head'

import Footer from '../components/reusable/Footer'

import Navbar1 from '../components/reusable/Navbar1'

import FrontHome from '../components/home/FrontHome'





export default function Home() {
  
  return (
    <div  >
      <Head>
        <title>AIC UMOJA</title>
        <meta name="description" content="AIC UMOJA a religious place where you belong. Fell more welcome." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar1 />
     
      

      <div className="space-y-20 ">
        
        <FrontHome/>
      <Footer/>
      </div>
      
      
    </div>
  )
}
