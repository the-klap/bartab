import React from "react"
import PropTypes from "prop-types"
import  {
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
import OpenTabs from './OpenTabs.js'
import TabHistory from './TabHistory.js'
import StoreList from './StoreList'


class UserHome extends React.Component {
  constructor(props){
    super(props)
     this.state = {
          current_user_profile: {},

          open_tabs: [],
          closed_tabs: [],

          firstname: '',
          lastname: '',

          showingInfoWindow: false,
          activeMarker: {},
          selectedPlace: {}, 
                    
                  }
      }
  
  componentWillMount() {
    this.getProfile()
    this.getOpenTabs()
    this.getClosedTabs()
  }
  
  getProfile = () => {
    const {current_user_id} = this.props
    fetch(`/user_profiles/${current_user_id}`, {
  		headers: { 
  			'Content-Type': 'application/json'
  		},
  		method: "GET"
  	  })
  	  .then(response => response.json())
  	  .then(current_user_profile => {this.setState({ current_user_profile }) })
  	 //fetch(`/user_profiles/${current_user_id}`, {
  		// headers: { 
  		// 	'Content-Type': 'application/json'
  		// },
  		// method: "PUT"
  	 // })
  	 // .then(response => response.json())
  	 // .then(current_user_profile => {this.setState({ current_user_profile }) })
  }
  
  getOpenTabs = () => {
    fetch('/user_open_tabs', {
  		headers: { 
  			'Content-Type': 'application/json'
  		},
  		method: "GET"
  	  })
  	  .then(response => response.json())
  	  .then(open_tabs => {this.setState({ open_tabs }) })
  }
  
  getClosedTabs = () => {
    fetch('/user_closed_tabs', {
  		headers: { 
  			'Content-Type': 'application/json'
  		},
  		method: "GET"
  	  })
  	  .then(response => response.json())
  	  .then(closed_tabs => {this.setState({ closed_tabs }) })
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
    const {current_user_id} = this.props
    const newTab = {total:0, open:true, user_id:current_user_id, admin_id:id}
    fetch('/tabs', {
      body: JSON.stringify(newTab),
  		headers: { 
  			'Content-Type': 'application/json'
  		},
  		method: "POST"
  	  })
  	  .then(response => response.json())
  }
  
  
  render () {

    const {user_logged_in, 
        user_sign_in_route, 
        user_sign_out_route,
        current_user_id,
        stores,
     }=this.props

    const { current_user_profile, open_tabs, closed_tabs }=this.state
    
    console.log(open_tabs)


    return (
      <React.Fragment>
        <Router>
          <div>
            Hey there {current_user_profile.firstname} <br />
          </div>
      
          <div>
            {user_logged_in &&
              <Nav>
                <div className="container">
                  <div className="row">
                    <div className="col-sm">
                      <NavItem>
                        <NavLink href="/user_home">User Home</NavLink>
                      </NavItem>
                    </div>
                    <div class="col-sm">
                      <NavItem>
                        <NavLink href="/user_home/storelist">View Stores</NavLink>
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
                        <NavLink href="/user_home/opentabs">Open Tabs</NavLink>
                      </NavItem>
                    </div>
                    <div class="col-sm">
                      <NavItem>
                        <NavLink href="/user_home/profile">Profile</NavLink>
                      </NavItem>
                    </div>
                    {/*<div class="col-sm">
                      <NavItem>
                        <NavLink href="/user_home/happyhour">Happy Hour</NavLink>
                      </NavItem>
                    </div>*/}
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
              closed_tabs={closed_tabs}
            />} />
            <Route path="/user_home/opentabs" exact render={(props) => <OpenTabs {...props}
                open_tabs={open_tabs}
            />} />
            <Route path="/user_home/mapcontainer" exact render={(props) => <MapContainer {...props}
              stores={stores}
            />} />
            <Route path="/user_home/profile" exact render={(props) => <Profile {...props}
              current_user_profile={current_user_profile}
            />} />
            <Route path="/user_home/happyhour" exact component={HappyHour} />
            <Route path="/user_home/storelist" exact render={(props) => <StoreList {...props}
              stores={stores}
              openTab={this.openTab}
            />} />
          </div>
        </Router>
        
      </React.Fragment>
    );
  }
}

export default UserHome
