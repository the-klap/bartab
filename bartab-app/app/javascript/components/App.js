import React from "react"
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import PropTypes from "prop-types"
import './app.css';

import HomePage from './pages/HomePage';
import Login from './pages/Login';
import AdminHome from './pages/admin/AdminHome'
import UserHome from './pages/user/UserHome'
import {Container, Button} from "reactstrap"

class App extends React.Component {
   constructor(props){
    super(props)
      this.state = {
        admin_profiles: [],
      }
  }
  
  
  //fetch will get all admin profiles
  componentWillMount() {
  fetch('/admin_profiles.json')
    .then((response) => {return response.json()})
    .then((admin_profiles) => {this.setState({ admin_profiles: admin_profiles }) })
  }
 
  render () {
    const {
      admin_logged_in, 
      admin_sign_in_route, 
      admin_sign_out_route,
      user_logged_in,
      user_sign_in_route,
      user_sign_out_route,
      current_admin_id,
      current_user_id
    } =this.props
    console.log(`Admin Logged In? ${admin_logged_in}`)
    console.log(`User Logged In?: ${user_logged_in}`)
    console.log(this.state.admin_profiles)
  
  
  
    return (
      <React.Fragment>
       <Container>
        <HomePage />
        <br />
        <br />
        <br />
          <div id="menu">
        </div>
          
          <Router>
            {admin_logged_in &&
            <Button href='/admin_home' className='adminButton'>Admin Portal 
            </Button>
            }
            {!admin_logged_in &&
              <Button className='adminButton' href={admin_sign_in_route}>Admin Login</Button>
            }

             {!user_logged_in &&
              <Button className='userButton' href={user_sign_in_route}>User Login</Button>
            }
             {user_logged_in &&
            <Button className='userButton' href='/user_home'>User Portal
            </Button>
            }
            
            <Route path="/admin_home" render={(props) => <AdminHome {...props} 
              admin_logged_in={admin_logged_in}
              admin_sign_in_route={admin_sign_in_route}
              admin_sign_out_route={admin_sign_out_route}
              current_admin_id={current_admin_id}
            />} />
            
    
            <Route path="/user_home" render={(props) => <UserHome {...props} 
              user_logged_in={user_logged_in}
              user_sign_in_route={user_sign_in_route}
              user_sign_out_route={user_sign_out_route}
            />} />
            

            
          </Router>
        </Container>
      </React.Fragment>
    );
  }
}

export default App
