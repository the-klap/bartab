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
  
  componentWillMount() {
    this.props.getMenu()
    this.props.getTabs()
  }
  
  handleAClose = (findId) => {
    const {handleClose} = this.props
    handleClose(findId)
  }
  
  handleAddOrder = (itemId, userId) => {
    const {handleAddOrder} =this.props
    handleAddOrder(itemId, userId)
  }
  
  handleDeleteOrderItem = (itemId, userId) => {
    const {handleDeleteOrderItem} = this.props
    handleDeleteOrderItem(itemId, userId)
  }
  
  render () {
    const {customers, menu, tabs} = this.props
    
    console.log(tabs)
    var customerTabs = customers.map((value, index) => <CustomerTab 
      key={index}
      id={value.id}
      name={value.name}
      total={value.total}
      order={value.order}
      status={value.status}
      handleAClose={this.handleAClose}
      handleAddOrder={this.handleAddOrder}
      handleDeleteOrderItem={this.handleDeleteOrderItem}
      menu={menu}
      />
      )
    return (
      <React.Fragment>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Total</th>
              <th>Status</th>
              <th>Order</th>
              <th>Close</th>
            </tr>
          </thead>
            {customerTabs}
          </Table>
          
      </React.Fragment>
    )
  }
}

export default OpenTabs
