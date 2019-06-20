import React from "react"
import PropTypes from "prop-types"
import { Row, Col } from 'reactstrap'
class TabListItem extends React.Component {
  render () {
    const {bar_id, total} = this.props
    return (
      <React.Fragment>
          <Row>
            <Col>Location: {bar_id}</Col>
            <Col>Total: {total}</Col>
          </Row>
      </React.Fragment>
    );
  }
}

export default TabListItem
