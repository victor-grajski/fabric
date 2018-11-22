import React from "react";
import ReactDOM from "react-dom";
import {firebase, db} from './firebase.js';
import './style.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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

class FilterForm extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(event) {
        console.log("meep");
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>
                        City:
                        <select>
                            <option value="select">Select</option>
                            <option value="berkeley">Berkeley</option>
                            <option value="san francisco">San Francisco</option>
                        </select>
                    </label>

                    <label>
                        Interests:
                        <select>
                            <option value="select">Select</option>
                            <option value="guitar">Guitar</option>
                            <option value="bollywood">Bollywood Movies</option>
                        </select>
                    </label>

                    <label>
                        Gender:
                        <select>
                            <option value="select">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </label>

                    <label>
                        Age:
                        <input type="number" name="age" />
                    </label>

                    <input type="submit" value="Submit" />
                </form>

            </div>
        )
    }

}

class UserItem extends React.Component {
    constructor(props) {
        super(props);
        // Photo
        // Name
        // Age
        // Gender
        // Location
        super(props);
    }

    render() {
        return (
            <p>First Name: {this.props.firstName}</p>
        )
    }
}

class Profiles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {users: []}
    }

    componentDidMount() {
        let usersList = [];
        db.collection("users").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                usersList.push({
                  firstName: doc.data().firstName,
                  lastName: doc.data().lastName,
                  age: doc.data().age
                });
            });

            this.setState({
                users: usersList
            })
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    }

    render() {
        const userItems = this.state.users.map((user) =>
    <UserItem key={user.firstName} firstName={user.firstName} />
    );
        return(
            <div>{userItems}</div>
        );
    }
}

class HomePage extends React.Component {
  render() {
    return (
        <div>
            <FilterForm />
            <Profiles />
        </div>
    );
  }
}


export {HomePage};
