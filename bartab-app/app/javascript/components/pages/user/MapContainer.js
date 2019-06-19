import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import UserHome from './UserHome.js'

const mapStyles = {
  width: '50%',
  height: '50%'
};

export class MapContainer extends Component {
    constructor(props) {
        super(props);
    }



  render() {
    const{ stores,
           displayMarkers
    }=this.props
    
      console.log({displayMarkers})
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 32.7091,
         lng: -117.1580
        }}
      >
      {displayMarkers()}
    </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBFGcpxYZoZ2X4MPVsql1OIyFxwgKZBBK8'
})(MapContainer);