import React from "react"
import ReactDOM from 'react-dom'

import MapContainer from "./MapContainer.js"
import StoreList from './StoreList.js'

class FindBar extends React.Component {
  render () {
    const {stores, openTab, success} = this.props
    return (
      <div className="findbar" >
        <div className="mapcomponent">
          <MapContainer
            stores={stores}
            openTab={openTab}
            success={success}
          />
        </div>
        <br/>
        <StoreList
          stores={stores}
          openTab={openTab}
        />
        {this.props.success &&
        	<Redirect to="/user_home/opentabs" />
        }
      </div>
    );
  }
}

export default FindBar
