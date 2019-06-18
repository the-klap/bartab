import React from "react"
import PropTypes from "prop-types"
class MenuItem extends React.Component {
  render () {
    const {name, price, index} = this.props
    return (
      <tr>
        <th scope="row">{index+1}</th>
        <td>{name}</td>
        <td>${price}</td>
      </tr>
    );
  }
}

export default MenuItem
