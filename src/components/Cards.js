import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out my Projects</h1>
      <div className='cards__container'></div>
      <div className='cards__wrapper'></div>
      <ul className='cards__items'>
        <CardItem 
            src="images/tuska-img.jpeg"
            text="Explore the Tuska Festival Mobile Application project."
            label="Mobile"
            path="/services"
            />
        <CardItem 
            src="images/tuska-img.jpeg"
            text="Flow Festival material footrprint and carbon footprint calculator."
            label="WebDev"
            path="/services"
            />
      </ul>
    </div>
  )
}

export default Cards
