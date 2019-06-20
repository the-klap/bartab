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
        profile: {
          name: "",
          hours: "",
          info: "",
          address1: "",
          address2: "",
          state: "",
          city: "",
          zip: "",
          country: "",
          lat: "",
          lng: "",
        }
      }
  }
  
  handleChange = (event) => {
    let {profile} = this.state
    profile[event.target.name] = event.target.value
    this.setState({profile: profile})
  }
  

  
  handleSubmit = () => {
    const {profile} = this.state
    const {handleUpdateProfile} = this.props
    handleUpdateProfile(profile)
  }
  

  
  render () {
    const {name, hours, info, address1, address2, zip, state, city, country} = this.state.profile
    const {profile} = this.state
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
            <Label for="address1">Address1</Label>
            <Input value={address1} onChange={this.handleChange} name='address1' />
            <Label for="address2">Address2</Label>
            <Input value={address2} onChange={this.handleChange} name='address2' />
            <Label for='city'>City</Label>
            <Input value={city} onChange={this.handleChange} name='city'/>
            <Label for='state'>State</Label>
            <Input value={state} onChange={this.handleChange} name='state'/>
            <Label for="zip">Zipcode</Label>
            <Input value={zip} onChange={this.handleChange} name='zip'/>
            <Label for="country">Country</Label>
            <Input value={country} onChange={this.handleChange} name='country'/>
          </FormGroup>
          <FormGroup>
            <Label for="info">Additional Info</Label>
            <Input type="textarea" name="info" id="info" value={info} onChange={this.handleChange}/>
          </FormGroup>
        </Form>
        <Button onClick={this.handleSubmit}>Submit</Button>
      </React.Fragment>
    );
  }
}

export default BarProfile