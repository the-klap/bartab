import React from "react";
import PropTypes from "prop-types";
import {
  Row,
  Col,
  Card,
  Button,
  CardTitle,
  CardText,
  CardBody,
  Collapse,
  CardSubtitle,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
class TabListItem extends React.Component {
  constructor(props) {
    super(props);
    this.modaltoggle = this.modaltoggle.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      modal: false,
      collapse: false
    };
  }

  handleCloseTab = () => {
    this.props.handleCloseTab(this.props.tabId);
  };

  modaltoggle = prevState => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  render() {
    const {
      address1,
      address2,
      city,
      state,
      zip,
      country,
      establishmentname,
      total,
      orders,
      open
    } = this.props;

    const location = `${address1} ${address2}, ${city}, ${state}, ${zip}, ${country}`;

    const orderList = orders.map((value, index) => (
      <Row key={index}>
        {value.name} - ${value.price}0
      </Row>
    ));

    return (
      <React.Fragment>
        <Card body className="text-left">
          <CardTitle>{establishmentname}</CardTitle>
          <CardSubtitle>{location}</CardSubtitle>
          <CardSubtitle>Total: ${total}0</CardSubtitle>
          <br />
          {open && (
            <CardSubtitle>
              <div>
                <Button color="danger" onClick={this.modaltoggle}>
                  Close Out
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.modaltoggle}>
                  <ModalHeader toggle={this.modaltoggle}>
                    Payment Total: ${total}0
                  </ModalHeader>
                  <ModalBody>Payment Info Here</ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.handleCloseTab}>
                      Confirm
                    </Button>{" "}
                    <Button color="secondary" onClick={this.modaltoggle}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
              </div>
            </CardSubtitle>
          )}
          <br />
          <Button
            color="primary"
            onClick={this.toggle}
            style={{ marginBottom: "1rem" }}
          >
            Full Order
          </Button>
          <Collapse isOpen={this.state.collapse}>
            <CardBody>{orderList}</CardBody>
          </Collapse>
        </Card>
      </React.Fragment>
    );
  }
}

export default TabListItem;
