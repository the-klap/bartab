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
   constructor(props){
    super(props)
      this.state = {
      }
  }
  
  render () {
    const {
      admin_logged_in, 
      admin_sign_in_route, 
      admin_sign_out_route,
      user_logged_in,
      user_sign_in_route,
      user_sign_out_route,
    } =this.props
  
    return (
      <React.Fragment>
        <Container>
          <HomePage />
          <br /><br /><br />
          <div id="menu">
            <Login /><Login /><Login />
          </div>
          
          <Router>
            {admin_logged_in &&
            <Button href='/admin_home'>Admin Login
            </Button>
            }
            {!admin_logged_in &&
              <Button href={admin_sign_in_route}>Admin Login</Button>
            }

            <Button href='/user_home'>User Login
            </Button>
            
            
            <Route path="/admin_home" render={(props) => <AdminHome {...props} 
              admin_logged_in={admin_logged_in}
              admin_sign_in_route={admin_sign_in_route}
              admin_sign_out_route={admin_sign_out_route}
            />} />
            
            <Route path="/user_home" component={UserHome} />
            
          </Router>
        </Container>
      </React.Fragment>
    );
  }
}

export default App
