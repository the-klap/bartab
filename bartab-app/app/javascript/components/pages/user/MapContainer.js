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
            address: [], 
            location: {},
            displayMarkers: []
          }
    }
   
    onClick = (props, marker, e) => {
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      })
      console.log(this.state.selectedPlace)
    }
    
    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
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
    fetchMarkers = () => {
      console.log('stopped here')
      const newMarkers = []
      this.props.stores.map((store, index) => {
        const location = `${store.id} ${store.address1}, ${store.city}, ${store.state}, ${store.zip}`
        this.geocodeAddress(location)
        .then((geoco)=>{
           newMarkers.push({lat: geoco.lat, lng: geoco.lng, storeId: store.id, name: store.establishmentname})
           console.log(newMarkers)
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
          console.log('Geocoded address: ',
          results[0].geometry.location.toJSON())
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
    
  const markerText = {
                    color: 'black',
                    };

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
        {this.state.displayMarkers.map((coordinates, index) => {
          const{storeId, lat, lng, name} = coordinates
          return (
                  <Marker onClick={this.onClick}
                      key={index}
                      id={storeId}
                      name={name}
                      position = {{lat, lng}}
                  >
                  </Marker>
                )
        })}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
            >
          <div>
            <h3 style={markerText}> {this.state.selectedPlace.name} </h3>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBFGcpxYZoZ2X4MPVsql1OIyFxwgKZBBK8'
})(MapContainer);