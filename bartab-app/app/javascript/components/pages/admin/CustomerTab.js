import React from "react"
import PropTypes from "prop-types"
import {Button, Form, FormGroup, Label, Input, Row, Col, UncontrolledCollapse, Card, CardBody} from 'reactstrap'
import MenuItem from './MenuItem'

class CustomerTab extends React.Component {
  constructor(props){
    super(props)
      this.state = {
          
      }
  }
  
  //passes id to close tab
  handleACloseTab = () => {
    const {handleCloseTab, tabId} = this.props
    handleCloseTab(tabId)
  }
  
  //takes index of selected item and sets state
  handleChange = (event) => {
    const {getMenuItem} = this.props
    const itemId = event.target.value
    getMenuItem(itemId)
  }
  
  
  //sends state id and user id to adminhome
  handleAddOrder = () => {
    const {handleAddOrder, tabId, total} = this.props
    handleAddOrder(total, tabId)
  }
  
  //deletes item from customer order
  handleDelete = (index) => {
    const {handleDeleteOrderItem, tabId} = this.props
    handleDeleteOrderItem(index, tabId)
  }
  
  render () {
    const {name, total, tabId, status, menu, order} = this.props
    const {item} = this.state
    
    // creates dropdown menu of menu items
    let dropMenu = menu.map((item, index) => <option 
                                                key={index} 
                                                value={item.id}
                                                name={item.name}
                                                price={item.price}
                                              >
                                                {item.name} - ${parseFloat(item.price)}
                                              </option>)
                                              
    // creates list of items on tab (tab_histories)
    let orderList = order.map((value, index) => <MenuItem 
      key={index}
      index={index}
      name={value.name}
      price={value.price}
      // handleDelete={this.handleDelete}
      />
      )

    return (
      <React.Fragment>
          <tr>
            <th scope="row">{tabId}</th>
            <td>{name}</td>
            <td>${total}</td>
            <td>{status}</td>
            <td>
              <Row>
                <Col>
                  <FormGroup>
                    <Input type="select" onChange={this.handleChange}>
                      <option>-------</option>
                      {dropMenu}
                    </Input>
                  </FormGroup>
                </Col>
                <Col>
                  <Button onClick={this.handleAddOrder}>
                    Order
                  </Button>
                </Col>
              </Row>
            </td>
            <td>
              <Button onClick={this.handleAClose}>
                Close Out
              </Button>
            </td>
          </tr>
          <Row>
            <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
              Show Order
            </Button>
            <UncontrolledCollapse toggler="#toggler">
              <Card>
                <CardBody>
                  {orderList}
                </CardBody>
              </Card>
            </UncontrolledCollapse>
          </Row>

      </React.Fragment>
    );
  }
}

export default CustomerTab