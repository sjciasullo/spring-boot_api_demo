import React from 'react';
import '../styles/GoogleMap.css';

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

function GoogleMap(props) {
  // will take array of locations as a prop
  console.log(API_KEY);
  return(
    <div className='map-container'>
      <p>This will be a map</p>
    </div>
  )
  
}

export default GoogleMap;