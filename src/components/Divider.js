import React from 'react';
import './Divider.css';

function Divider({ color }) {
  return (
    <div className='divider' style={{ backgroundColor: color }}></div>
  )
}

export default Divider
