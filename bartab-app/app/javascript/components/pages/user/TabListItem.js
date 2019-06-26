import React from "react"
import PropTypes from "prop-types"
import { Row, Col } from 'reactstrap'
class TabListItem extends React.Component {
  render () {
    const {address1, address2, city, state, zip, country, establishmentname, total, orders} = this.props
    
    const location = `${address1} ${address2}, ${city}, ${state}, ${zip}, ${country}`
    
    const orderList = orders.map((value, index) => <li>Name: {value.name} Price: ${value.price}0</li>)
    
    return (
      <React.Fragment>
          <Row>
            <Col>Place: {establishmentname}</Col>
            <Col>Location: {location}</Col>
            <Col>Total: {total}</Col>
          </Row>
          <Row>
            <ol>Order:
            {orderList}
            </ol>
          </Row>
        <hr/>
      </React.Fragment>
    );
  }
}

export default TabListItem
