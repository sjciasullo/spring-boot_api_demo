import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import '../styles/MapContainer.css';

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export class MapContainer extends Component {
  // will take array of locations as a prop

  render() {
    return(
      
        <Map google={this.props.google} zoom={14}>
        </Map>
      
    )
  }
  
  
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapContainer);