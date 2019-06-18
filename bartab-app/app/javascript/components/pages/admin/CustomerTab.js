import React from "react"
import PropTypes from "prop-types"
class CustomerTab extends React.Component {
  render () {
  const {name, total, id} = this.props
    return (
      <React.Fragment>
        <tr>
          <th scope="row">{id}</th>
          <td>{name}</td>
          <td>${total}</td>
        </tr>
      </React.Fragment>
    );
  }
}

export default CustomerTab
