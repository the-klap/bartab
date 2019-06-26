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
  handleAClose = () => {
    const {handleAClose, tab_id} = this.props
    handleAClose(tab_id)
  }
  
  //takes index of selected item and sets state
  handleChange = (event) => {
    
  }
  
  
  //sends state id and user id to adminhome
  handleAddOrder = () => {
    const {handleAddOrder, tab_id} = this.props
    const {itemID} = this.state
    handleAddOrder(itemID, tab_id)
  }
  
  //deletes item from customer order
  handleDelete = (index) => {
    const {handleDeleteOrderItem, tab_id} = this.props
    handleDeleteOrderItem(index, tab_id)
  }
  
  render () {
    const {name, total, tab_id, status, menu, order} = this.props
    let dropMenu = menu.map((item, index) => <option 
                                                key={index} 
                                                value={item.id}
                                                
                                              >
                                                {item.name} - ${item.price}0
                                              </option>)
    
    let orderList = order.map((value, index) => <MenuItem 
      key={index}
      index={index}
      name={value.name}
      price={value.price}
      handleDelete={this.handleDelete}
      />
      )

    return (
      <React.Fragment>
          <tr>
            <th scope="row">{tab_id}</th>
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


   