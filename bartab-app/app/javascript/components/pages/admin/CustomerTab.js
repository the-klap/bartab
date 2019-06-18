import React from "react"
import PropTypes from "prop-types"
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'

class CustomerTab extends React.Component {
  constructor(props){
    super(props)
      this.state = {
      }
  }
  
  handleAClose = () => {
    const {handleAClose, id} = this.props
    handleAClose(id)
  }
  
  render () {
    const {name, total, id, status, menu} = this.props
    
    let dropMenu = menu.map(value => <option>{value.name} --- ${value.price}</option>)
    
    return (
      <React.Fragment>
        <tr>
          <th scope="row">{id}</th>
          <td>{name}</td>
          <td>${total}</td>
          <td>{status}</td>
          <td>
            <FormGroup>
              <Input type="select" name="select" id="exampleSelect">
                {dropMenu}
              </Input>
            </FormGroup>
          </td>
          <td>
            <Button onClick={this.handleAClose}>
              Close Out
            </Button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default CustomerTab
