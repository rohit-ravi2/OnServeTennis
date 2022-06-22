import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={process.env.PUBLIC_URL + "/images/adidascampimage.jpeg"}
              text='Programs'
              path='/Programs'
            />
            <CardItem
              src={process.env.PUBLIC_URL + "/images/ramapogirlstennis.jpeg"}
              text='Our Team'
              path='/Team'
            />            
            </ul>
            <ul className='cards__items'>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
