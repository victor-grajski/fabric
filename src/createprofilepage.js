import React from "react";
import ReactDOM from "react-dom";
import {firebase, db} from './firebase.js';
import './style.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class CreateProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 1,
      firstName: 'Dumbo',
      lastName: 'Giant',
      gender: 0,
      location: '',
      age: 0

    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.write = this.write.bind(this);
  }

  handleInputChange(event){
    this.setState({[event.target.name]: event.target.value});

  }



  write() {
    console.log('inside write')
    const userId='4';
    db.collection("users").doc(userId).set({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      gender: this.state.gender,
      location: this.state.location,
      age: this.state.age
    })
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
  }

  render() {
    console.log('render')
    return (
      <div>
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
            //value={th}
            onChange={this.handleInputChange}>
            <option value='0'>Male</option>
            <option value='1'>Female</option>
          </select>

        <br />
        <label>
          Location </label>
          <select
            name="location"
            onChange={this.handleInputChange}>
            <option value='0'>San Francisco</option>
            <option value='1'>Berkeley</option>
          </select>

        <br/>

        <label>Age</label>
        <input
          className="form-input"
          id='age'
          name='age'
          //type={Text}
          onChange={this.handleInputChange}
          placeholder="Age"
        />

        <br />
        <button onClick={this.write}>
        Submit
        </button>
      </div>
    );

  }
}
export {CreateProfilePage};



