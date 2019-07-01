import React from "react"
import PropTypes from "prop-types"
import {Table, Button, Form, FormGroup, Label, Input, Row, Col, 
UncontrolledCollapse, Collapse, Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap'
import MenuItem from './MenuItem'

class CustomerTab extends React.Component {
  constructor(props){
    super(props)
      this.state = {
      }
      this.toggle = this.toggle.bind(this);
      this.state = { collapse: false };
      
  }
  
  componentWillUpdate = (prevProps) => {
  }
  
  //passes id to close tab
  handleACloseTab = () => {
    const {handleCloseTab, tabId} = this.props
    console.log(tabId)
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
    console.log(total)
    handleAddOrder(total, tabId)
  }
  
  //deletes item from customer order
  handleDelete = (tabHistoryId, price) => {
    const {handleDeleteOrder, total, tabId} = this.props
    console.log(tabHistoryId)
    handleDeleteOrder(total, price, tabId, tabHistoryId)
  }
  
  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  
  render () {
    const {name, total, tabId, status, menu, order, userfirstname, userlastname} = this.props
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
      id={value.id}
      name={value.name}
      price={value.price}
      handleDelete={this.handleDelete}
      />
      )

    return (
      <React.Fragment>
      <Card body className="text-left">
        <Table>
          <tr>
            <td>{tabId}</td>
            <td>{userfirstname} {userlastname}</td>
            <td>${total}0</td>
            <td>
              <Row>
              <Col md={6}>
                <Form>
                <FormGroup>
                  <Input type="select" onChange={this.handleChange}>
                    <option>-------</option>
                    {dropMenu}
                  </Input>
                </FormGroup>
                </Form>
              </Col>
              <Col md={4}>
                  <Button onClick={this.handleAddOrder}>
                    Order
                  </Button>
              </Col>
              </Row>
            </td>
            <td>              
              <Button onClick={this.handleACloseTab}>
                 Close Out
              </Button>
          </td>
          </tr>
        </Table>
          <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Full Order</Button>
          <Collapse isOpen={this.state.collapse}>
            <CardBody>
              <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
              {orderList}
              </Table>
            </CardBody>
          </Collapse>
        </Card>
        
      </React.Fragment>
    );
  }
}

export default CustomerTab



// <div>
//           <tr>
//             <th scope="row">{tabId}</th>
//             <td>{userfirstname} {userlastname}</td>
//             <td>${total}</td>
//             <td>{status}</td>
//           </tr>
//                   <FormGroup>
//                     <Input type="select" onChange={this.handleChange}>
//                       <option>-------</option>
//                       {dropMenu}
//                     </Input>
//                   </FormGroup>
//                   <Button onClick={this.handleAddOrder}>
//                     Order
//                   </Button>
            
            
//               <Button onClick={this.handleACloseTab}>
//                 Close Out
//               </Button>
            
          
//           <Row>

//         <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Full Order</Button>
//           <Collapse isOpen={this.state.collapse}>
            
//             {orderList}
             
//           </Collapse>
//           </Row>
//         </div>