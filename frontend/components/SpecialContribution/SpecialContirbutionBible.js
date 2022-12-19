import React from 'react'
import Image from 'next/image';
import { FaQuoteLeft } from "react-icons/fa";

export default function SpecialContirbutionBible() {
  return (
    <div className="pt-20">
        <div className="pb-40 lg:flex">
            <div className="pl-5 pr-5 lg:pl-20 lg:w-2/3 z-30 ">
            <FaQuoteLeft className="pb-5 text-5xl cursor-pointer text-blue-400 hover:text-red-600" />
            <div className='pb-5'>
            <h1 className=" lg:absolute lg:w-2/3  text-cyan-900 text-2xl  lg:text-4xl font-bold mb-2">
            “From him the whole body, joined and held together by every supporting ligament,
             grows and builds itself up in love, as each part does its work.”
            </h1>
            </div>
            <div className="lg:pt-40 ">
            <h1 className="font-bold  ">
            Ephesians 4:16
            </h1>
            <h1 className="text-gray-500 text-sm pb-5">
            New International Version
            </h1>
            </div>
            </div>
            <div className="pr-5 pl-5 lg:pr-20">
                <Image className="rounded-md" src="https://352zl3r81ot2rnkzo1r0n6uj-wpengine.netdna-ssl.com/wp-content/uploads/2022/07/about-02b.jpeg" alt="image" width="900px" height="700px"/>
            </div>

        </div>
       
    </div>
  )
}
