import React from "react"
import PropTypes from "prop-types"
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'

class BarProfile extends React.Component {
  constructor(props){
    super(props)
      this.state = {
      }
  }
  
  handleChange = (event) => {
    let {profile} = this.props
    profile[event.target.name] = event.target.value
    this.setState({profile: profile})
  }
  
  render () {
    const {name, hours, info} = this.props.profile
    return (
      <React.Fragment>
        <Form>
          <FormGroup >
            <Label for="name">Establishment Name</Label>
            <Input value={name} onChange={this.handleChange} name='name' />
          </FormGroup>
          <FormGroup>
            <Label for="hours">Hours</Label>
            <Input value={hours} onChange={this.handleChange} name='hours'/>
          </FormGroup>
          <FormGroup>
            <Label for="info">Additional Info</Label>
            <Input type="textarea" name="info" id="info" value={info} onChange={this.handleChange}/>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
        
      </React.Fragment>
    );
  }
}

export default BarProfile
