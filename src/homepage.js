import React from "react";
import ReactDOM from "react-dom";
import {firebase, db} from './firebase.js';
import './style.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {ProfilePage} from "./profilepage.js"

/*
class SortDropdown extends React.Component {

}

class AgeFilter extends React.Component {

}

class GenderFilter extends React.Component {

}

class InterestsFilter extends React.Component {

}

class LocationFilter extends React.Component {

}
*/


class UserItem extends React.Component {
    constructor(props) {
        super(props);
    }
    
    // TODO: pass ID to profile as prop
    render() {
        return (
            <tr>
                <td><Link to={`/profile/${this.props.userID}`}>Profile</Link></td>
                <td>{this.props.userID}</td>
                <td>{this.props.firstName} {this.props.lastName}</td>
                <td>{this.props.age}</td>
                <td>{this.props.gender}</td>
                <td>{this.props.location}</td>
                <td>{this.props.interests}</td>
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
            isSubmitted: false
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

        if (parseInt(this.state.city) > 0) {
            query = query.where('location', '==', parseInt(this.state.city));
        }
        if (parseInt(this.state.gender) > 0) {
            query = query.where('gender', '==', parseInt(this.state.gender));
        }
        if (parseInt(this.state.minAge) > 0) {
            query = query.where('age', '>=', parseInt(this.state.minAge));
        }
        if (parseInt(this.state.maxAge) > 0) {
            query = query.where('age', '<=', parseInt(this.state.maxAge));
        }
        if (parseInt(this.state.interest) > 0) {
            query = query.where('interests', 'array-contains', parseInt(this.state.interest));
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
            <div>
                <form>
                    <p>
                    <label>
                        City:
                        <select name="city" value={this.state.city} onChange={this.handleInputChange}>
                            <option value="0">Select</option>
                            <option value="1">Berkeley</option>
                            <option value="2">San Francisco</option>
                        </select>
                    </label>
                    </p>

                    <p>
                    <label>
                        Gender:
                        <select name="gender" value={this.state.gender} onChange={this.handleInputChange}>
                            <option value="0">Select</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="3">Other</option>
                        </select>
                    </label>
                    </p>

                    <p>
                    <label>
                        Min Age:
                        <input name="minAge" type="text" name="minAge" value={this.state.minAge} onChange={this.handleInputChange} />
                    </label>
                    </p>

                    <p>
                    <label>
                        Max Age:
                        <input name="maxAge" type="text" name="maxAge" value={this.state.maxAge} onChange={this.handleInputChange} />
                    </label>
                    </p>

                    <p>
                    <label>
                        Interest:
                        <select name="interest" value={this.state.interest} onChange={this.handleInputChange}>
                            <option value="0">Select</option>
                            <option value="1">Guitar</option>
                            <option value="2">Bollywood Movies</option>
                        </select>
                    </label>
                    </p>

                    <input type="button" value="Submit" onClick={this.handleSubmit} />
                </form>

                {this.state.isSubmitted && <Profiles users={this.state.users} />}
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
            />
        );

        return(
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
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
        <FilterForm />
    );
  }
}

export {HomePage};
