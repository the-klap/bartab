import React from "react"
import PropTypes from "prop-types"
import {Form, FormGroup, Label, Input, Button, Row, Col} from 'reactstrap'


class CreateUserProfile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          user_profile: {
          }
        }
  }


  handleChange = (event) => {
    let {user_profile} = this.state
    user_profile[event.target.name] = event.target.value
    this.setState({user_profile})
  }
  
  handleSubmitFullName = () => {
    const {user_profile} = this.state
    const {handleNewProfile} = this.props
    handleNewProfile(user_profile)
  }
  
  render(){
          
    const {user_profile} = this.state

    console.log(user_profile)
    
      return(
        <React.Fragment>
                
            {/* first and last name */}
            <Form>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label >First Name</Label>
                    <Input onChange={this.handleChange} 
                          type="text" 
                          name="firstname" 
                          id="firstname"
                          value={user_profile.firstname}

                          />
                  </FormGroup>
                </Col>
                <Col md={4}>
                <FormGroup>
                  <Label >Last Name</Label>
                  <Input onChange={this.handleChange} 
                          type="text" 
                          name="lastname" 
                          id="lastname" 
                          value={user_profile.lastname}
                          />
                </FormGroup>
                </Col>
                <Col md={4}>
                  <Button  onClick={this.handleSubmitFullName}>Submit Name</Button>
                </Col>
              </Row>
            </Form>
            

      </React.Fragment>
      )
    }
}
export default CreateUserProfile