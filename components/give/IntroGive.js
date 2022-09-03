import React from 'react'
import Image from 'next/image';
import { FaQuoteLeft } from "react-icons/fa";

export default function IntroGive() {
  return (
    <div>
        <div className="pb-40 lg:flex">
            <div className="pl-5 pr-5 lg:pl-20 lg:w-2/3 z-30 ">
            <FaQuoteLeft className="pb-5 text-5xl cursor-pointer text-blue-400 hover:text-red-600" />
            <div className='pb-5'>
            <h1 className=" lg:absolute lg:w-2/3  text-cyan-900 text-2xl  lg:text-4xl font-bold mb-2">
            But who am I, and who are my people, that we should be able 
            to give as generously as this? Everything comes from you, 
            and we have given you only what comes from your hand.
            </h1>
            </div>
            <div className="lg:pt-40 ">
            <h1 className="font-bold  ">
            1 Chronicles 29:14
            </h1>
            <h1 className="text-gray-500 text-sm pb-5">
            NIV
            </h1>
            </div>
            </div>
            <div className="pr-5 pl-5 lg:pr-20">
                <Image className="" src="https://352zl3r81ot2rnkzo1r0n6uj-wpengine.netdna-ssl.com/wp-content/uploads/2021/08/giving-pic-01.jpeg" alt="image" width="900px" height="700px"/>
            </div>

        </div>
        <div className="lg:pt-20 lg:pb-40 pb-10 pr-10 pl-5 grid justify-items-center">
            <div className="pb-5">
                <h1 className="text-cyan-700 text-center text-2xl lg:text-4xl font-bold mb-2">
                Your contribution will <a className="underline underline-offset-8 decoration-8 decoration-emerald-500">change the world.</a>
                </h1>
            </div>
            <div className="lg:w-2/3 ">
                <h1 className="text-center text-gray-500 text-lg pb-5 ">
                Thank you for your interest in donating to the Bay Area Christian 
                Church general fund. We are grateful for your contribution. 
                If you have any questions about giving, email us at giving@AIC.cc.
                 For questions about donating stock, email us at stockdonations@AIC.cc.
                </h1>

            </div>
        </div>
    </div>
  )
}
