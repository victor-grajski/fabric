import React from "react";
import ReactDOM from "react-dom";
import {firebase, db, auth} from './firebase.js';
import './style.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import history from './history';

class CreateProfilePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: auth.currentUser.uid,
      firstName: 'Dumbo',
      lastName: 'Giant',
      gender: 'Male',
      location: 'San Francisco',
      age: 0,
      interests: []

    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputChangeCheckbox = this.handleInputChangeCheckbox.bind(this);
    this.write = this.write.bind(this);
  }


  handleInputChange(event){
    if(event.target.name == 'age' && event.target.value != ''){
      if(/^-{0,1}\d+$/.test(event.target.value) == false){
        //valid integer (positive or negative)
        alert('enter a number');
        return;
      }
    }

    this.setState({[event.target.name]: event.target.value});

  }


  handleInputChangeCheckbox(event){
    console.log('Checkbox');
    console.log('user-id',this.state.userId)
    let current_interests = this.state.interests;

    //Remove from state if box got unchecked
    if (event.target.checked == false){
      //if already present;
      if (current_interests.indexOf(event.target.name) >= 0 ){
      //delete it from the array
        current_interests.pop(event.target.name);
      }
    }


    // Add to state if box is checked
    if (current_interests.indexOf(event.target.name) < 0 && event.target.checked == true){
      current_interests.push(event.target.name);
    }

    console.log('new intersts',current_interests);
    this.setState({[event.target.name]: current_interests});
  }


  write() {

    console.log('inside write');
    if( this.state.interests.length == 0){
      //valid number of entries
      alert('Please select atleast one interest');
      return;
    }

    const userId= this.state.userId;
    //const userId = 'UAHNbfh0qsa1bvZNTwkpeXacUdO2';
    db.collection("users").doc(userId).set({
    //db.collection("users").add({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      gender: this.state.gender,
      location: this.state.location,
      age: this.state.age,
      interests: this.state.interests
    })
    .then(function() {
      console.log("Document successfully written!");
      alert("Profile created! Now let's meet some folks.");
      history.push('/home');
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
  }


  render() {
    console.log('render')
    console.log('current user=',auth.currentUser.uid)
    return (
      <div id="signupform">
        <label>First Name</label>
        <input
          className="form-input"
          id='firstName'
          name='firstName'
          onChange={this.handleInputChange}
          placeholder="First Name"
        />

        <br />
        <label>Last Name</label>
        <input
          className="form-input"
          id='lastName'
          name='lastName'
          //type={Text}
          onChange={this.handleInputChange}
          placeholder="Last Name"
        />

        <br />
        <label>
          Gender </label>
          <select
            name="gender"
            onChange={this.handleInputChange}>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </select>

        <br />
        <label>
          Location </label>
          <select
            name="location"
            onChange={this.handleInputChange}>
            <option value='San Francisco'>San Francisco</option>
            <option value='Berkeley'>Berkeley</option>
          </select>

        <br/>

        <label>Age</label>
        <input
          className="form-input"
          id='age'
          name='age'
          pattern="[0-9]*"
          type='text'
          onChange={this.handleInputChange}
          placeholder="Age"
        />

        <br />
        <br />
        <br />

        <label>Select your interests:</label>
        <br />
        <br />

        <input
            id = 'interests'
            name= 'Guitar'
            onChange={this.handleInputChangeCheckbox}
            type="checkbox"
        />
        <label className="checkbox-inline"> Guitar</label>

        <br />

        <input
            id = 'interests'
            name= 'Cycling'
            onChange={this.handleInputChangeCheckbox}
            type="checkbox"
        />
        <label className="checkbox-inline"> Cycling </label>
        <br />

        <input
            id = 'interests'
            name= 'Hiking'
            onChange={this.handleInputChangeCheckbox}
            type="checkbox"
        />
        <label className="checkbox-inline"> Hiking </label>
        <br />

        <input
            id = 'interests'
            name= 'Swimming'
            onChange={this.handleInputChangeCheckbox}
            type="checkbox"
        />
        <label className="checkbox-inline"> Swimming </label>
        <br />

        <button onClick={() => {
          console.log('Calling write()')
          this.write()
          }}>
        Submit
        </button>
      </div>
    );

  }
}
export {CreateProfilePage};
