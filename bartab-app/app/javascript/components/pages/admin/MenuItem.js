import React from "react"
import PropTypes from "prop-types"
import {Button} from 'reactstrap'

class MenuItem extends React.Component {
  constructor(props){
    super(props)
      this.state = {
      }
  }
  
  handleDelete = () => {
    const {index, handleDelete} = this.props
    handleDelete(index)
  }
  
  render () {
    const {name, price, index} = this.props
    return (
      <tr>
        <th scope="row">{index+1}</th>
        <td>{name}</td>
        <td>${price}</td>
        <td>
          <Button onClick={this.handleDelete}>
            Remove
          </Button>
        </td>
      </tr>
    );
  }
}

export default MenuItem
