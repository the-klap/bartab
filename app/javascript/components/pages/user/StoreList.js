import React from "react"
import StoreInfo from './StoreInfo'

class StoreList extends React.Component {
  render () {
    const {stores, openTab} = this.props
    
    const storesList = stores.map((store, index) => {
      return <StoreInfo
        key={index}
        bar_id={store.id}
        name={store.establishmentname} 
        info={store.info} 
        address1={store.address1} 
        address2={store.address2}
        city={store.city}
        state={store.state}
        zip={store.zip}
        country={store.country}
        openTab={openTab}
        />
    })
    
    return (
      <React.Fragment>
        {storesList}
      </React.Fragment>
    );
  }
}

export default StoreList
