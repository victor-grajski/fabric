import React from "react";
import ReactDOM from "react-dom";
import firebase from './firebase.js';
import './style.css';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

import {WelcomePage} from "./welcomepage.js"
import {SignupPage} from "./signuppage.js"
import {CreateProfilePage} from "./createprofilepage.js"
import {HomePage} from "./homepage.js"
import {ProfilePage} from "./profilepage.js"

class Header extends React.Component {
  render() {
    return (
      <header>
        <div>
          <NavLink exact={true} className="nav" activeStyle={{ color: 'aquamarine' }} to="/">Welcome</NavLink> &nbsp;&nbsp;&nbsp;&nbsp;
          <NavLink className="nav" activeStyle={{ color: 'aquamarine' }} to="/home">Home</NavLink> &nbsp;&nbsp;&nbsp;&nbsp;
          <NavLink className="nav" activeStyle={{ color: 'aquamarine' }} to="/signup">Sign Up</NavLink> &nbsp;&nbsp;&nbsp;&nbsp;
          <NavLink className="nav" activeStyle={{ color: 'aquamarine' }} to="/create-profile">Create Profile</NavLink> &nbsp;&nbsp;&nbsp;&nbsp;
          <NavLink className="nav" activeStyle={{ color: 'aquamarine' }} to="/profile">My Profile</NavLink> &nbsp;&nbsp;
        </div>
      </header>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div>
          <NavLink exact={true} className="footernav" activeStyle={{ color: 'darkturquoise' }} to="/">Welcome</NavLink> &nbsp;&nbsp;&nbsp;&nbsp;
          <NavLink className="footernav" activeStyle={{ color: 'darkturquoise' }} to="/home">Home</NavLink> &nbsp;&nbsp;&nbsp;&nbsp;
          <NavLink className="footernav" activeStyle={{ color: 'darkturquoise' }} to="/signup">Sign Up</NavLink> &nbsp;&nbsp;&nbsp;&nbsp;
          <NavLink className="footernav" activeStyle={{ color: 'darkturquoise' }} to="/create-profile">Create Profile</NavLink> &nbsp;&nbsp;&nbsp;&nbsp;
          <NavLink className="footernav" activeStyle={{ color: 'darkturquoise' }} to="/profile">My Profile</NavLink> &nbsp;&nbsp;
        </div>
      </footer>
    );
  }
}

class PageContainer extends React.Component {

  render() {
    return(
      <div>
        <Route exact={true} path="/" component={WelcomePage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/create-profile" component={CreateProfilePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/profile" component={ProfilePage} />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
   return (
     <div>
      <Router>
        <div>
          <Header />
          <PageContainer/>
          <Footer />

        </div>
      </Router>
    </div>
   );
 }
}



ReactDOM.render(
 <App />,
 document.getElementById("root")
);
