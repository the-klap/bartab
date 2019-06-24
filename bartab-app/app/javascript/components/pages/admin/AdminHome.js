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
        customers: [
          {id: 42, name: 'Joe', total:0, order: [], status: 'Open'},
          {id: 2, name: 'Bob', total:0, order: [], status: 'Open'},
          {id: 9, name: 'Rick', total:0, order: [], status: 'Open'},
          ],
        profile: {
          name: "",
          hours: "",
          info: "",
          address1: "",
          address2: "",
          state: "",
          city: "",
          zip: "",
          country: "",
          lat: "",
          lng: "",
        },
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
  handleUpdateProfile = (newProfile) => {
    //let addressString= `${newProfile.address1} ${newProfile.address2}, ${newProfile.city}, ${newProfile.state} ${newProfile.zip}, ${newProfile.country}`
   // this.addressToCoords(addressString, newProfile)
    this.setState({profile: newProfile})
  }
  
  //fetch gets
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
  }
  
  //deletes item from menu
  handleDeleteItem = (itemID) => {
    fetch(`/menus/${itemID}`, {
      	method: "DELETE"  
    	  })
    	  .then(response => response.json())
  }
  
  //closes out a customer (state doesnt set for some reason)
  handleClose = (findId) => {
    const {customers} = this.state
    const getCustomer = customers.find(customer => customer.id===findId)
    getCustomer.status = "Close"
    this.setState({getCustomer})
    console.log(getCustomer)
  }
  
  //adds item to customer order
  handleAddOrder = (itemId, customerId) => {
    const {customers, menu} = this.state
    const getCustomer = customers.find(customer => customer.id===customerId)
    getCustomer.order.push(menu[itemId])
    getCustomer.total = getCustomer.total + menu[itemId].price
    this.setState(getCustomer)
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
     const {customers, menu, profile} = this.state
     
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
            />}/>
            <Route path="/admin_home/menu" exact render={(props) => <Menu 
              menu={menu} 
              handleAddItem={this.handleAddItem}
              handleDeleteItem={this.handleDeleteItem}
              getMenu={this.getMenu}
              current_admin_id={current_admin_id}
            />} />
            <Route path="/admin_home/profile" exact render={(props) => <Profile 
              profile={profile}
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
