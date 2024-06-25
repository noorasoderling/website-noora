import React from 'react';
import './ProjectView.css';
import '../../App.css';
import '../ToggleButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function ProjectView() {

    let [toggleContent, setToggleContent] = useState(false)

    let handleChange = () => {
        setToggleContent(toggleContent => !toggleContent)
      }

 return (
    <div className='projectView-container projectView'>
      <div className='projectView-2cols-1'>
        <span className='projectView-divider'></span>
        <h2>Projectsss</h2>
        <p>Check out my latets projects and their details. </p>
      </div>
      <div className='projectView-2cols-2'>
        <div className='projectView-li'>
          <p>01</p><h4>Mobile Application</h4>
            <div onClick={handleChange} className='toggle-button'>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          {toggleContent? <p>THIS IS ACTIVE TOGGLE CONTENT!</p> : null}
        </div>
        <span className='section-divider'></span>
        <div className='projectView-li'>
        <p>02</p><h4>Web Development</h4>
        </div>
        <span className='section-divider'></span>
        <div className='projectView-li'>
        <p>03</p><h4>Digital Marketing</h4>
        </div>
      </div>
    </div>
  )
}

export default ProjectView;
