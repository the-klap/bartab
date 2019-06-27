import React from "react"
import PropTypes from "prop-types"
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'


class CreateBarProfile extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        new_admin_profile: {
        }
      }
  }
  
  //updates state for profile fields
  handleChange = (event) => {
    let {new_admin_profile} = this.state
    new_admin_profile[event.target.name] = event.target.value
    this.setState({new_admin_profile})
  }
  

  //sends updated profile to fetch in adminhome
  handleSubmit = () => {
    const {new_admin_profile} = this.state
    const {handleNewProfile} = this.props
    handleNewProfile(new_admin_profile)
  }
  
  
  render () {
    const {new_admin_profile} = this.state

    return (
      <React.Fragment>
        <h2>Create Profile</h2>
        <Form>
          <FormGroup >
            <Label>Establishment Name</Label>
            <Input value={new_admin_profile.establishmentname} 
                    onChange={this.handleChange} 
                    name='establishmentname' 
            />
          </FormGroup>
          <FormGroup>
            <Label>Hours</Label>
            <Input value={new_admin_profile.hours} 
                    onChange={this.handleChange} 
                    name='hours' 
            />
          </FormGroup>
          <FormGroup>
            <Label>Address1</Label>
            <Input value={new_admin_profile.address1} 
                  onChange={this.handleChange} 
                  name='address1' 
            />
          </FormGroup>
          <FormGroup>
            <Label>Address2</Label>
            <Input value={new_admin_profile.address2} 
                    onChange={this.handleChange} 
                    name='address2' 
            />
          </FormGroup>
          <FormGroup>
            <Label>City</Label>
            <Input value={new_admin_profile.city} 
                    onChange={this.handleChange} 
                    name='city'
            />
          </FormGroup>
          <FormGroup>
            <Label>State</Label>
            <Input value={new_admin_profile.state} 
                    onChange={this.handleChange} 
                    name='state'
            />
          </FormGroup>  
            <Label>Zipcode</Label>
            <Input value={new_admin_profile.zip} 
                    onChange={this.handleChange} 
                    name='zip' 
            />
          <FormGroup>
            <Label >Country</Label>
            <Input value={new_admin_profile.country} 
                    onChange={this.handleChange} 
                    name='country'
            />
          </FormGroup>
          <FormGroup>
            <Label >Additional Info</Label>
            <Input value={new_admin_profile.additionalinfo} 
                    type="textarea" 
                    name="additionalinfo" 
                    id="additionalinfo"  
                    onChange={this.handleChange} 
            />
          </FormGroup>
        </Form>
        <Button type='submit' onClick={this.handleSubmit}>Submit</Button>
      </React.Fragment>
    );
  }
}

export default CreateBarProfile