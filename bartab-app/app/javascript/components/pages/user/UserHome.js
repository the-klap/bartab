import React from "react"
import PropTypes from "prop-types"
import {
        BrowserRouter as Router,
        Route,
        Link
        } from "react-router-dom";
import { Nav, NavItem, NavLink} from 'reactstrap'


//components imported to main UserHome
import HappyHour from './HappyHour.js'
import Map from './Map.js'
import Profile from './Profile.js'
import Tab from './Tab.js'
import TabHistory from './TabHistory.js'


class UserHome extends React.Component {
  constructor(props){
    super(props)
      this.state = {
      }
  }
  
  
  render () {
     const {user_logged_in, 
        user_sign_in_route, 
        user_sign_out_route,
     }=this.props
     
     
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
                      <NavLink href="/userhome">User Home</NavLink>
                    </NavItem>
                  </div>
                  <div class="col-sm">
                    <NavItem>
                      <NavLink href="/userhome/tabhistory">Tab History</NavLink>
                    </NavItem>
                  </div>
                  <div class="col-sm">
                    <NavItem>
                      <NavLink href="/userhome/map">Map</NavLink>
                    </NavItem>
                  </div>  
                  <div class="col-sm">
                    <NavItem>
                      <NavLink href="/userhome/tab">Tab</NavLink>
                    </NavItem>
                  </div>
                  <div class="col-sm">
                    <NavItem>
                      <NavLink href="/userhome/profile">Profile</NavLink>
                    </NavItem>
                  </div>
                 </div>
               </div>
              </Nav>
                  
                  
              }

            <Route path="/userhome" exact component={UserHome} />
            <Route path="/userhome/tabhistory" exact component={TabHistory} />
            <Route path="/userhome/map" exact component={Map} />
            <Route path="/userhome/tab" exact component={Tab} />
            <Route path="/userhome/profile" exact component={Profile} />
          </div>
        </Router>
        
      
         
        
           
          
        
        
        {/*bootstrap columns to arrange links
        */}
        
      </React.Fragment>
    );
  }
}

export default UserHome
