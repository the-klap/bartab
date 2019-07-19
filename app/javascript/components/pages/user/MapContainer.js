import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { Button, Card } from 'reactstrap';

import UserHome from './UserHome.js'
import StoreMarkerWindow from './StoreMarkerWindow.js'
import InfoWindowEx from './InfoWindowEx.js'
import StoreList from './StoreList.js'

const mapStyles = {
  width: '100%',
  height: '100vh',
};

class MapContainer extends Component {
    constructor(props) {
        super(props)
          this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            address: [], 
            location: {},
            displayMarkers: [],
            success: false,
          }
    }
    
    componentDidMount = () => {
     this.fetchMarkers()  
    }
    
    componentDidUpdate = (prevProps) => {
      if (prevProps.stores === this.props.stores){
        return true
      }
      this.fetchMarkers()
    }
    
    openTab = () => {
      console.log(this.state.selectedPlace.storeId)
      // this.props.openTab(this.state.selectedPlace.storeId)
    }
   
    onClick = (props, marker, e) => {
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      })
    }
    
    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    }
    
   
    
    fetchMarkers = () => {
      const newMarkers = []
      this.props.stores.map((store, index) => {
        const location = `${store.address1}, ${store.city}, ${store.state}, ${store.zip}`
        this.geocodeAddress(location)
        .then((geoco)=>{
           newMarkers.push({lat: geoco.lat, 
                            lng: geoco.lng, 
                            storeId: store.id, 
                            name: store.establishmentname,
                            location: location,
                            info: store.additionalinfo,
             
           })
           this.setState({ displayMarkers:newMarkers})
       })
      })
    }
    
    // create a function that maps stores.address, stores.city, stores.state, stores.zipcode
    // and returns it to the geocodeAddress and then geocodeAddress returns it to 
    // the displayMarkers 
 
    geocodeAddress = (address) => {
      const  geocoder = new google.maps.Geocoder()
      return new Promise((resolve, reject) => {
        geocoder.geocode({'address': address}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          resolve(results[0].geometry.location.toJSON())
         } else {
          reject()
          }
      })
      })
      
    }
      

  render() {
    const{
           activeMarker,
           showingInfoWindow,
           selectedPlace,
           onMapOver,
    }=this.props
    
    return (
      <div className="mapContainer" style={mapStyles}>
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
        {this.state.displayMarkers.map((coordinates, index) => {
          const{storeId, lat, lng, name, location, info} = coordinates
          return (
            <Marker onClick={this.onClick}
              key={index}
              id={storeId}
              name={name}
              position = {{lat, lng}}
              location={location}
              info= {info}
            >
            </Marker>
          )
        })}
        <InfoWindowEx
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <StoreMarkerWindow 
              name={this.state.selectedPlace.name}
              location={this.state.selectedPlace.location}
              info={this.state.selectedPlace.info}
              id={this.state.selectedPlace.id}
              openTab={this.props.openTab}
              />
          </div>
        </InfoWindowEx>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBFGcpxYZoZ2X4MPVsql1OIyFxwgKZBBK8'
})(MapContainer);