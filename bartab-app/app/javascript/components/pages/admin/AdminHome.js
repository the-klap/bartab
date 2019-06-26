import React from "react"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import { Nav, NavItem, NavLink } from 'reactstrap'
//import Geocode from "react-geocode";
// Geocode.setApiKey("AIzaSyBFGcpxYZoZ2X4MPVsql1OIyFxwgKZBBK8");
import OpenTabs from "./OpenTabs";
import Profile from "./Profile";
import Menu from "./Menu";



class AdminHome extends React.Component {
   constructor(props){
    super(props)
      this.state = {
        menu: [
          ],
        openTabs: [],
        current_admin_profile: {},
      }
  }
  
  //turns address into lat, lng
  // addressToCoords = (addressString, newProfile) => {
  //   Geocode.fromAddress(addressString).then(
  //     response => {
  //       const { lat, lng } = response.results[0].geometry.location;
  //       newProfile.lat = response.results[0].geometry.location.lat()
  //       newProfile.lng = response.results[0].geometry.location.lng()
  //       console.log(lat, lng);
  //     },
  //     error => {
  //       console.error(error);
  //     }
  //   );
  //   }
  
    //fetch will get all admin profiles
  componentWillMount() {
    const {current_admin_id} = this.props
    fetch(`/admin_profiles/${current_admin_id}`, {
  		headers: { 
  			'Content-Type': 'application/json'
  		},
  		method: "GET"
  	  })
  	  .then(response => response.json())
  	  .then((current_admin_profile) => {this.setState({ current_admin_profile }) })
  }
  
  
  //updates profile with info from profile.js
  handleUpdateProfile = (admin_profile_params) => {
    const {current_admin_id} = this.props
    fetch(`/admin_profiles/${current_admin_id}`, {
   		body: JSON.stringify(admin_profile_params),
   		headers: {'Content-Type': 'application/json'},
   		method: "PUT"
   	})
      .then(response => response.json())
    
  }
  
  //fetch gets menu
  getMenu = () => {
    const {current_admin_id} = this.props
    fetch(`/menus/${current_admin_id}`, {
  		headers: { 
  			'Content-Type': 'application/json'
  		},
  		method: "GET"
  	  })
  	  .then(response => response.json())
  	  .then((menu) => {this.setState({ menu }) })
  }

  //gets tab where admin_id=current_admin_id
  getOpenTabs = () => {
    fetch('/admin_open_tabs', {
  		headers: { 
  			'Content-Type': 'application/json'
  		},
  		method: "GET"
  	  })
  	  .then(response => response.json())
  	  .then((openTabs) => {this.setState({ openTabs }) })
  }


  //adds item to menu
  handleAddItem = (newItem) => {
    fetch('/menus.json', {
  		body: JSON.stringify(newItem),  
  		headers: {  
  			'Content-Type': 'application/json'
  		},
  		method: "POST"  
	  })
	  .then(response => response.json())
	  .then((menu) => {this.setState({ tabs }) })
  }
  
  //deletes item from menu
  handleDeleteItem = (itemID) => {
    fetch(`/menus/${itemID}`, {
      	method: "DELETE"  
    	  })
    	  .then(response => response.json())
  }
  
  //closes out a customer (state doesnt set for some reason)
  handleClose = (tab_id) => {
    fetch(`/tabs/${tab_id}`, {
      	method: "PATCH"  
    	  })
    	  .then(response => response.json())
  }
  
  //adds item to customer order
  handleAddOrder = (currentTabTotal, tabId) => {
    const {name, price} = this.state.item
    const aitem = {name:name, price:parseFloat(price), tab_id:tabId}
    console.log(JSON.stringify(aitem))
    this.handleAddOrderHistory(aitem)
    this.handleUpdateTotal(currentTabTotal, tabId)
  }
  
    
  //adds item to order (TabHistories)
  handleAddOrderHistory = (newItem) => {
    fetch('/tab_histories', {
  		body: JSON.stringify(newItem),  
  		headers: {  
  			'Content-Type': 'application/json'
  		},
  		method: "POST"  
	  })
	  .then(response => response.json())
  }
  
  // add to tab total
  handleUpdateTotal = ( currentTabTotal, tabId) => {
    const { price } = this.state.item
    const newTotal = parseFloat(currentTabTotal) + parseFloat(price)
    console.log(newTotal)
    fetch(`/tabs/${tabId}`, {
   		body: JSON.stringify({total:newTotal}),
   		headers: {'Content-Type': 'application/json'},
     	method: "PATCH"  
    	  })
    	  .then(response => response.json())
  }
  
  handleDeleteOrderItem = (itemId, customerId) => {
    const {customers, menu} = this.state
    const getCustomer = customers.find(customer => customer.id===customerId)
    getCustomer.order.splice(itemId, 1)
    getCustomer.total = getCustomer.total - menu[itemId].price
    this.setState(getCustomer)
    console.log(getCustomer)
  }
  
  render () {
     const {admin_logged_in, 
            admin_sign_in_route, 
            admin_sign_out_route,
            current_admin_id,
           }=this.props
     const {customers, menu, current_admin_profile, openTabs} = this.state
     
    return (
      <React.Fragment>
          <Router>
            <div>
              {admin_logged_in &&
                <Nav>
                 <div className="container">
                   <div className="row">
                    <div className="col-sm">
                      <NavItem>
                        <NavLink id="openTabs" href="/admin_home/open_tabs">Open Tabs</NavLink>
                      </NavItem>
                    </div>
                    <div className="col-sm">
                      <NavItem>
                        <NavLink id="adminMenu" href="/admin_home/menu">Menu</NavLink>
                      </NavItem>
                    </div>
                    <div className="col-sm">
                      <NavItem>
                        <NavLink id="adminProfile" href="/admin_home/profile">Profile</NavLink>
                      </NavItem>
                    </div>
                    <div className="col-sm">
                      <NavItem>
                        <NavLink id="adminSignOut" href={admin_sign_out_route}>Sign Out</NavLink>
                      </NavItem>
                    </div>  
                   </div>
                 </div>
                </Nav>
              }


            <Route path="/admin_home/open_tabs" exact render={(props) => <OpenTabs{...props} 
              customers={customers}
              handleClose={this.handleClose}
              handleAddOrder={this.handleAddOrder}
              handleDeleteOrderItem={this.handleDeleteOrderItem}
              menu={menu}
              openTabs={openTabs}
              getMenu={this.getMenu}
              getOpenTabs={this.getOpenTabs}
            />}/>
            <Route path="/admin_home/menu" exact render={(props) => <Menu 
              menu={menu} 
              handleAddItem={this.handleAddItem}
              handleDeleteItem={this.handleDeleteItem}
              getMenu={this.getMenu}
              current_admin_id={current_admin_id}
            />} />
            <Route path="/admin_home/profile" exact render={(props) => <Profile 
              current_admin_profile={current_admin_profile}
              handleUpdateProfile={this.handleUpdateProfile}
              />} 
            />

          </div>
        </Router>
    </React.Fragment>
    );
  }
}

export default AdminHome;
