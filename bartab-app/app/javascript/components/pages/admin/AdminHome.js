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
      }
  }
  render () {
     const {admin_logged_in, 
        admin_sign_in_route, 
        admin_sign_out_route,
     }=this.props
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
            {!admin_logged_in &&
              <a href={admin_sign_in_route}>Log In</a>
              
            }

            <Route path="/admin_home/open_tabs" exact component={OpenTabs} />
            <Route path="/admin_home/menu" exact component={Menu} />
            <Route path="/admin_home/profile" exact component={Profile} />
          </div>
        </Router>
    </React.Fragment>
    );
  }
}

export default AdminHome
