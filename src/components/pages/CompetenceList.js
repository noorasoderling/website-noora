import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import './ProjectView.css';
import '../ToggleButton.css';

const projectData = [
    {
        id: 0,
        name: 'Mobile Application',
        description: 'Mobile application development is the process of making software for smartphones, tablets and digital assistants, most commonly for the Android and iOS operating systems.e',
    },
    {
        id: 1, 
        name: 'Web Development',
        description: 'Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management.'
    },
    {
        id: 2,
        name: 'Digital Marketing',
        description: 'Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication. This includes not only email, social media, and web-based advertising, but also text and multimedia messages as a marketing channel.'
    }
];

function CompetenceList() {
    const [toggledContent, setToggledContent] = useState({});

    const handleChange = (id) => {
        setToggledContent((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };
  
  return (
    <ul>
        {projectData.map((competence) => (
            <li key={competence.id}>
                <div className='projectView'>
                    <h2>{competence.id}</h2>
                    <h4>{competence.name}</h4>
                    <div onClick={() => handleChange(competence.id)} className='toggle-button'>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                </div>
                {toggledContent[competence.id] ? (
                    <div className='toggled-paragraph'>
                        <p>{competence.description}</p>
                    </div>
                ) : null}
                <span className='section-divider'></span>
            </li>
        ))}
    </ul>
);
};

export default CompetenceList;