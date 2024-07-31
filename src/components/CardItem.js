import React from 'react';
import { Link } from  'react-router-dom';
import '././pages/ProjectCards.css';

const projectData = [
  {
    src: "images/tuska-img.jpeg",
    name: "Tuska Festival",
    text: "Festival Mobile Application",
    label: "Mobile",
    path: "/Tuska"
  },
  {
    src: "images/travel-image.jpeg",
    name: "Flow Festival",
    text: "Material & Carbon footprint calculator",
    label: "WebDev",
    path: "/FlowFestival"
  },
  {
    src: "images/img-3.jpg",
    name: "Selligent Implementation",
    text: "Marketing Automation Solution Implementation",
    label: "Mobile",
    path: "/Contact"
  }
];

function CardItem() {

  return (
    <ul>
    {projectData.map((project) => (
      <li className="cards__item">
      <Link className="cards__item__link" to={project.path}>
      <figure className="cards__item__pic-wrap" data-category={project.label}>
         <img src={project.src} alt="Noora travleing in the mountains" className='cards__item__img'></img>
         </figure>
         <div className='cards__item__info'>
             <h5 className='cards__item__text'>{project.text}</h5>
         </div>
     </Link>
    </li>
  ))}
  </ul>
  )
}

export default CardItem
