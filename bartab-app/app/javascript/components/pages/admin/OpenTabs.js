import React from "react"
import PropTypes from "prop-types"
import {Table} from 'reactstrap'
import CustomerTab from './CustomerTab'

class OpenTabs extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        customers: [
          {id: 42, name: 'Joe', total:12},
          {id: 2, name: 'Bob', total:19},
          {id: 9, name: 'Rick', total:302},
          ]
      }
  }
  
  render () {
    const {customers} = this.state
    
    var customerTabs = customers.map((value, index) => <CustomerTab 
      key={index}
      id={value.id}
      name={value.name}
      total={value.total}
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
            </tr>
          </thead>
            {customerTabs}
          </Table>
      </React.Fragment>
    )
  }
}

export default OpenTabs
