import React from 'react'
import Image from 'next/image'
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";
export default function Infocards(props) {
  return (
    
    <div className=" space-y-10  lg:flex lg:space-x-10 justify-center m-2 lg:m-20 bg-[url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/279756/green_shine.png)]  ">
    
    <div className="flex justify-center lg:ml-10  bg-[url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/279756/orange_shine.png)] ">
  <div className="img-hover-zoom--zoom-n-rotate img img-hover-zoom--zoom-n-rotate:hover img rounded-lg shadow-lg bg-gradient-to-r from-sky-500 to-indigo-500 max-w-sm">
    <a href="#!">
      <Image className="rounded-t-lg" src={props.item.img} alt=""   width="300px" height="280px"/>
    </a>
    <div className="bg-[url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/279756/orange_shine.png)] p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">{props.item.title}</h5>
      <p className="text-gray-700 text-base mb-4">
      {props.item.content}
      </p>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
    </div>
  </div>
</div>
<div className="bg-[url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/279756/orange_shine.png)]  lg:p-6">
<div className="mt-5 flex justify-center ">
  <div className=" img-hover-zoom--zoom-n-rotate img img-hover-zoom--zoom-n-rotate:hover img rounded-lg shadow-lg  bg-[url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/279756/orange_shine.png')] max-w-sm">
    <a href="#!">
      <Image className="rounded-t-lg" src={props.item.img} alt="" width="300px" height="280px"/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">{props.item.title}</h5>
      <p className="text-gray-700 text-base mb-4">
      {props.item.content}
      </p>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
    </div>
  </div>
</div>
</div>
<div className="flex justify-center">
  <div className=" img-hover-zoom--zoom-n-rotate img img-hover-zoom--zoom-n-rotate:hover img rounded-lg shadow-lg bg-gradient-to-r from-sky-500 to-indigo-500 max-w-sm">
    <a href="#!">
      <Image className="rounded-t-lg" src={props.item.img} alt="" width="300px" height="280px"/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">{props.item.title}</h5>
      <p className="text-gray-700 text-base mb-4">
      {props.item.content}
        
      </p>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
    </div>
  </div>
</div>
  </div>

  )
}
