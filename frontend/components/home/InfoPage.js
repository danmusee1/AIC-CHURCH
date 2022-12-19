
import data from './data'
import React from 'react'

import Infocards from './Infocards'

export default function InfoPage() {
    const cards = data.map(item =>{
        return (
           
            <Infocards
            key={item.id}
            item={item}
            />
            
        )
    })
    return (
        <div className="  ">
            <section className="  ">
                {cards}
            </section>
        </div>
      
    )
  }
  
 