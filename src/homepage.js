import React from "react";
import ReactDOM from "react-dom";
import {firebase, db} from './firebase.js';
import './style.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {ProfilePage} from "./profilepage.js"

class InterestItems extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const interestItems = Object.keys(this.props.interests).map((interest) =>
    <li key={interest}>{this.props.interests[interest]}</li>
    );
    return (
        <div>{interestItems}</div>
    );
    }
}


class UserItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleProfileClick = this.handleProfileClick.bind(this);
    }

    handleProfileClick() {
        this.props.handleProfileClick(this.props.userID);
    }

    render() {
        return (
            <tr>
                <td><Link to={`/profile/${this.props.userID}`} onClick={this.handleProfileClick}>{this.props.firstName} {this.props.lastName}</Link></td>
                <td>{this.props.age}</td>
                <td>{this.props.gender}</td>
                <td>{this.props.location}</td>
                <td><InterestItems interests={this.props.interests} /></td>
            </tr>
        )
    }
}


class FilterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: 0,
            gender: 0,
            minAge: 0,
            maxAge: 0,
            interest: 0,
            users: [],
            isSubmitted: false,
            profileID: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        let usersList = [];
        this.setState({users: []});

        var query = db.collection('users');

        if (this.state.city != 0) {
            query = query.where('location', '==', this.state.city);
        }
        if (this.state.gender != 0) {
            query = query.where('gender', '==', this.state.gender);
        }
        if (this.state.minAge != 0) {
            query = query.where('age', '>=', parseInt(this.state.minAge));
        }
        if (this.state.maxAge != 0) {
            query = query.where('age', '<=', parseInt(this.state.maxAge));
        }
        if (this.state.interest.length > 0) {
            query = query.where('interests', 'array-contains', this.state.interest);
        }
        query.get().then((snapshot) => {
            snapshot.forEach((record) => {
                usersList.push({
                  userID: record.id,
                  firstName: record.data().firstName,
                  lastName: record.data().lastName,
                  age: record.data().age,
                  gender: record.data().gender,
                  location: record.data().location,
                  interests: record.data().interests
                });
            });

            this.setState({
                users: usersList
            })
        });
        this.setState({isSubmitted: true});
        event.preventDefault();
    }

    render() {
        return (
            <div className="signupform">
                <h1>Find People in Your Area</h1><br/>
                <form>
                    <p>
                    <label>
                        <br/>
                        City: &nbsp;
                        <select name="city" value={this.state.city} onChange={this.handleInputChange}>
                            <option value="0">Select</option>
                            <option value="Berkeley">Berkeley</option>
                            <option value="San Francisco">San Francisco</option>
                        </select>
                    </label>
                    </p>

                    <p>
                    <label>
                        Gender: &nbsp;
                        <select name="gender" value={this.state.gender} onChange={this.handleInputChange}>
                            <option value="0">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </label>
                    </p>

                    <p>
                    <label>
                        Min Age: &nbsp;
                        <input name="minAge" type="text" name="minAge" value={this.state.minAge} onChange={this.handleInputChange} />
                    </label>
                    </p>

                    <p>
                    <label>
                        Max Age: &nbsp;
                        <input name="maxAge" type="text" name="maxAge" value={this.state.maxAge} onChange={this.handleInputChange} />
                    </label>
                    </p>

                    <p>
                    <label>
                        Interest: &nbsp;
                        <select name="interest" value={this.state.interest} onChange={this.handleInputChange}>
                            <option value="0">Select</option>
                            <option value="Guitar">Guitar</option>
                            <option value="Cycling">Cycling</option>
                            <option value="Hiking">Hiking</option>
                            <option value="Swimming">Swimming</option>
                        </select>
                    </label>
                    </p>

                    <input type="button" value="Submit" onClick={this.handleSubmit} />
                </form>

                {this.state.isSubmitted && <Profiles users={this.state.users} handleProfileClick={this.props.handleProfileClick} />}
            </div>
        )
    }
}


class Profiles extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const userItems = this.props.users.map((user) =>
            <UserItem
                key={user.userID}
                userID={user.userID}
                firstName={user.firstName}
                lastName={user.lastName}
                age={user.age}
                gender={user.gender}
                location={user.location}
                interests={user.interests}
                handleProfileClick={this.props.handleProfileClick}
            />
        );

        return(
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Gender</td>
                        <td>Location</td>
                        <td>Interests</td>
                    </tr>
                </thead>

                <tbody>
                    {userItems}
                </tbody>
            </table>
        );
    }
}


class HomePage extends React.Component {

  render() {
    return (
        <FilterForm handleProfileClick={this.props.handleProfileClick} />
    );
  }
}

export {HomePage};
