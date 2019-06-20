import React from "react"
import PropTypes from "prop-types"
import {
        BrowserRouter as Router,
        Route,
        Link
        } from "react-router-dom";
import { Nav, NavItem, NavLink } from 'reactstrap'


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
        menu: [
          { brewery: "Kyle's Kolsch ", beer_name: 'Killer Kali', price:5,},
          { brewery: "Luke's Lagunitas", beer_name: "Liquid Liquor", price:5},
          { brewery: "Aaron's American Pale Ale", beer_name: "Angry Archer", price: 8},
          { brewery: "Pete's Porters", beer_name: 'Perfect Pilsner', price:6},
          ],
        bar_id:[
          { bar_id: 1 },
          { bar_id: 2 },
          { bar_id: 3 },
          { bar_id: 4 },
          ],
          total: [
            { total: 9 },
            { total: 10 },
            { total: 11 },
            { total: 12 },
          ],
          tab_open:[
            { open: true },
            { open: false },
            { open: true },
            { open: false },
            ]
      }
    }
  
  render () {
     const {user_logged_in, 
            user_sign_in_route, 
            user_sign_out_route,
           }=this.props
    const {menu} = this.state       

    return (
      <React.Fragment>
        <Router>
        <div>
        {/* change user to name in profile*/}
         Welcome, User 
         You are at {this.state.menu(0)}
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
                      <NavLink href="/user_home/map">Map</NavLink>
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
            <Route exact path="/user_home/tabhistory" exact render={(props) => <Tab {...props}
              menu={menu} 
            />} />
            <Route path="/user_home/map" exact component={Map} />
            
            <Route path="/user_home/tab" exact render={(props) => <Tab {...props}
              menu={menu} 
            />} />
            
            <Route path="/user_home/profile" exact component={Profile} />
            <Route path="/user_home/happyhour" exact component={HappyHour} />
          </div>
        </Router>
    </React.Fragment>
    );
  }
}

export default UserHome
