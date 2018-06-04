# Error Log
1. Could not reference users id without unique constraint in migration V2 for creating activities table.
    - Solution: alter table to add constraint to users.id for it to be primary key
2. Changing user could not use === on client
    - solution: debug printing types along the chain of switches reveals that typeof option.value is string
        - converting value to string upon the change of option allows int to flow through app
3. Setting bounds of Google Map component is not changing size or center
    - solution: research implementations via the source repo
        - this reveals a fitBounds() method which takes a google LatLngBounds object and sets the map to those constraints
        - call this method in componentDidMount and componentDidUpdate using a ref of the map and props
4. CORS error trying to fetch locations from google's api
    - Solution: have to use Google Map's Places library, not api for web
        - use autocomplete package, rather than custom checking
5. map wrapper is not sizing which blocks form
    - Solution: https://github.com/fullstackreact/google-maps-react/issues/26
        - found a containerStyle prop for map to set display to relative
6. Google Maps API is trying to double download in map component and for autocomplete component
    - Solution: try wrapping form in HoC from map package