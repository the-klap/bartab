import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import UserHome from './UserHome.js'

const mapStyles = {
  width: '50%',
  height: '50%'
};

export class MapContainer extends Component {
    constructor(props) {
        super(props)
          this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}, 
          }
    }
    
    onClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      })


 
    displayMarkers = () => {
        return this.props.stores.map((store, index) => {
          return <Marker onClick={this.onClick}
          key={index}
          id={store.id}
          position={{
          lat: store.lat,
          lng: store.lng
         }}
        />
      })
    }

  render() {
    const{
           activeMarker,
           showingInfoWindow,
           selectedPlace,
           onMapOver
    }=this.props
    
    return (
      <Map
        google={this.props.google}
        onMouseover={this.onMapOver}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 32.7091,
         lng: -117.1580
        }}
      >
       {this.displayMarkers()}
      
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.id}</h1>
            </div>
        </InfoWindow>
      
      
    </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBFGcpxYZoZ2X4MPVsql1OIyFxwgKZBBK8'
})(MapContainer);