import React from 'react';
import '../styles/MapContainer.css';

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

function MapContainer(props) {
  // will take array of locations as a prop
  return(
    <div className='map-container'>
      <p>This will be a map</p>
    </div>
  )
  
}

export default MapContainer;