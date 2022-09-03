import React from 'react'
import Image from 'next/image';
import { FaQuoteLeft } from "react-icons/fa";
import { FaCircleNotch } from "react-icons/fa";

export default function IntroVolunteer() {
  return (
    <div>
        <div className="pb-40 lg:flex">
            <div className="pl-5 pr-5 lg:pl-20  z-30 ">
            <FaQuoteLeft className="pb-5 text-5xl cursor-pointer text-blue-400 hover:text-red-600" />
            <div className='pb-5'>
            <h1 className=" lg:absolute lg:w-2/3  text-slate-900 text-2xl  lg:text-4xl font-bold mb-2">
            Then Jesus went around
doing good”  Acts 10:38
            </h1>
            </div>
            <div className="lg:pt-20 ">
            <h1 className="text-gray-700 text-lg  ">
            At the AIC UMOJA Church, we believe in inspiring 
            people to do good and giving back to our communities. The AIC UMOJA is known for its innovative tech companies like Google, Apple and Facebook. It is also home to over eight million people, 
            and is a powerful and massive neighborhood driven by inspiration.
            </h1>
           <div className="pt-10 pb-10 lg:pt-40 flex">
            <h1 className='font-bold'> Connect me</h1>
            <FaCircleNotch className="pb-5 text-5xl cursor-pointer text-blue-400 hover:text-red-600" />
           </div>
            </div>
            </div>
            <div className="content-end lg:pl-20  lg:pr-20">
                <Image className="" src="https://352zl3r81ot2rnkzo1r0n6uj-wpengine.netdna-ssl.com/wp-content/uploads/2021/08/giving-pic-01.jpeg" alt="" width="900px" height="700px"
                />
                <h1 className="pl-5 pr-5  text-gray-700 text-lg pt-20">
            We provide volunteer opportunities in the AIC UMOJA 
            by continually supporting and building volunteer-driven,
             community service programs. We also have incredibly active 
             and inspiring members who continue to stir us all with their examples
              of passion and love for their communities and the people who reside within them.
            </h1>
            <div className="pt-10 pb-10 pl-5  flex">
            <h1 className='font-bold'> Connect me</h1>
            <FaCircleNotch className="pb-5 text-5xl cursor-pointer text-blue-400 hover:text-red-600" />
           </div>
            </div>
            

        </div>
        <div className="lg:pt-20 lg:pb-40 pb-10 pr-10 pl-5 grid justify-items-center">
            <div className="pb-5">
                <h1 className="text-slate-900 text-center text-2xl lg:text-4xl font-bold mb-2">
                 <a className="underline underline-offset-8 decoration-8 decoration-emerald-500">Volunteer programs</a>
                </h1>
            </div>
            <div className="lg:w-2/3 ">
                <h1 className="text-center text-gray-500 text-lg pb-5 ">
                We are proud of the work that our members are doing to regularly meet 
                specific needs in the community. The following is a showcase of these efforts, 
                some of which are grassroots projects organized entirely by volunteers.
                </h1>

            </div>
        </div>
    </div>
  )
}
