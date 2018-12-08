import React from "react";
import ReactDOM from "react-dom";
import {firebase, db} from './firebase.js';
import './style.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName:"Vidya",
            lastName:"R",
            age: "25",
            gender: "Female",
            location: "San Francisco",
            interest: "Karaoke",
        }
    }
  render() {
    return (
      <div className = "profilepage">
        <h1>My Profile</h1>
        <img src="https://media.licdn.com/dms/image/C4E03AQG9TGw_FNXciA/profile-displayphoto-shrink_800_800/0?e=1549497600&v=beta&t=J0HaIS4Fbp-yiErVnd_3am9KAjrqjgXLeG-2QgzgcI0" class="Profile-image" alt="Profile image"/>
        <br/>
        <strong>Name:</strong> {this.state.firstName} {this.state.lastName} <br/>
        <strong>Age:</strong> {this.state.age} <br/>
        <strong>Gender:</strong> {this.state.gender} <br/>
        <strong>Location:</strong> {this.state.location} <br/>
        <strong>Interest:</strong> {this.state.interest}
    </div>
    );
  }
  componentDidMount() {
   const profileRef = db.collection("users").doc("CrueJvLyYOnLpph7j0go");
  //const profileRef = firebase.database().ref('users')
    profileRef.get().then((snapshot) => {
      let profileval = snapshot.data();
      let newHistory = [];
      console.log(profileval);
    }
      // for (let profile in profileval) {
      //newHistory.push(
      )
    }
}
export {ProfilePage};
