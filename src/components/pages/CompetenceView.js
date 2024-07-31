import React from 'react';
import './CompetenceView.css';
import '../../App.css';
import Divider from '../Divider';
import CompetenceList from './CompetenceList';

function CompetenceView() {
 return (
    <div className='competenceView-container'>
      <div className='competenceView-2cols-1'>
        <Divider color={'var(--light)'}/>
        <h2>Projectsss</h2>
        <p>Check out my latest projects and their details. </p>
      </div>

      <div className='competenceView-2cols-2'>
          <CompetenceList/>
      </div>
    </div>
  )
}

export default CompetenceView;
