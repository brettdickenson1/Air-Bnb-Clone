import React from 'react';
import '../Components_css/Card.css';

function Card({ src, title, description, price }) {
  return (
    <div className='card'>
      <img src={src} alt='' />
      <div className='card__info'>
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
}

export default Card;
