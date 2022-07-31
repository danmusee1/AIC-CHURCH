import React from 'react'

export default function Infocards(props) {
  return (
    <div className="lg:flex  top-90 bottom-15 left-2 right-0 pr-9 pl-3 space-y-4 ">

        <img className="h-40 w-25 mx-auto  " 
        src={props.item.img} />

        <div className="flex flex-col space-y-4 inline-block space-y-4">
        <p className=" text-center text-2xl lg:text-4xl font-bold lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black color: rgb(0 0 0); link link-underline link-underline-black  items-center justify-center">
            {props.item.title}
            </p>
    <p className="text-0.5xl lg:text-1xl block lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray  link link-underline link-underline-black  items-center justify-center">
        {props.item.content}</p>
        </div>
    
    </div>
  )
}
