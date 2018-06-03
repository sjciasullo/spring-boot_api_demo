import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import '../styles/MapContainer.css';

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

// using method from https://www.npmjs.com/package/google-maps-react

export class MapContainer extends Component {
  // will take array of activities as a prop
  // and in map marker creating can specify name, position{lat, long}, title

  render() {
    // dummy data
    const points = [
      {lat: 25.774, lng: -80.190},
      {lat: 18.466, lng: -66.118},
      {lat: 32.321, lng: -64.757},
      {lat: 25.774, lng: -80.190}
    ]

    //map through markers
    const markerComponents = points.map((point, index) =>{
      return (
        <Marker key={index} name={"point" + index} position={point} />
      )
    })

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
          {markerComponents}
        </Map>
      </div>
    )
  }
}

// GoogleApiWrapper is a Higher Order Component which packages up
// the google maps api methods and takes a map-container component
// so that it can create a "super" component with beefed up Google 
// Maps
export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapContainer);