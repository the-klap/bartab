import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import UserHome from './UserHome.js'
// import Geocoder from 'react-geocode'



export class MapContainer extends Component {
    constructor(props) {
        super(props)
          this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            current_admin_profile: {}
          }
    }
    


    
    onClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      })

  // componentDidMount() {
  //   const {current_admin_profile_id} = this.props
  //   fetch(`/admin_profiles/${current_admin_profile_id}`, {
  // 		headers: { 
  // 			'Content-Type': 'application/json'
  // 		},
  // 		method: "GET"
  // 	  })
  // 	  .then(response => response.json())
  // 	  .then(current_admin_profile => {this.setState({ current_admin_profile }) })
  // }

 
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
    const mapStyles = {
      width: '50%',
      height: '50%'
    }
    const{
           activeMarker,
           showingInfoWindow,
           selectedPlace,
           onMapOver,
    }=this.props

    var location = '2161 Garnett Ave San Diego, Ca 92109'
    
    function geocodeAddress(address) {
      var geocoder = new google.maps.Geocoder()
      
      geocoder.geocode({'address': address}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          console.log('Geocoded address: ',
            results[0].geometry.location.toString())
          console.log('we\'re still in the if')
        } else {
          console.log('we made it to the else')
        }
      })
    }
          console.log(geocodeAddress(location))
          
          
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