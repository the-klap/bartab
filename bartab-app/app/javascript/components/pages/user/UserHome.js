import React from "react"
import PropTypes from "prop-types"

//components imported to main UserHome
import HappyHour from './HappyHour.js'
// import MapContainer from './MapContainer.js'
import Profile from './Profile.js'
import Tab from './Tab.js'
import TabHistory from './TabHistory.js'
import MapContainer from './MapContainer.js'


class UserHome extends React.Component {
  render () {
    return (
      <React.Fragment>
      
      <Tab />
      <MapContainer />
      <Profile />
      <TabHistory />
      <HappyHour />
      </React.Fragment>
    );
  }
}

export default UserHome
