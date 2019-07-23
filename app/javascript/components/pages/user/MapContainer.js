import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import { Button } from "reactstrap";

import UserHome from "./UserHome.js";
import StoreMarkerWindow from "./StoreMarkerWindow.js";
import InfoWindowEx from "./InfoWindowEx.js";
import StoreList from "./StoreList.js";

const mapStyles = {
  width: "90%",
  height: "100%"
};

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      address: [],
      location: {},
      displayMarkers: [],
      success: false
    };
  }

  componentDidMount = () => {
    this.fetchMarkers();
  };

  componentDidUpdate = prevProps => {
    if (prevProps.stores === this.props.stores) {
      return true;
    }
    this.fetchMarkers();
  };

  openTab = () => {
    console.log(this.state.selectedPlace.storeId);
    // this.props.openTab(this.state.selectedPlace.storeId)
  };

  onClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  fetchMarkers = () => {
    const newMarkers = [];
    this.props.stores.map((store, index) => {
      const location = `${store.address1}, ${store.city}, ${store.state}, ${
        store.zip
      }`;
      this.geocodeAddress(location).then(geoco => {
        newMarkers.push({
          lat: geoco.lat,
          lng: geoco.lng,
          storeId: store.id,
          name: store.establishmentname,
          location: location,
          info: store.additionalinfo
        });
        this.setState({ displayMarkers: newMarkers });
      });
    });
  };

  geocodeAddress = address => {
    const geocoder = new google.maps.Geocoder();
    return new Promise((resolve, reject) => {
      geocoder.geocode({ address: address }, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          resolve(results[0].geometry.location.toJSON());
        } else {
          reject();
        }
      });
    });
  };

  render() {
    const {
      activeMarker,
      showingInfoWindow,
      selectedPlace,
      onMapOver
    } = this.props;

    return (
      <React.Fragment>
        <br /> <br />
        <div className="map_div">
          <Map
            google={this.props.google}
            onMouseover={this.onMapOver}
            zoom={14}
            style={mapStyles}
            initialCenter={{
              lat: 32.7091,
              lng: -117.158
            }}
          >
            {this.state.displayMarkers.map((coordinates, index) => {
              const { storeId, lat, lng, name, location, info } = coordinates;
              return (
                <Marker
                  onClick={this.onClick}
                  key={index}
                  id={storeId}
                  name={name}
                  position={{ lat, lng }}
                  location={location}
                  info={info}
                />
              );
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
        <div> </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="open_tab">
          <StoreList stores={this.props.stores} openTab={this.props.openTab} />
          {this.props.success && <Redirect to="/user_home/opentabs" />}
        </div>
      </React.Fragment>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBFGcpxYZoZ2X4MPVsql1OIyFxwgKZBBK8"
})(MapContainer);
