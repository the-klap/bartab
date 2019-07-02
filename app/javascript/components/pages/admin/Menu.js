import React from "react"
import PropTypes from "prop-types"
import {Table} from 'reactstrap'
import MenuItem from './MenuItem'
import {Form, FormGroup, Label, Input, Button, Row, Col} from 'reactstrap'

class Menu extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        newItem: {name: '', price:''},
      }
  }
  
  handleChange = (event) => {
    let {newItem} = this.state
    newItem[event.target.name] = event.target.value
    this.setState({newItem: newItem})
  }
  
  handleClick = () => {
    let {newItem} = this.state
    const {handleAddItem} = this.props
    handleAddItem(newItem)
  }
  
  handleDelete = (itemId) => {
    const {handleDeleteItem} = this.props
    handleDeleteItem(itemId)
  }
  
  
  render () {
    const {menu} = this.props
    
    var menuList = menu.map((value, index) => <MenuItem 
      key={index}
      index={index}
      id={value.id}
      name={value.name}
      price={value.price}
      handleDelete={this.handleDelete}
      className='menuItem'
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
              <th>Remove from Menu</th>
            </tr>
          </thead>
            
            {menuList}
            
        </Table>
        <hr/>
        <Form className='newItem'>
          <Row form>
            <Col>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="name" id="itemName" onChange={this.handleChange}/>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="price">Price</Label>
                <Input type="number" name="price" id="itemPrice" onChange={this.handleChange}/>
              </FormGroup>
            </Col>
            <Col>
              <Row>
                <Label for="add">Add to Menu</Label>
              </Row>
              <Row>
                <Button name="add" onClick={this.handleClick}>Add</Button>
              </Row>
            </Col>
          </Row>
        </Form>
      </React.Fragment>
    );
  }
}

export default Menu