import React from "react";
import ReactDOM from "react-dom";
import firebase from './firebase.js';
import './style.css';
import { BrowserRouter as Router, Route, Link, Redirect, NavLink } from 'react-router-dom';

import {WelcomePage} from "./welcomepage.js"
import {SignupPage} from "./signuppage.js"
import {CreateProfilePage} from "./createprofilepage.js"
import {HomePage} from "./homepage.js"
import {ProfilePage} from "./profilepage.js"

class Header extends React.Component {
  constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
  
  logout() {
        firebase.auth().signOut();
    }

  render() {
    return (
      <header>
        <div>
          <NavLink exact={true} className="nav" activeStyle={{ color: 'aquamarine' }} to="/">Welcome</NavLink> &nbsp;&nbsp;&nbsp;&nbsp;
          <NavLink className="nav" activeStyle={{ color: 'aquamarine' }} to="/home">Home</NavLink> &nbsp;&nbsp;&nbsp;&nbsp;
          <NavLink className="nav" activeStyle={{ color: 'aquamarine' }} to="/signup">Sign Up</NavLink> &nbsp;&nbsp;&nbsp;&nbsp;
          <NavLink className="nav" activeStyle={{ color: 'aquamarine' }} to="/create-profile">Create Profile</NavLink> &nbsp;&nbsp;&nbsp;&nbsp;
          <NavLink className="nav" activeStyle={{ color: 'aquamarine' }} to="/profile">My Profile</NavLink> &nbsp;&nbsp;
        <button onClick={this.logout}>Logout</button>
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

class App extends React.Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  render() {
   return (
     <div>
      <Router>
        <div>
          <Header />
            <Route exact path="/" render={() => (
                this.state.user ? (
                  <Redirect to="/home"/>
                ) : (
                  <WelcomePage/>
                )
              )}/>

            <Route path="/create-profile" render={() => (
                !this.state.user ? (
                  <Redirect to="/"/>
                ) : (
                  <CreateProfilePage />
                )
              )}/>

            <Route path="/signup" component={SignupPage} />

            <Route path="/home" render={() => (
                !this.state.user ? (
                  <Redirect to="/"/>
                ) : (
                  <HomePage />
                )
              )}/>

            <Route path="/profile" render={() => (
                !this.state.user ? (
                  <Redirect to="/"/>
                ) : (
                  <ProfilePage />
                )
              )}/>
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
