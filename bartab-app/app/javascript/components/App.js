import React from "react"
import PropTypes from "prop-types"
import HomePage from './pages/HomePage';
import Login from './pages/Login';

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
      </React.Fragment>
    );
  }
}

export default App
