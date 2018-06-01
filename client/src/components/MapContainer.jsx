import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import '../styles/MapContainer.css';

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export class MapContainer extends Component {
  // will take array of locations as a prop

  render() {
    const MAP_STYLE = {
      width: '730px',
      height: '400px',
      marginLeft: '30px'
    }
    
    return(
      <div className="map-container">
        <Map 
          google={this.props.google} 
          zoom={14}
          style={MAP_STYLE}
        >
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapContainer);