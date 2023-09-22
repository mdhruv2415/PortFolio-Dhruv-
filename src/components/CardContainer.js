import React from 'react'
import Card from './Card';

const CardContainer = (props) => (
    <div className="cards-container">
      {
        props.cards.map((card) => (
          <Card title={ card.title }
            content={ card.description }
            imgUrl={ card.image} />
        ))
      }
    </div>
  );

export default CardContainer