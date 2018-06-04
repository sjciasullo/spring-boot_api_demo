import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
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
// markerClick methods as described in package spec 

export class MapContainer extends Component {
  // will take array of activities as a prop
  // and in map marker creating can specify name, position{lat, long}, title
  constructor(props){
    super(props);
    this.state={
      activeMarker: {},
      selectedPlace: {},
      showingInfoWindow: false
    };

    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onInfoWindowClose = this.onInfoWindowClose.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  // ----- MARKER_INFO METHODS -----
  // turns on info window for marker
  onMarkerClick(props, marker){
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });
  }

  // turns off showing window for marker
  onInfoWindowClose(){
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });
  }

  // turns off showing window if map clicked when info on
  onMapClick(){
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });
  }
  // ----- END MARKER_INFO METHODS -----


  // ----- LIFECYCLE METHODS FOR BOUNDS -----
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
    const markerComponents = this.props.activities.map((activity) =>{
      bounds.extend({lat: activity.latitude, lng: activity.longitude});
      console.log(`Activity ${activity}`)
      console.log(`lat: ${activity.latitude} | lng: ${activity.longitude}`)
      return (
        <Marker 
          key={activity.id} 
          name={`${activity.name}\n${activity.location}\n${activity.minutes} minutes\n ${activity.month}
          `} 
          position={{lat: activity.latitude, lng: activity.longitude}} 
          onClick={this.onMarkerClick}
        />
      )
    })

    // styles for map
    const MAP_STYLE = {
      width: '730px',
      height: '400px',
      marginLeft: '30px'
    }
    
    return(
      <div className="map-container">
        <Map 
          ref="mapper"
          google={this.props.google} 
          style={MAP_STYLE}
          initialCenter={{lat: 0, lng: 0}}
          bounds={bounds}
          onClick={this.onMapClick}
        >
          {markerComponents}
          <InfoWindow
            marker={this.state.activeMarker}
            onClose={this.onInfoWindowClose}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
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