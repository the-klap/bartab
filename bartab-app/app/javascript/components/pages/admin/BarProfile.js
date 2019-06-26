import React from "react"
import PropTypes from "prop-types"
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
// import {Geocode} from "react-geocode";


// Geocode.fromAddress().then(
//   response => {
//     const { lat, lng } = response.results[0].geometry.location;
//     console.log(lat, lng);
//   },
//   error => {
//     console.error(error);
//   }
// );

class BarProfile extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        updated_admin_profile: {
        }
      }
  }
  
  //updates state for profile fields
  handleChange = (event) => {
    let {updated_admin_profile} = this.state
    updated_admin_profile[event.target.name] = event.target.value
    this.setState({updated_admin_profile})
  }
  

  //sends updated profile to fetch in adminhome
  handleSubmit = () => {
    const {updated_admin_profile} = this.state
    const {handleUpdateProfile} = this.props
    handleUpdateProfile(updated_admin_profile)
  }
  

  
  render () {
    const {establishmentname, hours, additionalinfo, address1, address2, zip, state, city, country} = this.state.updated_admin_profile
    const {updated_admin_profile} = this.state
    const {current_admin_profile} = this.props
    
    console.log(updated_admin_profile)
    return (
      <React.Fragment>
        <Form>
          <FormGroup >
            <Label>Establishment Name</Label>
            <Input defaultValue={current_admin_profile.establishmentname} 
                    onChange={this.handleChange} 
                    name='establishmentname' 
            />
          </FormGroup>
          <FormGroup>
            <Label>Hours</Label>
            <Input defaultValue={current_admin_profile.hours} 
                    onChange={this.handleChange} 
                    name='hours' 
            />
          </FormGroup>
          <FormGroup>
            <Label>Address1</Label>
            <Input defaultValue={current_admin_profile.address1} 
                  onChange={this.handleChange} 
                  name='address1' 
            />
          </FormGroup>
          <FormGroup>
            <Label>Address2</Label>
            <Input defaultValue={current_admin_profile.address2} 
                    onChange={this.handleChange} 
                    name='address2' 
            />
          </FormGroup>
          <FormGroup>
            <Label>City</Label>
            <Input defaultValue={current_admin_profile.city} 
                    onChange={this.handleChange} 
                    name='city'
            />
          </FormGroup>
          <FormGroup>
            <Label>State</Label>
            <Input defaultValue={current_admin_profile.state} 
                    onChange={this.handleChange} 
                    name='state'
            />
          </FormGroup>  
            <Label>Zipcode</Label>
            <Input defaultValue={current_admin_profile.zip} 
                    onChange={this.handleChange} 
                    name='zip' 
            />
          <FormGroup>
            <Label >Country</Label>
            <Input defaultValue={current_admin_profile.country} 
                    onChange={this.handleChange} 
                    name='country'
            />
          </FormGroup>
          <FormGroup>
            <Label >Additional Info</Label>
            <Input defaultValue={current_admin_profile.additionalinfo} 
                    type="textarea" 
                    name="additionalinfo" 
                    id="additionalinfo"  
                    onChange={this.handleChange} 
            />
          </FormGroup>
        </Form>
        <Button onClick={this.handleSubmit}>Submit</Button>
      </React.Fragment>
    );
  }
}

export default BarProfile