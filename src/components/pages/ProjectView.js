import React from 'react';
import './ProjectView.css';
import '../../App.css';
import '../ToggleButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Divider from '../Divider';

function ProjectView() {

    let [toggleContent1, setToggleContent1] = useState(false)
    let handleChange1 = () => {
        setToggleContent1(toggleContent1 => !toggleContent1)
    }

    let [toggleContent2, setToggleContent2] = useState(false)
    let handleChange2 = () => {
      setToggleContent2(toggleContent2 => !toggleContent2)
    }

    let [toggleContent3, setToggleContent3] = useState(false)
    let handleChange3 = () => {
      setToggleContent3(toggleContent3 => !toggleContent3)
    }

 return (
    <div className='projectView-container'>
      <div className='projectView-2cols-1'>
        <Divider color={'var(--light)'}/>
        <h2>Projectsss</h2>
        <p>Check out my latest projects and their details. </p>
      </div>
      <div className='projectView-2cols-2'>
        <div className='projectView-li'>
          <h2>01</h2><h4>Mobile Application</h4>
            <div onClick={handleChange1} className='toggle-button'>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
        </div>
        {toggleContent1? <div className='toggled-paragraph'>
          <p>Mobile application development is the process of making software for smartphones, tablets and digital assistants, most commonly for the Android and iOS operating systems.</p></div> : null}
        <span className='section-divider'></span>
        <div className='projectView-li'>
        <h2>02</h2><h4>Web Development</h4>
          <div onClick={handleChange2} className='toggle-button'>
                <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
        {toggleContent2? <div className='toggled-paragraph'>
          <p>Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management.</p></div> : null}
        <span className='section-divider'></span>
        <div className='projectView-li'>
        <h2>03</h2><h4>Digital Marketing</h4>
          <div onClick={handleChange3} className='toggle-button'>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
        {toggleContent3? <div className='toggled-paragraph'>
          <p>Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication. This includes not only email, social media, and web-based advertising, but also text and multimedia messages as a marketing channel.</p></div> : null}
      </div>
    </div>
  )
}

export default ProjectView;
