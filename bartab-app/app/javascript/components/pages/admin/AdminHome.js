import React from "react"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import { Nav, NavItem, NavLink} from 'reactstrap'

import OpenTabs from "./OpenTabs";
import Profile from "./Profile";
import Menu from "./Menu";

class AdminHome extends React.Component {
   constructor(props){
    super(props)
      this.state = {
        menu: [
          {name: 'Space Dust', price:7},
          {name: 'Sculpin', price:5},
          {name: 'Belching Beaver', price:6},
          ],
        customers: [
          {id: 42, name: 'Joe', total:12, status: 'Open'},
          {id: 2, name: 'Bob', total:19, status: 'Open'},
          {id: 9, name: 'Rick', total:302, status: 'Open'},
          ],
        profile: {
          name:"Bub's",
          hours:"24/7",
          info:"We sell beer"
        }
      }
  }
  
  //adds item to menu
  handleUpdateMenu = (newItem) => {
    const {menu} = this.state
    menu.push(newItem)
    this.setState({menu})
  }
  
  //deletes item from menu
  handleDeleteItem = (index) => {
    const {menu} = this.state
    menu.splice(index, 1)
    this.setState({menu})
  }
  
  //closes out a customer (state doesnt set for some reason)
  handleClose = (findId) => {
    const {customers} = this.state
    const getCustomer = customers.find(customer => customer.id===findId)
    getCustomer.status = "Close"
    this.setState({getCustomer})
    console.log(getCustomer)
  }
  
  render () {
     const {admin_logged_in, 
        admin_sign_in_route, 
        admin_sign_out_route,
     }=this.props
     const {customers, menu, profile} = this.state
    return (
      <React.Fragment>
          <Router>
            <div>
              {admin_logged_in &&
                <Nav>
                  <NavItem>
                    <NavLink href="/admin_home/open_tabs">Open Tabs</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/admin_home/menu">Menu</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/admin_home/profile">Profile</NavLink>
                  </NavItem>
                </Nav>
              }

            <Route path="/admin_home/open_tabs" exact render={(props) => <OpenTabs{...props} 
              customers={customers}
              handleClose={this.handleClose}
              menu={menu}
            />}/>
            <Route path="/admin_home/menu" exact render={(props) => <Menu 
              menu={menu} 
              handleUpdateMenu={this.handleUpdateMenu}
              handleDeleteItem={this.handleDeleteItem}
            />} />
            <Route path="/admin_home/profile" exact render={(props) => <Profile profile={profile}/>} />
          </div>
        </Router>
    </React.Fragment>
    );
  }
}

export default AdminHome
