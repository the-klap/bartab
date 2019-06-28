import React from "react"
import PropTypes from "prop-types"
import { Row, Col, Card, Button, CardTitle, CardText, CardBody, Collapse, CardSubtitle } from 'reactstrap'
class TabListItem extends React.Component {
   constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }
  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  render () {
    const {address1, address2, city, state, zip, country, establishmentname, total, orders} = this.props
    
    const location = `${address1} ${address2}, ${city}, ${state}, ${zip}, ${country}`
    
    const orderList = orders.map((value, index) => <Row>{value.name} - ${value.price}0</Row>)
    
    return (
      <React.Fragment>
          <Card body className="text-left">
            <CardTitle>{establishmentname}</CardTitle>
            <CardSubtitle>{location}</CardSubtitle>
            <CardSubtitle>Total: ${total}0</CardSubtitle>
            <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Full Order</Button>
            <Collapse isOpen={this.state.collapse}>
              <CardBody>
               {orderList}
              </CardBody>
            </Collapse>
          </Card>
      </React.Fragment>
    );
  }
}

export default TabListItem
