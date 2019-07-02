import React from "react"
import PropTypes from "prop-types"
import  {
         BrowserRouter as Router,
         Route,
         Link
        } from "react-router-dom";
import { Nav, NavItem, NavLink, Button } from 'reactstrap'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import "./user.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer,
        faMapMarkedAlt, 
        faListUl,
        faIdCard,
        faHome,
        faSadCry
      } from '@fortawesome/free-solid-svg-icons';
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
import CreateUserProfile from './CreateUserProfile'


class UserHome extends React.Component {
  constructor(props){
    super(props)
     this.state = {
        
          current_user_profile: {},
          openTabs: [],
          closedTabs: [],
          stores: [],
          showingInfoWindow: false,
          activeMarker: {},
          selectedPlace: {}, 
          
          success: false
                    
                  }
      }
  
  componentWillMount() {
    this.getProfile()
    this.getAdminProfiles()
    this.getOpenTabs()
    this.getClosedTabs()
  }
  
  //gets current user profile
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
  }
  
  //fetch will get all admin profiles
  getAdminProfiles() {
    fetch('/admin_profiles.json')
      .then(response => response.json())
      .then((stores) => {this.setState({ stores }) })
  }
  
  //Updates user profile with new firstname/lastname
  updateProfile = (newProfile) => {
    const {current_user_id} = this.props
    console.log(newProfile)
    fetch(`/user_profiles/${current_user_id}`, {
      body: JSON.stringify(newProfile ),
  		headers: { 
  			'Content-Type': 'application/json'
  		},
  		method: "PUT"
  	  })
  	  .then(response => response.json())
  }
  
  //creates new profile if profile has not been created
  handleNewProfile = (user_profile_params) => {
    console.log(user_profile_params)
    fetch('/user_profiles', {
   		body: JSON.stringify(user_profile_params),
   		headers: {'Content-Type': 'application/json'},
   		method: "POST"
   	})
    .then(response => response.json())
  }
  
  // gets all open tabs with current_user.id (open:true)
  getOpenTabs = () => {
    fetch('/user_open_tabs', {
  		headers: { 
  			'Content-Type': 'application/json'
  		},
  		method: "GET"
  	  })
  	  .then(response => response.json())
  	  .then(openTabs => {this.setState({ openTabs }) })
  }
  
  // gets user's closed tabs (open:false)
  getClosedTabs = () => {
    fetch('/user_closed_tabs', {
  		headers: { 
  			'Content-Type': 'application/json'
  		},
  		method: "GET"
  	  })
  	  .then(response => response.json())
  	  .then(closedTabs => {this.setState({ closedTabs }) })
  }
  
  
  // for googlemaps api
  onMapOver = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
      
  }
    
  // Opens a new tab with user_id
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

     }=this.props

    const { current_user_profile, openTabs, closedTabs, success, stores }=this.state
    
    const name = ((current_user_profile===null) ? 'new user' : current_user_profile.firstname)
    
    
    console.log(openTabs)
    console.log(closedTabs)

    return (
      <React.Fragment>
        <Router>

          <div>
          <h6><br />
            Hey there {name}!<br />
            <br />
            </h6>
            </div>
              <div>
            {user_logged_in &&
              <Nav position="center">
  
              <div class="container" className="navbar">
              <div class="row">
              <div class="col-sm">
              <NavItem className="user_Home">
                <NavLink href="/user_home">User Home<br /><FontAwesomeIcon icon={faHome} size="6x" /></NavLink>
              </NavItem>
              </div>
              <div class="col-sm">
              <NavItem className="user_tabHistory">
                <NavLink href="/user_home/tabhistory">Tab History<br /><FontAwesomeIcon icon={faListUl} size="6x" /></NavLink>
              </NavItem>
              </div>
              <div class="col-sm">
              <NavItem className="user_mapContainer">
                <NavLink href="/user_home/mapcontainer">Map <br/><FontAwesomeIcon icon={faMapMarkedAlt} size="6x" /></NavLink>
              </NavItem>
              </div>
              <div class="col-sm">
              <NavItem className="user_tab">
                <NavLink href="/user_home/opentabs">Open Tabs <br /><FontAwesomeIcon icon={faBeer} size="6x" /></NavLink>
              </NavItem>
              </div>
              <div class="col-sm">
              <NavItem className="user_profile">
                <NavLink href="/user_home/profile">Profile <br /><FontAwesomeIcon icon={faIdCard} size="6x" /></NavLink>
              </NavItem>
              </div>
              <div className="col-sm">
              <NavItem className="user_signout">
                <NavLink id="adminSignOut" href={user_sign_out_route}>Sign Out<br /><FontAwesomeIcon icon={faSadCry} size="6x" /></NavLink>
              </NavItem>
              </div> 
              </div>
              </div>
              </Nav>
            }
            {/* changing /userhome to user_home will create an error*/}
            <Route exact path="/userhome" exact component={UserHome} />
            <Route exact path="/user_home/tabhistory" exact render={(props) => <TabHistory {...props}
              closedTabs={closedTabs}
            />} />
            <Route path="/user_home/opentabs" exact render={(props) => <OpenTabs {...props}
                openTabs={openTabs}
            />} />
            <Route path="/user_home/mapcontainer" exact render={(props) => <MapContainer {...props}
              stores={stores}
              openTab={this.openTab}
              success={success}
            />} />
            <Route path="/user_home/profile" exact render={(props) => ((current_user_profile===null) ? 
              <CreateUserProfile 
                current_user_profile={current_user_profile}
                handleNewProfile={this.handleNewProfile}
              /> : 
              <Profile {...props}
                current_user_profile={current_user_profile}
                updateProfile={this.updateProfile}
              />)
            }/>
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
