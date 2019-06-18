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
  
  handleAClose = (findId) => {
    const {handleClose} = this.props
    handleClose(findId)
  }
  // handleAdd = (findId, price) => {
  //   const {customers} = this.state
  //   const getCustomer = customers.find(customer => customer.id===findId)
  //   getCustomer.total = customer
  //   this.setState({getCustomer})
  // }
  
  render () {
    const {customers, menu} = this.props
    
    console.log(menu)
    
    var customerTabs = customers.map((value, index) => <CustomerTab 
      key={index}
      id={value.id}
      name={value.name}
      total={value.total}
      status={value.status}
      handleAClose={this.handleAClose}
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
              <th>Price</th>
              <th>Status</th>
              <th>Order</th>
            </tr>
          </thead>
            {customerTabs}
          </Table>
          
      </React.Fragment>
    )
  }
}

export default OpenTabs
