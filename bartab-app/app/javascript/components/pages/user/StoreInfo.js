import React from "react"
import PropTypes from "prop-types"
import { Row, Col, Button } from 'reactstrap'

class StoreInfo extends React.Component {
  
  openTab = () => {
    this.props.openTab(this.props.bar_id)
  }
  
  render () {
    const {name, info, address1, address2, city, state, zip, country} = this.props
    return (
      <React.Fragment>
        <Row>
          <Col> Name: {name} </Col>
          <Col> 
            <Button onClick={this.openTab}>Open Tab</Button>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default StoreInfo
