import React from "react"
import PropTypes from "prop-types"

export default class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          current_user_profile: {}
        }
  }
  render(){
          
    const {current_user_profile} = this.state

      return(
        <React.Fragment>
          <h3>this is your profile!</h3>
                 
          <h3>Choose a Profile Picture </h3>
                 
            {/* Choose your profile picture*/}
            <div class="input-group">
            <div class="custom-file">
            <input type="file" class="custom-file-input" id="inputGroupFile04"></input>
            <label class="custom-file-label" for="inputGroupFile04">Choose Profile Picture</label>
            </div>
            <div class="input-group-append">
            </div>
            </div>
                 
                 
           <h3>Edit your card information</h3>
                
            {/* first and last name */}
            <div class="input-group">
            <div class="input-group-prepend">
            <span class="input-group-text" id="">First and last name</span>
            </div>
            <input type="text" class="form-control" placeholder={this.props.current_user_profile.firstname}></input>
            <input type="text" class="form-control" placeholder={this.props.current_user_profile.lastname}>
            </input>

            <br />
  
            {/*Card Number*/}
            <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Card Number" aria-label="Card Number" aria-describedby="basic-addon2">
            </input>
            <div class="input-group-append">
            </div>
            </div>

            {/*Date*/}
            <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Date" aria-label="Date" aria-describedby="basic-addon2">
            </input>
            <div class="input-group-append">
            </div>
            </div>

            {/*CVV*/}
            <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="CVV" aria-label="CVV" aria-describedby="basic-addon2">
              </input>
            <div class="input-group-append">
            </div>
            </div>
  
            {/*address line 1*/}
            <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Address Line 1" aria-label="Address Line 1" aria-describedby="basic-addon2">
            </input>
            <div class="input-group-append">
            </div>
            </div>

            {/*address line 2*/}
            <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Address Line 2" aria-label="Address Line 2" aria-describedby="basic-addon2">
            </input>
            <div class="input-group-append">
            </div>
            </div>

            {/*City*/}
            <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="City" aria-label="City" aria-describedby="basic-addon2">
            </input>
            <div class="input-group-append">
            </div>
            </div>

            <div class="input-group mb-3">
              <select class="custom-select" id="inputGroupSelect02">
                <option selected>Choose your state</option>
                <option value="1">Alabama</option>
                <option value="2">Alaska</option>
                <option value="3">Arizona</option>
                <option value="4">Arkansas</option>
                <option value="5">California</option>
                <option value="6">Colorado</option>
                <option value="7">Connecticut</option>
                <option value="8">Delaware</option>
                <option value="9">Florida</option>
                <option value="10">Georgia</option>
                <option value="11">Hawaii</option>
                <option value="12">Idaho</option>
                <option value="13">Illinois</option>
                <option value="14">Indiana</option>
                <option value="15">Iowa</option>
                <option value="16">Kanasa</option>
                <option value="17">Kentucky</option>
                <option value="18">Louisiana</option>
                <option value="19">Maine</option>
                <option value="20">Maryland</option>
                <option value="21">Massachusetts</option>
                <option value="22">Michigan</option>
                <option value="23">Minnesota</option>
                <option value="24">Mississippi</option>
                <option value="25">Missouri</option>
                <option value="26">Montana</option>
                <option value="27">Nebraska</option>
                <option value="28">Nevada</option>
                <option value="29">New Hampshire</option>
                <option value="30">New Jersey</option>
                <option value="31">New Mexico</option>
                <option value="32">New York</option>
                <option value="33">North Carolina</option>
                <option value="34">North Dakota</option>
                <option value="35">Ohio</option>
                <option value="36">Oklahoma</option>
                <option value="37">Oregon</option>
                <option value="38">Pennsylvania</option>
                <option value="39">Rhode Island</option>
                <option value="40">South Carolina</option>
                <option value="41">South Dakota</option>
                <option value="42">Tennessee</option>
                <option value="43">Texas</option>
                <option value="44">Utah</option>
                <option value="45">Vermont</option>
                <option value="46">Virgina</option>
                <option value="47">Washington</option>
                <option value="48">West Virginia</option>
                <option value="49">Wisconsin</option>
                <option value="50">Wyoming</option>
              </select>
              <div class="input-group-append">
              <label class="input-group-text" for="inputGroupSelect02">Choose Your State</label>
            </div>
          </div>
          
          {/*Zip*/}
          <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Zipcode" aria-label="Zipcode" aria-describedby="basic-addon2">
          </input>
          <div class="input-group-append">
          </div>
          </div>
          </div>
          <button type="button" class="btn btn-primary btn-lg">SAVE</button>
      </React.Fragment>
      )
    }
}