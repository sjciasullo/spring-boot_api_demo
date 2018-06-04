import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
// uses example from package https://www.npmjs.com/package/react-places-autocomplete

import '../styles/LocationInput.css';

class LocationInput extends Component {
  // this could be functional component once state is handled above
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(location){
    //set location to selected
    this.props.handleChange(location);

    // uses google api to get the location's info
    geocodeByAddress(location)
      // this will really set the latlng in parent in step 2
      // will we need to pass the whole handle select down from activity form ?
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log("Success: ", latLng)) 
      .catch(error => console.log("Error: ", error))
  }

  render() {
    return (
      <PlacesAutocomplete
        value={this.props.location} // this will come from props
        onChange={this.props.handleChange} // these might be func
        onSelect={this.handleSelect}
        googleCallbackName="initGoogle"
      >
        {/* handle input and autocomplete container */}
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: "Location",
                className: "location-search-input"
              })}
            />
            <div className="autocomplete-dropdown-container">
              {suggestions.map(suggestion => {
                const className = suggestion.active ? "suggestion-item--active" : "suggestion-item";
                const style = suggestion.active
                  ? { backgroundColor: "#ccc", cursor: "pointer" }
                  : { backgroundColor: "#fff", cursor: "pointer" };
                style.width = "350px";
                style.padding = "5px";
                style.fontSize = "9px";
                return (
                  <div {...getSuggestionItemProps(suggestion, { className, style })}>
                    <span>{suggestion.description}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )} 
      </PlacesAutocomplete>
    );
  }
}

export default LocationInput;