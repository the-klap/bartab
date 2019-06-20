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
          stores: [ {
                    id: 1,
                    name: "bubs",
                    hours: "24/7",
                    info: "drink beer",
                    address1: "715 J St",
                    address2: "",
                    city: "San Diego",
                    state: "CA",
                    zip: "92101",
                    country: "USA",
                    lat: 32.709568,
                    lng: -117.124658,
                  },
                  { id: 2, 
                    name: "half door",
                    hours: "mon-sat 12-9",
                    info: "we have good beer",
                    address1: "903 Island Ave",
                    address2: "",
                    city: "San Diego",
                    state: "CA",
                    zip: "92101",
                    country: "USA",
                    lat: 32.710248,
                    lng: -117.156268,
                  },
                  { id: 3, 
                    name: "social tap",
                    hours: "all day",
                    info: "check us out!",
                    address1: "815 J St",
                    address2: "",
                    city: "San Diego",
                    state: "CA",
                    zip: "92101",
                    country: "USA",
                    lat: 32.710568,
                    lng: -117.134658,
                  },
                ],
          id: 1,
          name: "Joe",
          sessions:[ {bar_id: 2,
                      tab_total: 6,
                      open: false,
                      order: [
                              {name:"Kyles Kolsch", price: 6}
                              ],
                      },
                      {bar_id: 3,
                      tab_total: 10,
                      open: false,
                      order: [
                              {name:"Kyles Kolsch", price: 6},
                              {name:"Peters Pinacolada", price: 4},
                              ],
                      },
                      {bar_id: 1,
                        tab_total: 4,
                        open: true,
                        order: [
                                {name:"Peters Pinacolada", price: 4},
                                ],
                      }
                  ],
                    
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
     const {stores, sessions}=this.state

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
            <Route exact path="/user_home/tabhistory" exact render={(props) => <TabHistory {...props} 
                      sessions={sessions}
                    />} />
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
