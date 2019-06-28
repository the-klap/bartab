import React from "react"
import PropTypes from "prop-types"
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';
class StoreMarkerWindow extends React.Component {
  constructor(props){
    super(props)
     this.state = {
      }
  }
  
  openTab = () => {
    this.props.openTab(this.props.id)
  }
  
  render () {
    const {name, location, info} = this.props
    return (
      <React.Fragment>
        <Card>
          <CardHeader style={{color:'black'}} tag="h3">{name}</CardHeader>
          <CardBody>
            <CardTitle>{location}</CardTitle>
            <CardText>{info}</CardText>
            <Button onClick={this.openTab}>Open Tab</Button>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default StoreMarkerWindow
