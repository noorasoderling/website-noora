import React from 'react';
import './ProjectView.css';
import '../../App.css';
import Divider from '../Divider';
import CompetenceList from './CompetenceList';

function ProjectView() {
 return (
    <div className='projectView-container'>
      <div className='projectView-2cols-1'>
        <Divider color={'var(--light)'}/>
        <h2>Projectsss</h2>
        <p>Check out my latest projects and their details. </p>
      </div>

      <div className='projectView-2cols-2'>
          <CompetenceList/>
      </div>
    </div>
  )
}

export default ProjectView;
