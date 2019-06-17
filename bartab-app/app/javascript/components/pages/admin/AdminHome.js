import React from "react"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import { Nav, NavItem, NavLink} from 'reactstrap'

import OpenTabs from "./OpenTabs";
import Profile from "./Profile";
import Menu from "./Menu";

class AdminHome extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Router>
        
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
          
          <Route path="/admin_home/open_tabs" exact component={OpenTabs} />
          <Route path="/admin_home/menu" exact component={Menu} />
          <Route path="/admin_home/profile" exact component={Profile} />
          
        </Router>
        
      </React.Fragment>
    );
  }
}

export default AdminHome
