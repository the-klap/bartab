import React from "react"
import MapContainer from "./MapContainer"
import StoreList from './StoreList'

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
