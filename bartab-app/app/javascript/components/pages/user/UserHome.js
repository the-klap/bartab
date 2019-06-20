import React from "react"
import PropTypes from "prop-types"
import {
        BrowserRouter as Router,
        Route,
        Link
        } from "react-router-dom";
import { Nav, NavItem, NavLink } from 'reactstrap'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';



//components imported to main UserHome
import HappyHour from './HappyHour.js'
import MapContainer from './MapContainer.js'
import Profile from './Profile.js'
import Tab from './Tab.js'
import TabHistory from './TabHistory.js'


class UserHome extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        // array of bars, .map function to go through all bars, pass state as prop to map
          stores: [ { id: 1, latitude: 32.7112, longitude: -117.14184416996333},
                  { id: 2, latitude: 32.359423, longitude: -117.021071},
                  { id: 3, latitude: 32.2052192687988, longitude: -117.988426208496},
                  { id: 4, latitude: 32.6307081, longitude: -117.1434325},
                  { id: 5,latitude: 32.3084488, longitude: -117.2140121},
                  { id: 6, latitude: 32.5524695, longitude: -117.0425407} ],
          showingInfoWindow: false,
          activeMarker: {},
          selectedPlace: {}, 
        }
      }

    onMapOver = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
      
    }
  
  render () {
     const {user_logged_in, 
        user_sign_in_route, 
        user_sign_out_route,
     }=this.props
     const {stores}=this.state

    return (
      <React.Fragment>
        <Router>
            <div>
              {user_logged_in &&
              <Nav>
               <div class="container">
                 <div class="row">
                  <div class="col-sm">
                    <NavItem>
                      <NavLink href="/user_home">User Home</NavLink>
                    </NavItem>
                  </div>
                  <div class="col-sm">
                    <NavItem>
                      <NavLink href="/user_home/tabhistory">Tab History</NavLink>
                    </NavItem>
                  </div>
                  <div class="col-sm">
                    <NavItem>
                      <NavLink href="/user_home/mapcontainer">Map</NavLink>
                    </NavItem>
                  </div>  
                  <div class="col-sm">
                    <NavItem>
                      <NavLink href="/user_home/tab">Tab</NavLink>
                    </NavItem>
                  </div>
                  <div class="col-sm">
                    <NavItem>
                      <NavLink href="/user_home/profile">Profile</NavLink>
                    </NavItem>
                  </div>
                  <div class="col-sm">
                    <NavItem>
                      <NavLink href="/user_home/happyhour">Happy Hour</NavLink>
                    </NavItem>
                  </div>
                 </div>
               </div>
              </Nav>
                  
                  
              }
              
              {/* changing /userhome to user_home will create an error*/}
            <Route exact path="/userhome" exact component={UserHome} />
            <Route exact path="/user_home/tabhistory" exact component={TabHistory} />
            <Route path="/user_home/mapcontainer" exact render={(props) => <MapContainer {...props}
                      stores={stores}
                    />} />
            <Route path="/user_home/tab" exact component={Tab} />
            <Route path="/user_home/profile" exact component={Profile} />
            <Route path="/user_home/happyhour" exact component={HappyHour} />
          </div>
        </Router>
    </React.Fragment>
    );
  }
}

export default UserHome
