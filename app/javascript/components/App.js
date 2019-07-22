import React from "react"
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './app.css';
import {Container, Button} from "reactstrap"


import HomePage from './pages/HomePage.js';
import Login from './pages/Login.js';
import AdminHome from './pages/admin/AdminHome.js'
import UserHome from './pages/user/UserHome.js'
import AboutUs from "./AboutUs.js";

class App extends React.Component {
   constructor(props){
    super(props)
      this.state = {

      }
  }
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
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

  
  
  
    return (
      <React.Fragment>
       <Container>
         <div className="app_main_page">
            <HomePage />
            
            <div id="main_page">
            </div>
          <Router>
            
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
              current_user_id={current_user_id}
            />} />

            
            {(!admin_logged_in && !user_logged_in) &&
              <Button className='admin_Button' href={admin_sign_in_route}>Admin Login</Button>
            }
            {(!user_logged_in && !admin_logged_in) &&
              <Button className='user_Button' href={user_sign_in_route}>User Login</Button>
            }
            
            {!user_logged_in && !admin_logged_in && <AboutUs />}

          </Router>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default App
