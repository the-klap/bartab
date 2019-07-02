import React from "react"
import PropTypes from "prop-types"
import {Table} from 'reactstrap'
import CustomerTab from './CustomerTab'

class OpenTabs extends React.Component {
  constructor(props){
    super(props)
      this.state = {
      }
  }
  
  
  render () {
    const {customers,
            menu, 
            openTabs, 
            handleAddOrder, 
            getMenuItem, 
            handleCloseTab, 
            handleDeleteOrder, 
            getOpenTabs} = this.props
    
    
    var customerTabs = openTabs.map((value, index) => <CustomerTab 
      key={index}
      tabId={value.id}
      name={value.name}
      total={value.total}
      order={value.tab_histories}
      userfirstname={value.user.user_profile.firstname}
      userlastname={value.user.user_profile.lastname}
      status={value.open}
      handleAddOrder={handleAddOrder}
      getMenuItem={getMenuItem}
      handleCloseTab={handleCloseTab}
      handleDeleteOrder={handleDeleteOrder}
      menu={menu}
      getOpenTabs={getOpenTabs}
      />
      )
      
    return (
      <React.Fragment>
        <Table>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Total</th>
              <th>Order</th>
              <th>Close</th>
            </tr>
          </Table>
          {customerTabs}

      </React.Fragment>
    )
  }
}

export default OpenTabs
