import React from "react";
import ReactDOM from "react-dom";
import firebase from './firebase.js';
import './style.css';
import { Router, Route, Link } from 'react-router-dom';
import history from './history';

class SignupPage extends React.Component {
    constructor(props) {
      super(props);
      this.login = this.login.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.signup = this.signup.bind(this);
      this.state = {
        email: '',
        password: ''
      };
    }

    handleChange(e) {
      this.setState({ [e.target.name]: e.target.value });
    }

    login(e) {
      e.preventDefault();
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
      }).catch((error) => {
          console.log(error);
        });
    }

    signup(e){
      e.preventDefault();
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
      }).then((u)=>{
          console.log(u);
          history.push('/create-profile');
      })
      .catch((error) => {
          alert(error);
        })

    }
    render() {
      return (
          <div>
              <form>
                  <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                  </div>

              <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>

              <button type="submit" onClick={this.login} className="btn btn-primary">Login</button>
              <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
              </form>
          </div>
      );
    }
}


export {SignupPage};
