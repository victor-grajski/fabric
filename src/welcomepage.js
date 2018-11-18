import React from "react";
import ReactDOM from "react-dom";
import firebase from './firebase.js';
import './style.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class WelcomePage extends React.Component {
  render() {
    return (
      <div>Hello</div>
    );
  }
}


export {WelcomePage};