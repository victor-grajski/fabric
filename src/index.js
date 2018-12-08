import React from "react";
import ReactDOM from "react-dom";
import firebase from './firebase.js';
import './style.css';
import { Router, Route, Link, Redirect, NavLink } from 'react-router-dom';
import history from './history';
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

    // <NavLink className="nav" activeStyle={{ color: 'aquamarine' }} to="/create-profile">Create Profile</NavLink> &nbsp;&nbsp;&nbsp;&nbsp;s
  render() {
      if (firebase.auth().currentUser) {
          return(
              <header>
                  <div>
                      {/* <NavLink exact={true} className="nav" to="/"></NavLink> &nbsp;&nbsp;&nbsp;&nbsp; */}
                      <NavLink className="nav" to="/home">Search</NavLink> &nbsp;&nbsp;&nbsp;&nbsp;
                      <NavLink className="nav" onClick={this.props.selfProfileClick} to="/profile">Profile</NavLink> &nbsp;&nbsp;
                      <NavLink className="nav" onClick={this.props.handleLogout} to="/">Log Out</NavLink> &nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
              </header>
        )
      }
      if (!firebase.auth().currentUser) {
          return (
              <header>
                <div>
                  {/* <NavLink exact={true} className="nav" activeStyle={{ color: 'aquamarine' }} to="/">Home</NavLink> &nbsp;&nbsp;&nbsp;&nbsp; */}
                  <NavLink className="nav" activeStyle={{ color: 'aquamarine' }} to="/home">Search</NavLink> &nbsp;&nbsp;&nbsp;&nbsp;
                  <NavLink className="nav" activeStyle={{ color: 'aquamarine' }} onClick={this.props.selfProfileClick} to="/profile">Profile</NavLink> &nbsp;&nbsp;
                  <NavLink exact={true} className="nav" activeStyle={{ color: 'aquamarine' }} to="/">Log In/Sign Up</NavLink> &nbsp;&nbsp;&nbsp;&nbsp;
                </div>
            </header>
          )
      }
  }
}


class App extends React.Component {
  constructor() {
    super();
    this.state = ({
      user: null,
      profileID: null,
    });
    this.authListener = this.authListener.bind(this);
    this.selfProfileClick = this.selfProfileClick.bind(this);
    this.handleProfileClick = this.handleProfileClick.bind(this);
  }

  handleLogout() {
    firebase.auth().signOut();
    }

  componentDidMount() {
    this.authListener();
  }

  selfProfileClick() {
      let uid = this.state.user.uid;
      this.setState({profileID: uid});
  }

  handleProfileClick(profileID) {
      this.setState({profileID: profileID});
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
      <Router history={history}>
        <div>
          <Header selfProfileClick={this.selfProfileClick} handleLogout={this.handleLogout} />
            <Route exact path="/" render={() => (
                <SignupPage/>
              )}/>

            <Route path="/create-profile" render={() => (
                <CreateProfilePage />
              )}/>


            <Route path="/home" render={() => (
                !this.state.user ? (
                  <Redirect to="/"/>
                ) : (
                  <HomePage handleProfileClick={this.handleProfileClick} />
                )
              )}/>

            <Route path="/profile" render={() => (
                !this.state.user ? (
                  <Redirect to="/"/>
                ) : (
                  <ProfilePage userID={this.state.profileID} />
                )
              )}/>
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
