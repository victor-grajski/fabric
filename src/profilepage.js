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
            city: "",
            gender: "",
            interest: "",
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
   const profileRef = db.collection("users").doc(this.props.userID);

   profileRef.get().then((doc)=> {
    if (doc.exists) {
        console.log("Profile", doc.data());
        this.setState(
        {
              firstName:doc.data().firstName,
              lastName: doc.data().lastName,
              gender:doc.data().gender,
              age:doc.data().age

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
