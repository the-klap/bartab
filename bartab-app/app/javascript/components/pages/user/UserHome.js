import React from "react"
import PropTypes from "prop-types"
import {
        BrowserRouter as Router,
        Route,
        Link
        } from "react-router-dom";
import { Nav, NavItem, NavLink } from 'reactstrap'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
// import {Geocode} from "react-geocode";


// Geocode.fromAddress().then(
//   response => {
//     const { lat, lng } = response.results[0].geometry.location;
//     console.log(lat, lng);
//   },
//   error => {
//     console.error(error);
//   }
// );


//components imported to main UserHome
import HappyHour from './HappyHour.js'
import MapContainer from './MapContainer.js'
import Profile from './Profile.js'
import Tab from './Tab.js'
import TabHistory from './TabHistory.js'
import StoreList from './StoreList'


class UserHome extends React.Component {
  constructor(props){
    super(props)
     this.state = {
          current_user_profile: {},
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

          showingInfoWindow: false,
          activeMarker: {},
          selectedPlace: {}, 
                    id: 1,
                    name: "Joe",
                    sessions:[ {bar_id: 2,
                                tab_total: 300,
                                open: false,
                                order: [
                                        {name:"Kyles Kolsch", price: 6}
                                        ],
                                },
                                {bar_id: 3,
                                tab_total: 80,
                                open: true,
                                order: [
                                        {name:"Kyles Kolsch", price: 6}
                                        ],
                                },
                                {bar_id: 2,
                                tab_total: 20,
                                open: true,
                                order: [
                                        {name:"Kyles Kolsch", price: 6}
                                        ],
                                }
                              ]
                  }
      }



  componentWillMount() {
    const {current_user_id} = this.props
    fetch(`/user_profiles/${current_user_id}`, {
  		headers: { 
  			'Content-Type': 'application/json'
  		},
  		method: "GET"
  	  })
  	  .then(response => response.json())
  	  .then(current_user_profile => {this.setState({ current_user_profile }) })
  }

    onMapOver = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
      
    }
    
    openTab = (id) => {
      const {sessions} = this.state
      sessions.push(
        {
          bar_id: id,
          tab_total: 0,
          open: true,
          order: [
                ],
        },
        )
        this.setState({sessions})
    }
  
  
  render () {
     const {user_logged_in, 
        user_sign_in_route, 
        user_sign_out_route,
        current_user_id,
     }=this.props

     const {stores,name, id, sessions, openTab, order, current_user_profile}=this.state
    console.log(current_user_profile)
    console.log(current_user_id)
    return (
      <React.Fragment>
        <Router>
        <div>
        {/* change user to name in profile*/}
         <button onClick={this.openTab}>You better beer-lieve it!</button>
    </div>
    
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
                  <div className="col-sm">
                    <NavItem>
                      <NavLink id="adminSignOut" href={user_sign_out_route}>Sign Out</NavLink>
                    </NavItem>
                  </div> 
                 </div>
               </div>
              </Nav>
                  
                  
              }
              
              {/* changing /userhome to user_home will create an error*/}
            <Route exact path="/userhome" exact component={UserHome} />

            
            
            <Route exact path="/user_home/tabhistory" exact render={(props) => <TabHistory {...props}
              name={name}
              id={id}
              sessions={sessions}
              order={order}
            />} />
            
            
            
            
            <Route path="/user_home/tab" exact render={(props) => <Tab {...props}
              name={name}
              id={id}
              sessions={sessions}
              order={order}
            />} />
            
            <Route path="/user_home/mapcontainer" exact render={(props) => <MapContainer {...props}
                      stores={stores}
                    />} />
            <Route path="/user_home/profile" exact component={Profile} />
            <Route path="/user_home/happyhour" exact component={HappyHour} />
          </div>
        </Router>
        
        <StoreList stores={stores} openTab={this.openTab}/>
    </React.Fragment>
    );
  }
}

export default UserHome
