import React from "react";
import ReactDOM from "react-dom";
import firebase from './firebase.js';
import './style.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class WelcomePage extends React.Component {
  render() {
    return (
        <div>
            <h1>Welcome to Fabric</h1>
            <h3>A social network that actually connects people.</h3>
            <p>Find a bandmate.</p>
            <p>Find a running buddy.</p>
            <p>Find a ________ buddy.</p>
        </div>
    );
  }
}


export {WelcomePage};
