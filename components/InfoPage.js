
import React from 'react'
import data from '../data'
import Infocards from './Infocards'

export default function InfoPage() {
    const cards = data.map(item =>{
        return (
            <div className="  lg:grid-row-1  ">
            <Infocards
            key={item.id}
            item={item}
            />
            </div>
        )
    })
    return (
        <div className=" lg:grid-row-1 ">
            <section className=" lg:grid-row-1 ">
                {cards}
            </section>
        </div>
      
    )
  }
  
 