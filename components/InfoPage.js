
import React from 'react'
import data from '../data'
import Infocards from './Infocards'

export default function InfoPage() {
    const cards = data.map(item =>{
        return(
            <Infocards
            key={item.id}
            item={item}
            />
        )
    })
    return (
        <div>
            <section className="cardslist">
                {cards}
            </section>
        </div>
      
    )
  }
  

    
