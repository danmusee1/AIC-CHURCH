
import React from 'react'
import data from '../data'
import Infocards from './Infocards'

export default function InfoPage() {
    const cards = data.map(item =>{
        return(
            <div className="  flex-row  ">
            <Infocards
            key={item.id}
            item={item}
            />
            </div>
        )
    })
    return (
        <div>
            <section className=" space-y-0.9 pb-1 pt-10 md:flex-row ">
                {cards}
            </section>
        </div>
      
    )
  }
  

    
