import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
// uses example from package https://www.npmjs.com/package/react-places-autocomplete

class LocationInput extends Component {
  // this could be functional component once state is handled above
  constructor(props) {
    super(props);
    this.state = {
      address: "",
    };
  }

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address} // this will come from props
        onChange={this.handleChange} // these might be func
        onSelect={this.handleSelect}
      >
        {/* handle input and autocomplete container */}
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: "Search places ...",
                className: "location-search-input"
              })}
            />
            <div className="autocomplete-dropdown-container">
              {suggestions.map(suggestion => {
                const className = suggestion.active ? "suggestion-item--active" : "suggestion-item";
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
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