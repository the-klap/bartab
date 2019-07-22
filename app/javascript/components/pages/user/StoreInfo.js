import React from "react"
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';
import ReactDOM from 'react-dom'


class StoreInfo extends React.Component {
  
  openTab = () => {
    this.props.openTab(this.props.bar_id)
  }
  
  render () {
    const {name, info, address1, address2, city, state, zip, country} = this.props
    const location = `${address1}, ${city}, ${state}, ${zip}`
    return (
      <React.Fragment>
        <Card>
          <CardHeader style={{color:'black'}} tag="h3">{name}</CardHeader>
          <CardBody>
            <CardTitle>{location}</CardTitle>
            <CardText>{info}</CardText>
            <Button href="/user_home/opentabs"onClick={this.openTab}>Open Tab</Button>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default StoreInfo
