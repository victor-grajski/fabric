import React from "react";
import ReactDOM from "react-dom";
import firebase from './firebase.js';
import './style.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import {WelcomePage} from "./welcomepage.js"
import {SignupPage} from "./signuppage.js"
import {CreateProfilePage} from "./createprofilepage.js"
import {HomePage} from "./homepage.js"
import {ProfilePage} from "./profilepage.js"

class Header extends React.Component {
  render() {
    return (
      <div>Header</div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer>
      footer
      </footer>
    );
  }
}

class PageContainer extends React.Component {

  render() {
      <WelcomePage />
  }
}

class App extends React.Component {
  render() {
   return (
     <div>
      <Header />
      <Router>
        <div>
          <Route exact={true} path="/" component={WelcomePage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/create-profile" component={CreateProfilePage} />
          <Route path="/home" component={HomePage} />
          <Route path="/profile" component={ProfilePage} />
        </div>
      </Router>
      <Footer />
    </div>
   );
 }
}



ReactDOM.render(
 <App />,
 document.getElementById("root")
);
