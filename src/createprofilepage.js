import React from "react";
import ReactDOM from "react-dom";
import {firebase, db} from './firebase.js';
import './style.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class CreateProfilePage extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {city: 'berkeley', temp: 0};
    //this.handleInputChange = this.handleInputChange.bind(this);
  }





  write(userId, firstName,  lastName, gender) {
    console.log('inside write')
    // Add a new document with a generated id.
    db.collection("users").doc(userId).set({
      firstName: firstName,
      lastName: lastName,
      gender: gender
    })
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
  }

  render() {
    this.write('2','Ashish','Sur',0)
    return (
      <div>Hello</div>
    );
  }
}
export {CreateProfilePage};



