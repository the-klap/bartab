import React from "react"
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import PropTypes from "prop-types"

import HomePage from './pages/HomePage';
import Login from './pages/Login';
import AdminHome from './pages/admin/AdminHome'
import UserHome from './pages/user/UserHome'

import {Container, Button} from "reactstrap"

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <HomePage />
        <br /><br /><br />
        <div id="menu">
          <Login /><Login /><Login />
        </div>
        
        <Router>
          <Button href='/admin_home'>Admin Login
          </Button>
          
          <Button href='/user_home'>User Login
          </Button>
          
          <Route path="/admin_home" exact component={AdminHome} />
          <Route path="/user_home" component={UserHome} />
        </Router>
        
      </React.Fragment>
    );
  }
}

export default App
