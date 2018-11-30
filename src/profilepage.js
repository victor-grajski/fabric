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
            city: "San Francisco",
            gender: "Female",
            interest: "Karaoke",
        }
    }
  render() {
    return (
        <table>
        <tbody>
        <tr>
          <td>{this.state.firstName} {this.state.lastName}</td>
          <td>{this.state.age}</td>
          <td>{this.state.gender}</td>
          <td>{this.state.location}</td>
          <td>{this.state.interests}</td>
      </tr>
      </tbody>
      </table>
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
