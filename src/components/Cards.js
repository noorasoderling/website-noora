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
            text="Explore the world of mobile application development."
            label="Mobile"
            path="/services"
            />
        <CardItem 
            src="images/travel-image.jpeg"
            text="Join the adventourous life of the author."
            label="WebDev"
            path="/FlowFestival"
            />
            <CardItem 
            src="images/img-3.jpg"
            text="Contact Noora from here"
            label="Mobile"
            path="/Contact"
            />
      </ul>
    </div>
  )
}

export default Cards
