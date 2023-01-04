import React from 'react'
import Image from 'next/image'
function Flayer() {
  return (
    <div className='pl-5 lg:pl-20 pr-5 lg:pr-20 grid justify-center block'>

        <h1 className="font-serif lg:pl-40 lg:text-7xl pl-9 text-3xl text-orange-500 font-bold">The Power Team</h1>
        <Image src={"https://raw.githubusercontent.com/danmusee1/AIC-CHURCH/main/frontend/public/pics/AIC%20CHURCH%20LOGO.png"} alt="AIC UMOJA" height="230px" width="900px"/>
        
    </div>
  )
}

export default Flayer