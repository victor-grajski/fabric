import React from "react";
import ReactDOM from "react-dom";
import firebase from './firebase.js';
import './style.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class CreateProfilePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Create Profile</h1>
      </div>
    );
  }
}


export {CreateProfilePage};
