import React from "react";
import ReactDOM from "react-dom";
import {firebase, db} from './firebase.js';
import './style.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName:"",
            lastName:"",
            location: "",
            gender: "",
            interests: " ",
        }
    }
  render() {
    return (
        <div className = "profilepage">
          <h1> My Profile </h1>
        <br/>
          <p><strong>Name:</strong> {this.state.firstName} {this.state.lastName}</p>
          <p><strong>Age:</strong> {this.state.age}</p>
          <p><strong>Gender:</strong> {this.state.gender}</p>
          <p><strong>Location:</strong> {this.state.location}</p>
          <p><strong>Interests:</strong> {this.state.interests}</p>
      </div>
    );
  }
  componentDidMount() {
   const profileRef = db.collection("users").doc(this.props.userID);

   profileRef.get().then((doc)=> {
    if (doc.exists) {
        console.log("Profile", doc.data());
        this.setState(
        {
              firstName:doc.data().firstName,
              lastName: doc.data().lastName,
              gender:doc.data().gender,
              age:doc.data().age,
              location:doc.data().location,
              interests:doc.data().interests

        }
        );

    } else {
        // doc.data() will be undefined in this case
        console.log("No profile exists!");
    }
   });



}
}
export {ProfilePage};
