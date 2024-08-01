import React from 'react';
import CardItem from '../CardItem';
import Divider from '../Divider';
import './ProjectCards.css';

function Cards() {
  return (
    <div className='cards'>
      <Divider color={'var(--dark)'}/>
      <h2>Check out my Projects</h2>
      <div className='cards__container'></div>
      <div className='cards__wrapper'></div>
      <ul className='cards__items'>
        <CardItem />
      </ul>
    </div>
  )
}

export default Cards
