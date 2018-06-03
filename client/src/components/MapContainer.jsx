import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import '../styles/MapContainer.css';

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

// dummy data
const POINTS = [
  {lat: 25.774, lng: -80.190},
  {lat: 18.466, lng: -66.118},
  {lat: 32.321, lng: -64.757},
  {lat: 25.774, lng: -80.190}
]

// using method from https://www.npmjs.com/package/google-maps-react

export class MapContainer extends Component {
  constructor(props){
    super(props);
    this.state={};
  }

  // will take array of activities as a prop
  // and in map marker creating can specify name, position{lat, long}, title

  componentDidMount(){
    this.refs.mapper.map.fitBounds(this.refs.mapper.props.bounds);
  }

  componentDidUpdate(){
    this.refs.mapper.map.fitBounds(this.refs.mapper.props.bounds);
  }

  render() {
    
    // create bounds object for setting the map bounds
    let bounds = new this.props.google.maps.LatLngBounds();

    // map through points to create markers while extending the bounds on map for each
    const markerComponents = POINTS.map((point, index) =>{
      bounds.extend(point);
      return (
        <Marker key={index} name={"point" + index} position={point} />
      )
    })
    console.log(bounds);

    const MAP_STYLE = {
      width: '730px',
      height: '400px',
      marginLeft: '30px'
    }
    
    return(
      <div className="map-container">
        <Map 
          // ref={map => "map" && this.refs.map.fitBounds(bounds)}
          ref="mapper"
          google={this.props.google} 
          // zoom={14}
          style={MAP_STYLE}
          initialCenter={{lat: 0, lng: 0}}
          bounds={bounds}
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